import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Image from "../Components/Image";

import LemingImage1 from "./assets/LemingZhong-1.jpg";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";
export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="This is a three-character monologue about be-ing, bee, and bees. This video is part of a future sculpture."
        path={slug}
      />
      <ProjectHeader
        artistName={name}
        title="My doctor's prescription for my pollen allergy is to let the light illuminate everywhere"
        materials="8 minute video"
        link="https://lemingchung.com"
      />
      <ProjectCover>
        <Column>
          <Image img={LemingImage1} alt="A small piece of honeycomb in the nature, its odor still attracting bees from its own hive" />
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              This is a three-character monologue about be-ing, bee, and bees. This video is part of a future sculpture.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://www.youtube.com/embed/7CJ8DJtU9bE" />
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Leming Zhong is having an interdisciplinary practice with diagram, sculpture installation and video.
          <br/>I am currently exploring the inferior and external body and system, anthropomorphizing inanimate matter while objectifying power dynamics. 
          <br/>Leming lives in Los Angeles. 
        </p>
      </ArtistBio>
    </Artist>
  );
}
