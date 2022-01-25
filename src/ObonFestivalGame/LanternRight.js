import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  right: 2%;
  height: 28%;
`;

export default class LanternRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const lantern = Lottie.loadAnimation({
      container: document.getElementById('lantern-right'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/lantern.json',
      rendererSettings: {
        preserveAspectRatio: 'xMaxYMid meet',
      },
    });
    const lanternLoop = Lottie.loadAnimation({
      container: document.getElementById('lantern-right-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/looplantern.json',
      rendererSettings: {
        preserveAspectRatio: 'xMaxYMid meet',
      },
    });

    lantern.addEventListener('complete', () => {
      const lanternEl = document.getElementById('lantern-right');
      if (lanternEl) lanternEl.style.display = 'none';
      const lanternLoopEl = document.getElementById('lantern-right-loop');
      if (lanternLoopEl) lanternLoopEl.style.display = 'block';
      lanternLoop.play();
    });
    setTimeout(() => {
      lantern.play();
    }, 500);
  }

  render() {
    return (
      <div>
        <Wrapper id="lantern-right" />
        <Wrapper id="lantern-right-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
