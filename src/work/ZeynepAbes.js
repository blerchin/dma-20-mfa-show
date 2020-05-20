import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Video from "../Components/Video";
import Image from "../Components/Image";
import Seo from "../Components/Seo";

import Placeholder from "./assets/placeholder.png";

export default function (config) {
  return (
    <Artist>
      <Seo
        title={config.config.name}
        description="Scelerisque venenatis nibh fames ad quam feugiat leo commodo vitae sed lacus."
        path={config.config.slug}
      />
      <ProjectHeader
        artistName="Zeynep Abes"
        title="Memory Place"
        materials="Video 1: Photogrammetry of Istiklal Street,<br>
                Video 2: Photogrammetry of my mother's dinner table,<br>
                Video 3: Photogrammetry of Turkish airlines flight (credit: Adam Cigler)"
        link="https://www.zeynepmadethis.com/"
      />
      <ProjectCover fadeOut>
        <Column>
          <Image img={Placeholder} alt="" />
        </Column>
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <p>
            Memory place navigates through three moments I keep coming back to
            whenever I visit my home. These emotional spaces attempt to explore
            the relationship between personal and public memories and how
            specific moments from our past remain as a constant reminder of what
            home can be. In a time where many of our interactions are mediated,
            Memory Place investigates the specific kind of alienation that
            arises from experiencing significant events at home in mediated
            ways.
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Video
            maxHeight="80vh"
            src="https://repetitionrepetition.com/launch2.mp4"
          />
        </Column>
        <Column>
          <Video
            maxHeight="80vh"
            src="https://repetitionrepetition.com/launch2.mp4"
          />
        </Column>
        <Column>
          <Video
            maxHeight="80vh"
            src="https://repetitionrepetition.com/launch2.mp4"
          />
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            My home has felt like a different place every time I visit. I shared
            a hope like many others who leave their home countries, the hope to
            bring something of value back. Yet, this dream has become a harder
            reality, a reality that we fear will never happen. A naive
            imagination of emotion freed from the fetters of tradition;
            individual creativity; freedom and tolerance; respect for
            difference. With such a loss of freedom of thought, home now
            represents the loss of a collective memory of a peculiar city. A
            site of intense melancholy that I’m afraid to dream a future in.
          </p>
        </Column>
        <Column>
          <p>
            Some things have remained the same, a memory that repeats itself
            every time I’ve visited for the past decade. My mom's act of
            welcoming me home. I enter the house, all kinds of familiar scents
            surround me. The dinner table is overflowing with food. An ungodly
            amount of food, that doesn't even go well together. Some eggplant
            rice from my grandma, creamy pastries from my favorite bakery, red
            lentil koftes, crispy calamari from our local seafood place, plenty
            of veggie dishes drenched in olive oil, spinach borek and some tea
            along with rice pudding and baklava of all kinds. My mom hops around
            the dinner table, proudly displaying her work. She asks me what I've
            missed the most, as she tries to squeeze one last kofte on the plate
            that's overflowing with food. I feel unconcerned for a moment, and
            home feels the same.
          </p>
        </Column>
        <Column>
          <p>
            But the most painful thing is when you feel stable, and suddenly
            you're out of your home again. And that feeling of loss comes
            rushing back, where our history is censored and our personal
            memories of Istanbul’s complex individuality fades.
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Zeynep is an artist and curator from Istanbul, Turkey. She studied
          film and interactive media at Emerson College, later getting her start
          at LACMA’s Art+Tech lab creating AR installations. She then worked at
          the Sundance Film Festival's New Frontier Exhibitions and is currently
          an MFA candidate at UCLA’s Design Media Arts program. She primarily
          works with archived photography, video, and immersive media. Her
          subjects revolve around identity, history, and loss of memory. She is
          deeply influenced by Istanbul’s city culture and in pursuit of
          exploring the shifting identity of Turkey to navigate the struggle and
          alienation that arise from changing social environments.
        </p>
      </ArtistBio>
    </Artist>
  );
}
