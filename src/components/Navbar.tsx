import { useState } from 'react';
import './Navbar.scss'
import { navLinks } from './navbarData'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className='navbar'>
            <div className="navbar__container">

                {/* LOGO */}
                <a href="#home" className="navbar__logo">
                    Aryan<span>.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className={`navbar__nav ${isMenuOpen ? "active" : ""}`}>
                    <ul className="navbar__menu">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="navbar__button">
                        Resume
                    </button>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    className="navbar__toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>
            </div>
        </header>
    )
}

export default Navbar;