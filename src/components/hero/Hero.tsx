import './Hero.scss';
import { motion } from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import ProfileCard from '../ProfileCard/ProfileCard';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero"
        >
            <div className="hero__background">

                <div className="hero__blur hero__blur--one"></div>

                <div className="hero__blur hero__blur--two"></div>

                <div className="hero__blur hero__blur--three"></div>

            </div>
            <div className="hero__container">

                {/* Left */}

                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: .6
                        }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="hero__title"
                        initial={{
                            opacity: 0,
                            y: 40
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: .2,
                            duration: .7
                        }}
                    >
                        Aryan Dewangan
                    </motion.h1>

                    <motion.h2
                        className="hero__designation"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: .45
                        }}
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        className="hero__description"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: .6
                        }}
                    >

                        Passionate Full Stack Developer
                        specializing in Node.js, Pythion, Django, Express.js, MongoDB,
                        PostgreSQL, React and
                        scalable web applications.

                    </motion.p>

                    <motion.div
                        className="hero__buttons"
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: .8
                        }}
                    >

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -4
                            }}
                            whileTap={{
                                scale: .95
                            }}
                            className="btn-primary"
                        >
                            View Projects
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -4
                            }}
                            whileTap={{
                                scale: .95
                            }}
                            className="btn-secondary"
                        >
                            Download CV
                        </motion.button>

                    </motion.div>

                    <motion.div
                        className="hero__socials"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 1
                        }}
                    >

                        <motion.a
                            href="#"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 1.2
                            }}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 1.4
                            }}
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: 1.6
                            }}
                        >
                            <FaEnvelope />
                        </motion.a>

                    </motion.div>

                </motion.div>

                {/* Right */}

                <motion.div
                    className="hero__image"
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: .5,
                        duration: .8
                    }}
                >

                    <motion.div
                        className="hero__image-wrapper"
                        animate={{
                            y: [0, -12, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                    >

                        <ProfileCard />

                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;