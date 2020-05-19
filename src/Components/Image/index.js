import React, { useState } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { container, cap, fullHeight } from "./style.module.css";

const Image = ({
  img,
  alt,
  caption = false,
  fullHeight: isFullHeight = false,
  maxHeight = "auto",
}) => {
  const style = {
    maxHeight,
  };

  const parentStyles = {
    "line-height": "0",
  };

  const [showBG, setShowBG] = useState(true);

  if (maxHeight !== "auto" && isFullHeight === false) {
    style.width = "auto";
  }

  return (
    <div className={`${container} ${isFullHeight ? fullHeight : ""}`}>
      {
        <div style={{ ...parentStyles }}>
          <LazyLoadImage
            src={img.src}
            srcSet={img.srcSet}
            alt={alt}
            placeholderSrc={img.placeholder}
            threshold={10}
            effect="blur"
            useIntersectionObserver={true}
            style={style}
          />
        </div>
      }
      {caption && <div className={cap}>{caption}</div>}
    </div>
  );
};

Image.defaultProps = {
  caption: "",
  fillViewport: false,
  maxHeight: "auto",
};

Image.propTypes = {
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  fillViewport: PropTypes.bool,
  maxHeight: PropTypes.string,
};

export default Image;
