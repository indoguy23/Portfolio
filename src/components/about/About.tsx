import { motion } from "framer-motion";

import "./About.scss";

import { education, experiences } from "./aboutData";
import ExperienceCard from "./ExperienceCard";
import StatCard from "./StatCard";
import { aboutStats } from "./aboutStats";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__container">

                {/* ================= Left Section ================= */}

                <motion.div
                    className="about__left"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="about__subtitle">
                        Get To Know Me
                    </span>

                    <h2 className="about__title">
                        About Me
                    </h2>

                    <p className="about__description">
                        I'm <strong>Aryan Dewangan</strong>, a passionate Frontend Developer
                        currently working at <strong>Zeksta Technology</strong>. I enjoy
                        building modern, scalable and user-friendly web applications using
                        React.js, TypeScript and modern frontend technologies.
                    </p>

                    <p className="about__description">
                        I completed a 6-month internship as a Python Django Developer and
                        also completed MERN Stack Development training. I love learning new
                        technologies and continuously improving my development skills.
                    </p>
                    <div className="about__stats">

                        {aboutStats.map((item) => (

                            <StatCard
                                key={item.id}
                                number={item.number}
                                title={item.title}
                            />

                        ))}

                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="about__button"
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* ================= Right Section ================= */}

                <motion.div
                    className="about__right"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    {/* Experience */}

                    <div className="about__section">

                        <h2 className="about__section-title">
                            Experience
                        </h2>

                        {experiences.map((item) => (
                            <ExperienceCard
                                key={item.id}
                                year={item.year}
                                title={item.title}
                                subtitle={item.subtitle}
                                description={item.description}
                            />
                        ))}

                    </div>

                    {/* Education */}

                    <div className="about__section">

                        <h2 className="about__section-title">
                            Education
                        </h2>

                        {education.map((item) => (
                            <ExperienceCard
                                key={item.id}
                                year={item.year}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default About;