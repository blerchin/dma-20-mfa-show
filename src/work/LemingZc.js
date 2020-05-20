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
export default function (config) {
  return (
    <Artist>
      <Seo
        title={config.config.name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={config.config.slug}
      />
      <ProjectHeader
        artistName="Leming Zhong"
        title="(TBA) Report a Hypersensitive Ensemble"
        materials="7 minute video"
        link="https://vimeo.com/llleming"
      />
      <ProjectCover>
        <Column>
          <Image img={LemingImage1} alt="" />
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            justo non elit fringilla imperdiet ut nec purus. Quisque egestas
            consequat sem, quis volutpat felis vestibulum eu. Integer elementum
            eros non nulla consequat blandit. Donec elit erat, ullamcorper et
            varius vitae, volutpat sed tellus. In tempus lorem vitae ex
            pulvinar, at molestie orci sodales. Donec eget nisl tincidunt,
            fringilla purus a, accumsan diam. Sed non ipsum a est lobortis
            varius.
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/418431195?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" />
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
          eros ullamcorper, ultrices neque at, ultrices ipsum. Vestibulum ut
          mauris at ex interdum consectetur. Phasellus eget tempus tellus. Morbi
          id ante eu augue tempus congue. Curabitur risus ex, ornare sed varius
          et, tristique a ipsum. Mauris non lorem orci. Etiam eu porta nisi.
          Proin id luctus purus. Sed viverra et tortor ac posuere. Nam rhoncus
          tristique eleifend. Proin ac augue dui. Proin diam orci, feugiat quis
          posuere nec, iaculis ac neque. Aliquam suscipit metus nibh, ut
          tristique odio dapibus vitae.
        </p>
      </ArtistBio>
    </Artist>
  );
}
