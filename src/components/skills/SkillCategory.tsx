import { motion } from "framer-motion";

import SkillCard from "./SkillCard";
import "./SkillCategory.scss";

interface Skill {
    id: number;
    name: string;
    icon: React.ReactNode;
}

interface SkillCategoryProps {
    title: string;
    skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
    return (
        <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h3 className="skill-category__title">
                {title}
            </h3>

            <div className="skill-category__grid">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCategory;