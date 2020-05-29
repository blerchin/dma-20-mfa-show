import React from "react";

import Artist from "../Containers/Artist";
import ProjectCover from "../Components/ProjectCover";
import ProjectHeader from "../Components/ProjectHeader";
import ArtistBio from "../Components/ArtistBio";
import ProjectColumns, { Column } from "../Components/ProjectColumns";
import Vimeo from "../Components/VideoVimeo";
import Image from "../Components/Image";
import ImageCaption from "src/Components/ImageCaption";

import DBGrid from "./assets/HiradSab-grid.jpg";
import DBCover from "./assets/HiradSab-cover.jpg";
import DBGridVert from "./assets/HiradSab-gridvert.jpg";
import DBLandmarks from "./assets/HiradSab-landmarks.png";

import Seo from "../Components/Seo";
import ProjectDescription from "../Components/ProjectDescription";
export default function ({ slug, name }) {
  return (
    <Artist>
      <Seo
        title={name}
        description="“Body Troubles” or how there were too many bodies and not enough people."
        path={slug}
        contentType="video.other"
        twitter = "@hiradsab"
        image={DBGrid}
      />
      <ProjectHeader
        artistName={name}
        title="Body Troubles"
        materials="15 Minute Video"
        link="http://hiradsab.com"
      />
      <ProjectCover>
        <Image
          img={DBCover}
          alt="A grid of uncanny off-kilter faces generated with 3D software. Each face is centered in a tile with varying facial features and skin tones. All of the faces are bald with sharp lighting."
        />
      </ProjectCover>
      <ProjectColumns>
        <Column>
          <ProjectDescription>
            <p>
              <i>Body Troubles</i> is an ongoing research on the proliferation
              and mediation of the digital body in the contemporary politics of
              images. Rhetorical, discursive, and disjointed, it is an attempt
              at locating the virtual body in the processes of production,
              circulation, and consumption of images concerning continuing
              computational advancements.
            </p>
          </ProjectDescription>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Vimeo
            alt="Figure 1."
            url="https://player.vimeo.com/video/397740847"
          />
          <ImageCaption title="Figure 1." materials="17 minute video" />
          <p>
            Conceived in part using the state-of-the-art techniques in realtime
            computer graphics and machine learning, <i>Figure 1.</i>{" "}
            contemplates the affective and ethical implications of technological
            overreliance in the production of visual cultural artifacts. In this
            light, it probes the ensuing relational and sentimental shifts in
            the viewership of corporeality. Furthermore, it humors the public
            fascination with interpolative, inferential, and statistical means
            of generating bodily depictions.
          </p>
          <p>
            <i>Figure 1.</i> was originally perceived as a 4-channel audiovisual
            installation. The preceding video is intended for supplementary
            online and screen-based viewing.
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
        <Column>
          <Image
            img={DBGridVert}
            alt="A grid of uncanny off-kilter faces generated with 3D software. Each face is centered in a tile with varying facial features and skin tones. All of the faces are bald with sharp lighting."
          />
          <ImageCaption
            title="Never Seen in the Wild"
            materials="High-quality image dataset of 100,000 computer generated faces"
          />
          <p>
          "In-the-wild" is a phrase commonly used in the field of machine learning, referring to the public availability of the data used. While "in-the-wild challenges" aim at surpassing the existing benchmarks in classification and prediction tasks using public data, "in-the-wild datasets" consist of publicly available information for the purposes of training, testing and experimenting with predictive models. Frequently sourced through social media scraping, web harvesting, and web crawling, in-the-wild datasets have been a breeding ground for questionable practices of ethics in data protection and privacy. These datasets regularly carry over and perpetuate the biases inherent to their harvesting grounds when used in production.
          </p>
          <p>
          <i>Never Seen in the Wild</i> is the outcome of a generative system devised to perpetually output humanoid faces. Using a fully parameterized 3D model, paired with modular shaders, the system is capable of producing infinite facial variations. It is intended to operate as an ever-expanding dataset of synthetic faces to examine how biases carry over across different computational disciplines, and to spark a conversation revolving around the inclusion of the <i>other</i> and representational diversity in predictive models. 
          </p>
          <Image
            img={DBLandmarks}
            alt="Landmarks of different facial features, indicating the nose bridge, eyebrows, eyelids, irises, lips, and jaws. Points are scattered along the lines, both of which are colored in bright orange."
          />
          <p>
          At its current state, <i>Never Seen in the Wild</i> is comprised of 100,000 high-quality images with considerable variations in age, image background, and facial features. It consists of 25,000 unique humanoids with four variations in facial features, lighting, and background per individual. Every image is accompanied by 264 facial landmark and occlusion annotations, camera metadata, and an 800-dimensional vector of 3D model and shader parameters.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "18px" }}>
            <b>Further reading:</b>
            <ul>
              <li>
                <a
                  href="https://www.e-flux.com/journal/75/67133/abnormal-encephalization-in-the-age-of-machine-learning/"
                  target="blank"
                >
                  Abnormal Encephalization in the Age of Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="https://thenewinquiry.com/invisible-images-your-pictures-are-looking-at-you/"
                  target="blank"
                >
                  {" "}
                  Invisible Images (Your Pictures Are Looking at You)
                </a>
              </li>
              <li>
                <a
                  href="https://www.e-flux.com/journal/85/155472/reprogramming-decisionism/"
                  target="blank"
                >
                  Reprogramming Decisionism
                </a>
              </li>
              <li>
                <a
                  href="https://thenewinquiry.com/reimagining-networks/"
                  target="blank"
                >
                  Reimagining Networks
                </a>
              </li>
              <li>
                <a href="https://www.excavating.ai/" target="blank">
                  {" "}
                  Excavating AI
                </a>
              </li>
            </ul>
          </p>
        </Column>
      </ProjectColumns>
      <ProjectColumns>
     
        <Column>
          <Vimeo
            alt="Humans of Noyork"
            url="https://www.youtube.com/embed/nZFJRKwnmik"
          />
          <ImageCaption title="Humans of Noyork" materials="9 hour looping video" />
          <p>
          ASMR, cult of personality, makeup tutorials, video logs, voyeurism, entertainment, education, lurking, disgust, gratification, identity, culture wars, YouTube! <i>Humans of Noyork</i> is 9 hours of pure content, 20,000 unique personalities, no eyes to stare you back, and no stories to tell. More videos?
          </p>
        </Column>
      </ProjectColumns>
      <ArtistBio>
        <p>
          Hirad Sab is an Iranian/American artist whose work explores the
          margins of digital aesthetics, internet culture, and technology. His
          amalgams occupy a precarious intersection of culture and the
          democratic nature of image circulation; an aesthetic trend that
          expands and mutates rapidly. Sab heavily features depictions of the
          human form, gesture, and activity in distinctly digital environments.
          The result is an emblematic oeuvre that resists easy classification.
        </p>
        <br></br>
        <p>
          Born in Tehran, Iran, Sab relocated to the U.S. in 2010. He received
          his BS in Computer Science from the University of Utah and is
          currently pursuing his MFA at UCLA. His work has been exhibited at The
          Wrong Biennale, Garage Museum of Contemporary Art, CHAO Art Center,
          and The LOW Museum of Contemporary Culture; with visual performances
          at MoMA PS1 and ICA London.
        </p>
      </ArtistBio>
    </Artist>
  );
}
