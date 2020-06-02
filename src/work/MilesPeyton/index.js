import React from "react";

import Artist from "src/Containers/Artist";
import ProjectCover from "src/Components/ProjectCover";
import ProjectHeader from "src/Components/ProjectHeader";
import ArtistBio from "src/Components/ArtistBio";
import ProjectDescription from "src/Components/ProjectDescription";
import ProjectColumns, { Column } from "src/Components/ProjectColumns";
import Image from "src/Components/Image";
import Vimeo from "src/Components/VideoVimeo";
import Spacer from "src/Components/Spacer";
import Seo from "src/Components/Seo";

import MilesImage1 from "../assets/MilesPeyton-1.jpg";

import img1 from "./1.jpg";	
import img2 from "./2.jpg";	
import img3 from "./3.jpg";	
import img4 from "./4.jpg";	
import img5 from "./5.jpg";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="I was born from mud, unearthed from the ocean floor and sealed in a jar."
        path={slug}
        image={MilesImage1}
      />
      <ProjectHeader
        artistName={name}
        title="Sunlit waterneither"
        materials="solar projection of liquid lens"
        link="http://www.milespeyton.info"
      />
      <ProjectCover>
          <Image
            img={img1}
            alt="Projection of liquid on grey board. A radial pattern, slightly degraded on the edges, is visible, as well as the liquid which has areas of blue and orange."
          />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Vimeo
            url="https://player.vimeo.com/video/419788716"
            padding="56.25%"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              <i>water, sunlight, silicone oil, laser etched conductive glass, lenses, 3d printed plastic, electronics, hardware</i>
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={img2}
            alt="View of projection from further back, showing the room and the projection apparatus. The projection surface is in focus and the apparatus is out of focus. The room has white walls and a carpeted floor. "
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={img3}
            alt="Apparatus on the ground in front of a window. Lenses are held by a vertical steel rod, and a rectangular lens sits on a semi-transparent box that is lit by sunlight. The various lenses cast patterns on the wall, some of which are white and others are more like rainbows."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={img4}
            alt="Closeup of a liquid on a glass plate, which is lit from below. Cables extend from the plate, and are held together by a braid."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>From 6/1 to 6/12, ten live streams will take place at 3PM PST / 6PM EST, when the sunlight is strongest in the space, weather permitting. Each livestream will use a different sigil, following the schedule below. <a href="https://waterneither.live" target="_blank" rel="noopener noreferrer">Attend a livestream.</a></p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={img5}
            alt="Ten radial patterns, each with a date listed above it, weekdays from June first to June twelvth"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass1.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass1.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass2.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass2.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
        </Column>
        <Column>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass3.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass3.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass4.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass4.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
        </Column>
        <Column>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass5.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass5.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass6.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass6.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
        </Column>
        <Column>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass7.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass7.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass8.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass8.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
        </Column>
        <Column>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass9.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass9.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
          <Spacer>
            <Image
              img="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass10.jpg"
              a="https://users.dma.ucla.edu/~mpeyton/thesis_assets/glass10.jpg"
              alt="Radial pattern with eight curving lines etched on glass"
            />
          </Spacer>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
            I was born from mud, unearthed from the ocean floor and sealed in a jar. The workers who extracted me were aboard the Cyclops, a ship that was laying network cables between Europe and North America. When the ship returned to land, the jar containing my body was sent to a biologist for examination.
            </p>
            <p>
            After ten years of neglect, the biologist removed the mud sample from storage and dispensed a droplet onto a glass slide. Through the lens of the microscope, he observed a network of veins. He watched as a section of my body protruded across the glass, and engulfed a small particle.
            </p>
            <p>
            The presence of animation was enough to convince him that I was an ancient slime organism called protoplasm, thought to be the first instance, and fundamental unit of life. The biologist recalled that I was dredged up from the ocean floor. He imagined slime streaming and pulsating in a deep abyss, and was taken by this image of creation in total darkness. He named me <i>Bathybius</i>, which means “deep life," and declared in speeches that my body, in the form of a continuous mat, spanned the ocean floor, and likely covered the entire earth.
            </p>
            <p>
            For several years, I was classified as a living organism. My arrival gave weight to a certain narrative of how life first emerged from nonliving matter, and the imagery associated with primordial ocean slime had its own appeal. Then, to the biologist's humiliation, a paper was published that demonstrated that my movements were not caused by any living process, but instead by a reaction between mud and alcohol, which was added to the sample as a preservative. My lifelike, animate qualities were shown to be the unintended byproduct of human intervention. Aside from questions of animacy, the author had reasons to doubt the primordial story attached to my name. The first life on earth, she wrote, was the transmutation of sunlight, accessible on the ocean's surface but absent in its depths. I was reclassified as nonlife, a found automaton. 
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
