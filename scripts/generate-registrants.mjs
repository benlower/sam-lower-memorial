#!/usr/bin/env node
// scripts/generate-registrants.mjs
// Reads src/data/responses.tsv and writes src/data/registrants.ts
//
// Usage: node scripts/generate-registrants.mjs

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const TSV_PATH = resolve(ROOT, 'src/data/responses.tsv');
const OUT_PATH = resolve(ROOT, 'src/data/converted-registrants.ts');

const MAX_FOURSOMES = 12;

// --- Parse TSV ---
const raw = readFileSync(TSV_PATH, 'utf-8');
const lines = raw.trim().split('\n');
const headers = lines[0].split('\t').map(h => h.trim());

function col(row, name) {
    const i = headers.indexOf(name);
    return i >= 0 ? (row[i] ?? '').trim() : '';
}

const teams = [];
const singles = [];

for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split('\t');

    const primaryName   = col(row, 'Primary Contact Name');
    const teamName      = col(row, 'Team Name (What would you like to call your team?)');
    const playerCount   = parseInt(col(row, 'Number of Players'), 10) || 1;
    const playerNames   = col(row, 'Team Member Names (Please list all players on your team, including yourself)');
    const teamStatus    = col(row, 'Are you registering as a complete team of 4?');

    const needsMatching = teamStatus.toLowerCase().includes('no') || teamStatus.toLowerCase().includes('additional');

    // Singles: explicitly needs matching, or only 1 player
    if (needsMatching || playerCount === 1) {
        singles.push({ name: primaryName });
        continue;
    }

    // --- Parse player names ---
    let players = [];

    if (!playerNames || /^tba$/i.test(playerNames)) {
        // Names not provided yet — use primary contact as placeholder
        players = [{ name: primaryName }];
        console.warn(`⚠  Row ${i + 1} (${primaryName}): player names are TBA — using primary contact only.`);
    } else if (playerNames.includes(',')) {
        // Comma-separated (standard)
        players = playerNames.split(',').map(n => n.trim()).filter(Boolean).map(name => ({ name }));
    } else {
        // No commas — try splitting into first+last pairs based on expected player count
        const words = playerNames.split(/\s+/).filter(Boolean);
        if (words.length === playerCount * 2) {
            for (let j = 0; j < words.length; j += 2) {
                players.push({ name: `${words[j]} ${words[j + 1]}` });
            }
        } else {
            // Can't parse reliably — fall back to primary contact
            players = [{ name: primaryName }];
            console.warn(`⚠  Row ${i + 1} (${primaryName}): could not parse "${playerNames}" into ${playerCount} names — using primary contact only.`);
        }
    }

    // Strip placeholder team names
    const cleanName = /^tba$/i.test(teamName) ? '' : teamName;

    const team = { players };
    if (cleanName) team.name = cleanName;
    teams.push(team);
}

// --- Privacy filter: shorten names to "First L." before writing ---
// This protects registrant privacy — full last names are never stored in the
// output file or shipped to the browser. Applies to every player and single.
function shortName(full) {
    const parts = full.trim().split(/\s+/);
    if (parts.length === 1) return full;
    return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

for (const team of teams) {
    team.players = team.players.map(p => ({ ...p, name: shortName(p.name) }));
}
for (let i = 0; i < singles.length; i++) {
    singles[i] = { ...singles[i], name: shortName(singles[i].name) };
}

// --- Generate TypeScript ---
function serializeTeam(team) {
    const nameLine = team.name ? `\n        name: ${JSON.stringify(team.name)},` : '';
    const playerLines = team.players.map(p => `            { name: ${JSON.stringify(p.name)} },`).join('\n');
    return `    {${nameLine}\n        players: [\n${playerLines}\n        ],\n    }`;
}

function serializeSingle(player) {
    return `    { name: ${JSON.stringify(player.name)} }`;
}

const output = `\
// src/data/converted-registrants.ts
// AUTO-GENERATED — do not edit by hand.
// Review this file, make manual edits (e.g. assign singles to teams), then save as registrants.ts
// To regenerate: node scripts/generate-registrants.mjs

export interface Player {
    name: string;
}

export interface Team {
    name?: string; // optional — shows as "Foursome X" if omitted
    players: Player[];
}

// Maximum number of foursomes the event can accommodate
export const MAX_FOURSOMES = ${MAX_FOURSOMES};

// Groups who registered together (2–4 players)
export const teams: Team[] = [
${teams.map(serializeTeam).join(',\n')}
];

// Individual registrants awaiting team assignment by the committee
export const singles: Player[] = [
${singles.map(serializeSingle).join(',\n')}
];
`;

writeFileSync(OUT_PATH, output, 'utf-8');
console.log(`✓ Wrote ${OUT_PATH} — review and save as registrants.ts`);
console.log(`  ${teams.length} team(s), ${singles.length} single(s)`);
