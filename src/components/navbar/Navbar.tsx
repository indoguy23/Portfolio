import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { navLinks } from "./navbarData";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >
            <div className="navbar__container">

                {/* Logo */}
                <motion.a
                    href="#home"
                    className="navbar__logo"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                    }}
                >
                    Aryan<span>.</span>
                </motion.a>

                {/* Navigation */}
                {/* Navigation */}
                <motion.nav
                    ref={navRef}
                    className={`navbar__nav ${isMenuOpen ? "active" : ""}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                >
                    <ul className="navbar__menu">

                        {navLinks.map((item, index) => (
                            <motion.li
                                key={item.id}
                                className="navbar__item"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.4 + index * 0.1,
                                }}
                            >
                                <a
                                    href={item.href}
                                    className={`navbar__link ${activeSection === item.href.replace("#", "")
                                        ? "active"
                                        : ""
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </motion.li>
                        ))}

                    </ul>

                    <motion.button
                        type="button"
                        className="navbar__button"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                    >
                        Resume
                    </motion.button>
                </motion.nav>

                {/* Mobile Toggle */}

                <button
                    type="button"
                    aria-label="Toggle navigation"
                    className="navbar__toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>

            </div>
        </motion.header>
    );
};

export default Navbar;