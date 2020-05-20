import React, { useState, useRef } from "react";
import Seo from "../Components/Seo";

export default function () {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const videoEl = useRef(null);

  const onClickStart = () => {
    setIsProjectOpen(true);
    videoEl.current.muted = false;
    videoEl.current.play();
  };
  return (
    <>
      <Seo
        title="Dalena"
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path="/"
      />
      <h3>
        <button onClick={onClickStart}>Click to experience</button> the
        wonderful work of Dalena Tran
      </h3>
      <video
        muted
        ref={videoEl}
        style={{ display: isProjectOpen ? "block" : "none" }}
      >
        <source src="https://dalena.github.io/acts-in-translation/vid/ait.mp4" />
      </video>
    </>
  );
}
