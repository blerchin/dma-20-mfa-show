import React from "react";

import Artist from "src/Containers/Artist";
import ProjectCover from "src/Components/ProjectCover";
import ProjectHeader from "src/Components/ProjectHeader";
import ArtistBio from "src/Components/ArtistBio";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import ProjectLink from "src/Components/ProjectLink";
import IFrame from "src/Components/IFrame";
import Image from "src/Components/Image";

import CoverImage from "./BenLerchin-yimby-cover.jpg";
import WindmillSculpture from "./windmill-ring.png";

import Seo from "src/Components/Seo";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={slug}
        image={CoverImage}
      />
      <ProjectHeader
        artistName={name}
        title="Yes, in my Backyard"
        materials="10 minute video"
        link="http://benlerchin.com"
      />
      <ProjectCover>
        <Image
          img={CoverImage}
          alt='Still from video. A gray industrial concrete and metal box is in the foreground, with the text
                    "MILE 103" obliquely visible. Low brush growth is seen in the near background, behind which a number
                    of wind turbines are visible.'
        />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <IFrame url="https://www.youtube.com/embed/SnpESgOHKKU" width="1698" height="955" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            <i>Yes, in my Backyard</i> presents this instructional video about the many exciting opportunities for resource
            exploration at our inaugural campus in the Antelope Valley. On this page you can peruse our growing catalog of
            Los Angeles' Uncomfortable Protuberances, and see examples of the interpretive exhibits we are constructing to
            give you the best possible resource experience. We hope you can visit us soon!
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            <ProjectLink href="https://yimby.space" text="Sign up for updates" />
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <IFrame url="https://www.google.com/maps/d/embed?mid=1BzGrvqOlQaw8eO2w5P0fSAF4QF1W2rmV" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image img={WindmillSculpture} />
          <h3>The Chapel of Perpetual Rotation</h3>
          <p>Acrylic, Steel, Thermoplastic, Epson Ultrachrome HD on Crystal Clear Film</p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Ben Lerchin is an artist and technologist who works with software,
          photography, and digital fabrication. Their practice deals extensively
          with the relationship between the photographic image and the American
          West. Reflecting on the uneasy experience of living between the city
          and the wilderness, Ben's work attempts to reconcile a networked,
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
