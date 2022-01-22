import React from 'react';
import ReactDOM from 'react-dom';
import ObonFestivalGame from './ObonFestivalGame';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

ReactDOM.render(
  <Wrapper>
    <ObonFestivalGame />
  </Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
