import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInLeftBig } from 'react-animations';
import profile_pic from '../picture/profile_pic.jpg';

const styles = {
  bannerFadeIn: {
    animationDuration: '3s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  textFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  imageFadeIn: {
    animationDuration: '6s',
    animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig'),
  },
  socialFadeIn: {
    animationDuration: '10s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class Landing extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Grid className='landing-grid'>
            <Cell col={12}>
              <div className='avatar-toolbar-splitter'></div>
              <img
                style={styles.imageFadeIn}
                src={profile_pic}
                alt='Avatar'
                className='avatar'
                height='500px'
              />

              <div className='banner-text' style={styles.bannerFadeIn}>
                <h1 style={styles.textFadeIn}>Full Stack Web Developer</h1>
                <hr />
                <p style={styles.textFadeIn}>
                  HTML/CSS | JavaScript | React | React Native | NodeJS |
                  Express | MongoDB | SQL
                </p>
                <Grid>
                  <div className='social-links' style={styles.socialFadeIn}>
                    {/* LinkedIn */}
                    <Cell col={6}>
                      <a
                        href='https://www.linkedin.com/in/jia-liang-lee'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <i
                          className='fa fa-linkedin-square'
                          aria-hidden='true'
                        />
                      </a>
                    </Cell>

                    {/* Github */}
                    <Cell col={6}>
                      <a
                        href='https://github.com/kemoosabee'
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <i className='fa fa-github-square' aria-hidden='true' />
                      </a>
                    </Cell>
                  </div>
                </Grid>
              </div>
            </Cell>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}

export default Landing;
