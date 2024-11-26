import React from 'react'
import './qualification.css'

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        {''}
                        Education
                    </div>
                    <div className="qualification_button qualification_active button--flex">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        {''}
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className="qualification_content">
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                Interaction Design
                                </h3>
                                <span className="qualification_subtitle">
                                    Nanjing Forestry University
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    2018-2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">
                                    Web Designer
                                </h3>
                                <span className="qualification_subtitle">
                                    Hillview Resource Centre
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    10.2022-11.2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">
                                    Human Computer Interaction
                                </h3>
                                <span className="qualification_subtitle">
                                    University College Dublin
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    2022-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">
                                    Junior Full-Stack Developer
                                </h3>
                                <span className="qualification_subtitle">
                                    Freelancer
                                </span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    6.2024-present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
