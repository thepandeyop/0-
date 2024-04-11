import React from 'react';
import './Header.css';

const navLinks = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#community',
        display: 'Community'
    },
    {
        path: '#group',
        display: 'Group'
    },
    {
        path: '#Roadmap',
        display: 'Roadmap'
    }
];

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className={`header ${theme}`}>
            <div className='container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <h2>Zero Factorial</h2>
                    </div>

                    {/* navigation */}
                    <div className='navigation'>
                        <ul className='menu'>
                            {navLinks.map((item, index) => (
                                <li key={index} className='menu__item'>
                                    <a href={item.path} className='menu__link'>
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Light/Dark mode toggle */}
                    <div className='light__mode'>
                        <span onClick={toggleTheme}>
                            {theme === 'light-theme' ? (
                                <>
                                    <i className='ri-moon-line'></i> <span className="light-text">Light</span>
                                </>
                            ) : (
                                <>
                                    <i className='ri-sun-line'></i> <span className="dark-text">Dark</span>
                                </>
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
