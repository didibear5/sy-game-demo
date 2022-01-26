import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 705px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100vh;
  }
`;

export const BgImg = styled.img`
  height: 100%;
  overflow: hidden;
`;

export const Moon = styled.img`
  position: absolute;
  right: 20%;
  top: 4%;
  height: 8%;
`;

export const Tips = styled.img`
  z-index: 10;
  opacity: 0;
  position: absolute;
  bottom: 23%;
  height: 12%;
  transition: opacity 300ms ease-in;
`;
