import React from 'react'

const WorksItems = ({ item, onItemClick }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <p className="work_description">{item.description}</p>
            <button
                onClick={() => onItemClick(item)}
                className="work__button"
            >
                Preview <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </button>
        </div>
    )
}

export default WorksItems
