// src/data/updates.ts
// Add new updates at the TOP of the array — they display newest first.

export interface Update {
    date: string; // ISO format: "YYYY-MM-DD"
    title: string;
    message: string;
    link?: {
        href: string;
        label: string;
    };
    image?: {
        src: string;
        alt: string;
    };
}

export const updates: Update[] = [
    {
        date: "2026-03-13",
        title: "The Field is Filling Up — Don't Get Shut Out",
        message:
            "We just launched The Field — a live look at everyone who's registered for the tournament. And the numbers don't lie: 22 of 48 spots are already gone. That's 46% of the field claimed, with complete foursomes locked in and more teams forming every week.\n\nFull teams are in. Partial teams are in. Even individual players who don't have a foursome yet are getting registered — the tournament committee will place singles on a team so you won't miss out just because you're flying solo.\n\nThere are only 26 spots left. Once they're gone, they're gone. Check out the field, see who's already in, and get your name on the list before the cut.",
        link: { href: "/the-field", label: "See Who's Playing" },
        image: { src: "/images/balls.jpg", alt: "Balls, balls, balls!" }
    },
    {
        date: "2026-03-05",
        title: "Format, Contests & Prizes Announced",
        message:
            "We're excited to share the full details on how tournament day will play out!\n\nThe tournament is played as a 4-person scramble — fun and accessible for golfers of all skill levels. Throughout the round, you'll have the chance to compete in individual on-course contests: Closest to the Pin on select par 3s, and a Straightest Drive challenge where accuracy beats distance.\n\nWe're also introducing Lower Power(ups) — your team's on-course cheat code. Each kit is loaded with mulligans and other creative advantages designed to rescue a rough hole, flip the momentum, and keep your round alive. Think of it as leveling up for a good cause: every kit purchased goes directly toward multiple myeloma research, so the more power(ups) in play, the better for everyone.\n\nAs for prizes: the winning team will each receive a dozen personalized Titleist Pro V1 golf balls commemorating the event. Contest winners (Closest to the Pin and Straightest Drive) will receive Bear Slide pro shop credit redeemable toward equipment, merchandise, or future rounds.\n\nHead to the Format page for the full breakdown, and make sure you're registered — spots are limited!",
        link: { href: "/tournament-format", label: "View Tournament Format" },
        image: { src: "/images/courseoverhead.jpg", alt: "Win prizes!" }
    },
    {
        date: "2026-02-25",
        title: "Registration is Now Open!",
        message:
            "We're thrilled to announce that registration for the Sam Lower Memorial Golf Tournament is officially open. Spots are limited, so sign up early. The tournament will be held on Friday, May 15th, 2026 at Bear Slide Golf Club in Cicero, IN. We can't wait to see you on the course!",
        link: { href: "/#signup", label: "Register Now" },
        image: { src: "/images/golfcartsready.jpg", alt: "We want you!" }
    },
];
