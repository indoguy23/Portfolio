import { motion } from "framer-motion";
import { HiCalendar, HiBriefcase, HiAcademicCap } from "react-icons/hi";

import "./ExperienceCard.scss";

export interface ExperienceCardProps {
    year: string;
    title: string;
    subtitle?: string;
    description?: string;
}

const ExperienceCard = ({
    year,
    title,
    subtitle,
    description,
}: ExperienceCardProps) => {
    const isEducation = title.includes("Bachelor") || title.includes("Master");

    return (
        <motion.div
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
        >
            <div className="experience-card__top">

                <span className="experience-card__year">
                    <HiCalendar />
                    {year}
                </span>

                <div className="experience-card__icon">
                    {isEducation ? <HiAcademicCap /> : <HiBriefcase />}
                </div>

            </div>

            <h3>{title}</h3>

            {subtitle && <h4>{subtitle}</h4>}

            {description && <p>{description}</p>}
        </motion.div>
    );
};

export default ExperienceCard;