import styles from '../styles/home/HomeSection4.module.css'
import star from "../../assets/images/home/Star.png";
import { useState } from 'react';


export default function HomeSection4() {
  const learningPathways = [
    {
      title: "COMPUTATIONAL THINKING",
      info: `Within the programme the students are enabled to express problems and form solutions that will be designed
so a computer can be used to create diverse and encapsulating applications.`,
    },
    {
      title: "DEVELOPING DIGITAL OUTCOMES",
      info: `This programme is designed to strengthen the outcomes of each students personally to form strong
applications.`,
    },
    {
      title: "DESIGNING PROCESSED OUTCOMES",
      info: `Students will be taught the ways of how outcomes are processed, thought about, and produced. `,
    },
    {
      title: "DEVELOP VISUAL AND SOCIAL COMMUNICATIONS",
      info: `Students will learn to design visually pleasing applications used to both keep the user aware of what is
happening on the screen.`,
    },
    {
      title: "STRONG TECHNOLOGICAL PRACTICES",
      info: `The programme will show students the best practices to think and solve the problems brought on by using
technology.`,
    },
  ];
  const digitalTechnologies = [
    {
      title: `PROBLEM SOLVING`,
      info: `The programme challenges are designed to think around multiple issues and challenges the way students
interact with computers and other related technology.`,
    },
    {
      title: `DECISION-MAKING`,
      info: `The programme uses technology to make the lives of many people happier through the decisions made when
creating digital applications.`,
    },
    {
      title: `CONFIDENCE`,
      info: `When having the skills to manipulate the applications and learning to use it brings self-confidence into your life. `,
    },
    {
      title: `HIGHER SELF-EXPECTATIONS `,
      info: `This programme develops students to think the best of themselves to bring higher expectations to their
learning and lives as young adults.`,
    },
    {
      title: `COHERENCE`,
      info: `This programme offers all students a broader education that makes links within and across learning areas.`,
    },
  ];

  const keyCompetencies = [
    {
      title: "THINKING",
      info: " In particular the programme focused on problem solving, design thinking and computational thinking.",
    },
    {
      title: "DISCERNING CODES",
      info: "Analysing language, symbols, and texts in order to understand and make sense of the codes in which knowledge is expressed.",
    },
    {
      title: "SELF-MANAGEMENT",
      info: "Projects and challenges are designed to motivate students to explore and experiment with self-motivation",
    },
    {
      title: "RELATIONSHIPS WITH PEERS",
      info: "The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognise different points of view, and share ideas.",
    },
    {
      title: "PARTICIPATION AND COLLABORATION",
      info: "The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people",
    },
  ];

  const ir40 = [
    {
      title: `LEARNING TO LEARN`,
      info: `The programme will set challenges at the end of every project to encourage students to explore and learn how
to learn.`,
    },
    {
      title: `COMMUNITY ENGAGEMENT`,
      info: `The programme encourages students to be involved in the communities, such as family, friends, and in school,
to contribute and make connections with other people.
`,
    },
    {
      title: `CULTURAL DIVERSITY`,
      info: `This programme is designed in New Zealand and reflects NZ's cultural diversity`,
    },
    {
      title: `INCLUSION`,
      info: `In particular the programme is designed with acknowledgement to the student's identities and talents,
allowing them to be creative to their personal ability`,
    },
    {
      title: `FUTURE FOCUS `,
      info: `The programme leads students to explore future themes such as artificial intelligence and augmented reality.`,
    },
  ];

  const stagingAreaText = [
    {
      name:`Interlinking Pathways`,
      desc:`This programme gives us 5 important interlinking Learning Pathways.`,
      details: learningPathways,
    },
    {
      name:`Expands Digital Knowledge Base`,
      desc:`This programme gives you the 5 major capabilities to be confident in Digital Technologies.`,
      details: digitalTechnologies,
    },
    {
      name:`Enhance key competencies`,
      desc:`The programme enhances capabilities of students in the 5 Key Competencies identified in
the New Zealand Curriculum:`,
      details:keyCompetencies,
    },
    {
      name:`IR4.0`,
      desc:`Designed with IT industry experts, the programme develops the students to find applicable jobs and careers in
the Fourth Industrial Revolution. (IR4.0)`,
      details:ir40,
    },
  ]
  const [index, setIndex] = useState(0);
  function buttonClick(e) {
    switch (e.target.innerHTML) {
      case (`LEARNING PATHWAYS`):
        setIndex(0);
        break;
        case (`DIGITAL TECHNOLOGIES`):
        setIndex(1);
        break;
        case (`KEY COMPETENCIES`):
        setIndex(2);
      break;
        case (`IR4.0`):
        setIndex(3);
        break;
      default:
        setIndex(0)
    }
    console.log(e.target.innerHTML);
    // setIndex();
  }
    return (
      <div id={styles.sectionFour}>
        <div id={styles.sectionFourTitle}>
          How our programme helps teachers and schools
        </div>
        <div id={styles.buttonHolder}>
          <button
            id={index === 0 ? styles.buttonsActive : styles.buttons}
            onClick={buttonClick}
          >
            LEARNING PATHWAYS
          </button>
          <button
            id={index === 1 ? styles.buttonsActive : styles.buttons}
            onClick={buttonClick}
          >
            DIGITAL TECHNOLOGIES
          </button>
          <button
            id={index === 2 ? styles.buttonsActive : styles.buttons}
            onClick={buttonClick}
          >
            KEY COMPETENCIES
          </button>
          <button
            id={index === 3 ? styles.buttonsActive : styles.buttons}
            onClick={buttonClick}
          >
            IR4.0
          </button>
        </div>
        <div id={styles.sectionFourStagingArea}>
          <div id={styles.stagingAreaHolder}>
            <div id={styles.stagingAreaTitle}>
              {stagingAreaText[index].name}
            </div>
            <div id={styles.stagingAreaIntro}>
              {stagingAreaText[index].desc}
            </div>
            <div id={styles.stagingAreaPoints}>
              {stagingAreaText[index].details.map((item, index) => {
                return (
                  <>
                    <div className={styles.star}>
                      <img src={star} id={styles.starImage} alt="star" />
                    </div>
                    <div className={styles.point}>
                      <div className={styles.pointTitle}>{item.title}</div>
                      <div className={styles.pointInfo}>{item.info}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}