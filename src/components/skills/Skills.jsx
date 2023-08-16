import './skills.css'
import React from 'react'
import Frontend from './Frontend'
import Design from './Design'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My technical level</span>

            <div className="skills_container container grid">
                <Frontend />
                <Design />
            </div>
        </section>
    )
}

export default Skills
