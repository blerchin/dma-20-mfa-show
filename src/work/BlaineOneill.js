import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import ProjectLink from "../Components/ProjectLink";
import Image from "../Components/Image";

import Placeholder from "./assets/placeholder.png";

import Seo from "../Components/Seo";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={slug}
      />
      <ProjectHeader
        artistName={name}
        title="Isolog"
        materials="ever-looping 36 minute spoken log, for screens"
        link="http://dolphin.limited"
      />
      <ProjectCover>
        <Column>
          <Image img={Placeholder} alt="" />
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <h3 class="sr-only">Project Description</h3>
          <p>
            Written in collaboration with three GPT-2 text generators trained
            using Runway ML, featuring the voices of Jesse Hoffman (SUDO),
            Cecile Believe (MAUDE), and Kate Berlant (PSEUDO).
          </p>
          <p>Affective loop: Interest ↝ Enjoyment ↝ Surprise ↝ Shame ↺</p>
          <h5 id="eventsLabel">Events:</h5>
          <ol aria-labelledby="eventsLabel">
            <li>Evaluation (identification)</li>
            <li>Access (trust)</li>
            <li>Catch (catfish)</li>
            <li>Refresh (support)</li>
          </ol>
        </Column>
      </ProjectColumns>
      <ProjectLink href="#" text="VIEW THIS PROJECT" />
      <ArtistBio>
        <p>
          Affiliate of multiple groups. Working as an artist, designer, web
          developer and disc jockey. Currently: affect, bubbles, feature
          extraction, improvisation, intersubjectivity. Always: failure.
        </p>
      </ArtistBio>
    </Artist>
  );
}
