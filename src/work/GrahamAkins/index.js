import React, { useState, useEffect } from "react";

import Artist from "src/Containers/Artist";
import Gradient from "src/Components/Gradient";
import ProjectHeader from "src/Components/ProjectHeader";
import { CoverItem } from "src/Components/ProjectCover";
import ProjectDescription from "src/Components/ProjectDescription";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import Vimeo from "src/Components/VideoVimeo";
import Seo from "src/Components/Seo";

import { video } from "./style.module.scss";

export default function ({slug, name}) {
  const [isFluid, setIsFluid] = useState(false)
  useEffect(() => {
    const onResize = () => {
      setIsFluid(document.body.clientWidth < 769);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
  return (
    <Artist>
      <Gradient/>
      <Seo
        title={name}
        description="A performative investigation of our desire to be close to the animal other in the Anthropocene"
        path={slug}
      />
      <ProjectHeader
        artistName={name}
        title="Approximate Other (Tower &amp; Stage)"
        materials="trail cameras, wooden stages, wooden tower, zentai suit, &amp; photogrammetry"
        link="https://grahamakins.cargo.site"
        fluidLayout={isFluid}
      />
      <CoverItem fluidLayout={isFluid}>
        <ProjectColumns>
          <Column>
            <Vimeo
              className={video}
              url="https://player.vimeo.com/video/422619346?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
              padding="125%"
            />
          </Column>
        </ProjectColumns>
      </CoverItem>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              A performative investigation of our desire to be close to the animal other in the Anthropocene. The wildlife and my performances were filmed on location in Los Angeles at Griffith Park, the Los Angeles River, and my back yard.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
    </Artist>
  );
}
