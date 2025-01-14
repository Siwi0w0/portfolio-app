import './cursor.css'
import { useRef, useState, React } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = ()=> {
    const cursorRef = useRef(null);
    const cursorPosition = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef(null);

    // GSAP context setup
    useGSAP(() => {
        const updateMousePosition = (e) => {
            cursorPosition.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    x: cursorPosition.current.x,
                    y: cursorPosition.current.y,
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        const handleClick = () => {
            if(cursorRef.current){
                // Scale animation on click
                gsap.to(cursorRef.current, {
                    scale: 0.8,
                    duration: 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(cursorRef.current, {
                            scale: 1,
                            duration: 0.2,
                            ease: "elastic.out(1, 0.3)"
                        });
                    }
                });
            }
        };

        // Start animation loop
        animate();

        // Add Event Listeners
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('click', handleClick);

        // Clean up function
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }

            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('click', handleClick);
        };
    }, []); // dependencies array

    return (
        <div ref={cursorRef} className='cursor-follower'>
        </div>
    )
}

export default Cursor;