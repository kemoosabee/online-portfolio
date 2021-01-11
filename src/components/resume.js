import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { fadeInLeftBig, fadeInRightBig } from 'react-animations';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profile_pic from '../picture/profile_pic.jpg';
import ContactForm from './contactForm';

import '../App.css';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const styles = {
  leftSide: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  rightSide: {
    animationDuration: '4s',
    animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig'),
  },
  rightSideSmall: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig'),
  },
  leftSideBorder: {
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  rightSideBorder: {
    animationDuration: '2s',
    animationName: Radium.keyframes(fadeInRightBig, 'fadeInRightBig'),
  },
};

function createData(year, school, date) {
  switch (year) {
    case 2018:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Computer Programming',
            score: 69,
            description: '-',
          },
          {
            module: 'Circuit Principles I&II',
            score: 70,
            description: '-',
          },
          {
            module: 'Digital System Design',
            score: 84,
            description: '-',
          },
          {
            module: 'Electrical Power and Machines',
            score: 63,
            description: '-',
          },
          {
            module: 'Engineering Mathematics I&II',
            score: 71,
            description: '-',
          },
          {
            module: 'Engineering Design and Practice',
            score: 68,
            description: '-',
          },
          {
            module: 'Electronic Materials and Devices',
            score: 50,
            description: '-',
          },
          {
            module: 'Communication (Electronic)',
            score: 57,
            description: '-',
          },
          {
            module: 'English Language and Study Skills',
            score: 70,
            description: '-',
          },
        ],
      };
    case 2019:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Software Engineering',
            score: 73,
            description:
              'Software process: process concepts and implementation (waterfall, iterative and incremental development); project planning and tracking (cost estimation, function point analysis, COCOMO, Gantt charts); process and system metrics.',
          },
          {
            module: 'Architecture and Networks',
            score: 66,
            description:
              'Networking: Data Compression, Network Security, Client-Server Network Architectures, Email, Routing, Local Area Network Topologies/Wireless Networks, Software Defined Networks; Architecture: Microarchitecture, Memory hierarchy, Pipelined datapaths, In-order processors, Performance evaluation',
          },
          {
            module: 'Information Modelling',
            score: 60,
            description:
              'Relational Databases: relational models, intermediate and advanced SQL; Database Design: database design processes, entity-relationship modelling, database design using E-R model, normalization theory, dependency theory; Advanced Topics on Modern Data Modelling: non-relational databases, data mining',
          },
          {
            module: 'Software Development - Process and Practice',
            score: 61,
            description:
              'Software Design: Agile and Lean software design (iterative development, agile development principles, lean development principles), User Experience design; Software Process: Contemporary programming practices, Agile and Lean development practices, Build configuration management, Versioning; Software Verification and Validation: Testing (unit and integration testing, test driven development, test coverage); Software Quality: Software quality metrics, Software profiling and performance measurement. • Security: Secure Design Principles, Developing secure software; Android (Java) app development',
          },
          {
            module: 'Data Structures, Algorithms and Programming Languages',
            score: 60,
            description:
              'Data structures: Lists, Stacks, Queues; Trees; Graphs, Sets and Maps; Asymptotic analysis of algorithms: notation and simple recurrences; Searching and Sorting, Recursion including graph recursion; Models and algorithms for parallel and distributed programming; Programming languages representation, compilation and execution (using C++) ',
          },
          {
            module: 'Professional Computing Practice',
            score: 80,
            description:
              'Presentations, preparing for employment, career management, organisational structures,. Software safety: liability and practice, anatomy of a software house, business operations, intellectual property rights, data protection, ethics, professional standards and codes of conduct, entrepreneurship and emerging technology trends.',
          },
        ],
      };
    case 2020:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Year of Professional Experience',
            score: 'Pass',
            description:
              'Students must, unless exempt spend the year preceding their Level 3 year in obtaining professional experience in a manner approved by the Placement Team; The placement normally lasts for a period of twelve months, during which time the student is a full employee and subject to all the requirements of the employer. Students must complete a minimum 9 month placement to satisfy University requirements',
          },
        ],
      };
    case 2021:
      return {
        year,
        school,
        date,
        modules: [
          {
            module: 'Concurrent Programming',
            score: 'Not yet graded',
            description:
              'Concurrent Programming Abstraction and Java Threads, the Mutual Exclusion Problem, Semaphores, Models of Concurrency, Deadlock, Safety and Liveness Properties. Notions are exemplified through a selection of concurrent objects such as Linked Lists, Queues and Hash Maps. Principles of graph analytics, experimental performance evaluation, application of concurrent programming to graph analytics.',
          },
          {
            module: 'Advanced Computer Architecture',
            score: 'Not yet graded',
            description:
              'This course is a study of the evolution of computer architecture and the factors influencing the design of hardware and software elements of computer systems. Topics may include performance issues and evaluation, instruction sets, processor micro-architecture and pipelining (basic design, hazards and speculation), caches, operating system support (virtual memory, exceptions, interrupts), in-order and out-of-order execution, parallel architectures and fault tolerance. As computer scientists or software engineers understanding how a computer works and what techniques can be used to accelerate its performance is essential. The course will prepare students for jobs in the computer engineering industry and can act as a springboard to more advanced material in graduate-level courses',
          },
          {
            module: 'Software Engineering Project',
            score: 'Not yet graded',
            description:
              'Team Project involving the development and construction of an Information Technology solution with each team member responsible for the development and construction of a sub-section of the completed solution.  Promotion and demonstration of the completed solutions to judges, peers and representatives of the computing profession. A project requiring the construction of a software system (specification, user interface design, system design, realization of system design and associated testing).',
          },
          {
            module: 'Malware Analysis',
            score: 'Not yet graded',
            description:
              'Basic Static Techniques; Cyber Security Overview; Malware Analysis in Virtual Machines; Basic dynamic analysis; X86 Disassembly; IDA Pro; Recognising C Code Constructs in Assembly; Malware Types; Analyzing Malicious Window Programs; Covert Malware Launching; Malware Behaviour and Signatures; Machine learning for malware detection',
          },
          {
            module: 'Cloud Computing',
            score: 'Not yet graded',
            description:
              'The Cloud Computing module will provide an opportunity for you to learn about and explore a wide range of concepts, technologies, providers, and applications of cloud computing. Initially the module will focus on concepts including how we design, deploy, and manage cloud software and infrastructure to ensure both high availability and elastic scaling (being able to go from thousands of users to millions of users seamlessly). You will learn in detail how software can be developed in such a way as to easily allow (or not) cloud deployment including concepts of functional and stateless programming. After covering general concepts and generic technologies such as containerisation for micro-services, virtualisation, and devops pipelines, the module moves on to look at specific modern cloud providers such as AWS, GCP, and Azure. You will examine the differences between these platforms, learn how to deploy to them, and also gain experience of meta tools which are platform-agnostic and can be used to specify and manage cloud estates covering multiple providers.',
          },
        ],
      };
    default:
      return { year, school, date, modules: [] };
  }
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} hover='true'>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.year}
        </TableCell>
        <TableCell>{row.school}</TableCell>
        <TableCell align='right'>{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell className='table-score'>Module</TableCell>
                    <TableCell className='table-score'>Score</TableCell>
                    <TableCell className='table-desc'>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.modules.map((moduleRow) => (
                    <TableRow key={moduleRow.module}>
                      <TableCell
                        component='th'
                        scope='row'
                        className='table-module'
                      >
                        {moduleRow.module}
                      </TableCell>
                      <TableCell className='table-score'>
                        {moduleRow.score}
                      </TableCell>
                      <TableCell className='table-desc'>
                        {moduleRow.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    year: PropTypes.number.isRequired,
    school: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    moduels: PropTypes.arrayOf(
      PropTypes.shape({
        module: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};

const rows = [
  createData(
    2018,
    "INTO Queen University (Pathway to Queen's University)",
    'Electrical & Electronic Engineering'
  ),
  createData(2019, "Queen's Unversity Belfast", 'Software Engineering'),
  createData(2020, 'Sensata Technologies', 'Project Quality Engineer'),
  createData(2021, "Queen's University Belfast", 'Software Engineering'),
];

class Resume extends Component {
  render() {
    return (
      <StyleRoot>
        <div className='resume-left-col'>
          <Grid>
            <Cell col={5}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={profile_pic}
                  alt='avatar'
                  style={styles.leftSide}
                  height='400px'
                  className='resume-pic'
                />
              </div>

              <h2 style={({ paddingTop: '2em' }, styles.leftSide)}>
                Jia Liang Lee
              </h2>
              <h4 style={({ color: 'grey' }, styles.leftSide)}>
                Graduate Software Developer
              </h4>

              <hr style={{ borderTop: '3px solid #000000' }} />

              <p style={styles.leftSide}>
                I am a graduate software engineer from Queen's University
                Belfast, I had a year of experience working as project quality
                engineer in Sensata Technologies.
              </p>

              <hr style={{ borderTop: '3px solid #000000' }} />

              <div style={styles.leftSide}>
                <h5>Address</h5>
                <p>5, Balfour Ave, BT7 2EU, Northern Ireland, UK</p>
                <h5>Phone</h5>
                <p>(+44) 7935 593241</p>
                <h5>Email</h5>
                <p>jialianglee98@gmail.com</p>
                <h5>Web</h5>

                <a href='https://github.com/kemoosabee'>
                  {' '}
                  <p>https://github.com/kemoosabee</p>
                </a>

                <h5>Contact me</h5>
                <Grid>
                  <Cell col={3}>
                    <ContactForm />
                  </Cell>
                  <Cell col={1} />
                </Grid>
              </div>
              <hr style={{ borderTop: '3px solid #000000' }} />
            </Cell>
            <Cell className='resume-right-col' col={7}>
              <h2 style={styles.rightSide}>Education</h2>
              <div style={styles.rightSideSmall}>
                <Education
                  startYear={2018}
                  endYear={2021}
                  schoolName="Queen's University Belfast (Northern Ireland)"
                  schoolDescription="I enroled in Bachelor of Software Engineering programme in Queen's University Belfast "
                />
                <Education
                  startYear={2017}
                  endYear={2017}
                  schoolName='Singapore Institute of Management (Singapore)'
                  schoolDescription='I spent a semester studying Diploma of Accounting and decided to dropout and continue my study on software related field'
                />

                <Education
                  startYear={2011}
                  endYear={2016}
                  schoolName='Chong Hwa High School (Malaysia)'
                  schoolDescription='I spent three years studied in Chong Hwa High School and obtained an A-Level equivalent certificate from Chong Hwa High School'
                />
              </div>
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2 style={styles.rightSide}>Modules</h2>
              <div style={styles.rightSideSmall}>
                <TableContainer component={Paper}>
                  <Table aria-label='collapsible table' className='table'>
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell>Year</TableCell>
                        <TableCell>School</TableCell>
                        <TableCell align='right'>Programme</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <Row key={row.year} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <h2 style={styles.rightSide}>Experience</h2>

              <div style={styles.rightSideSmall}>
                <Experience
                  startYear={2019}
                  endYear={2020}
                  jobName='Project Quality Engineer'
                  jobDescription='I worked for Sensata Technologies as project quality engineer to assure the deliver of the project is monitored and controlled with the industry standard'
                />
              </div>
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2 style={styles.rightSide}>Skills</h2>
              <div style={styles.rightSideSmall}>
                <Skills skill='javascript' progress={50} />
                <Skills skill='HTML/CSS' progress={80} />
                <Skills skill='NodeJS' progress={50} />
                <Skills skill='React' progress={50} />
                <Skills skill='Python 3' progress={30} />
                <Skills skill='C++' progress={30} />
              </div>
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Resume;
