import React from 'react'
import './workPreview.css'

const WorkPreview = ({showModal, workDetails, onClose}) => {
    if (!showModal || !workDetails) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>
                <i className="bx bx-x"></i>
            </button>
            
            <div className="modal-body">
                <div className="modal-image-container">
                    <img src={workDetails.image} alt={workDetails.title} className="modal-image" />
                </div>
                
                <div className="modal-info">
                    <h2 className="modal-title">{workDetails.title}</h2>
                    <p className="modal-category">{workDetails.category}</p>
                    <div className="modal-description">
                    {workDetails.fulldescription.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                    </div>

                    <div className="modal-technologies">
                        <h3 className="technologies-title">Technologies Used:</h3>
                        <div className="technologies-list">
                            {workDetails.technologies && workDetails.technologies.map((tech, index) => (
                                <span key={index} className="technology-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <a
                        href={workDetails.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link"
                    >
                        View Project <i className="bx bx-external-link"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkPreview