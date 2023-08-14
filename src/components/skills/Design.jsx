import React from 'react';
import "./skills.css";

const Design =()=> {
    return(
        <div className="skills_content">
            <h3 className="skills_title">UI/UX Designer</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="sklls_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Figma</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                    </div>

                    <div className="sklls_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Adobe Photoshop</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                    </div>

                    <div className="sklls_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Adobe Illustrator</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                    </div>
                </div>

                {/* <div className="skills_group">
                    <div className="sklls_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Adobe XD</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                    </div>

                    <div className="sklls_data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Canva</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Design;