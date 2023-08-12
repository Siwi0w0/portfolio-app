import React from 'react';

const Info =()=>{
    return(
        <div className="about_info grid">
            <div className="about_box">
                 <i class='bx bx-code-curly about_icon'></i>
                <h3 className="about_title">Develop</h3>
                <span className="about_subtitle">Responsive Websites</span>
            </div>

            <div className="about_box">
                <i class='bx bx-palette about_icon'></i>
                <h3 className="about_title">Design</h3>
                <span className="about_subtitle">Attractive User Interface</span>
            </div>

            <div className="about_box">
                 <i class='bx bx-laugh about_icon'></i>
                <h3 className="about_title">Create</h3>
                <span className="about_subtitle">Wonderful User Experience</span>
            </div>

        </div>
    )
}

export default Info;