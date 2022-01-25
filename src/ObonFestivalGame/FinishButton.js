import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const PrayWrapper = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0%;
  right: 0;
  left: 0;
  height: 27%;
  transition: opacity 300ms ease-out;
`;

const Img = styled.img`
  opacity: 0;
  margin: auto;
  position: absolute;
  bottom: 2%;
  right: 0;
  left: 0;
  height: 12%;
  transition: opacity 300ms ease-in;
`;

const PlayAgainBtn = styled.div`
  color: #5078ff;
  font-weight: bold;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  border: 2px solid;
  border-radius: 100%;
  padding: 12px 10px;
  line-height: 1.2;
  text-align: center;
`;

export default class FinishButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
    };
  }

  componentDidMount() {
    const pray = Lottie.loadAnimation({
      container: document.getElementById('pray'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/pray.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
      },
    });

    pray.addEventListener('complete', () => {
      const playEl = document.getElementById('pray');
      if (playEl) playEl.style.opacity = 0;
      const playDoneEl = document.getElementById('pray-done');
      if (playDoneEl) playDoneEl.style.opacity = 1;
      this.setState({
        complete: true,
      });
    });
    this.setState({ pray });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      const playEl = document.getElementById('pray');
      if (playEl) playEl.style.opacity = 1;
      setTimeout(() => {
        this.state.pray.play();
      }, 500);
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PrayWrapper id="pray" />
        <Img
          id="pray-done"
          src={process.env.PUBLIC_URL + '/images/obon-festival-game/img-ghostfestival-praydone@2x.png'}
        />
        {this.state.complete ? (
          <PlayAgainBtn onClick={this.props.onPlayAgainClick}>
            <div>play</div>
            <div>again</div>
          </PlayAgainBtn>
        ) : (
          ''
        )}
      </div>
    );
  }
}
