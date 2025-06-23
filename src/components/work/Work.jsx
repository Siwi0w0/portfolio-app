import {React, useState} from 'react'
import './work.css'
import Works from './Works'
import WorkPreview from '../workPreview/WorkPreview'

const Work = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentWork, setCurrentWork] = useState(null);

    const handleClick = (work) => {
        setCurrentWork(work);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentWork(null);
    }

    return (
        <section className="work section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent work</span>

            <Works onItemClick={handleClick} />
            <WorkPreview
            showModal={showModal}
            workDetails={currentWork}
            onClose={handleCloseModal}
            />
        </section>
    )
}

export default Work
