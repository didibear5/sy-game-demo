import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 46%;
  height: 35%;
`;

export default class MeatOffering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const meatOffering = Lottie.loadAnimation({
      container: document.getElementById('meat-offering'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/images/obon-festival-game/meatoffering.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
      },
    });
    const meatOfferingLoop = Lottie.loadAnimation({
      container: document.getElementById('meat-offering-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/images/obon-festival-game/loopmeatoffering.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
      },
    });

    meatOffering.addEventListener('complete', () => {
      const meatOfferingEl = document.getElementById('meat-offering');
      if (meatOfferingEl) meatOfferingEl.style.display = 'none';
      const meatOfferingLoopEl = document.getElementById('meat-offering-loop');
      if (meatOfferingLoopEl) meatOfferingLoopEl.style.display = 'block';
      meatOfferingLoop.play();
    });
    this.setState({ meatOffering });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      this.state.meatOffering.play();
    }
  }

  render() {
    return (
      <div>
        <Wrapper id="meat-offering" />
        <Wrapper id="meat-offering-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
