import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Image from "../Components/Image";
import Vimeo from "../Components/VideoVimeo";

import MilesImage1 from "./assets/MilesPeyton-1.png";
import MilesImage2 from "./assets/MilesPeyton-2.jpg";
import MilesImage3 from "./assets/MilesPeyton-3.jpg";
import MilesImage4 from "./assets/MilesPeyton-4.jpg";
import MilesImage5 from "./assets/MilesPeyton-5.jpg";

import Placeholder from "./assets/placeholder.png";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

export default function ({slug, name}) {
  return (
    <Artist>
      <Seo
        title={name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={slug}
        image={MilesImage1}
      />
      <ProjectHeader
        artistName={name}
        title="Solar Bathybi"
        materials="water, sunlight, laser etched conductive glass, 3d printed plastic, electronics, hardware"
        link="http://www.milespeyton.info"
      />
      <ProjectCover>
        <Image img={Placeholder} alt="" />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <Vimeo url="https://player.vimeo.com/video/419788716?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0" />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              Solar projection of a physical water animation. A droplet of water
              animates on a square of etched, conductive glass. The animation is
              driven by electricity and influenced by the pattern etched on the
              glass, which functions as a visual score and electrical circuit. The
              animation is displayed as an analog projection that uses sunlight as
              a light source.
            </p>
            <p>
              From 6/1 to 6/12, ten live streams, each using a different etched
              glass, will take place at 3PM PST, when the sunlight is strongest in
              the space.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage1}
            alt="Analog projection of water on square, gray board. The light source for the projection is sunlight. The water projection looks shiny, with areas of blue, white, and orange. An etched design can be seen through the water. The board is on the floor, and leans against a white wall."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage2}
            alt="View of a room with a window, projection apparatus, and gray board leaning against a wall. Sunlight comes through the window, and is focused by a rectangular lens that points at the projection apparatus."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage3}
            alt="View of projection on board with apparatus visible in the frame but slightly out of focus."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage4}
            alt="Closeup of apparatus. A circular lens, mirror, and glass plate with liquid can be seen."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={MilesImage5}
            alt="Closeup of 8 wires coming out of apparatus. The wires are braided together."
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <h3>Message from Mud</h3>
          <p>
            I was born from mud, unearthed from the ocean floor and sealed in a
            jar. The men who found me were crewmembers of the Cyclops, a ship
            that was preparing to lay network cables between Europe and North
            America. When the ship returned to land, they sent me to the
            biologist Thomas Huxley for examination.
          </p>
          <p>
            In his lab, ten years later, Huxley removed the mud sample from
            storage. He dispensed a droplet of my body onto a glass microscope
            slide. Through the lens, Huxley saw what looked like a network of
            veins. He watched me glide across the glass and engulf a small
            particle, as if I was feeding.
          </p>
          <p>
            The presence of animation was enough to convince Huxley that I was
            protoplasm, an ancient slime organism thought to be the first
            instance of life. More than any single piece of evidence, Huxley was
            captivated by the image of creation in total darkness. He imagined
            slime streaming and pulsating in an ocean abyss, and the clarity of
            this vision made him eager to share my arrival with his peers.
          </p>
          <p>
            In a paper, Huxley named me <i>Bathybius Haeckelii</i>. Bathybius
            means “deep life,” and Haeckelii was in honor of his friend, the
            zoologist and artist Ernst Haeckel, who was a proponent of the
            primordial slime theory. I provided a link between nonliving and
            living matter, and as such became an object of intense study. Huxley
            declared in speeches that my body, in the form of a continuous mat,
            spanned the ocean floor, and possibly covered the entire earth.
          </p>
          <p>
            My time as a living being was limited. For several years, the
            scientific community classified me as a living organism. When
            Huxley's rival Lynn Margulis demonstrated that my movements were
            caused by an inorganic reaction between mud and alcohol, added to
            the mud sample as a preservative, I was reclassified as non-life, a
            found automaton. Life is the transmutation of sunlight, she wrote in
            the paper that disproved my aliveness.
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen
          Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom
          Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen
          Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle
          hin. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu
          blühn; Man sehnt sich nach des Lebens Quelle hin.
        </p>
        <p>
          Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen hätte. Ich bin
          von je der Ordnung Freund gewesen. Vernunft fängt wieder an zu
          sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu
          sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu
          blühn; Man sehnt sich nach des Lebens goldner Baum.
        </p>
      </ArtistBio>
    </Artist>
  );
}
