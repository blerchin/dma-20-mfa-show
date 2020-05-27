import React, { useEffect, useRef, useState } from "react";
import "./css/style.css";

import {
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  audioHeading,
  dtPCover,
  dtText,
  dtButWrapper,
  dtCurtImg,
  dtCurtainCol,
  dtContribCol,
  dtContribWrapper,
  dtInfoCol,
} from "./style.module.css";

import ProjectLinkStyle from "../../Components/ProjectLink/style.module.css";

import Artist from "../../Containers/Artist";
import ProjectCover from "../../Components/ProjectCover";
import ProjectHeader from "../../Components/ProjectHeader";
import ArtistBio from "../../Components/ArtistBio";
import ProjectColumns, { Column } from "../../Components/ProjectColumns";
// import ProjectLink from "../../Components/ProjectLink";
import ProjectDescription from "../../Components/ProjectDescription";
import Image from "../../Components/Image";

import DalenaImage1 from "./assets/DalenaTran-1.png";
import DalenaImage2 from "./assets/DalenaTran-2.png";
import PosterImage from "./img/aitPoster.png";

import audioJson from "./data/data";
import voiceoversJson from "./data/voiceovers";
import Engines from "./js/engines-utils";

import { Link } from "react-router-dom";

export default function () {
  const engines = new Engines();
  const aitContainer = useRef(null);

  const rootNodes = [document.body, document.documentElement];

  function beginProject() {
    engines.audioEngine.beginAudio();
    engines.prepareVoiceover();
    aitContainer.current.className = "";
    var video = document.getElementById("AITVidElem");
    video.muted = true;
    video.play();
    
    rootNodes.forEach((n) => {
      n.style.overflow = "hidden";
      n.style.height = "100%";
    });
  }

  function stopProject() {
    // engines = null;
    engines.stopEngine();
    aitContainer.current.className = "AITHide";
    window.setTimeout(() => {
      var video = document.getElementById("AITVidElem");
      video.pause();
      rootNodes.forEach((n) => {
        n.style.overflow = "auto";
        n.style.height = "auto";
      });
    }, 800);
  }

  useEffect(() => {
    engines.setup(audioJson, voiceoversJson);
    engines.setHTMLElement(document.getElementById("AITSub"));
    document.getElementById("AITLocA").className = "hidden";
    document.getElementById("AITLocB").className = "hidden";
    // $("#AITVidElem").prop('muted', true);
    var video = document.getElementById("AITVidElem");
    video.muted = true;
    return () => stopProject();
  }, []);

  return (
    <Artist>
      <ProjectHeader
        artistName="Dalena Tran"
        title="Acts in Translation"
        materials="Web Installation, Infinite Duration"
        link="https://dalena.me"
      />
      <ProjectCover className={dtPCover}>
        <Column>
          <Image
            img={DalenaImage1}
            alt="A scantily drawn diagram of arrows that form two circles with the smaller circle nested inside the larger. A linear flow of arrows moves from one side of the circumference downwards towards a focal point and then travels upwards towards the opposite side of the circumference to create a conical structure."
          />
        </Column>
      </ProjectCover>
      <Column className={dtText}>
        <p className={p0}>Two windows having a moment together.</p>
        <p className={p1}>
          A range of stories emerge every hour on the hour in global synchronicity (GST). Each one marks the passing of time but does not keep it.
        </p>
        <p className={p2}>
          Ambient recordings from different cities at separate times are
          procedurally sequenced in relationship to each other.
        </p>
        <p className={p3}>
          {" "}
          Your moment &amp; my moment
          <br />
          are never quite the same.
        </p>
        <p className={p4}>🅢🅞🅤🅝🅓 🅞🅝</p>
        <div className={dtButWrapper}>
          <div className={ProjectLinkStyle.container}>
            <Link to="#" onClick={beginProject}>
              VIEW ACTS IN TRANSLATION
            </Link>
          </div>
        </div>
      </Column>
      <Column className={dtCurtainCol}>
        <Image
          className={dtCurtImg}
          useLazy={false}
          img={DalenaImage2}
          alt="A close-up of the lower portion of a 3D rendered blue curtain with pink and orange flowers surrounded by faded green leaves."
        />
      </Column>
      <ProjectColumns className={dtInfoCol}>
        <Column>
          <ProjectDescription>
            <p>
              In the beginning, there was the window. Now there are plenty of
              other things than windows. There is heat, ice, sweat, and Mickey Mouse. Not to forget blood: The dark and runny that pumps through veins carrying a tempo that make possible the highest highs and lowest lows.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <Column>
        <h3 id="audio-contribution" className={audioHeading}>
          Audio Contributions
        </h3>
      </Column>
      <ProjectColumns className={dtContribWrapper}>
        <Column>
          <ul aria-labelledby="audio-contribution" className={dtContribCol}>
            <li>Adam Kaye</li>
            <li>Ali Eslami</li>
            <li>André Alves</li>
            <li>Arina Mahmoudian</li>
            <li>Austen Erblat</li>
            <li>Avisha Sab</li>
            <li>Bartek Biernacki</li>
            <li>Berit Gilma</li>
            <li>Clarissa Ribeiro</li>
            <li>Clement Fortin</li>
            <li>Dasul Kim</li>
            <li>Doan Minh Dang</li>
            <li>Donna Ghassemi</li>
            <li>Elton Kuns</li>
            <li>Faraz Dirin</li>
            <li>Hu Rui</li>
          </ul>
        </Column>
        <Column>
          <ul aria-labelledby="audio-contribution" className={dtContribCol}>
            <li>Ilya Bespalov</li>
            <li>Jasmin Xanthos</li>
            <li>Jennifer Steinkamp</li>
            <li>Jimmy Zhi</li>
            <li>Jodi Cheung</li>
            <li>John Goolvart</li>
            <li>Karina Lopez</li>
            <li>Kevin Dichosa</li>
            <li>Lauren Goshinski</li>
            <li>Lauren Lee McCarthy</li>
            <li>Lloyd Galbraith</li>
            <li>Manuel Oliveira</li>
            <li>Mara Lemesany</li>
            <li>Matteo Zamagni</li>
            <li>Matthew Dervenkov</li>
            <li>Matthew Dotson</li>
          </ul>
        </Column>
        <Column>
          <ul aria-labelledby="audio-contribution" className={dtContribCol}>
            <li>Megan Anderson</li>
            <li>Michael Baker</li>
            <li>Miles Peyton</li>
            <li>Mina Tahmouresie</li>
            <li>Mitchell Sang Wang</li>
            <li>Mohamed Allam</li>
            <li>Morehshin Allahyari</li>
            <li>Nathan Seymour</li>
            <li>Omar Castanon</li>
            <li>Pancho Blood</li>
            <li>Pieter Jossa</li>
            <li>Robert Thomas Heppell</li>
            <li>Samah Safiullah</li>
            <li>Sasha Gransjean</li>
            <li>Sebastian Kurtz</li>
            <li>Shriya Ravishankar</li>
          </ul>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <p>
            A special thanks to جیگر من Hirad Sab for his love &amp; technical
            contributions to the project
          </p>
          <br />
          <p>
            &amp; Chandler McWilliams, Danny Snelson, Lauren McCarthy, Casey
            Reas, Erkki Huhtamo, Cayetano Ferrer, Jennifer Steinkamp &amp; Noa
            Kaplan for their support and mentorship
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Dalena Tran is a media artist & writer living in Los Angeles, CA. Her
          stories and situations respond to notions of voyeurism, hegemony,
          memory, and the phenomenon of media. She engages across mediums and
          disciplines as they relate to the rhythms of everyday life, often
          concerned with moments hidden in plain sight.
        </p>
      </ArtistBio>
      <div id="AITContainer" className="AITHide" ref={aitContainer}>
        <div id="AITEnd" onClick={stopProject}>
          <span>⇜ Return to Project Info</span>
        </div>
        <div id="AITWrapper">
          <div id="AITGridBox">
            <div id="AITVidBox">
              <div id="AITVidWrapper">
                <video
                  id="AITVidElem"
                  autoPlay
                  loop
                  muted={false}
                  poster={
                    PosterImage.images[PosterImage.images.length - 1].path
                  }
                >
                  {/* <source
                    type='video/ogg;codecs="theora,vorbis'
                    src="https://dalena.github.io/acts-in-translation/vid/ait-4web.ogv"
                  /> */}
                  <source
                    type="video/mp4"
                    src="https://github.com/dalena/acts-in-translation-data/releases/download/vid/aith264.mp4"
                  />
                  {/* <source
                    type='video/webm;codecs="vp9,vorbis'
                    src="https://github.com/dalena/acts-in-translation-data/releases/download/vid/aitvp9recomm.webm"
                  />
                  <source
                    type='video/webm;codecs="vp9,vorbis'
                    src="https://github.com/dalena/acts-in-translation-data/releases/download/vid/aitvp9.webm"
                  /> */}
                  <source
                    type='video/webm;codecs="vp8,vorbis'
                    src="https://github.com/dalena/acts-in-translation-data/releases/download/vid/aitvp8.webm"
                  />
                </video>
                <div id="AITTitleBox">
                  <p id="AITSub"></p>
                </div>
              </div>
            </div>
            <div id="AITCityLabA">
              <h3 id="AITLocA"> </h3>
              <br />
            </div>
            <div id="AITCityLabB">
              <h3 id="AITLocB"> </h3>
              <br />
            </div>
            <div id="AITCountDown">
              <p id="AITCountTxt">
                00:<span id="AITCountMins">00</span>:
                <span id="AITCountSecs">00</span>
              </p>
            </div>
          </div>
        </div>
        <div id="AITSvgBox"></div>
      </div>
    </Artist>
  );
}
