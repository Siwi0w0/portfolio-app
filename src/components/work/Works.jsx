import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';

import { projectsNav } from './Data';
import { projectsData } from './Data';
import WorksItems from './WorksItems';

const Works = ()=> {
    const [item, setItem] = useState ({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'all') {
            setProjects(projectsData);
        }

        else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    
    // Create a function to handle the click event
    const handleClick = (e, index)=> {
        setItem({ name: e.target.textContent});
    };

    return (
        <div>
            <div className="work__filters">
            {projectsNav.map((item, index)=> {
                return (
                    <span 
                      onClick = {(e)=>{
                        handleClick(e, index);
                    }}
                    className="work__item" key={index}>
                        {item.name}
                    </span>
                )
            })}
            </div>

            <div className="work__container container grid">
                {projectsData.map((item, index)=>{
                    return <WorksItems item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works;