import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Image from "../Components/Image";
import Spacer from "../Components/Spacer";

import BerfinImage0 from "./assets/BerfinAtaman-0.jpg";
import BerfinImage1 from "./assets/BerfinAtaman-1.jpg";
import BerfinImage2 from "./assets/BerfinAtaman-2.jpg";
import BerfinImage3 from "./assets/BerfinAtaman-3.jpg";
import BerfinImage4 from "./assets/BerfinAtaman-4.jpg";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={slug}
        image={BerfinImage0}
      />
      <ProjectHeader
        artistName={name}
        title="Raising Quills"
        materials="Fabric, electronics, wood,cement,steel"
        link="http://www.berfinataman.com/bio-contact"
      />
      <ProjectCover>
        <Column>
          <Column>
            <Vimeo
              url="https://player.vimeo.com/video/422667288?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
              padding="0"
              isFullHeight="true"
            />
          </Column>
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Image
            img={BerfinImage2}
            alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Spacer>
            <Image
              img={BerfinImage1}
              alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
            />
          </Spacer>
          <Spacer>
            <Image
              img={BerfinImage0}
              alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
            />
          </Spacer>
          <ProjectDescription>
            <Spacer>
              <p>              
                While experimenting on different movements relative to the
                architecture the sculpture is in, form of the sculpture and surface
                pattern, I have also increasingly become interested in how behaviors
                and feelings are evoked through observed movement, and why humans
                instinctively characterize something that is in motion. I have
                started naming my sculptures by the movements they produce since
                this is the source of the audiences perception combined with colors
                and sounds.
              </p>
            </Spacer>
          </ProjectDescription>
        </Column>
        <Column>
        <Spacer>
            <p>
              “Raising Quills” evokes curiosity by putting the audience into bizzare interactions in a surreal world. The piece connects the ceiling to the floor as a way to draw attention to the structure of the building, and the movement is designed to entice people to interact with the piece as well as the environment, bringing life to an otherwise lifeless space. I am passionate about creating physically interactive installations and sculptures in order to investigate our relations to the non-human objects and systems we interrupt or become part of everyday. We have a tendency to humanize objects, and my work focuses on exploiting this natural instinct by combining movement, color, shape, and location.
            </p>
          </Spacer>
          <Spacer>
            <Image
              img={BerfinImage3}
              alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
            />
          </Spacer>
          <Spacer>
            <Image
              img={BerfinImage4}
              alt="A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them."
            />
          </Spacer>
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
