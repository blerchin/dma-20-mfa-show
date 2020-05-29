import React from "react";

import Artist from "src/Containers/Artist";
import ProjectCover from "src/Components/ProjectCover";
import ProjectHeader from "src/Components/ProjectHeader";
import ArtistBio from "src/Components/ArtistBio";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import ProjectLink from "src/Components/ProjectLink";
import IFrame from "src/Components/IFrame";
import ImageCaption from "src/Components/ImageCaption";
import Video from "src/Components/Video";
import VideoVimeo from "src/Components/VideoVimeo";

import MapPoster from "./map-poster.png";
import WaterWork from "./water-work.jpg";
import WaterWorkMp4 from "./water-work.mp4";
import WaterWorkOgg from "./water-work.ogv";
import Enclosure from "./enclosure.jpg";
import EnclosureLoopMp4 from "./enclosure-loop.mp4";
import EnclosureLoopOgg from "./enclosure-loop.ogv";

import Seo from "src/Components/Seo";
import ProjectDescription from "../../Components/ProjectDescription";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Ben Lerchin is an artist and technologist who works with software,
          photography, and digital fabrication."
        path={slug}
        image={Enclosure}
      />
      <ProjectHeader
        artistName={name}
        title="Yes, in my Backyard"
        materials="Attraction"
        link="http://benlerchin.com"
      />
      <ProjectCover>
        <Video
          controls={false}
          muted
          autoPlay
          loop
          poster={Enclosure}
          style={{ width: '100%', height: 'auto'}}
          src={EnclosureLoopMp4}
          srcOgg={EnclosureLoopOgg}
          />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              <i>Yes, in my Backyard</i> is pleased to present this informational series about the many exciting opportunities 
              for resource exploration accessible from our campus in the Antelope Valley. On this page you can peruse our growing 
              catalog of Los Angeles' Uncomfortable Protuberances, and see prototypes of the interpretive exhibits we are 
              constructing to give you the best possible resource experience. We hope you can visit us soon!
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <VideoVimeo alt="YIMBY" url="https://player.vimeo.com/video/423633075?title=0&portrait=0&byline=0" />
          <ImageCaption
            title="YIMBY Intro"
            materials="2 minute video"
          />
        </Column> 
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectLink href="https://yimby.space" text="Sign up for updates" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <IFrame
            url="https://www.google.com/maps/d/embed?mid=1BzGrvqOlQaw8eO2w5P0fSAF4QF1W2rmV" 
            poster={MapPoster}
            title="Click to explore"
          />
          <ImageCaption
            title="Los Angeles' Uncomfortable Protuberances"
            materials="Interactive map of wind, solar, and water infrastructure in the Antelope and Owens Valleys"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <VideoVimeo alt="Air" url="https://player.vimeo.com/video/423637561?title=0&portrait=0&byline=0" />
          <ImageCaption
            title="Air Intro"
            materials="4 minute video"
          />
        </Column> 
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Video
            controls={false}
            autoPlay
            muted
            loop
            poster={WaterWork}
            style={{ width: '100%', height: 'auto'}}
            src={WaterWorkMp4}
            srcOgg={WaterWorkOgg}
            />
          <ImageCaption
            title="Water Work"
            materials="Cinder blocks, monofilament, acrylic, polycarbonate, pillow blocks, DC motor, Epson Ultrachrome HD on Crystal Clear Film"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <VideoVimeo alt="Water" url="https://player.vimeo.com/video/423640476?title=0&portrait=0&byline=0" />
          <ImageCaption
            title="Water Intro"
            materials="7 minute video"
          />
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
        </p>
      </ArtistBio>
    </Artist>
  );
}
