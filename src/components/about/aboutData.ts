export interface TimelineItem {
    id: number;
    year: string;
    title: string;
    subtitle?: string;
    description?: string;
}

export const experiences: TimelineItem[] = [
    {
        id: 1,
        year: "Present",
        title: "Frontend Developer",
        subtitle: "Zeksta Technology",
        description:
            "Currently working as a Frontend Developer using React.js, TypeScript and SCSS.",
    },
    {
        id: 2,
        year: "2024",
        title: "Python Django Intern",
        subtitle: "Heptarise IT Solutions",
        description:
            "Completed a 6-month internship developing a Virtual Pharmacy Assistance Portal.",
    },
    {
        id: 3,
        year: "2021 - 2022",
        title: "MERN Stack Development Training",
        subtitle: "Professional Training",
        description:
            "Completed MERN Stack training and built multiple full-stack projects.",
    },
];

export const education: TimelineItem[] = [
    {
        id: 1,
        year: "2023 - 2025",
        title: "Master of Computer Applications (MCA)",
    },
    {
        id: 2,
        year: "2020 - 2023",
        title: "Bachelor of Computer Applications (BCA)",
    },
];