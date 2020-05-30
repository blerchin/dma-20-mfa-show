import React, { useState, useEffect } from "react";

import Artist from "src/Containers/Artist";
import Gradient from "src/Components/Gradient";
import ProjectHeader from "src/Components/ProjectHeader";
import { CoverItem } from "src/Components/ProjectCover";
import ProjectDescription from "src/Components/ProjectDescription";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import Vimeo from "src/Components/VideoVimeo";
import Seo from "src/Components/Seo";

import OGImage from "../assets/Graham-ogimage.png";


export default function ({slug, name}) {
  return (
    <Artist scrollIndicator={false}>
      <Gradient/>
      <Seo
        title={name}
        description="A performative investigation of our desire to be close to the animal other in the Anthropocene"
        path={slug}
        image={OGImage}
      />
      <ProjectHeader
        artistName={name}
        title="Approximate Other (Tower &amp; Stage)"
        materials="trail cameras, wooden stages, wooden tower, zentai suit, &amp; photogrammetry"
        link="https://grahamakins.cargo.site"
        fluidLayout
      />
      <CoverItem fluidLayout>
        <ProjectColumns>
          <Column>
            <Vimeo
              url="https://player.vimeo.com/video/422619346?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
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
