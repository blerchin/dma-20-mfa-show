import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Image from "../Components/Image";
import Seo from "../Components/Seo";

import Placeholder from "./assets/placeholder.png";

export default function (config) {
  return (
    <Artist>
      <Seo
        title={config.config.name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={config.config.slug}
      />
      <ProjectHeader
        artistName="Hirad Sab"
        title="Body Troubles"
        materials="15 Minute Video"
        link="http://hiradsab.com"
      />
      <ProjectCover>
        <Image img={Placeholder} alt="" />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/397740847?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            An analysis of the digital proliferation and mediation of the body
            in the contemporary politics of image, "Body Troubles" is a
            rhetorical and discursive attempt at locating the virtual body and
            its implications in a climate of economic disparity and political
            discontent. Its focus is to identify the roles of the virtual body
            in discourses, disciplines and socioeconomic milieus, using the
            state of the art technologies in machine learning, computer vision,
            and computer graphics.
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Hirad Sab is an Iranian/American artist and visual director whose work
          explores the margins of digital aesthetics, internet culture, and
          technology. His amalgams occupy a precarious intersection of culture
          and the democratic nature of image circulation; an aesthetic trend
          that expands and mutates rapidly. His work has been described as
          simultaneously distant and close, drawing the viewer in, even as it
          challenges them to look away, and heavily features depictions of the
          human form, gesture, and activity in distinctly digital environments.
          The result is in an emblematic and distinguishable oeuvre that resists
          easy classification.
        </p>
      </ArtistBio>
    </Artist>
  );
}
