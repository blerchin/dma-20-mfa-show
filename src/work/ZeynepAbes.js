import React from "react";

import Artist from "../Containers/Artist";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Spacer from "../Components/Spacer";
import VideoVimeo from "../Components/VideoVimeo";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";

export default function ({slug, name}) {
  return (
    <Artist noCover="true">
      <Seo
        title={name}
        description="Memory place navigates through three moments of memory when I visit my home."
        path={slug}
      />
      <ProjectHeader
        artistName={name}
        title="Memory Place"
        materials="Point cloud models: Istiklal street, My mother's dinner table, Turkish airlines flight"
        link="https://www.zeynepmadethis.com"
      />
      <ProjectColumns>
        <Column>
          <>
            <VideoVimeo
              url="https://player.vimeo.com/video/423320003?title=0&byline=0&portrait=0"
              padding="56.25%"
            />
            <Spacer isPartialWidth="true">
              <p>
              My home has felt like a different place every time I visit. I
              shared a hope like many others who leave their home countries, the
              hope to bring something of value back. Yet, this dream has become
              a harder reality, a reality that we fear will never happen. A
              naive imagination of emotion freed from the fetters of tradition;
              individual creativity; justice and tolerance; respect for
              difference. With such a loss of freedom of thought, home now
              represents the loss of a collective memory of a peculiar city. A
              site of intense melancholy that I’m afraid to dream a future in.
              </p>
            </Spacer>
          </>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <>
            <VideoVimeo
              url="https://player.vimeo.com/video/423312591?title=0&byline=0&portrait=0"
              padding="56.25%"
            />
            <Spacer isPartialWidth="true">
              <p>
              Some things have remained the same, a memory that repeats itself
              every time I’ve visited for the past decade. My mom's act of
              welcoming me home. I enter the house, all kinds of familiar scents
              surround me. The dinner table is overflowing with food. An ungodly
              amount of food, that doesn't even go well together. Some eggplant
              rice from my grandma, creamy pastries from my favorite bakery, red
              lentil koftes, crispy calamari from our local seafood place,
              plenty of veggie dishes drenched in olive oil, spinach borek and
              some tea along with rice pudding and baklava of all kinds. My mom
              hops around the dinner table, proudly displaying her work. She
              asks me what I've missed the most, as she tries to squeeze one
              last kofte on the plate that's overflowing with food. I feel
              unconcerned for a moment, and home feels the same.
              </p>
            </Spacer>
          </>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <>
            <VideoVimeo
              url="https://player.vimeo.com/video/423315409?title=0&byline=0&portrait=0"
              padding="56.25%"
            />
            <Spacer isPartialWidth="true">
              <p>
              But the saddest thing is when you feel stable, and suddenly you're
              out of your home again. And that feeling of loss comes rushing
              back, where the history is censored and our personal memories of
              Istanbul’s complex individuality fades.
              </p>
            </Spacer>
          </>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
            An exploration of three moments of memory particular to the fraying certainty of my home. The piece navigates through visualizations of private and public recollections, delving into the Istanbul I once called home, now existing increasingly more as an idea than a place.
            </p>
            <p>
              Credits:
              <br />
              Sounds Designer - Devin Embil
              <br />
              Point cloud model of Turkish airlines flight - Adam Cigler
              <br />
              Special thanks to Jennifer Steinkamp, Steve Anderson, Eddo Stern, Noa Kaplan, Emine S. Tonguc &amp; Ayse Torfilli. Your support is immensely appreciated.
            </p>
          </ProjectDescription>
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
          exploring shifting identities to navigate the struggle and alienation
          that arise from changing social environments.
        </p>
      </ArtistBio>
    </Artist>
  );
}
