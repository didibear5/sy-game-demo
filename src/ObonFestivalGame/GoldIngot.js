import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  height: 28%;
`;

export default class Goldingot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const goldIngot = Lottie.loadAnimation({
      container: document.getElementById('gold-ingot'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/images/obon-festival-game/goldingot.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
        preserveAspectRatio: 'xMaxYMid meet',
      },
    });
    const goldIngotLoop = Lottie.loadAnimation({
      container: document.getElementById('gold-ingot-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/images/obon-festival-game/loopgoldingot.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
        preserveAspectRatio: 'xMaxYMid meet',
      },
    });

    goldIngot.addEventListener('complete', () => {
      const goldIngotEl = document.getElementById('gold-ingot');
      if (goldIngotEl) goldIngotEl.style.display = 'none';
      const goldIngotLoopEl = document.getElementById('gold-ingot-loop');
      if (goldIngotLoopEl) goldIngotLoopEl.style.display = 'block';
      goldIngotLoop.play();
    });
    this.setState({ goldIngot });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      this.state.goldIngot.play();
    }
  }

  render() {
    return (
      <div style={{ display: this.props.show === true ? 'block' : 'none' }}>
        <Wrapper id="gold-ingot" />
        <Wrapper id="gold-ingot-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
