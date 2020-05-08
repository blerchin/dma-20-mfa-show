import React, { useState, useRef } from 'react';

export default function() {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const videoEl = useRef(null);
    
    const onClickStart = () => {
        setIsProjectOpen(true);
        videoEl.current.muted = false;
        videoEl.current.play();
    }
    return (
        <>
            <h3><button onClick={onClickStart}>Click to experience</button> the wonderful work of Dalena Tran</h3>
            <video muted ref={videoEl} style={{ display: isProjectOpen ? 'block' : 'none' }}>
                <source src="https://dalena.github.io/acts-in-translation/vid/ait.mp4" />
            </video>
        </>
    );
}