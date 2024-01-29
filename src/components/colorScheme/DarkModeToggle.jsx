import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import './darkModeToggle.css';
import { useMediaQuery } from 'react-responsive';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setIsDark(isSystemDark)
    );

    const toggleDark = (e) => {
        setIsDark(e.target.checked);
    }

    useEffect(()=> {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    })
    return (
        <div className="toggle-container">
            <Toggle
        defaultChecked={isDark}
        onChange={ toggleDark }
        icons={{
            checked: null,
            unchecked: null,
        }}
        aria-label="Dark mode toggle"
        className={`dark-mode-toggle-btn ${isDark ? 'on' : 'off'}`}
        />
        </div>
    )
}

export default DarkModeToggle;