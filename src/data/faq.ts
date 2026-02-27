// src/data/faq.ts
// Add or reorder questions here as needed.

export interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: "When and where is the tournament?",
        answer:
            "The tournament is on Friday, May 15th, 2026 at Bear Slide Golf Club, 6770 E 231st St., Cicero, IN 46034. Check-in begins at 8:00 AM with the first group going off the tee at 9:00 AM. Your tee time will be assigned and communicated to you prior to the event.",
    },
    {
        question: "How much does it cost to register?",
        answer:
            "The entry fee is $94 per person, which includes cart. Payment is collected at check-in. Teams are groups of four.",
    },
    {
        question: "Do Bear Slide members get a discount?",
        answer:
            "Yes! Bear Slide members will only pay $50 with 100% of the amount going to cancer research. Payment is collected at check-in.",
    },
    {
        question: "What is the tournament format?",
        answer:
            "We're playing a team scramble. Each foursome plays together, and all players hit from the best shot each round. It's a great format for golfers of all skill levels.",
    },
    {
        question: "Do I need a golf handicap?",
        answer:
            "No. Golfers of all skill levels are welcome. The scoring for the event will be gross scoring with no handicap strokes involved.",
    },
    {
        question: "Can I participate if I'm not a golfer?",
        answer:
            "Absolutely! If you can't make it or don't play golf, you can still support Sam's memory by making a donation to the Multiple Myeloma Research Foundation in his honor at the link on this site.",
    },
    {
        question: "Who do I contact if I have questions?",
        answer:
            "You can reach us through the contact form on this site and we'll get back to you as soon as possible.",
    },
    {
        question: "Where do the proceeds go?",
        answer:
            "Proceeds from the tournament benefit multiple myeloma research through the Multiple Myeloma Research Foundation (MMRF), an organization dedicated to accelerating cures for multiple myeloma. The donation link on this site will take you to our page on the MMRF website.",
    },
];
