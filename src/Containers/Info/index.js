import React from "react";
import Seo from "../../Components/Seo";
import ProjectColumns, { Column } from "../../Components/ProjectColumns";
import { Link } from "react-router-dom";
import {
  container,
  infoWrapper,
  infoTitle,
  infoSub,
  infoContainer,
  infoLink,
  citeLink,
  citeText,
  nnTitle,
  sectionSmall,
} from "./style.module.scss";

export default function Info() {
  return (
    <div className={container}>
      <Seo
      title="Info"
      path="info"
      />
      <ProjectColumns className={infoWrapper, sectionSmall}>
        <Column>
          <h2 className={infoTitle}>
            Curatorial Statement
            <br />
            <span className={infoSub}>May 20, 2020</span>
          </h2>
          <br />
          <div className={infoContainer}>
            <p>
              The global situation has left few of our collective rituals
              untouched; the MFA thesis exhibition is no exception. During a
              moment in which our notions and demonstrations of intimacy are
              being rewritten, reflecting on relationships to those we are close
              to, by choice or otherwise, comes easily. Like our neighbors, a
              cohort is a relationship that begins with an imposition and only
              with some luck slides into more substantial intimacy. The 2020
              UCLA DMA MFA thesis exhibition{" "}
              <span className={nnTitle}>NEARREST NEIGHBOR</span> reflects and
              enacts a navigation of proximity, with the title referring at once
              to permutations of closeness, as well as its various applications
              as an algorithm (the nearest neighbor search).
            </p>
            <p>
              The swift and unexpected transition from an IRL to online format
              is not unique to this cohort, and yet is perhaps particularly
              relevant given the program’s focus on fostering practices informed
              by technology and digital media as much as the discourses of
              contemporary art, culture, and design. Together the artists have
              built a website to host the exhibition, using in part the nearest
              neighbor algorithm. Feminist theorist Astrida Neimanis calls
              collaboration “a doing-in-common, more than a
              being-in-common…” applied to “doings, engagements, or unfoldings
              amongst and between (human, non-human, chemical, physical,
              biological, meteorological, other) bodies.”{" "}
              <a href="#c1" id="c1f" className={citeLink}>
                <sup>[1]</sup>
              </a>{" "}
              A focus on transhuman collaborations and ways of making offers a
              common ground from which to consider the eleven individual
              practices that together make this single exhibition that counts
              AI, bees, and sunlight among its agents.
            </p>
            <p>
              The increasingly more apparent tensions between embodied and
              mediated experience is a through line. Dalena Tran’s{" "}
              <Link to="/dalena-tran" className={infoLink}>
                Acts in Translation
              </Link>{" "}
              is a web installation, consisting of a video of two
              windows, overlaid with infinite configurations of ambient audio
              recordings collected from individuals in isolation around the
              world and stories written by the artist. Tran’s use of cinematic
              framing emphasizes the fixed and limited format in which we are
              being given information: the ambient audio originates in specific
              human moments but now complicates context. These kinds of cultural
              gaps and losses that occur through mediation and translation are
              key interests of Tran’s, which are reflected in the narratives.
            </p>
            <p>
              Hirad Sab’s{" "}
              <Link to="/hirad-sab" className={infoLink}>
                Figure 1.
              </Link>{" "}
              probes the ontology of digital personhood in a video populated by
              computer generated bodies, faces, and voices. Sab’s video
              encourages reflection on the increasing ease with which embodiment
              is attributed to these digital bodies without referents. It is
              tempting to label the computer generated voice reciting a dialogue
              as “disembodied,” while it is no more or less so than the faces
              and bodies that originate from a single digital model. Orcs and
              aliens, as non-human extremes, replicate the violence and fear of
              subjugated others in virtual worlds. Grounded in Sab’s background
              in computer science and AI, the work is informed by the ethics of
              the field, and its connections to broader issues of postcolonial
              subjectivity and representation.
            </p>
            <p>
              Blaine O’Neill similarly considers the affective reach of
              synthetic personhood and its networks in a programmatic and
              in-browser work entitled{" "}
              <Link to="/blaine-oneill" className={infoLink}>
                ISOLOG
              </Link>{" "}
              . The language that forms the personalities of each AI agent,
              Sudo, Pseudo, and Maude, comes from specific datasets (including,
              among others, O’Neill’s personal social media and correspondences
              for one voice, online psychic communities for another.) From this,
              an infrastructure was created to allow the three agents to
              “converse” via linguistic patterns. The resulting script was given
              to voice actors, who pull textual affect from their lines and
              inject it back into the conversation. <em>ISOLOG</em> uses these
              voices to dispatch affect without substance, and while their
              conversation signals its synthetic origins, it is uncomfortably
              reminiscent of many real exchanges in which vibes have broken away
              from the deadweight of facts and definitions.
            </p>
            <p>
              Clara Leivas investigates the potential of translating a highly
              specific embodied and affective moment into her first screen-based
              work. A Muay Thai fighter, Leivas invites us into the moment just
              before a fight, in which intense training, anticipatory jitters,
              and potential energy collapse into a meditative state of hyper
              focus.{" "}
              <Link to="/clara-leivas" className={infoLink}>
                I am defeat
              </Link>{" "}
              is a looped video with no start or stop point consisting of
              digitally generated visuals and sound recorded through her body.
              In selecting a heightened state informed by bodily, emotional, and
              mental experience as subject, Leivas explores the limits and
              potential of digital mediations.
            </p>
            <p>
              From the body, there is a shift of our mediated focus to the
              physical and digital landscapes it moves through. Ben Lerchin’s
              practice incorporates photography, digital fabrication, and
              software to explore the American West, its existence in images,
              and the physical yet often invisible structures that make it
              habitable. Lerchin has been developing interventions relating to
              land use and energy production in the Antelope Valley, where
              electrical transmission lines, the LA aqueduct, a wind farm, solar
              farms, and mines dominate the landscape. The work shares a name
              with the video presented for the exhibition:{" "}
              <Link to="/ben-lerchin" className={infoLink}>
                YIMBY (Yes, in My Backyard)
              </Link>
              , in response to the NIMBY movement, which, among other things,
              has had the effect of relegating infrastructure to rural
              communities with limited political power. The video is a stand-in
              for Lerchin’s material explorations, consisting of drone
              footage, cell phone videos, and photos of Lerchin’s trips there.
              Confinement and distance have come to have a two-fold effect, as
              the site exists to be used, visited, and experienced in response
              to alienation from the natural world.
            </p>
            <p>
              In{" "}
              <Link to="/zeynep-abes" className={infoLink}>
                Memory Place
              </Link>{" "}
              , Zeynep Abes considers the social distancing particular to those
              in chosen or imposed displacement from the place they once
              considered home. From Turkey, Abes’s mother sends her photos of
              the childhood home, street, and city she left a decade ago. These
              are processed as photogrammetry scans, whose tenuous appearance
              makes visual the tender pain of fading memories. While the
              domestic space remains largely untouched, with the same foods and
              furniture waiting to welcome her, the Istanbul she called home
              exists increasingly more as an idea than a place. Private and
              public memories overlap like images and their referents, with
              significant sociopolitical events experienced via social media and
              family coming together on screens. Now, this alienation only
              proliferates, too nimbly grafting onto our collective moment.
            </p>
            <p>
              Erin Cooney’s{" "}
              <Link to="/erin-cooney" className={infoLink}>
                Now a Room, Now a Landscape
              </Link>{" "}
              emerges from the center of this moment. Confined to a home meant
              to be temporary, Cooney redirected her ongoing research on built
              environments, situated knowledge, and place to the surroundings
              that she suddenly was forced into sustained intimacy with. Mapping
              a labyrinth based on the one in Chartres Cathedral onto the entire
              apartment, Cooney walks the entire pathway, which covers the
              apartment's surface area from wall-to-wall,, scaling every
              surface, including furniture, recording the journey with cameras
              attached to her feet. As with any pilgrimage, transformation, both
              external and internal, is at stake. Cooney makes the unfamiliar
              known, while simultaneously defamiliarizing that which is
              ubiquitous to the point of invisibility.
            </p>
            <p>
              Graham Akins creates uncanny valleys in which the notions that
              determine much of our society—binaries of nature and culture, the
              self and the other, the animal and the human, are rendered and
              revealed as absurd. Akins also takes interest in the mediation of
              the West, and photographic processes and the history of
              image-making run as undercurrents throughout the work. In{" "}
              <Link to="/graham-akins" className={infoLink}>
                Approximate Other
              </Link>
              , landscape and place become non-spaces created through layers of
              both digital and sculptural means. In this hyper saturated world,
              human movement and its motivations are awkward and non-sensical,
              only as knowable as any other animal’s.
            </p>
            <p>
              The blurring of previously sacrosanct boundaries is another
              negotiation of intimacy. Miles Peyton’s interest in membranes that
              enclose material from the outside world as the minimal entity that
              can be considered a self led to{" "}
              <Link to="/miles-peyton" className={infoLink}>
                Sunlit waterneither
              </Link>
              , consisting of a liquid lens, which sits on conductive glass
              etched with a pattern, becoming both image and electrical circuit
              when the liquid is illuminated by the sun. The elements
              lend an alchemical bent to Peyton’s image-making technology, as
              well as his use of the word “sigil” to describe the etched
              patterns. Faced with the projection, one is caught between an
              identifying moment, a recognition of life in its primordial form,
              and the creepy uncertainty of whether what is moving is dead or
              alive.
            </p>
            <p>
              The slipperiness between the living and the non-living is also
              explored through Berfin Ataman’s kinetic fabric sculpture{" "}
              <Link to="/berfin-ataman" className={infoLink}>
                Raising Quills
              </Link>
              . A motorized electronic system creates movement from within the
              fabric, whose shape and color is designed in conjunction with its
              gestures. They are meant to be interacted with, as people’s
              reactions to these animate objects are key to Ataman’s practice.
              Again, a synthetic system is designed to induce the emotional pull
              of a silent but sentient creature to create layers of stimuli to
              invite perception and its emotional effects.
            </p>
            <p>
              Continuing this vein of inquiry, Leming Chung presents{" "}
              <Link to="/leming-zhong" className={infoLink}>
                My doctor's prescription for my pollen allergy is to let the
                light illuminate everywhere
              </Link>{" "}
              the video element of a larger installation stemming from her
              interest in biopolitics and networks. The uneasy division between
              the self and the other, what belongs and what does not, is
              narrated through the story of a single bee who experiences an
              allergic reaction. Like the allergen itself, this bee is an
              innocuous part of a whole turned into an invader. Unlike say, a
              virus, an allergy is an internal process that consists of the
              body’s overreaction to an otherwise harmless event. Taking these
              minuscule life forms as starting points, Chung encourages
              reflection on the diseased and disrupted individual body, as well
              the social body’s efforts to control it.
            </p>
            <p>
              The artists negotiate movement through landscapes and networks,
              among the human, non-human, and the in-between. This with a
              recognition of nearness, the gravity of our intimacies, calculated
              proximity and distance in computation, within a cohort, a socially
              distant society, an exhibition.
            </p>
            <p>
              <strong>—Ana Iwataki</strong>
            </p>
            <p className={citeText}>
              <a id="c1" href="#c1f" className={citeLink}>
                <sup>[1]</sup>
              </a>{" "}
              Neimanis, Astrida. “On Collaboration (for Barbara Godard).” NORA -
              Nordic Journal of Feminist and Gender Research, vol. 20, no. 3,
              2012, pp. 215–221., doi:10.1080/08038740.2012.703689.
            </p>
          </div>
        </Column>
      </ProjectColumns>
      <ProjectColumns className={`${infoWrapper} ${sectionSmall}`}>
        <Column>
          <h2 className={infoTitle}>
            The New Dematerialization of Art under “Covid-19 Rule”
            <br />
            <span className={infoSub}>
              A Response from UCLA Design Media Arts Department
            </span>
          </h2>
          <br />
          <div className={infoContainer}>
            <p>
              Lucy R. Lippard’s famous formulation, “The Dematerialization of
              the Art Object,” has a permanent place in the mythology of
              contemporary art. Coined in the 1960s, it referred to a broad
              transition in art, which seemed to be moving away from its
              traditional material forms, paintings and sculptures, toward new
              forms like land art, happenings and conceptual art. Video art and
              performance art joined the trend, which seemed to be permanently
              changing what art was all about. Figures like Marcel Duchamp and
              John Cage had already been taking steps into the same direction:
              questioning the centuries-old liaison between arts and crafts -
              that art could only be made by someone who had been trained in the
              “tricks of the trade.”
            </p>
            <p>
              Of course, things have got more complicated during the half a
              century that has passed. Material artworks have not disappeared -
              their role on the heated commercial art market is stronger than
              ever. In the other end of the spectrum, artists have indeed
              proceeded further toward dematerialization. There are works that
              leave only faint traces and documentations behind - created for
              the here and now and allowed to fade into oblivion. There are
              artworks that question the relationship of art to other creative
              genres like video games, fashion, street art, ‘outsider’
              traditions, DIY tinkering, ephemera collecting, etc. Art is made
              for digital platforms where it sometimes truly immaterializes -
              url’s disappear, sites crash, works get lost in the thick of
              things digital. Sometimes it is meant to be so, not always.
            </p>
            <p>
              Media arts, as they have evolved since Lippard’s slogan started
              gaining ground, have normally situated themselves somewhere
              between the immaterialized and the material. Internet art was
              largely immaterial, whereas the post-internet art went to the
              other extreme. Gallery installations have a physical presence, but
              many contain digital components. When the exhibition is over, many
              elements are often silently disposed of. They can be replicated if
              a need arises; many installations - not to say anything about
              performances - only have an afterlife as video or photographic
              documentations.
            </p>
            <p>
              The current Covid-19 crisis has suddenly opened new perspectives
              to the speculations about “dematerialization” and its
              (non)reality. With museums and galleries closed, the access to
              physical artworks has been denied. How should the institutions and
              - above all - the artists react? Has the time for the true
              dematerialization of the art object finally come? If so, how would
              it best be realized? For whom should it be addressed? Even though
              the times are hard (and especially then) it should not be
              forgotten that the artists have to live. So where does the new
              slot for art making reside and how would it create links with
              audiences?
            </p>
            <p>
              Such thoughts must have occupied the minds of many aspiring
              artists preparing to graduate in the spring 2020 from art programs
              all around the world. The crisis came suddenly, so there are
              certainly no pre-packaged solutions available. Everyone must come
              up with one’s own. Even though the situation can be stressful and
              extraordinarily demanding, it may also open gates to new forms of
              creativity, ones not even considered a few months ago.
            </p>
            <p>
              This is the situation in which the M.F.A. exhibition of the UCLA
              Department of Design Media Arts has been created. With the
              university’s New Wight Gallery currently unavailable, the students
              had to rethink their ideas and strategies in a very short time.
              They managed to do so amazingly, forming a strong collective that
              took the task seriously and started working to find collective
              solutions, while concentrating on the individual contributions,
              which in many cases are very different from what they were meant
              to be in the beginning of the year.
            </p>
            <p>
              With the graduate studios closed and access to the labs denied,
              the artists had to use those resources that were available. This
              did not lead to “arte povera” or the “next best thing,” but to
              full-fledged and ambitious creations both the artists and the
              department can be proud of. Hard times can inspire imaginative
              solutions that do not uselessly wallow in pessimism. The newly
              ‘immaterialized’ artworks exhibited in the DMA’s Spring 2020
              graduate student online exhibition refuse to give up hope,
              providing flashes of better times ahead.
            </p>
            <p>
              <strong>—Erkki Huhtamo</strong>
            </p>
          </div>
        </Column>
      </ProjectColumns>
    </div>
  );
}
