import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 3%;
  right: 0;
  left: 0;
  height: 35%;
`;

export default class Censer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const censer = Lottie.loadAnimation({
      container: document.getElementById('censer'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/censer.json',
    });

    this.setState({ censer });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.start && this.props.start) {
      this.state.censer.play();
    }
  }

  render() {
    return <Wrapper id="censer" />;
  }
}
