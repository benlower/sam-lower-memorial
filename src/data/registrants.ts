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
            { name: "Mike V." },
            { name: "Jim R." },
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
    {
        name: "Team ZerPenBell",
        players: [
            { name: "Mike C." },
            { name: "Todd C." },
            { name: "Henry P." },
            { name: "Greg C." },
        ],
    },
    {
        name: "AVC Auto 2nd String",
        players: [
            { name: "Chuck L." },
            { name: "Lc L." },
            { name: "Dave S." },
            { name: "Ryan J." }
        ],
    },
    {
        name: "Tiger Who",
        players: [
            { name: "AJ S." },
            { name: "Nathan J." },
            { name: "Seth J." },
        ],
    },
    {
        name: "Aiman High",
        players: [
            { name: "Brandon A." },
            { name: "Diane A." },
            { name: "Jon A." },
            { name: "Teddy C." },
        ],
    },
    {
        name: "The Good & The Bad",
        players: [
            { name: "Nick C." },
            { name: "Stu M." },
            { name: "Michael N." },
            { name: "Larry B." },
        ],
    },
    {
        players: [
            { name: "Gary G." },
            { name: "Randy O." },
            { name: "Andy B." },
            { name: "Pat B." },
        ],
    }

];

// Individual registrants awaiting team assignment by the committee
export const singles: Player[] = [
    { name: "Dave Ja." },
    { name: "Aaron L." },
];


// Edits
// 1. Stan L. team: add Michael L. Mike V. and Jim R.
// 2. Par or Lower: remove two x TBA
// 3. The Johnson Brothers: Doug J., Derek J., Mike J., and David J.
// 4. David L. team: add Gavin L.
// 5. Singles: Dave Ja., Aaron L.
// 6. Team ZerPenBell: Mike C. Todd C. Henry P. Greg C.
// 7. AVC Auto: add Lc L., Dave S., and Ryan J.
// 8. Tiger Who: AJ S. team with Nathan & Seth J.
// 9. Brandon & Diane A team
// 10. Nick Carman team
// 11. Gary Goshert Team