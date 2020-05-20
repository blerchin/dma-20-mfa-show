import React from 'react';

import Artist from '../Containers/Artist';
import ProjectCover from '../Components/ProjectCover';
import ProjectHeader from '../Components/ProjectHeader';
import ArtistBio from '../Components/ArtistBio';
import ProjectColumns, { Column } from '../Components/ProjectColumns';
import Vimeo from '../Components/VideoVimeo';
import Image from '../Components/Image';

import BerfinImage0 from './assets/BerfinAtaman-0.jpg';
import BerfinImage1 from './assets/BerfinAtaman-1.jpg';
import BerfinImage2 from './assets/BerfinAtaman-2.jpg';
import BerfinImage3 from './assets/BerfinAtaman-3.jpg';
import BerfinImage4 from './assets/BerfinAtaman-4.jpg';

export default function() {
    return (
        <Artist>
            <ProjectHeader
                artistName="Berfin Ataman"
                title="horripilation"
                materials="Fabric, wood, Pla, electronics"
                link="http://www.berfinataman.com/"
            />
            <ProjectCover>
                <Column>
                    <Image
                        img={BerfinImage2}
                        alt='A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them.'
                    />
                </Column>
            </ProjectCover>
            <ProjectColumns>
                <Column>
                    <Image
                        img={BerfinImage1}
                        alt='A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them.'
                    />
                    <Image
                        img={BerfinImage0}
                        alt='A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them.'
                    />
                    <p>
                        I am interested in experimenting with movement that is relative to the form of sculpture but that can also be randomized by mechanics interacting it. I specifically design the sculptures formal elements to interact within a system. The sculptures are reminiscent of something familiar, however, they also have unusual deformations, colors, movements, and scale, lending them a surreal presence. I hope such oscillations between the unfamiliar yet familiar space destabilize the relationship that the viewer has with these existing forms. 
                        The idea of movement carries through different series in my work .My first works that were kinetic started experiments on how could I work on movement of a sculpture without a human inside it. It was a challenge that I created for my self at first. The Sympathetic motion series was the first purely sculptural series that I developed.Most of my work after these series continued in the form of soft sculptures. 
                    </p>
                </Column>
                <Column>
                    <p>
                        While experimenting on different movements relative to the architecture the sculpture is in, form of the sculpture and surface pattern, I have also increasingly become interested in how behaviors and feelings are evoked through observed movement, and why humans instinctively characterize something that is in motion. 
                        I have started naming my sculptures by the movements they produce since this is the source of the audiences perception combined with colors and sounds. 
                    </p>
                    <Image
                        img={BerfinImage3}
                        alt='A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them.'
                    />
                    <Image
                        img={BerfinImage4}
                        alt='A kinetic sculpture that is made out of soft materials. It extends from floor to the ceiling. It is orange at the base with pink m red and white stripes and orange polka dots. It has a tear drop shape on the lower part where it is orange and a hole in the middle of the tear drop. The hole has little bubble shapes details around it.They look like beads. Midway through the sculpture oranges fades to light green and the shape changes. The tear drop shape is attached on top onto a tubular structure with green  dangling tentacle like pieces. As these pieces move, some orange colors appears in between them where they are attached to the tubular shape. The green pieces move up and down they are light and see through with orange lines and polka dots on them.'
                    />
                </Column>
            </ProjectColumns>
            <ProjectColumns>
                <Column>
                    <Vimeo
                        url="https://player.vimeo.com/video/418431195?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                    />
                </Column>
            </ProjectColumns>
            <ArtistBio>
                <p>
                    Berfin Ataman was born in Izmir, Turkey. She went on to get her BFA in Theatre design from University of Southern California and her Post – Baccalaureate degree from School of Art Institute Chicago and is currently getting her MFA in UCLA. She has shown her work in Chicago, Los Angeles and Istanbul in galleries and museums.  Over multiple collections and projects, she has explored the internal and external perception of movement as they relate to body, space, motion and non- human objects. Her medium is fluid according to each collection but has been materialized as wearables, installations, and other soft, kinetic, sculptures.
                </p>
            </ArtistBio>
        </Artist>
    );
}