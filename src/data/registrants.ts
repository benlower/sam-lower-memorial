// src/data/registrants.ts
// Edit by hand based on responses that were received

export interface Player {
    name: string;
}

export interface Team {
    name?: string; // optional — shows as "Foursome X" if omitted
    players: Player[];
    teeTime?: string; // 24-hour format, e.g. "08:00"
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
        teeTime: "10:10"
    },
    {
        name: "We Swing Stiff Shafts",
        players: [
            { name: "Stan L." },
            { name: "Michael L." },
            { name: "Mike V." },
            { name: "Jim R." },
        ],
        teeTime: "09:27"
    },
    {
        name: "Hoosier Mamas",
        players: [
            { name: "Kathi L." },
            { name: "Sharon C." },
            { name: "Maggi C." },
            { name: "Kendra G." },
        ],
        teeTime: "09:36"
    },
    {
        name: "Par or Lower",
        players: [
            { name: "Sarah M." },
            { name: "Ben L." },
            { name: "Dave Ja." },
        ],
        teeTime: "09:09"
    },
    {
        name: "The Johnson Brothers",
        players: [
            { name: "Doug J." },
            { name: "Derek J." },
            { name: "Mike J." },
            { name: "David J." },
        ],
        teeTime: "09:18"
    },
    {
        name: "Bar Setters",
        players: [
            { name: "David L." },
            { name: "Gavin L." },
            { name: "Aaron L." },
        ],
        teeTime: "09:00"
    },
    {
        name: "Team ZerPenBell",
        players: [
            { name: "Mike C." },
            { name: "Todd C." },
            { name: "Henry P." },
            { name: "Greg C." },
        ],
        teeTime: "09:52"
    },
    {
        name: "AVC Auto 2nd String",
        players: [
            { name: "Chuck L." },
            { name: "Lc L." },
            { name: "Dave S." },
            { name: "Ryan J." }
        ],
        teeTime: "10:19"
    },
    {
        name: "Tiger Who",
        players: [
            { name: "AJ S." },
            { name: "Nathan J." },
            { name: "Seth J." },
        ],
        teeTime: "10:01"
    },
    {
        name: "Aiman High",
        players: [
            { name: "Brandon A." },
            { name: "Diane A." },
            { name: "Jon A." },
            { name: "Teddy C." },
        ],
        teeTime: "09:45"
    },
    {
        name: "The Good & The Bad",
        players: [
            { name: "Nick C." },
            { name: "Stu M." },
            { name: "Michael N." },
            { name: "Larry B." },
        ],
        teeTime: "10:37"
    },
    {
        name: "Sam's Spartans",
        players: [
            { name: "Gary G." },
            { name: "Randy O." },
            { name: "Andy B." },
            { name: "Pat B." },
        ],
        teeTime: "10:28"
    }

];

// Individual registrants awaiting team assignment by the committee
export const singles: Player[] = [
    
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
// 12. add Dave Ja to Ben team and Aaron to David team