import React from 'react';

import Nav from '../Components/Nav';
import ProjectHeader from '../Components/ProjectHeader';
import ArtistBio from '../Components/ArtistBio';
import ProjectColumns from '../Components/ProjectColumns';
import Image from '../Components/Image';
import Vimeo from '../Components/Video-Vimeo'

import BenImage from './assets/BenLerchin-yimby-cover.jpg';

export default function() {
    return (
        <div className="artist">
            <Nav />
            <ProjectHeader
                artistName="Ben Lerchin"
                title="Yes, in my Backyard"
                materials="10 minute video"
                link="http://benlerchin.com"
            />
            <div className="artistContent">
            <ProjectColumns
                    columns={[
                        <Vimeo
                            url="https://player.vimeo.com/video/TK?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                        />
                    
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={BenImage}
                            alt='Still from video. A gray industrial concrete and metal box is in the foreground, with the text
                            "MILE 103" obliquely visible. Low brush growth is seen in the near background, behind which a number
                            of wind turbines are visible.'
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <p>
                            Semi-satirical mockumentary reframing Los Angeles' infrastructure as a tourist destination for nature-lovers.
                        </p>
                    ]}
                />
                <ArtistBio>
                    <p>
                        Ben Lerchin is an artist and technologist who works with software, photography, and digital fabrication. Their practice deals extensively with the relationship between the photographic image and the American West. Reflecting on the uneasy experience of living between the city and the wilderness, my work attempts to reconcile a networked, industrialized lifestyle with the unstable ground under our feet. It is an attempt to erase boundaries with the natural world, and to see it not as victim nor antagonist, but as co-conspirator and friend. Using digital photographic processes, Ben embeds a polyphony of viewpoints into three dimensional forms reminiscent of the landscape from which they emerge, showing sites of resource management in relation to the people that depend on them.
                    </p>
                </ArtistBio>
            </div>
        </div>
    );
}