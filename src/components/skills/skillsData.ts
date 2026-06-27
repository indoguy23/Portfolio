import { createElement, type ReactNode } from "react";
import {
    SiApachekafka,
    SiCss,
    SiDjango,
    SiDocker,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiRabbitmq,
    SiReact,
    SiRedis,
    SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws, FaTasks } from "react-icons/fa";
import { FaLocust } from "react-icons/fa6";

export interface Skill {
    id: number;
    name: string;
    icon: ReactNode;
    category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Message Broker"
    | "DevOps & Cloud"
    | "Tools";
}

export const skills: Skill[] = [
    // Frontend
    { id: 1, name: "HTML5", icon: createElement(SiHtml5), category: "Frontend" },
    { id: 2, name: "CSS3", icon: createElement(SiCss), category: "Frontend" },
    { id: 3, name: "JavaScript", icon: createElement(SiJavascript), category: "Frontend" },
    { id: 4, name: "React", icon: createElement(SiReact), category: "Frontend" },
    { id: 5, name: "TypeScript", icon: createElement(SiTypescript), category: "Frontend" },

    // Backend
    { id: 6, name: "Node.js", icon: createElement(SiNodedotjs), category: "Backend" },
    { id: 7, name: "Express.js", icon: createElement(SiExpress), category: "Backend" },
    { id: 8, name: "Django", icon: createElement(SiDjango), category: "Backend" },
    { id: 9, name: "Django REST Framework", icon: createElement(TbApi), category: "Backend" },

    // Database
    { id: 10, name: "PostgreSQL", icon: createElement(SiPostgresql), category: "Database" },
    { id: 11, name: "MySQL", icon: createElement(SiMysql), category: "Database" },
    { id: 12, name: "MongoDB", icon: createElement(SiMongodb), category: "Database" },
    { id: 13, name: "Redis", icon: createElement(SiRedis), category: "Database" },

    // Message Broker
    { id: 14, name: "Kafka", icon: createElement(SiApachekafka), category: "Message Broker" },
    { id: 15, name: "RabbitMQ", icon: createElement(SiRabbitmq), category: "Message Broker" },
    { id: 16, name: "Celery", icon: createElement(FaTasks), category: "Message Broker" },

    // DevOps & Cloud
    { id: 17, name: "Docker", icon: createElement(SiDocker), category: "DevOps & Cloud" },
    { id: 18, name: "AWS", icon: createElement(FaAws), category: "DevOps & Cloud" },
    { id: 19, name: "CI/CD Pipeline", icon: createElement(FaTasks), category: "DevOps & Cloud" },

    // Tools
    { id: 20, name: "Git", icon: createElement(SiGit), category: "Tools" },
    { id: 21, name: "GitHub", icon: createElement(SiGithub), category: "Tools" },
    {
        id: 22,
        name: "Postman",
        icon: createElement(SiPostman),
        category: "Tools"
    },

    // Testing & Performance
    {
        id: 24,
        name: "Locust",
        icon: createElement(FaLocust),
        category: "Tools"
    },
];
