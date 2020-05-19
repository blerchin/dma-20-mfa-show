import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import config from "src/config";
import paper from "paper";

import style from "./style.module.scss";
import Blobs from "./blobs";

import ArtistNav from "../Components/ArtistNav/";

export default function BlobField({ collapsed = false }) {
  const animationEl = useRef(null);
  const wrapperEl = useRef(null);
  const blobsRef = useRef(null);
  const history = useHistory();
  const [activeArtist, setActiveArtist] = useState(null);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [parentWidth, setParentWidth] = useState(window.innerWidth);
  const [parentHeight, setParentHeight] = useState(window.innerHeight);

  useEffect(() => {
    const onArtistHovered = (event) => {
      if (event.type === "mouseenter") setActiveArtist(event.target.artist);
      else setActiveArtist(null);
      console.log(event.target.position);
    };

    const onArtistClicked = (event) => {
      history.push(`/${event.target.artist.slug}`);
    };

    const blobs = (blobsRef.current = new Blobs(config.artists, {
      onArtistHovered,
      onArtistClicked,
    }));

    blobs.collapsed = collapsed;

    const wrapper = wrapperEl.current;
    paper.setup(animationEl.current);
    blobs.setup();

    paper.view.onFrame = (evt) => blobs.onFrame(evt);

    const handleResize = (evt) => {
      setParentWidth(document.body.clientWidth);
      setParentHeight(window.innerHeight);
      blobs.onResize(evt);
    };

    const handleMouseMove = (evt) => {
      blobs.onMouseMove(evt.clientX, evt.clientY);
    };

    const handleTouchMove = (evt) => {
      blobs.onMouseMove(evt.touches[0].clientX, evt.touches[0].clientY);
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);
    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [blobsRef]);

  useEffect(() => {
    blobsRef.current && blobsRef.current.setIsCollapsed(collapsed);
  }, [blobsRef, collapsed]);

  return (
    <div
      className={style.wrapper}
      ref={wrapperEl}
      style={collapsed ? {} : { width: parentWidth, height: parentHeight }}
    >
      <ArtistNav />
      <canvas ref={animationEl} width={width} height={height} />
      {collapsed ? (
        ""
      ) : (
        <div className="title">
          {activeArtist
            ? activeArtist.name.split(" ").map((item, i) => {
                return <p key={i}>{item.toUpperCase()}</p>;
              })
            : "NEARREST NEIGHBOR"}
        </div>
      )}
    </div>
  );
}
