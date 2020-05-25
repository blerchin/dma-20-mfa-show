import React, { useRef, useEffect } from "react";

import Artist from "src/Containers/Artist";
import ProjectCover from "src/Components/ProjectCover";
import ProjectHeader from "src/Components/ProjectHeader";
import ArtistBio from "src/Components/ArtistBio";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import ProjectLink from "src/Components/ProjectLink";
import IFrame from "src/Components/IFrame";
import Image from "src/Components/Image";
import ImageCaption from "src/Components/ImageCaption";

import WaterWork from "./water-work.jpg";
import WindmillSculpture from "./enclosure.png";
import EnclosureLoopMp4 from "./enclosure-loop.mp4";
import EnclosureLoopOgg from "./enclosure-loop.ogg";

import Seo from "src/Components/Seo";
import ProjectDescription from "../../Components/ProjectDescription";

export default function ({slug, name}) {
  const videoEl = useRef(null);
  useEffect(() => {
    if (videoEl.current) {
      videoEl.current.play();
    }
  }, [])
  return (
    <Artist>
      <Seo
        title={name}
        description="Ben Lerchin is an artist and technologist who works with software,
          photography, and digital fabrication."
        path={slug}
        image={WindmillSculpture}
      />
      <ProjectHeader
        artistName={name}
        title="Yes, in my Backyard"
        materials="Attraction"
        link="http://benlerchin.com"
      />
      <ProjectCover>
        <Image
          img={WindmillSculpture}
          alt="Digital Rendering. In the foreground a reflective sheet is stretched in a circle around 12 supporting posts.
          The structure sits in a desert landscape with low shrubs and joshua trees. In the background wind turbines, 
          transmission lines and snowcapped mountains can be seen."
        />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <IFrame url="https://www.youtube.com/embed/SnpESgOHKKU" width="1698" height="955" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              <i>Yes, in my Backyard</i> is pleased to present this informational video about the many exciting opportunities 
              for resource exploration at our inaugural campus in the Antelope Valley. On this page you can peruse our growing catalog of
              Los Angeles' Uncomfortable Protuberances, and see prototypes of the interpretive exhibits we are constructing to
              give you the best possible resource experience. We hope you can visit us soon!
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectLink href="https://yimby.space" text="Sign up for updates" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image img={WaterWork} />
          <ImageCaption
            title="Water Work"
            materials="Cinder blocks, monofilament, acrylic, polycarbonate, pillow blocks, DC motor, Epson Ultrachrome HD on Crystal Clear Film"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <video muted autoPlay loop style={{ width: '100%', height: 'auto'}} ref={videoEl}>
            <source src={EnclosureLoopMp4} type="video/mp4" />
            <source src={EnclosureLoopOgg} type="video/mp4" />
          </video>
          <ImageCaption
            title="The Chapel of Perpetual Enclosure"
            materials="Composite Rendering"
            />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <IFrame url="https://www.google.com/maps/d/embed?mid=1BzGrvqOlQaw8eO2w5P0fSAF4QF1W2rmV" />
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
