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

export default class MeatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const meatButton = Lottie.loadAnimation({
      container: document.getElementById('meat-button'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: process.env.PUBLIC_URL + '/images/obon-festival-game/meat_button.json',
    });
  }

  render() {
    return (
      <div>
        <Wrapper
          id="meat-button"
          onClick={this.props.onClick}
          style={{ display: this.props.show === true ? 'block' : 'none' }}
        />
      </div>
    );
  }
}
