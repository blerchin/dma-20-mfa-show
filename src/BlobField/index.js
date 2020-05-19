import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import config from "src/config";
import paper from "paper";

import style from "./style.module.scss";
import Blobs from "./blobs";

export default function BlobField({ collapsed = false, width, height }) {
  const animationEl = useRef(null);
  const wrapperEl = useRef(null);
  const blobsRef = useRef(null);
  const history = useHistory();
  const [activeArtist, setActiveArtist] = useState(null);

  useEffect(() => {
    const onArtistHovered = (event) => {
      if (event.type === "mouseenter")
        setActiveArtist(event.target.artist);
      else
        setActiveArtist(null);
    };
    const onArtistClicked = (event) => {
      history.push(`/${event.target.artist.slug}`);
    };
    const blobs = blobsRef.current = new Blobs(config.artists, {
      onArtistHovered,
      onArtistClicked,
      height,
      width,
      collapsed
    });

    const wrapper = wrapperEl.current;
    paper.setup(animationEl.current);
    blobs.setup();

    paper.view.onFrame = (evt) => blobs.onFrame(evt);

    const handleMouseMove = (evt) => {
      blobs.onMouseMove(evt.clientX, evt.clientY);
    };

    const handleTouchMove = (evt) => {
      blobs.onMouseMove(evt.touches[0].clientX, evt.touches[0].clientY);
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("touchmove", handleTouchMove);
    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("touchmove", handleTouchMove);
    };
  }, [blobsRef]);

  useEffect(() => {
    blobsRef.current.setSize(width, height, collapsed);
  }, [width, height, collapsed]);

  return (
    <div className={style.wrapper} ref={wrapperEl}>
      <canvas ref={animationEl} width={width} height={height} resize="true"/>
      {collapsed ? '' : (
        <div className="title">
          {activeArtist ? activeArtist.name.toUpperCase() : "NEARREST NEIGHBOR"}
        </div>
      )}
    </div>
  );
}
