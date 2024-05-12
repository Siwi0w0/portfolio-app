import React from 'react'
import './skills.css'

const Frontend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Frontend Developer</h3>

            <div className="skills_box">
                <div className="skills_group">
                <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">TypeScript</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>

                    <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>

                    <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">React</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>
                </div>

                <div className="skills_group">

                    <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">Node.js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">CSS3</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="sklls_data">
                        <i class="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills_name">TailwindCSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
