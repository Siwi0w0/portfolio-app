import React from 'react';
import {gsap} from 'gsap';
import './cursor.css'

const Cursor = ()=> {
    const cursor = document.querySelector(".cursor-follower");

    window.addEventListener('mousemove', (e)=>{
        gsap.to(cursor, {
            left: e.clientX,
            top: e.clientY,
            duration: 0.6,
            ease: 'power2'
        })
    })

    // window.addEventListener('click', (e) => {
    //     createFirework(e.clientX, e.clientY);
    // });

    return (
        <div className='cursor-follower'>
        </div>
    )
}

export default Cursor;