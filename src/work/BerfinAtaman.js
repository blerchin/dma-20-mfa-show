import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Image from "../Components/Image";

import BerfinImage1 from "./assets/BerfinAtaman-1.jpg";
import BerfinImage2 from "./assets/BerfinAtaman-2.jpg";
import BerfinImage3 from "./assets/BerfinAtaman-3.jpg";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="I stretch above and below to connect the ends in a new way. They’re a part of me and I of them. I hold out my quills to extend my home."
        path={slug}
        image={BerfinImage1}
      />
      <ProjectHeader
        artistName={name}
        title="Raising Quills"
        materials="Fabric, electronics, wood,cement,steel"
        link="http://www.berfinataman.com/bio-contact"
      />
      <ProjectCover mt="10em" noMobileFade="true">
        <Column>
          <Column>
            <Vimeo
              url="https://player.vimeo.com/video/422667288?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1"
              padding="133.33%"
              isFullHeight="true"
            />
          </Column>
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Image
            img={BerfinImage1}
            alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
          />
        </Column>
        <Column>
          <Image
            img={BerfinImage2}
            alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
          />
        </Column>
        <Column>
          <Image
            img={BerfinImage3}
            alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
            I stretch above and below to connect the ends in a new way. They’re a part of me and I of them.  I hold out my quills to extend my home. If you and I should share a touch, I would show you the spaces between. I move on my own, not with the wind, not towards the sun, nor do I need water. I contain all within myself. You decide who I am, what I am, where I am from.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Berfin Ataman was born in Izmir, Turkey. She went on to get her BFA in
          Theatre design from University of Southern California and her Post –
          Baccalaureate degree from School of Art Institute Chicago and is
          currently getting her MFA in UCLA. She has shown her work in Chicago,
          Los Angeles and Istanbul in galleries and museums. Over multiple
          collections and projects, she has explored the internal and external
          perception of movement as they relate to body, space, motion and non-
          human objects. Her medium is fluid according to each collection but
          has been materialized as wearables, installations, and other soft,
          kinetic, sculptures.
        </p>
      </ArtistBio>
    </Artist>
  );
}
