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

export default class IncenseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const incenseButton = Lottie.loadAnimation({
      // eslint-disable-line
      container: document.getElementById('incense-button'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/images/obon-festival-game/incense_button.json',
    });
  }

  render() {
    return (
      <div>
        <Wrapper
          id="incense-button"
          onClick={this.props.onClick}
          style={{ display: this.props.show === true ? 'block' : 'none' }}
        />
      </div>
    );
  }
}
