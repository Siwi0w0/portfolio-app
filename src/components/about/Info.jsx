import React from 'react'

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className="bx bx-code-curly about_icon"></i>
                <h3 className="about_title">React.js<br></br>& TypeScript</h3>
            </div>

            <div className="about_box">
                <i className="bx bx-palette about_icon"></i>
                <h3 className="about_title">Responsive Design</h3>
            </div>

            <div className="about_box">
                <i className="bx bx-laugh about_icon"></i>
                <h3 className="about_title">Smooth UX</h3>
            </div>
        </div>
    )
}

export default Info
