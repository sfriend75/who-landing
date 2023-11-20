/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Color from 'color';
import breakpoints from '../utils/breakpoints';
import Header from '../components/Header';
import { landingBackgroundImage, landingBackgroundColor } from '../config';
import micFill from '../img/mic-fill.svg';
import videoFill from '../img/camera-video-fill.svg';

function Landing({ className }) {
  // Function to handle messages from the iframe]

  const maxIframeafterTimeout = () => {
    console.log('****** Start maxIframeafterTimeout:');
    setTimeout(() => {
      console.log('Delayed for 5 second.');
      const iframe = document.getElementById('frameDP');
      iframe.style.width = `${window.innerWidth}px`;
      iframe.style.height = `${window.innerHeight}px`;
    }, 5000);

    console.log('****** End maxIframeafterTimeout:');
  };

  // function checkSpinner() {
  //   const iframe = document.getElementById('myIframe');
  //   console.log('***** checking for spinner');
  //   const spinnerEls = iframe.contentDocument.getElementsByClassName('loading-spinner');
  //   if (spinnerEls.length === 0) {
  //     console.log('load complete');
  //     // TODO: kill the timer
  //   }
  // }

  return (
    <div className={className}>
      <div className="landing-wrapper">
        <Header />
        <div className="container d-flex">
          <div className="landing-container flex-grow-1">
            <div className="col-12 col-lg-6" style={{ width: '36%', color: '#2F5A93' }}>
              <div className="row" style={{ marginBottom: '9px' }}>
                <div>
                  <h1 className="fw-bol">Hola, soy Florencia, la asistente digital de la OMS.</h1>
                </div>
              </div>
              <div className="row">
                <div>
                  <h4 className="fw-light" style={{ marginBottom: '31px', color: '#2F5A93' }}>
                    Enseguida vamos a empezar. Mientras tanto, quiero mostrarle algunos de los temas en los que estoy especializada
                  </h4>
                </div>
              </div>
              <div className="row" style={{ marginBottom: '60px' }}>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    El tabaquismo, los cigarrillos electronicos y el vapeo
                  </div>
                </div>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    Las bebidas alcoholicas
                  </div>
                </div>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    Las vacunas contra la COVID-19
                  </div>
                </div>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    La salud mental
                  </div>
                </div>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    La alimentacion aludable
                  </div>
                </div>
                <div>
                  <div
                    className="shadow btn primary-accent fs-3 topic-list"
                    type="button"
                    disabled
                  >
                    La actividad fisica
                  </div>
                </div>
              </div>
              <div className="col" />
            </div>
          </div>
          <div
            className="d-none d-lg-block"
            style={{
              width: '250px',
              position: 'fixed',
              right: '20px',
            }}
          />

          {/* </div> */}
          <iframe title="soul machines test" onLoad={() => maxIframeafterTimeout()} id="frameDP" src="https://who-en.digitalhero.cloud/session" />
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Landing)`
iframe {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 25%;
}
.topic-list{
  margin-bottom: 10px;
  background-color: #2F5A93;
  border-color: #2F5A93;
  border-radius: 15px;
  padding: 5px 20px;
}
  .landing-wrapper {
    min-height: 100vh;

    background: ${landingBackgroundImage ? `url(${landingBackgroundImage})` : ''} ${landingBackgroundColor ? `${landingBackgroundColor};` : ''};
    background-size: auto 60%;
    background-repeat: no-repeat;
    background-position: bottom center;

    @media (min-width: ${breakpoints.lg}px) {
      background-size: 60% auto;
      background-position: left bottom;
    }
  }
  .landing-container {
    padding-top: 1rem;
    display: flex;
    justify-content: right;

    &>div {
      background-color: ${Color(landingBackgroundColor).alpha(0.5)};
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0,0,0,0.1);
      padding: 1rem;
      border-radius: 5px;

      @media (min-width: ${breakpoints.lg}px) {
        border: none;
      }
    }
  }
  .form-switch .form-check-input {
    min-width: 7rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    &.mic-switch::before, &.mic-switch.status-checked::after {
        background-image: url(${micFill});
    }
    &.video-switch::before, &.video-switch.status-checked::after {
        background-image: url(${videoFill});
    }
    &.mic-switch.status-checked::before, &.video-switch.status-checked::before {
      background-image: none;
    }

    &.status-unchecked {
      &::after {
        content: 'OFF';
        color: #000;
        margin-right: 18%;
      }
      &::before {
        background-size: 60%;
        background-repeat: no-repeat;
        background-color: rgb(220, 220, 220);
        background-position: 45% center;
        content: '';
        display: block;

        border-radius: 50%;

        height: 80%;
        margin-left: 5%;
        aspect-ratio: 1;
        float: right;
      }
    }

    &.status-checked {
      &::before {
        content: 'ON';
        color: #FFF;
        margin-left: 22%;
      }

      &::after {
        background-size: 60%;
        background-repeat: no-repeat;
        background-color: #FFF;
        background-position: 55% center;
        content: '';
        display: block;

        border-radius: 50%;

        height: 80%;
        margin-right: 5%;
        aspect-ratio: 1;
        float: right;
      }
    }
  }

`;
