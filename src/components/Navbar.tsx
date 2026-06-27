import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import "./Navbar.scss";
import { navLinks } from "./navbarData";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
            <div className="navbar__container">

                {/* Logo */}
                <a href="#home" className="navbar__logo">
                    Aryan<span>.</span>
                </a>

                {/* Navigation */}
                <nav className={`navbar__nav ${isMenuOpen ? "active" : ""}`}>
                    <ul className="navbar__menu">

                        {navLinks.map((item) => (
                            <li
                                key={item.id}
                                className="navbar__item"
                            >
                                <a
                                    className="navbar__link"
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}

                    </ul>

                    <button
                        type="button"
                        className="navbar__button"
                    >
                        Resume
                    </button>
                </nav>

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
        </header>
    );
};

export default Navbar;