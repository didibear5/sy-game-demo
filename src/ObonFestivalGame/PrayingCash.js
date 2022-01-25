import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 40%;
  height: 28%;
`;

export default class PrayingCash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const prayingCash = Lottie.loadAnimation({
      container: document.getElementById('praying-cash'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/prayingcash.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
        preserveAspectRatio: 'xMinYMid meet',
      },
    });
    const prayingCashLoop = Lottie.loadAnimation({
      container: document.getElementById('praying-cash-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/loopprayingcash.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
        preserveAspectRatio: 'xMinYMid meet',
      },
    });

    prayingCash.addEventListener('complete', () => {
      const prayingCashEl = document.getElementById('praying-cash');
      if (prayingCashEl) prayingCashEl.style.display = 'none';
      const prayingCashLoopEl = document.getElementById('praying-cash-loop');
      if (prayingCashLoopEl) prayingCashLoopEl.style.display = 'block';
      prayingCashLoop.play();
    });
    this.setState({ prayingCash });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      this.state.prayingCash.play();
    }
  }

  render() {
    return (
      <div style={{ display: this.props.show === true ? 'block' : 'none' }}>
        <Wrapper id="praying-cash" />
        <Wrapper id="praying-cash-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
