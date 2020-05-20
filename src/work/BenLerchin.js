import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Image from "../Components/Image";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";

import BenImage from "./assets/BenLerchin-yimby-cover.jpg";
import Placeholder from "./assets/placeholder.png";

export default function () {
  return (
    <Artist>
      <Seo
        title="Ben"
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path="/"
      />
      <ProjectHeader
        artistName="Ben Lerchin"
        title="Yes, in my Backyard"
        materials="10 minute video"
        link="http://benlerchin.com"
      />
      <ProjectCover>
        <Image img={Placeholder} alt="" />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/TK?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={BenImage}
            alt='Still from video. A gray industrial concrete and metal box is in the foreground, with the text
                        "MILE 103" obliquely visible. Low brush growth is seen in the near background, behind which a number
                        of wind turbines are visible.'
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            Semi-satirical mockumentary reframing Los Angeles' infrastructure as
            a tourist destination for nature-lovers.
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Ben Lerchin is an artist and technologist who works with software,
          photography, and digital fabrication. Their practice deals extensively
          with the relationship between the photographic image and the American
          West. Reflecting on the uneasy experience of living between the city
          and the wilderness, my work attempts to reconcile a networked,
          industrialized lifestyle with the unstable ground under our feet. It
          is an attempt to erase boundaries with the natural world, and to see
          it not as victim nor antagonist, but as co-conspirator and friend.
          Using digital photographic processes, Ben embeds a polyphony of
          viewpoints into three dimensional forms reminiscent of the landscape
          from which they emerge, showing sites of resource management in
          relation to the people that depend on them.
        </p>
      </ArtistBio>
    </Artist>
  );
}
