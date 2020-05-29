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
        description="This is a three-character monologue about be-ing, bee, and bees."
        path={slug}
        image={LemingImage1}
      />
      <ProjectHeader
        artistName={name}
        title="My doctor's prescription for my pollen allergy is to let the light illuminate everywhere"
        materials="Video"
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
            This is a three-character monologue about be-ing, bee, and bees.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/422977500?title=0&byline=0&portrait=0" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
            This video is alongside a future sculpture.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
        Leming Zhong's interdisciplinary practice spans drawing, sculpture, installation and video. I am currently exploring bodies and systems, from inside and outside, and strategies to anthropomorphize inanimate matter while objectifying power dynamics. Leming lives in Los Angeles.
        </p>
      </ArtistBio>
    </Artist>
  );
}
