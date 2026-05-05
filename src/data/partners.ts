// src/data/partners.ts
// Add partners/supporters here. Logo is optional — cards degrade gracefully without one.

export interface Partner {
    name: string;
    description: string;
    logo?: string;   // path to image in /public, e.g. "/images/partners/acme.png"
    url?: string;    // primary link — renders as "Visit Website"
    secondLink?: {   // optional second link with custom label
        url: string;
        label: string;
    };
}

export const partners: Partner[] = [
    // Example:
    // {
    //     name: "Acme Corp",
    //     description: "Generously donated cart fees for all participants.",
    //     logo: "/images/partners/acme.png",
    //     url: "https://acme.com",
    // },
    {
        name: "Bear Slide Golf Club",
        description: "Bear Slide has gone above and beyond as our host — providing event space, discounted greens fees, special orders for our prize golf balls, and coordinating food after the round. We couldn't do this without them.",
        logo: "/images/partners/bearslide.png",
        url: "https://bearslide.com",
    },
    {
        name: "Multiple Myeloma Research Foundation",
        description: "In Sam's memory, proceeds from this tournament benefit the MMRF — the world's largest nonprofit dedicated solely to finding a cure for multiple myeloma.",
        logo: "/images/partners/mmrf.webp",
        url: "https://themmrf.org",
        secondLink: {
            url: "https://cyo.themmrf.org/campaigns/sam-lower",
            label: "Make a Donation",
        },
    },
    {
        name: "Titus Bakery",
        description: "Titus Bakery is fueling the morning right — providing discounted coffee and donuts to kick off tournament day.",
        logo: "/images/partners/titusbakery.png",
        url: "https://www.titusbakery.com/",
    },
];
