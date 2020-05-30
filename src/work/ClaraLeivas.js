import React from "react";
import Artist from "../Containers/Artist";
import ProjectHeader from "../Components/ProjectHeader";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

import OGImage from "./assets/Clara-ogimage.png";


export default function ({slug, name}) {
  return (
    <Artist noCover="true" scrollIndicator={false}>
      <Seo
        title={name}
        description="The moment just before a fight. Something I have experienced many times as a Muay Thai fighter."
        path={slug}
        image={OGImage}
      />
      <ProjectHeader
        artistName={name}
        title="I am defeat"
        materials="60 minute video"
        link="http://leivas.se"
        fluidLayout
      />
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              This piece started as a way for me to share my emotional experience of leaving the changing room and walking up to the Muay Thai ring. The moment just before a fight. Something I have experienced many times as a Muay Thai fighter. Though nothing can replace that specific moment there are other situations that evoke the same mental elements. It is the space between the last preparation and the battle. The moment when you let go of all training and trust that your body knows what to do. The moment when your entire inner force is desperately waiting to explode. The moment when a complete serenity fills your mind and gives space to hyperfocus. The only thing that exists in that moment is your complete reliance on yourself.
            </p>
            <p>
              Working on this piece became a way for me to practice being in that space. In reality the long path to that desirable mental state is far from straight. Challenges switch between feeling exciting and frustrating. Mental images are your allies one day and turn into enemies the next. No matter how well you plan your path to victory the waves of the world would not hesitate to sweep it away. The line between the meanings of the word ‘defeat’ is thin. But there is a difference between accepting a setback or loss and feeling defeated. Loss has to do with the physical. Defeat has to do with existence. I refuse to ever feel defeated again. I choose to be on the other side of that thin line. The title of this piece is a reminder of the role we play in forming our own existence.
            </p>
            <p>
              The piece was meant to be live generated projections with 6 channel audio. But the waves of the world turned it into a video piece on the web. For now. The video is a one hour capture of generated audio and visuals. It has no beginning or end. For the best experience in this format, please use headphones rated for frequencies down to 20 hz and watch in full screen.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Vimeo
            url="https://player.vimeo.com/video/422764520?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
            padding="56.25%"
          />
        </Column>
      </ProjectColumns>
    </Artist>
  );
}
