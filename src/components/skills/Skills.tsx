import { motion } from "framer-motion";

import "./Skills.scss";

import SkillCategory from "./SkillCategory";
import { skills } from "./skillsData";

const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Message Broker",
    "DevOps & Cloud",
    "Tools",
] as const;

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="skills__container">

                {/* Heading */}

                <motion.div
                    className="skills__header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="skills__subtitle">
                        My Expertise
                    </span>

                    <h2 className="skills__title">
                        Technical Skills
                    </h2>

                    <p className="skills__description">
                        Technologies, frameworks and tools that I use to build
                        modern, scalable and high-performance web applications.
                    </p>
                </motion.div>

                {/* Categories */}

                {categories.map((category) => (
                    <SkillCategory
                        key={category}
                        title={category}
                        skills={skills.filter(
                            (skill) => skill.category === category
                        )}
                    />
                ))}

            </div>
        </section>
    );
};

export default Skills;