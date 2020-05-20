import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import Image from "../Components/Image";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";

import GrahamImage1 from "./assets/Graham Akins web template image 1.png";
import GrahamImage2 from "./assets/Graham Akins web template image 2.png";
import GrahamImage3 from "./assets/Graham Akins web template image 3.png";
import GrahamImage4 from "./assets/Graham Akins web template image 4.png";
import GrahamImage5 from "./assets/Graham Akins web template image 5.png";
import GrahamImage6 from "./assets/Graham Akins web template image 6.png";
import GrahamImage7 from "./assets/Graham Akins web template image 7.png";

import Placeholder from "./assets/placeholder.png";

export default function (config) {
  return (
    <Artist>
      <Seo
        title={config.config.name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={config.config.slug}
        image = {GrahamImage1}
      />
      <ProjectHeader
        artistName="Graham Akins"
        title="Approximate Other"
        link="https://www.instagram.com/grahamycakes_/"
      />
      <ProjectCover>
        <Image img={Placeholder} alt="" />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={GrahamImage1}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage2}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage3}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage4}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage5}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage6}
            alt="A grey field with the text 1200x1200"
          />
          <Image
            img={GrahamImage7}
            alt="A grey field with the text 1200x1200"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            Materials: video, photography, photogrammetry, wooden structures,
            zentai suit, &amp; dry cat food
          </p>
        </Column>
      </ProjectColumns>
    </Artist>
  );
}
