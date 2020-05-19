import React from 'react';

import Nav from '../Components/Nav';
import ProjectHeader from '../Components/ProjectHeader';
import ArtistBio from '../Components/ArtistBio';
import ProjectColumns from '../Components/ProjectColumns';
import ProjectLink from '../Components/ProjectLink';

export default function() {
    return (
        <div className="artist">
            <Nav />
            <ProjectHeader
                artistName="Blaine O'Neill"
                title="Isolog"
                materials="ever-looping 36 minute spoken log, for screens"
                link="http://dolphin.limited"
            />
            <div className="artistContent">
                <ProjectColumns
                    columns={[
                        <div>
                            <p>
                                Written in collaboration with three GPT-2 text generators trained using Runway ML, featuring the voices of Jesse Hoffman (SUDO), Cecile Believe (MAUDE), and Kate Berlant (PSEUDO).
                            </p>
                            <p>
                                Affective loop:
                                Interest ↝ Enjoyment ↝ Surprise ↝ Shame ↺
                            </p>
                            <h5 id='eventsLabel'>Events:</h5>
                            <ol aria-labelledby='eventsLabel'>
                                <li>Evaluation (identification)</li>
                                <li>Access (trust)</li>
                                <li>Catch (catfish)</li>
                                <li>Refresh (support)</li>
                            </ol>
                        </div>
                    ]}
                />
                <ProjectLink
                    href="#"
                    text="VIEW THIS PROJECT"
                />
                <ArtistBio>
                    <p>
                        Affiliate of multiple groups. Working as an artist, designer, web developer and disc jockey. Currently: affect, bubbles, feature extraction, improvisation, intersubjectivity. Always: failure.
                    </p>
                </ArtistBio>
            </div>
        </div>
    );
}