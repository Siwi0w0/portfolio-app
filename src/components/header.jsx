import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Yufei</a>

                <div className="nav_menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil- nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil- nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil- nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil- nav_icon"></i> Home
                            </a>
                        </li>
                    </ul>
                        
                </div>

            </nav>
            <div>Header</div>
        </header>
        
    )
}

export default Header;