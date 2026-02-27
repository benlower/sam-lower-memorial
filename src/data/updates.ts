// src/data/updates.ts
// Add new updates at the TOP of the array — they display newest first.

export interface Update {
    date: string; // ISO format: "YYYY-MM-DD"
    title: string;
    message: string;
    image?: {
        src: string;
        alt: string;
    };
}

export const updates: Update[] = [
    {
        date: "2026-02-25",
        title: "Registration is Now Open!",
        message:
            "We're thrilled to announce that registration for the Sam Lower Memorial Golf Tournament is officially open. Spots are limited, so sign up early. The tournament will be held on Friday, May 15th, 2026 at Bear Slide Golf Club in Cicero, IN. We can't wait to see you on the course!",
    },
];
