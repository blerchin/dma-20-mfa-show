import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import config from 'src/config';
import paper from 'paper';

import { wrapper } from './style.module.scss';
import Blobs from './blobs';

export default function BlobField({
  height = window.innerHeight,
  width = window.innerWidth
}) {
    const animationEl = useRef(null);
    const wrapperEl = useRef(null);
    const history = useHistory();
    const [activeArtist, setActiveArtist] = useState(null);

    const onArtistHovered = (artist) => {
      console.log(artist);
      setActiveArtist(artist);
    }

    useEffect(() => {
        const blobs = new Blobs(config.artists, { onArtistHovered, onArtistClicked: null });
        paper.setup(animationEl.current);
        blobs.setup();

        paper.view.onFrame = (evt) => blobs.onFrame(evt);
        paper.view.onResize = (evt) => blobs.onResize(evt);

        const handleMouseDown = (evt) => {
          if (activeArtist) {
            history.push(`/${activeArtist.slug}`);
          }
        };
        const handleMouseMove = (evt) => {
          blobs.onMouseMove(evt.mouseX, evt.mouseY);
        };
        
        wrapperEl.current.addEventListener('mousedown', handleMouseDown);
        wrapperEl.current.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          wrapperEl.current.removeEventListener('mousedown', handleMouseDown);
          wrapperEl.current.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className={wrapper} ref={wrapperEl} style={{ width, height }}>
          {/*resize="true" breaks things for some reason*/}
          <canvas ref={animationEl} width={width} height={height}  />
          <div class='title'>
            {activeArtist ? activeArtist.name.toUpperCase() : 'NEARREST NEIGHBOR'}
          </div>
        </div>
    )

}
