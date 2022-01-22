import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  left: 2%;
  height: 28%;
`;

export default class LanternLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const lantern = Lottie.loadAnimation({
      container: document.getElementById('lantern-left'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/images/obon-festival-game/lantern.json',
      rendererSettings: {
        preserveAspectRatio: 'xMinYMid meet',
      },
    });
    const lanternLoop = Lottie.loadAnimation({
      container: document.getElementById('lantern-left-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/images/obon-festival-game/looplantern.json',
      rendererSettings: {
        preserveAspectRatio: 'xMinYMid meet',
      },
    });

    lantern.addEventListener('complete', () => {
      const lanternEl = document.getElementById('lantern-left');
      if (lanternEl) lanternEl.style.display = 'none';
      const lanternLoopEl = document.getElementById('lantern-left-loop');
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
        <Wrapper id="lantern-left" />
        <Wrapper id="lantern-left-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
