// src/data/registrants.ts
// Edit by hand based on responses that were received

export interface Player {
    name: string;
}

export interface Team {
    name?: string; // optional — shows as "Foursome X" if omitted
    players: Player[];
}

// Maximum number of foursomes the event can accommodate
export const MAX_FOURSOMES = 12;

// Groups who registered together (2–4 players)
export const teams: Team[] = [
    {
        name: "4-Friends of Sam",
        players: [
            { name: "Garret S." },
            { name: "Tom R." },
            { name: "Doug C." },
            { name: "Andy B." },
        ],
    },
    {
        players: [
            { name: "Stan L." },
            { name: "Michael L." },
            { name: "TBA" },
            { name: "TBA" },
        ],
    },
    {
        name: "Hoosier Mamas",
        players: [
            { name: "Kathi L." },
            { name: "Sharon C." },
            { name: "Maggi C." },
            { name: "Kendra G." },
        ],
    },
    {
        name: "Par or Lower",
        players: [
            { name: "Sarah M." },
            { name: "Ben L." },
        ],
    },
    {
        name: "The Johnson Brothers",
        players: [
            { name: "Doug J." },
            { name: "Derek J." },
            { name: "Mike J." },
            { name: "David J." },
        ],
    },
    {
        players: [
            { name: "David L." },
            { name: "Gavin L." },
        ],
    },
];

// Individual registrants awaiting team assignment by the committee
export const singles: Player[] = [
    { name: "Dave Ja." },
    { name: "Aaron L." },
];
