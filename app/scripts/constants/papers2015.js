'use strict';

angular.module('tenorApp')
  .constant('papers2015', [
  {
    auth:'Daniel Martín, Timotée Neullas and François Pachet',
    title:'LEADSHEETJS: A Javascript Library for Online Lead Sheet Edition',
    pdf: 'proceedings/2015/01-Martin-LeadsheetJSs.pdf',
    abstract: 'Lead sheets are routinely used in many genres of popular music. Lead sheets are music scores consisting of a melody and a chord grid. With the increase of online and portable music applications, the need for easily embeddable, adaptable and extensible lead sheet editing tools is pressing. We introduce LeadsheetJS, a javascript library for visualizing, editing and rendering lead sheets on multiple devices. LeadsheetJS provides lead sheet edition as well as support for extensions such as score augmentation and peer feedback. LeadsheetJS is a client-based component that can be embedded from arbitrary third-party websites. We describe the main design aspects of LeadsheetJS and some applications in online computer-aided composition tools.'
  },
  {
    auth:'Andres Perez-Lopez, Pep Alcantara-Noalles and Bertrand Kientz',
    title:'Bigram Editor: a score editor for the Bigram Notation',
    pdf: 'proceedings/2015/02-PerezLopez-Bigram.pdf',
    abstract: 'The Bigram Notation is an alternative approach to musical notation, based on the chromatic nature of Western music. As observed historically with alternative notation systems, their spread and consolidation is based on the existence of complementary and supportive tools, as ideosyncratic instruments and specific written material. Accordingly, we present the binary keyboards and the Bigram Editor, a graphical bigram score editor with automatic transcription and reproduction capabilities'
  },
  {
    auth:'Mauricio Rodriguez',
    title:'Expressive Quantization of Complex Rhythmic Structures for Automatic Music Transcription',
    pdf: 'proceedings/2015/03-Rodriguez-ExpressiveQuantization.pdf',
    abstract: 'Two quantization models for ‘expressive’ rendering of complex rhythmic patterns are discussed. A multi-nesting quantizer captures expressivity by allowing fine-grained/high-quality resolution, thus covering the automatic transcription of a wide range of rhythmic configurations, yielding from simple to rather complex music notations. A look-up table quantizer is discussed as another model to attain expressivity and musical consistency; input is quantized by comparison of \'rhythmic similarity\' from a user-defined data-set or look-up \'dictionary\'. Both quantizers are presented as computing assisting tools to facilitate the transcription of rhythmic structures into the symbolic domain (i.e. music notation).'
  },
  {
    auth:'Matthias Mauch, Chris Cannam, Rachel Bittner, George Fazekas, Justin Salamon, Jiajie Dai, Juan Bello and Simon Dixon',
    title:'Computer-aided Melody Note Transcription Using the Tony Software: Accuracy and Efficiency',
    pdf: 'proceedings/2015/04-Mauch-Tony.pdf',
    abstract: 'We present Tony, a software tool for the interactive evaluation of melodies from monophonic audio recordings, and evaluate its usability and the accuracy of its note extraction method. The scientific study of acoustic performances of melodies, whether sung or played, requires the accurate transcription of notes and pitches. To achieve the desired transcription accuracy for a particular application, researchers manually correct results obtained by automatic methods. Tony is an interactive tool directly aimed at making this correction task efficient. It provides (a) state-of-the art algorithms for pitch and note estimation, (b) visual and auditory feedback for easy error-spotting, (c) an intelligent graphical user interface through which the user can rapidly correct estimation errors, d) extensive export functions enabling further processing in other applications. We show that Tony\'s built in automatic note transcription method compares favorably against existing tools. We report how long it takes to annotate recordings on a set of 96 recordings and study the effect of piece, the number of edits made and the annotator\'s increasing mastery of the software. Tony is Open Source software, with source code and compiled binaries for Windows and Mac OS X available from https://code.soundsoftware.ac.uk/projects/tony/.'
  },
  {
    auth:'Christian Fischer',
    title:'Understanding Animated Notation',
    pdf: 'proceedings/2015/05-Fischer-AnimatedNotation.pdf',
    abstract: 'Alternative notation approaches become more and more popular. Animated notation is one of them. Mainly because it seems easy to apply. On the other hand, practice shows that classically trained musicians, composers and musicologists tend to reject this kind of notation. Furthermore some musical performances based on animated notation should face the question whether a regular notation would not have been more efficient. Overall there is still a lack of knowledge and some misconceptions when it comes to animated notation and its practical application. A brief look into the development of animated notation, examples of actual fields of application and especially an examination of the visual communication process and the design of animated scores will shed a little light into the darkness.'
  },
  {
    auth:'Ryan Ross Smith',
    title:'An Atomic Approach to Animated Music Notation',
    pdf: 'proceedings/2015/06-RossSmith-AtomicAMN.pdf',
    abstract: 'Since the turn of the century, and in particular the last 5 years, the discourse surrounding dynamic scoring techniques and practices has increased dramatically, while leading to an increasingly disparate terminological melee. With an awareness of what implications exist in the premature analysis and theorization of an emerging field of practice, the author argues that in order to further develop a taxonomy of dynamic scoring techniques and practices, it may be useful to take a reductionist approach toward defining the various low-level elements of dynamic scoring, in the case of this paper those elements that features prominently in Animated Music Notation [AMN]. By suggesting a set of low-level elements, and isolating the actualized indicators of contact and intersection as the primary functional components of AMN, the author will propose a working definition of AMN supported by examples drawn from the author’s work and others. This definition is not intended to satisfy the broad range of dynamic scoring techniques that implement AMN, but to highlight prevalent methodologies, and to point toward the extension of existing taxonomies, specifically regard-ing their respective global functionalities.'
  },
  {
    auth:'Richard Hoadley',
    title:'SEMAPHORE: Cross-Domain Expressive Mapping with Live Notation',
    pdf: 'proceedings/2015/07-Hoadley-Semaphore.pdf',
    abstract: 'This paper describes research, investigations, creative experiments and performances undertaken by the author in collaboration with practitioners in different creative and performance domains. The research focuses on the translation of expression between these domains and its implementation using technology. This paper focuses primarily on the role of notation in this process. The domains involved include music (audio and notation), movement (dance) and text (poetry). The data arising from performers’ movements are collected and investigated; consideration is given to the use of image and graphics enabling elementary algorithmically generated dance notation.'
  },
  {
    auth:'Cat Hope, Lindsay Vickery, Aaron Wyatt and Stuart James',
    title:'The DECIBEL Scoreplayer - A Digital Tool for Reading Graphic Notation',
    pdf: 'proceedings/2015/08-Hope-Decibel.pdf',
    abstract: 'These implementations are taken to be a part of the creative process. This research is about creating and investigating stimulating experiences where connections between one domain and the other are perceivable and where this connection itself provides an aesthetic experience. They are not intended to be fixed and permanent (although may remain so for the duration of a composition). The research is about creating dynamic environments, not musical instruments or general purpose tools.'
  },
  {
    auth:'Hassan Abdullah Mohd and Andrew Blackburn',
    title:'Spectromorphological Notation: Exploring the Uses of Timbral Visualisations in Ethnomusicological Works',
    pdf: 'proceedings/2015/11-Abdullah-SpectromorphologicalNotation.pdf',
    abstract: 'Ethnomusicologists often face problem in precisely de-scribing characteristic of a sound recorded in the field-work. Written explanation normally will use the meta-phoric words to represent the timbral characteristic of a sound produced by ethnic musical instruments. But to what extend the reader will understand and perceive the sound based on the writer explanation? This study will explore all the possibilities of using timbral visualization in recognizing the Malaysian traditional musical instru-ments. We introduce an instrument recognition process in solo recordings of a set of Malay traditional instruments (gedombak), which yields a high recognition rate. A large sound profile is used in order to encompass the different sound characteristic of each instrument and evaluate the generalization abilities of the recognition process.'
  },
  {
    auth:'James Bean',
    title:'denm (dynamic environmental notation for music): Introducing a Performance-Centric Musical Interface',
    pdf: 'proceedings/2015/12-Bean-DENM.pdf',
    abstract: 'denm (dynamic environmental notation for music) is an automatic notation renderer written for tablet computers in the Swift language and the Cocoa Touch Frameworks. denm is a performance-centric notation environment with many tools built into an interactive graphical representation of music. These tools, for both individual- and group-rehearsal contexts, invite multi-dimensional learning strategies to performing the complex musics written today. There are many excellent tools currently available that automatically generate musical scores, but the focus of these tools is often towards the compositional and/or theoretical end of the musical process. denm focuses its efforts on the performance end of the process, allowing performers to interact directly with the musical notation. This paper describes the impetus for the denm project, the current state of its development, and areas of continued implementation and exploration.'
  },
  {
    auth:'Jean-Michaël Celerier, Pascal Baltazar, Clément Bossut, Nicolas Vuaille, Jean-Michel Couturier and Myriam Desainte-Catherine',
    title:'OSSIA: towards a unified interface for scoring time and interaction',
    pdf: 'proceedings/2015/13-Celerier-OSSIA.pdf',
    abstract: 'The theory of interactive scores addresses the writing and execution of temporal constraints between musical objects, with the ability to describe the use of interactivity in the scores. In this paper, a notation for the use of conditional branching in interactive scores will be introduced. It is based on a high level formalism for the authoring of interactive scores developed during the course of the OSSIA research project. This formalism is meant to be at the same time easily manipulated by composers, and translatable to multiple formal methods used in interactive scores like Petri nets and timed automaton. An application programming interface that allows the interactive scores to be embedded in other software and the authoring software, i-score, will be presented.'
  },
  {
    auth:'Jean-Louis Di Santo',
    title:'A Sign to write Acousmatic Scores',
    pdf: 'proceedings/2015/14-DiSanto-AcousmaticScores.pdf',
    abstract: 'This paper aims at describing an approach meant to build a sign adapted to acousmatic music and based on reduced listening. The sign, to be efficient, must obey to a certain number of requisits: precision, ergonomy, relevance... It must be both easy to use and able to create relations between sounds. A simple description of their qualities is not enough: it must be able to create or analyse sound compositions and structures, such as instrumental scores. To fulfill this purpose, it must be able to give each sound a value, in a saussurian meaning of the word. I will try to show the genealogy of my sign, how I took elements of reflexion from musical knowledge, linguistics, semiotics and aesthetics. From there I deduced the concept of minimal unit of sound applied to electroacoustic music and I created a sign combining symbols to decribe its features. I\'ll show how I have reorganised sound paramaters described by Schaeffer and how this sign works. At last, I will show the possibilities of writing scores sound by sound and I\'ll show two kinds of analysis: the analysis of a pure acousmatic work from a formal point of view and the analysis of a work for tape and instruments both from a formal and a symbolic point of view.'
  },
  {
    auth:'Emile Ellberger, Germán Toro-Perez, Johannes Schuett, Linda Cavaliero and Giorgio Zoia',
    title:'A Paradigm for Scoring Spatialization Notation',
    pdf: 'proceedings/2015/15-Ellberger-SpacializationNotation.pdf',
    abstract: 'SSMN intends to develop a conceptual framework and a tool set that allows composers to integrate spatialization in musical notation from the onset of the creation process. As the composition takes form and graphic symbols ex-pressing spatialization is introduced into the score, instant audio rendering provides feedback within a surround sound configuration. In parallel, SSMN helps interpreters and audio engineers to learn and master scores that con-tain complex instructions of motion in space easily re-cognizable both in printed and animated electronic for-mat. At first a SSMN Spatial Taxonomy was established to identify key motion in space possibilities within musi-cal context; consequently, a collection of SSMN Symbols has been designed and implemented in a software library of graphical objects within MuseScoreSSMN, a dedicated editor that has been developed to allow interactive use of this library along with CWMN. In order to bridge the gap between visual elements and audio perception, an SSMN-Rendering-Engine application is at the heart of OSC inter-application communication strategies allowing the use of DAW and user-defined programming envi-ronments along with MuseScoreSSMN. A prototype has been prepared and tested by a user group consisting of composers and performers. Further research shall address other user cases integrating electroacoustic paradigms.'
  },
  {
    auth:'Kelly Fox',
    title:'Accretion: Flexible, Networked Animated Music Notation For Orchestra With the Raspberry Pi',
    pdf: 'proceedings/2015/16-Fox-Accretion.pdf',
    abstract: 'In 2014, the author set out to expand the notational potential of their generative music systems to be performed by the Rensselaer Orchestra in Troy, NY. The experiments resulted in the use of several networked Raspberry Pi devices delivering a realtime, generative Animated Music Notation to subsections of the live orchestra during performance. This paper outlines the structure of the piece, Accretion; the technical details of its implementation; and the possibilities presented by using the Raspberry Pi to deliver scored materials to performers. Ultimately, the paper seeks to make a case for adopting the Raspberry Pi as a powerful device and method of distribution/performance of Animated Music Notation.'
  },
  {
    auth:'Ichiro Fujinaga and Andrew Hankinson',
    title:'Single Interface for Music Score Searching and Analysis (SIMSSA)',
    pdf: 'proceedings/2015/17-Fujinaga-Simssa8.pdf',
    abstract: 'Single Interface for Music Score Searching and Analysis (SIMSSA) project targets digitized music scores to de-sign a global infrastructure for searching and analyzing music scores. Specifically, we seek to provide research-ers, musicians, and others to access the contents and metadata of a large number of scores in a searchable, digital format. In this project, we are developing proto-types for processing and accessing the scores by consult-ing closely music researchers, musicians, and librarians.'
  },
  {
    auth:'Patrice Guyot and Julien Pinquier',
    title:'Browsing soundscapes',
    pdf: 'proceedings/2015/18-Guyot-BrowsingSoundscapes.pdf',
    abstract: 'Browsing soundscapes is generally based on the waveform of the audio signal or textual metadata, which may be not informative. The TM-charts provide an efficient tool to represent and compare soundscapes. However, they remain little used probably due to the human annotation they need. In this paper, we describe a new approach to compute charts of soundscapes, that we call Samocharts. The Samocharts are inspired by TM-charts and can be computed without a human annotation. We present two methods for Samochart computation. The first one is based on a segmentation of the signal from a set of predefined sound events. The second one is based on the confidence score of the detection algorithms. We describe two application cases on corpora of field recording from the CIESS and the UrbanSound projects. Finally, Samocharts provide a compact and efficient representation of soundscapes, which can be used in different kind of applications.'
  },
  {
    auth:'Craig Sapp',
    title:'Graphic to Symbolic Representations of Musical Notation',
    pdf: 'proceedings/2015/20-Sapp-GraphicToSymbolic.pdf',
    abstract: 'This paper discusses a graphically oriented representation for music and how such representation systems can be converted into more symbolic/semantic representations of music. Specifically the representation system of the SCORE notation editor is presented along with case studies converting into other symbolic formats such as MIDI, Humdrum, Dox, MuseData, MusicXML and MEI using scorelib, an open-source library. Knowledge of the SCORE data format is useful for projects working on OMR (Optical Music Recognition) as it can be used as an intermediate layer between the raw scans and other digital music notation representation systems, as well as going in the other direction again from generalized music representations to specific graphical layouts.'
  },
  {
    auth:'Thor Magnusson',
    title:'Code scores in Live Coding',
    pdf: 'proceedings/2015/21-Magnusson-CodeScores.pdf',
    abstract: 'This paper explores the idea of live coding programming environments as notational systems. The improvisational practice of live coding as combining both composition and performance is introduced and selected systems are discussed. The author\'s Threnoscope system is then intro- duced, but this is a system that contains both descriptive and prescriptive scores that can be changed in real-time.'
  },
  {
    auth:'Peter McCulloch',
    title:'THEMA: A Music Notation Software Package with Integrated and Automatic Data Collection',
    pdf: 'proceedings/2015/23-McCulloch-Thema.pdf',
    abstract: 'This paper introduces Thema, a custom music notation software environment designed to automatically and transparently capture quantitative data into a relational database. The majority of research into musical creativity is qualitative in nature, and this software addresses several areas, such as search and improvisational data, which are not well-addressed in the qualitative toolkit. Thema\'s database provides advantages over ad hoc file collection mechanisms by providing integrated search; the software also is able to consistently identify musical material via automatically assigned identification codes, and this provides a useful supplement to content-based search. In 2013, a study was conducted of ten graduate-level composers using Thema, and the dataset from this study was used to develop new analytical tools for examining compositional data.'
  },
  {
    auth:'Daniel Spreadbury and Robert Piéchaud',
    title:'Standard Music Font Layout (SMuFL)',
    pdf: 'proceedings/2015/24-Spreadbury-SMuFL.pdf',
    abstract: 'Digital typefaces containing the symbols used in Western common music notation have been in use for 30 years, but the development of the repertoire of symbols that are included, their assignment to code points, and design considerations such as glyph metrics and registration, have been rather ad hoc. The Standard Music Font Layout (SMuFL) establishes guidelines for all of these areas, and a reference implementation is available in the Bravura font family. Software developers and font designers alike are beginning to develop implementations of SMuFL in their products, and benefits including easier data interchange, interoperability of fonts with a variety of software packages, are already being felt.'
  },
  {
    auth:'Rama Gottfried',
    title:'SVG to OSC Transcoding as a Platform for Notational Praxis and Electronic Performance',
    pdf: 'proceedings/2015/25-Gottfried-SVG-OSC-Notation.pdf',
    abstract: 'In this paper presents a case study in the creation of an open notational framework for experimentation with new types of notation that may be applied in a wide variety of contexts. By separating the visual representation from the act of rendering, a space for an interpretive grammar layer is created in which symbolic notation may be translated into a format that is understood by another form of rendering. Technical details of preliminary work on this topic is presented, using Scalable Vector Graphics (SVG) as a container for hierarchical score information which is then transcoded to OpenSoundControl (OSC) as an intermediate data processing before being passed to a given rendering context.'
  },
  {
    auth:'Trevor Bača, Josiah Oberholtzer, Jeffrey Treviño and Víctor Adán',
    title:'Abjad: An Open-source Software System for Formalized Score Control',
    pdf: 'proceedings/2015/26-Baca-ABJAD.pdf',
    abstract: 'The Abjad API for Formalized Score Control extends the Python programming language with an open-source, object-oriented model of common-practice music notation that enables composers to build scores through the aggregation of elemental notation objects. A summary of widely used notation systems’ intended uses motivates a discussion of system design priorities via examples of system use.'
  },
  {
    auth:'Carlo Laurenzi and Marco Stroppa',
    title:'The Notation of Dynamic Levels in the Performance of Electronic Music',
    pdf: 'proceedings/2015/27-Laurenzi-DynamicLevels.pdf',
    abstract: 'The “sound diffusion” (or “sound projection”), that is, “the projection and the spreading of sound in an acoustic space for a group of listeners”[1], of works for solo electronics or for acoustic instruments and electronics (so called, “mixed pieces”), has always raised the issue of notating the levels to be reproduced during a concert or the correct balance between the electronics and the instruments. If, in the last decades, some attempts were made by few composers or computer-music designers, mostly in the form of scores, none of these managed to establish a common practice. In addition, little theoretical work has been done so far to address the performative aspects of a piece, that is, to provide just the useful information to the person in charge of the sound diffusion. Through the discussion of three historical examples and the analysis of two experiences we developed, we will try to identify some possibly general solutions that could be adopted independently on the aesthetic or tech-nological choices of a given piece.'
  },
  {
    auth:'David Hirst',
    title:'Automated Representations of Temporal Aspects of Electroacoustic Music: Recent Experiments Using Perceptual Models',
    pdf: 'proceedings/2015/28-Hirst-PerceptualModels.pdf',
    abstract: 'Within this paper we firstly examine the determination of a number of temporal aspects of Electroacoustic Music, and their representations. Then various automated segmentation methods, for Harrison’s Unsound Objects, are investigated. We find the multi-granular approach outlined by Lartillot et al, combined with the use of MFCCs, is a very efficient and salient segmentation strategy for music structured predominantly according to timbre. Further, the ‘Contrast’ parameter is both versatile and effective in determining the granularity of segmentation.'
  },
  {
    auth:'Chris Nash',
    title:'The Cognitive Dimensions of Music Notations',
    pdf: 'proceedings/2015/29-Nash-CognitiveDimension.pdf',
    abstract: 'This paper presents and adapts the Cognitive Dimensions of Notations framework (Green and Petre, 1996) for use in designing and analysing notations (and user interfaces) in both digital and traditional music practice and study. Originally developed to research the psychology of programming languages, the framework has since found wider use in both general HCI and music. The paper provides an overview of the framework, its application, and a detailed account of the core cognitive dimensions, each discussed in the context of three music scenarios: the score, Max/MSP, and sequencer/DAW software. Qualitative and quantitative methodologies for applying the framework are presented in closing, highlighting directions for further development of the framework.'
  },
  {
    auth:'Benjamin Bacon and Marcelo Wanderley',
    title:'Tufte Design Concepts in Musical Score Creation',
    pdf: 'proceedings/2015/30-Bacon-TufteDesign.pdf',
    abstract: 'This paper introduces several examples of utilizing the information design concepts of Edward Tufte in musical no- tation and score design. Tufte is generally considered a modern pioneer in the field of information design. With several authoritative texts, Tufte’s work displays countless examples of successful and unsuccessful attempts of displaying information while also offering a few personal redesigns of especially troubled instances. Overall, Tufte reveals interesting concepts which could be useful when applied to designing musical notation systems. The author presents three personal notational examples which have been aided by Tufte’s work. Information design is a vast multidisciplinary field which could provide composers and musicians with an abundance of technical approaches to complex notational challenges.'
  },
  {
    auth:'Eric Maestri and Pavlos Antoniadis',
    title:'Notation as Instrument: From Representation to Enaction',
    pdf: 'proceedings/2015/31-Maestri-NotationAsInstrument.pdf',
    abstract: 'The paper explores the hybridization of notation and instrument as a cognitive movement from representation to enaction. Features of such hybridization are latent in every notation, as a mix of descriptive and prescriptive functions. Current advances in the fields of computer music representation (interactive scores) and New Interfaces for Musical Expression, with precedents in graphic and action-oriented scores, are turning notation into a shared multimodal platform between composer and performer, liquidizing the limit between notation and instrument. We will present this dynamic rapport between scores and interfaces (haptic interactions, INScore, GesTCom, post-Klaus K. Hübler tablature notations of decoupled action-structures) in the light of theoretical models (enaction defined as navigation of affordances from the field of embodied and extended cognition, Leman’s action-reaction cycle extended from instrument-making into notation, Veitl’s conception of software as tablature, Atau Tanaka’s definition of instruments as open-ended systems etc.). We are following an explicit line from new interfaces involving notation back to graphic and action-oriented scores, considering them in the theoretical framework of enaction.'
  },
  {
    auth:'Andrew Blackburn and Jean Penny',
    title:'Timbral Notation from Spectrograms: Notating the Un-Notatable?',
    pdf: 'proceedings/2015/32-Blackburn-TimbralNotation.pdf',
    abstract: 'This paper outlines the background to a research project currently underway in Malaysia that, through spectography seeks to find models that might assist in the future development of a timbral notation. Located within the music creation and performance practices of the researchers, the project has elements of interculturality which both enrich and inform the research. The authors consider the nature of a music score, the explicit and implicit information it carries, and how this impacts on the models being developed. The understandings elicited to date are not only located in music practice, but are underpinned and supported by the theoretical works of a number of recent philosophers and theorists. The overall research project is broken down into smaller discrete sub-projects which are discussed, and the findings of each sub-project are then contextualized in the wider project. These findings include a discussion of the score as artifact and the potential contained within it. The finding in two sub-projects of a possible model of gestural notation, albeit with different purposes, suggests this as a further avenue of research. The paper concludes with some suggestions of future research areas that will follow on from the models of timbral notation being explored in this project.'
  },
  {
    auth:'Pedro Rebelo',
    title:'Composing with Graphics: Revealing the Compositional Process through Performance',
    pdf: 'proceedings/2015/33-Rebelo-CompositionWithGraphics.pdf',
    abstract: 'The research presented here is product of a practice-based process that primarily generates knowledge through col-laboration and exchange in performance situations. It is this collaboration and exchange with various musicians over a period of five years that constitutes a body of practice that is here reflected upon. The paper focuses on non-instructional graphic scores and presents some insights based on performances of works by the author. We address how composition processes are revealed in graphic scores by looking at the conditions of decision making at the point of preparing a performance. We argue that three key elements are at play in the interpretation of these types of graphic scores: performance practice, mapping and musical form. By reflecting particularly on the work Cipher Series (Rebelo, 2010) we offer insights into the strategies for approaching the performance of graphic scores that go beyond symbolic codification.'
  },
  {
    auth:'Nadine Baptiste',
    title:'Access to musical information for blind people',
    pdf: 'proceedings/2015/34-BaptisteJessel-NotationForBlindPeople.pdf',
    abstract: 'In this paper we describe our approach to help blind people to access musical information. Guidelines of our approach are centered on information accessibility according to user disability. We present the process which permits to code and transform musical information to be read, treat and analyze by a Blind musician. We focus our proposition on the various level of description of the score done by several code and we exploit and describe existing results like BMML (Braille Music Markup Lan-guage) defined during Contrapunctus European project. We describe and comment different scenarios using existing free transformation modules and software to obtain a score in BMML in order to be read and manipulate by a Blind people with BMR (Braille Music Reader) and the recommendation and tutorials propositions done during the Musi4vip European project.'
  },
  {
    auth:'Grigore Burloiu and Arshia Cont',
    title:'Non-overlapping, Time-coherent Visualisation of Action Commands in the AscoGraph Interactive Music User Interface',
    pdf: 'proceedings/2015/35-Burloiu-Ascograph.pdf',
    abstract: 'Integrated authoring and performing of Mixed Music scores, where musicians interact dynamically with computer-controlled electronics, is enabled by the Antescofo state-of-the-art software package. Composers are able to plan computerised actions through a dedicated programming language, and performances are then synchronised in real time. AscoGraph is the dedicated graphical interface that allows users to configure Antescofo behaviours and visualise their layout over a Mixed Music score. This paper presents developments in the direction of increased clarity and coherence of AscoGraph’s visualisation of computerised action scores. Algorithms for efficient automatic stacking of time-overlapping action blocks are presented, as well as a simplified model for displaying atomic actions. The paper presents the improvements in score readability achieved, as well as the challenges faced towards a complete representation of dynamic mixed scores in the AscoGraph visual environment.'
  },
  {
    auth:'Georg Hajdu',
    title:'Dynamic Notation – A Solution to the Conundrum of Non-Standard Music Practice',
    pdf: 'proceedings/2015/36-Hajdu-DynamicNotation.pdf',
    abstract: 'This paper discusses dynamic notation—a method allowing, in a notation environment, instant switching between different views or notation styles, thus creating a common ground for practitioners of non-standard music, such as composers, performers, conductors and scholars. A plugin structure for different notation styles based on a set of maps and queries executed during note entry and rendering, affecting music glyph choice and placement was implemented in the MaxScore Editor—a notation editor designed to run in Max or Ableton Live. We will give an in-depth analysis of the methods used for equidistant scales, non-octave tunings, music in just intonation as well as for instrument-specific layouts and will con-clude with a description of a scenario in which dynamic notation was used for the transcription and performance of Alexander Scriabin’s piano poem Vers la Flamme op. 72 by an ensemble of acoustic Bohlen-Pierce instruments.'
  }
]);
