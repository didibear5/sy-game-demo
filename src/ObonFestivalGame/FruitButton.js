import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-web';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 16%;
  cursor: pointer;
`;

export default class FruitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const fruitButton = Lottie.loadAnimation({
      // eslint-disable-line
      container: document.getElementById('fruit-button'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/fruit_button.json',
    });
  }

  render() {
    return (
      <div>
        <Wrapper
          id="fruit-button"
          onClick={this.props.onClick}
          style={{ display: this.props.show === true ? 'block' : 'none' }}
        />
      </div>
    );
  }
}
