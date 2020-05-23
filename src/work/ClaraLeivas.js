import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
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
        title="Clara's Work"
        materials="Live streamed video"
        link="http://leivas.se"
      />
      <ProjectCover>
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
          <p>
            In vestibulum eros quis magna maximus blandit. Pellentesque
            elementum est ac lorem scelerisque facilisis. Quisque sollicitudin
            velit et ligula tincidunt, vitae imperdiet elit placerat. Maecenas
            in elementum est, eu pulvinar libero. Quisque vitae ultrices nulla.
            Pellentesque ex nibh, posuere vitae purus id, mollis blandit urna.
            Nam eget bibendum sapien, nec tempor turpis. Pellentesque accumsan
            urna auctor sapien tincidunt luctus. Pellentesque at massa non ex
            vulputate tempor. Aliquam nibh lectus, egestas eget massa a,
            tincidunt dignissim sem. Suspendisse mauris orci, elementum quis sem
            sed, ultricies consectetur enim.
          </p>
          <p>
            Sed faucibus accumsan orci, et auctor felis porta non. Aenean sit
            amet mauris venenatis, maximus dolor ac, vulputate mi. Nulla
            facilisis justo sit amet ex blandit, vel volutpat purus auctor. Nunc
            tincidunt nulla sed ullamcorper cursus. Mauris pretium ultrices
            libero, eget venenatis lacus feugiat ut. Vestibulum quis tortor in
            sapien tincidunt dictum non quis ante. Mauris urna justo, cursus et
            felis a, placerat dictum lectus. Sed egestas nunc eu sapien
            sollicitudin molestie.
          </p>
        </Column>
      </ProjectCover>
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
