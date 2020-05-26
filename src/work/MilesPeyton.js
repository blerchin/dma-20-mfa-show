import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectDescription from "../Components/ProjectDescription";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Image from "../Components/Image";
import Vimeo from "../Components/VideoVimeo";
import Seo from "../Components/Seo";

import MilesImage1 from "./assets/MilesPeyton-1.jpg";
import MilesImage2 from "./assets/MilesPeyton-2.jpg";
import MilesImage3 from "./assets/MilesPeyton-3.jpg";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="solar projection of liquid lens"
        path={slug}
        image={MilesImage1}
      />
      <ProjectHeader
        artistName={name}
        title="Sunlit waterneither"
        materials="water, sunlight, silicone oil, laser etched conductive glass, lenses, 3d printed plastic, electronics, hardware"
        link="http://www.milespeyton.info"
      />
      <ProjectCover>
          <Vimeo
            url="https://player.vimeo.com/video/419788716"
            padding="0"
            isFullHeight="true"
          />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              solar projection of liquid lens
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage1}
            alt="Projection of liquid on grey board. A radial pattern, slightly degraded on the edges, is visible, as well as the liquid which has areas of blue and orange."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage2}
            alt="Image of apparatus on the ground in front of a window. Lenses are held by a vertical steel rod, and a rectangular lens sits on a semi-transparent box that is lit by sunlight. The various lenses cast patterns on the wall, some of which are white and others are more like rainbows."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage3}
            alt="Closeup of a liquid on a glass plate, which is lit from below. Cables extend from the plate, and are held together by a braid."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              I was born from mud, unearthed from the ocean floor and sealed in a jar. The workers who found me were crewmembers of the Cyclops, a ship that was laying network cables between Europe and North America. When the ship returned to land, the jar containing my body was sent to a biologist for examination.
            </p>
            <p>
              After ten years of neglect, the biologist removed the jar from storage and dispensed a droplet onto a glass microscope slide. Through the lens, he observed a network of veins. He watched me glide across the glass and engulf a small particle.
            </p>
            <p>
              The presence of animation was enough to convince him that I was an ancient slime called protoplasm, thought to be the basis of life. He recalled my origin on the ocean floor, and imagined slime streaming and pulsating in a deep, ocean abyss. He was drawn to this image of creation, the antithesis of "let there be light."
            </p>
            <p>
              The biologist named me Bathybius, which means “deep life." He declared in speeches that my body, in the form of a continuous mat, spanned the ocean floor, and likely covered the entire earth.
            </p>
            <p>
              For several years, the scientific community classified me as a living organism. I provided a material link between nonliving and living matter, and became an object of intense study. Then, to the biologist's humiliation, his rival demonstrated that my movements were the byproduct of an inorganic reaction between mud and alcohol, which was added to the sample as a preservative. In a paper, she noted the impossibility of my aliveness: Life is the transmutation of sunlight, accessible on the ocean's surface but absent in its depths. I was reclassified as non-life, a found automaton. 
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Miles Peyton is an artist based in Los Angeles.
        </p>
      </ArtistBio>
    </Artist>
  );
}
