import React from "react";
import Seo from "../../Components/Seo";
import ProjectColumns, { Column } from "../../Components/ProjectColumns";

import {
  container,
  intoTitle
} from './style.module.scss'

export default function Info() {  
  return (
    <div className={container}>
      <Seo/>
      <ProjectColumns>
        <Column><h2 className={intoTitle} >Ana's statement</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices tellus sed nulla sagittis, vitae malesuada metus mattis. Aliquam tempor, mi at aliquet bibendum, urna dolor vehicula magna, et feugiat felis dolor dapibus arcu. Aenean sit amet imperdiet augue. Vestibulum suscipit odio ut dolor scelerisque tincidunt. Sed sit amet condimentum felis. Mauris bibendum condimentum felis ut vehicula. Nulla eget pulvinar lectus, at vehicula tortor.
        </p>
        <p>
          Quisque fringilla ex nec purus consequat, non cursus nunc tristique. Praesent dignissim ipsum lectus, a scelerisque risus consectetur at. Curabitur felis quam, tempus eu nulla sed, lobortis sodales nisi. Suspendisse potenti. Phasellus vitae enim urna. Nam ut tortor egestas risus pharetra lacinia. Proin placerat turpis vitae aliquet ultrices.
        </p>
        <p>
          Praesent dictum vehicula dolor a ultricies. Morbi suscipit auctor neque vitae imperdiet. Maecenas pharetra non enim eget varius. Quisque elementum est ac ullamcorper auctor. Nam in velit sit amet urna efficitur egestas. Morbi feugiat bibendum sapien eget ullamcorper. Ut eget nibh ipsum. Nunc ac diam eu est vulputate fermentum. Nunc porta neque eget erat mollis, condimentum dapibus ante luctus. Mauris eu metus sem. Proin vestibulum nulla sed rutrum euismod. Sed eu fringilla est. Aliquam vitae ligula vitae mauris vestibulum mollis eu ac nisi. Donec vitae felis a felis finibus scelerisque. Nulla maximus venenatis enim.
        </p>
        <p>
          Praesent dictum vehicula dolor a ultricies. Morbi suscipit auctor neque vitae imperdiet. Maecenas pharetra non enim eget varius. Quisque elementum est ac ullamcorper auctor. Nam in velit sit amet urna efficitur egestas. Morbi feugiat bibendum sapien eget ullamcorper. Ut eget nibh ipsum. Nunc ac diam eu est vulputate fermentum. Nunc porta neque eget erat mollis, condimentum dapibus ante luctus. Mauris eu metus sem. Proin vestibulum nulla sed rutrum euismod. Sed eu fringilla est. Aliquam vitae ligula vitae mauris vestibulum mollis eu ac nisi. Donec vitae felis a felis finibus scelerisque. Nulla maximus venenatis enim.
        </p>
        </Column>
      </ProjectColumns>
        
      <ProjectColumns>
        <Column>
          <h2 className={intoTitle}>The New Dematerialization of Art under “Covid-19 Rule”</h2>
          <p>
            Lucy R. Lippard’s famous formulation, “The Dematerialization of the Art Object,” has a
            permanent place in the mythology of contemporary art. Coined in the 1960s, it referred to a
            broad transition in art, which seemed to be moving away from its traditional material forms,
            paintings and sculptures, toward new forms like land art, happenings and conceptual art.
            Video art and performance art joined the trend, which seemed to be permanently changing
            what art was all about. Figures like Marcel Duchamp and John Cage had already been taking
            steps into the same direction: questioning the centuries-old liaison between arts and crafts -
            that art could only be made by someone who had been trained in the “tricks of the trade.”
          </p>
          <p>
            Of course, things have got more complicated during the half a century that has passed.
            Material artworks have not disappeared - their role on the heated commercial art market is
            stronger than ever. In the other end of the spectrum, artists have indeed proceeded further
            toward dematerialization. There are works that leave only faint traces and documentations
            behind - created for the here and now and allowed to fade into oblivion. There are artworks
            that question the relationship of art to other creative genres like video games, fashion, street
            art, ‘outsider’ traditions, DIY tinkering, ephemera collecting, etc. Art is made for digital
            platforms where it sometimes truly immaterializes - url’s disappear, sites crash, works get lost
            in the thick of things digital. Sometimes it is meant to be so, not always.
          </p>
          <p>
            Media arts, as they have evolved since Lippard’s slogan started gaining ground, have
            normally situated themselves somewhere between the immaterialized and the material.
            Internet art was largely immaterial, whereas the post-internet art went to the other extreme.
            Gallery installations have a physical presence, but many contain digital components. When
            the exhibition is over, many elements are often silently disposed of. They can be replicated if
            a need arises; many installations - not to say anything about performances - only have an
            afterlife as video or photographic documentations.
          </p>
          <p>
            The current Covid-19 crisis has suddenly opened new perspectives to the speculations about
            “dematerialization” and its (non)reality. With museums and galleries closed, the access to
            physical artworks has been denied. How should the institutions and - above all - the artists
            react? Has the time for the true dematerialization of the art object finally come? If so, how
            would it best be realized? For whom should it be addressed? Even though the times are hard
            (and especially then) it should not be forgotten that the artists have to live. So where does
            the new slot for art making reside and how would it create links with audiences?
          </p>
          <p>
            Such thoughts must have occupied the minds of many aspiring artists preparing to graduate
            in the spring 2020 from art programs all around the world. The crisis came suddenly, so
            there are certainly no pre-packaged solutions available. Everyone must come up with one’s
            own. Even though the situation can be stressful and extraordinarily demanding, it may also
            open gates to new forms of creativity, ones not even considered a few months ago.
          </p>
          <p>
            This is the situation in which the M.F.A. exhibition of the UCLA Department of Design
            Media Arts has been created. With the university’s New Wight Gallery currently unavailable,
            the students had to rethink their ideas and strategies in a very short time. They managed to
            do so amazingly, forming a strong collective that took the task seriously and started working
            to find collective solutions, while concentrating on the individual contributions, which in
            many cases are very different from what they were meant to be in the beginning of the year.
          </p>
          <p>
            With the graduate studios closed and access to the labs denied, the artists had to use those
            resources that were available. This did not lead to “arte povera” or the “next best thing,” but
            to full-fledged and ambitious creations both the artists and the department can be proud of.
            Hard times can inspire imaginative solutions that do not uselessly wallow in pessimism. The
            newly ‘immaterialized’ artworks exhibited in the DMA’s Spring 2020 graduate student online
            exhibition refuse to give up hope, providing flashes of better times ahead.
          </p>
          <p>
            Erkki Huhtamo
          </p>
        </Column>
      </ProjectColumns>
    </div>
  );
}
