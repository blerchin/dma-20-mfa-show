import React from 'react';

import ProjectHeader from '../Components/ProjectHeader';
import ArtistBio from '../Components/ArtistBio';
import ProjectLink from '../Components/ProjectLink';
import ProjectColumns from '../Components/ProjectColumns';
import Image from '../Components/Image';
import Video from '../Components/Video';

export default function() {
    return (
        <div className="artist">
            <ProjectHeader
                artistName="Ben Lerchin"
                title="The Resource Observatory"
                materials="Interactive Web Installation"
                link="http://benlerchin.com/"
            />
            <ProjectColumns
                columns={[
                    <Video
                        maxHeight="80vh"
                        src="https://repetitionrepetition.com/launch2.mp4"
                    />
                ]}
            />
            <ProjectColumns
                columns={[
                    <Image
                        img="http://via.placeholder.com/1200x1200"
                        alt="A grey field with the text 1200x1200"
                    />,
                    <Image
                        img="http://via.placeholder.com/1200x1200"
                        alt="A grey field with the text 1200x1200"
                        caption="This image has a caption."
                    />
                ]}
            />
            <ProjectColumns
                columns={[
                    <Image
                        fullHeight
                        img="http://via.placeholder.com/1200x1200"
                        alt="A grey field with the text 1200x1200"
                        caption="This image has a caption."
                    />
                ]}
            />
            <ProjectColumns
                columns={[
                    <p>
                        Es irrt der Mensch, wenn er sie beim Kragen hätte. So schreitet in dem engen Bretterhaus (Theater, Bühne)
                        Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle!
                    </p>,
                    <p>
                        Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel
                        ist mir bewusst. Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen hätte. Vernunft fängt wieder
                        an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin.
                    </p>
                ]}
            />
            <ProjectColumns
                columns={[
                    <Image
                        maxHeight="500px"
                        img="http://via.placeholder.com/1200x1200"
                        alt="A grey field with the text 1200x1200"
                        caption="This image has a caption."
                    />
                ]}
            />
            <ProjectLink
                href="http://www.ubu.com/"
                text="VIEW THIS PROJECT"
            />
            <ArtistBio>
                <p>
                    So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt
                    mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle! Vernunft fängt wieder an zu sprechen
                    Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Vernunft fängt wieder
                    an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin.
                </p>
                <p>
                    Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen hätte. Ich bin von je der Ordnung Freund gewesen.
                    Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu sprechen
                    Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.
                </p>
            </ArtistBio>
        </div>
    );
}