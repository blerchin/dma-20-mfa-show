import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import ProjectLink from "../Components/ProjectLink";
import Image from "../Components/Image";
import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

import BlaineImage1 from "./assets/BlaineONeill-1.png";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Interest ↝ Enjoyment ↝ Surprise ↝ Shame ↺"
        path={slug}
        image={BlaineImage1}
      />
      <ProjectHeader
        artistName={name}
        title="ISOLOG"
        materials="text and sound, 36 minutes"
        link="http://dolphin.limited"
      />
      <ProjectCover>
        <Column>
          <Image img={BlaineImage1} alt="A screenshot of the login / intro prompt for “ISOLOG” by Blaine O'Neill, with a field for entering a name and a “proceed” button that is enabled when you check the “Sound on?” box." />
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <ProjectLink href="http://isolog.live" text="VIEW THIS PROJECT" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>Interest ↝ Enjoyment ↝ Surprise ↝ Shame ↺</p>
            <p>Featuring Jesse Hoffman (SUDO), Cecile Believe (MAUDE), and Kate Berlant (PSEUDO).</p>
            <p>Written in collaboration with three GPT-2 text generators trained using Runway ML.</p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Blaine O'Neill, born 9/15/1989 in Santa Monica. Lives and works in Los Angeles. Research and work are defined by affect, bubbles, improvisation, intersubjectivity, failure.
        </p>
      </ArtistBio>
    </Artist>
  );
}
