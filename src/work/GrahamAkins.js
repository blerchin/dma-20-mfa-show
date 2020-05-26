import React from "react";

import Artist from "../Containers/Artist";
import Gradient from "../Components/Gradient";
import ProjectHeader from "../Components/ProjectHeader";
import ProjectDescription from "../Components/ProjectDescription";
import Image from "../Components/Image";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";

import GrahamImage1 from "./assets/GrahamAkins-1.png";

export default function ({slug, name}) {
  return (
    <Artist noCover="true">
      <Gradient/>
      <Seo
        title={name}
        description="A performative investigation of our desire to be close to the animal other in the Anthropocene"
        path={slug}
        image={GrahamImage1}
      />
      <ProjectHeader
        artistName={name}
        title="Approximate Other (Tower &amp; Stage)"
        materials="trail cameras, wooden stages, wooden tower, zentai suit, &amp; photogrammetry"
        link="https://grahamakins.cargo.site"
      />
      <ProjectColumns>
        <Column>
          <Vimeo 
            url="https://player.vimeo.com/video/422619346?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
            padding="125%"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={GrahamImage1}
            alt="A grey field with the text 1200x1200"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              A performative investigation of our desire to be close to the animal other in the Anthropocene
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
    </Artist>
  );
}