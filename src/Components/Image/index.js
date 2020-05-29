import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { container, cap, fullHeight } from "./style.module.css";

const Image = ({
  img,
  alt,
  a,
  caption = false,
  fullHeight: isFullHeight = false,
  maxHeight = "auto",
  className = "",
  useLazy = true,
}) => {
  const style = {
    maxHeight,
  };

  const parentStyles = {
    lineHeight: "0",
  };

  if (maxHeight !== "auto" && isFullHeight === false) {
    style.width = "auto";
  }

  return (
    <div
      className={`${container} ${isFullHeight ? fullHeight : ""} ${className}`}
    >
      {
        <div style={{ ...parentStyles }}>
          {a ? 
            <a href={a} target="_blank" rel="noopener noreferrer"><img src={img} alt={alt} style={style} /></a> :
            useLazy && navigator.userAgent !== "ReactSnap" ?
              <LazyLoadImage
                src={img.src}
                srcSet={img.srcSet}
                alt={alt}
                placeholderSrc={img.placeholder}
                effect="blur"
                useIntersectionObserver={true}
                style={style}
              />
              :
              <img src={img} srcSet={img.srcSet} alt={alt} style={style}/>}
        </div>}
      {caption && <div className={cap}>{caption}</div>}
    </div>
  );
};

Image.defaultProps = {
  img: null,
  alt: null,
  caption: "",
  fullHeight: false,
  maxHeight: "auto",
  className: "",
};

Image.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fillViewport: PropTypes.bool,
  maxHeight: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
