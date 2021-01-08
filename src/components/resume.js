import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl';
import { Route } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInLeftBig } from 'react-animations';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import '../App.css';
import { AvMicNone } from 'material-ui/svg-icons';

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
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
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
            description:
              'This module provide a great overview of how programming language works for student who have no prior coding experience using C programming language.',
          },
          {
            module: 'Circuit Principles I&II',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Digital System Design',
            score: 84,
            description: 'Learn how to program',
          },
          {
            module: 'Electrical Power and Machines',
            score: 63,
            description: 'Learn how to program',
          },
          {
            module: 'Engineering Mathematics I&II',
            score: 71,
            description: 'Learn how to program',
          },
          {
            module: 'Engineering Design and Practice',
            score: 68,
            description: 'Learn how to program',
          },
          {
            module: 'Electronic Materials and Devices',
            score: 50,
            description: 'Learn how to program',
          },
          {
            module: 'Communication (Electronic)',
            score: 57,
            description: 'Learn how to program',
          },
          {
            module: 'English Language and Study Skills',
            score: 70,
            description: 'Learn how to program',
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
            description: 'Learn how to program',
          },
          {
            module: 'Architecture and Networks',
            score: 66,
            description: 'Learn how to program',
          },
          {
            module: 'Information Modelling',
            score: 60,
            description: 'Learn how to program',
          },
          {
            module: 'Software Development - Process and Practice',
            score: 61,
            description: 'Learn how to program',
          },
          {
            module: 'Data Structures, Algorithms and Programming Languages',
            score: 60,
            description: 'Learn how to program',
          },
          {
            module: 'Professional Computing Practice',
            score: 80,
            description: 'Learn how to program',
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
            description: 'Placement',
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
            score: 80,
            description: 'Learn how to program',
          },
          {
            module: 'Advanced Computer Architecture',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Software Engineering Project',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Malware Analysis',
            score: 70,
            description: 'Learn how to program',
          },
          {
            module: 'Cloud Computing',
            score: 70,
            description: 'Learn how to program',
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
                    <TableCell>Module</TableCell>
                    <TableCell align='right'>Score</TableCell>
                    <TableCell align='right'>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.modules.map((moduleRow) => (
                    <TableRow key={moduleRow.module}>
                      <TableCell component='th' scope='row'>
                        {moduleRow.module}
                      </TableCell>
                      <TableCell align='right'>{moduleRow.score}</TableCell>
                      <TableCell align='right'>
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
    2018
  ),
  createData(2019, "Queen's Unversity Belfast", 2019),
  createData(2020, 'Sensata Technologies', 2020),
  createData(2021, "Queen's University Belfast", 2021),
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
                />
              </div>

              <h2 style={({ paddingTop: '2em' }, styles.leftSide)}>
                Jia Liang Lee
              </h2>
              <h4 style={({ color: 'grey' }, styles.leftSide)}>
                Software Developer
              </h4>
              <hr style={{ borderTop: '3px solid #000000' }} />
              <p>I will be a graduate softw</p>
              <hr style={{ borderTop: '3px solid #000000' }} />
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
              <hr style={{ borderTop: '3px solid #000000' }} />
            </Cell>
            <Cell className='resume-right-col' col={7}>
              <h2>Education</h2>

              <Education
                startYear={2018}
                endYear={2021}
                schoolName="Queen's University Belfast (Northern Ireland)"
                schoolDescription="I enroled in Software engineering programme in Queen's University Belfast and spent a working as a intern in Sensata Technologies as part our school programme"
              />
              <Education
                startYear={2017}
                endYear={2017}
                schoolName='Singapore Institute of Management (Singapore)'
                schoolDescription='I spent a semester studying Bachelor of Accounting and decided to dropout and continue my study on software related field'
              />

              <Education
                startYear={2011}
                endYear={2016}
                schoolName='Chong Hwa High School (Malaysia)'
                schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2>Modules</h2>
              <TableContainer component={Paper}>
                <Table aria-label='collapsible table' className='table'>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell>Year</TableCell>
                      <TableCell>School</TableCell>
                      <TableCell align='right'>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row key={row.year} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <h2>Experience</h2>

              <Experience
                startYear={2019}
                endYear={2020}
                jobName='Project Quality Engineer'
                jobDescription='I worked for Sensata Technologies as project quality engineer to assure the deliver of the project is monitored and controlled with the industry standard; During my 10 months of employment I received '
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2>Skills</h2>
              <Skills skill='javascript' progress={100} />
              <Skills skill='HTML/CSS' progress={80} />
              <Skills skill='NodeJS' progress={50} />
              <Skills skill='React' progress={25} />
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Resume;
