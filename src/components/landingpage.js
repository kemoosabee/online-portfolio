import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Radium, { StyleRoot } from 'radium';
import { fadeIn, fadeInLeftBig } from 'react-animations';

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

              <div className='banner-text' style={styles.bannerFadeIn}>
                <h1 style={styles.textFadeIn}>Hi, </h1>
                <h3 style={styles.textFadeIn}>My name is Jia Liang Lee </h3>
                <h1 style={styles.textFadeIn}>Full Stack Web Developer</h1>

                <p style={styles.textFadeIn}>
                  JavaScript | React | NodeJS | Express | MongoDB | SQL |C++
                </p>
                <Grid>
                  <div className='social-links' style={styles.socialFadeIn}>
                    {/* LinkedIn */}
                    <Cell>
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
                    <Cell>
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
