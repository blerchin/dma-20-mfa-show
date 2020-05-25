import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import config from "src/config";
import paper from "paper";

import {
  wrapper,
  popover,
} from './style.module.css';

import Blobs from "./blobs";

import ArtistNav from "../Components/ArtistNav/";

export default function BlobField() {
  const animationEl = useRef(null);
  const wrapperEl = useRef(null);
  const blobsRef = useRef(null);
  const history = useHistory();
  const [activeArtist, setActiveArtist] = useState(null);
  const [parentWidth, setParentWidth] = useState('100vw');
  const [parentHeight, setParentHeight] = useState('100vh');
  const [popoverStyle, setPopooverStyle] = useState(null);

  let location = useLocation();
  const collapsed = location.pathname !== '/';

  function calculateStyle(event, isCollapsed) {
    let style = {
      display: "none",
    };

    if (isCollapsed && event && event.type === "mouseenter") {
      const isVertical = document.body.clientWidth > window.innerHeight;
      const count = config.artists.length;
      const totalLength = isVertical
        ? window.innerHeight
        : document.body.clientWidth;
      const canvasLength = totalLength / count;

      let pos = event.target.position;
      if (isVertical && pos.x < canvasLength) {
        style = {
          top: pos.y,
          right: canvasLength + 5,
          transform: "translate(0, -50%)",
        };
      } else if (!isVertical && pos.y < canvasLength) {
        style = {
          bottom: canvasLength + 5,
          left: "50%",
          transform: "translate(-50%, 0)",
        };
      }
    }
    return style;
  }

  useEffect(() => {
    const onArtistClicked = (event) => {
      history.push(`/${event.target.artist.slug}`);
    };

    const blobs = blobsRef.current = new Blobs(config.artists);
    blobs.setOnArtistClicked(onArtistClicked);
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
    setParentWidth(document.body.clientWidth);
    setParentHeight(window.innerHeight);

    if (blobsRef.current) {
      const blobs = blobsRef.current;
      blobs.setIsCollapsed(collapsed);
      blobs.setOnArtistHovered((event) => {
        if (event.type === "mouseenter") {
          setActiveArtist(event.target.artist);
        } else {
          setActiveArtist(null);
        }
        setPopooverStyle(calculateStyle(event, collapsed));
      });
    }
  }, [blobsRef, collapsed]);

  return (
    <div className="blobs">
      <div
        className={wrapper}
        ref={wrapperEl}
        style={collapsed ? {} : { width: parentWidth, height: parentHeight }}
      >
        <ArtistNav />
        <canvas ref={animationEl}/>
        {collapsed ? (
          ""
        ) : (
          <div className="title">
            {activeArtist
              ? activeArtist.name.split(" ").map((item, i) => {
                  return <p key={item}>{item.toUpperCase()}</p>;
                })
              : "NEARREST NEIGHBOR"}
          </div>
        )}
        <div className={popover} style={popoverStyle}>
          {collapsed && activeArtist ? activeArtist.name.toUpperCase() : ""}
        </div>
      </div>
    </div>
  );
}
