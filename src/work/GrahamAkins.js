import React from "react";

import Artist from "../Containers/Artist";
import Gradient from "../Components/Gradient";
import ProjectHeader from "../Components/ProjectHeader";
import { CoverItem } from "../Components/ProjectCover";
import ProjectDescription from "../Components/ProjectDescription";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";

export default function ({slug, name}) {
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
        fluidLayout
      />
      <CoverItem fluidLayout>
        <ProjectColumns>
          <Column>
            <Vimeo
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
