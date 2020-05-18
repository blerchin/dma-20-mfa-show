import React from 'react';

import Nav from '../Components/Nav';
import ProjectHeader from '../Components/ProjectHeader';
import Image from '../Components/Image';
import ProjectColumns from '../Components/ProjectColumns';
import Vimeo from '../Components/Video-Vimeo';

import GrahamImage1 from './assets/Graham Akins web template image 1.png';
import GrahamImage2 from './assets/Graham Akins web template image 2.png';
import GrahamImage3 from './assets/Graham Akins web template image 3.png';
import GrahamImage4 from './assets/Graham Akins web template image 4.png';
import GrahamImage5 from './assets/Graham Akins web template image 5.png';
import GrahamImage6 from './assets/Graham Akins web template image 6.png';
import GrahamImage7 from './assets/Graham Akins web template image 7.png';

export default function() {
    return (
        <div className="artist">
            <Nav />
            <ProjectHeader
                artistName="Graham Akins"
                title="Approximate Other"
                link="https://www.instagram.com/grahamycakes_/"
            />
            <div className="artistContent">
                <ProjectColumns
                    columns={[
                        <Vimeo
                            url="https://player.vimeo.com/video/?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0"
                        />
                    
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage1}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage2}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage3}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage4}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage5}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage6}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <Image
                            img={GrahamImage7}
                            alt="A grey field with the text 1200x1200"
                        />
                    ]}
                />
                <ProjectColumns
                    columns={[
                        <p>
                            Materials: video, photography, photogrammetry, wooden structures, zentai suit, &amp; dry cat food
                        </p>
                    ]}
                />
            </div>
        </div>
    );
}