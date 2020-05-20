import React from 'react';

import {
    p0, p1, p2, p3,
    acts, curtains,
    audioHeading,
    modifiedColumn
  } from './style.module.css';

import Artist from '../../Containers/Artist';
import ProjectCover from '../../Components/ProjectCover';
import ProjectHeader from '../../Components/ProjectHeader';
import ArtistBio from '../../Components/ArtistBio';
import ProjectColumns, { Column } from '../../Components/ProjectColumns';
import ProjectLink from '../../Components/ProjectLink';
import Image from '../../Components/Image';

import DalenaImage1 from './assets/DalenaTran-1.png';
import DalenaImage2 from './assets/DalenaTran-2.png';

export default function() {
    return (
        <Artist>
            <ProjectHeader
                artistName="Dalena Tran"
                title="Acts in Translation"
                materials="Web Installation, Infinite Duration"
                link="https://dalena.me"
            />
            <ProjectCover>
                <Column>
                    <p className={p0}>Two windows having a moment together.</p>
                    <p className={p1}>Of every new hour, a person from my carnival comes to tell a story, marking a passage of time but never keeping it.</p>
                    <p className={p2}>Audio recordings from different places at separate times are procedurally sequenced in relationship to each other.</p>
                    <Image
                        img={DalenaImage1}
                        alt='A scantily drawn diagram of arrows that form two circles with the smaller circle nested inside the larger. A linear flow of arrows moves from one side of the circumference downwards towards a focal point and then travels upwards towards the opposite side of the circumference to create a conical structure.'
                    />
                    <p className={p3}> Your moment &amp; my moment<br/>are never quite the same.</p>
                </Column>
            </ProjectCover>
            <ProjectLink
                href="https://dalena.github.io/acts-in-translation/"
                text="VIEW ACTS IN TRANSLATION"
            />

            <ProjectColumns>
                <Column>
                    <Image
                        img={DalenaImage2}
                        alt='A close-up of the lower portion of a 3D rendered blue curtain with pink and orange flowers surrounded by faded green leaves.'
                    />
                </Column>
            </ProjectColumns>
            <ProjectColumns>
                <Column>
                    <h4 id='audio-contributions' className={audioHeading}>Audio Contributions</h4>
                    <ul aria-labelledby='audio-contribution'>
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
                    <ul aria-labelledby='audio-contribution' className={modifiedColumn}>
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
                    <ul aria-labelledby='audio-contribution' className={modifiedColumn}>
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
                        A special thanks to جیگر من Hirad Sab for his love &amp; technical contributions to the project
                    </p>
                    <p>
                        &amp; Chandler McWilliams, Danny Snelson, Lauren McCarthy, Casey Reas, Erkki Huhtamo, Cayetano Ferrer, Jennnifer Steinkamp, Noa Kaplan for their support and mentorship
                    </p>
                </Column>
            </ProjectColumns>
            <ArtistBio>
                <p>
                    Dalena Tran is a media artist & writer living in Los Angeles, CA. Her stories and situations respond to notions of voyeurism, hegemony, memory, and the phenomenon of media. She engages across mediums and disciplines as they relate to the rhythms of everyday life, often concerned with moments hidden in plain sight. 
                </p>
            </ArtistBio>
        </Artist>
    );
}