import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 34%;
  height: 28%;
`;

export default class FruitOffering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fruitOffering = Lottie.loadAnimation({
      container: document.getElementById('fruit-offering'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/fruitoffering.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
      },
    });
    const fruitOfferingLoop = Lottie.loadAnimation({
      container: document.getElementById('fruit-offering-loop'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/loopfruitoffering.json',
      rendererSettings: {
        filterSize: {
          width: '1.2',
          height: '1.2',
          x: '0',
          y: '0',
        },
      },
    });

    fruitOffering.addEventListener('complete', () => {
      const fruitOfferingEl = document.getElementById('fruit-offering');
      if (fruitOfferingEl) fruitOfferingEl.style.display = 'none';
      const fruitOfferingLoopEl = document.getElementById(
        'fruit-offering-loop'
      );
      if (fruitOfferingLoopEl) fruitOfferingLoopEl.style.display = 'block';
      fruitOfferingLoop.play();
    });
    this.setState({ fruitOffering });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      this.state.fruitOffering.play();
    }
  }

  render() {
    return (
      <div>
        <Wrapper id="fruit-offering" />
        <Wrapper id="fruit-offering-loop" style={{ display: 'none' }} />
      </div>
    );
  }
}
