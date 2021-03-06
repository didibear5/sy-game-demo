import React, { useState, useEffect } from 'react';

import { Wrapper, Moon, Tips } from './Components';
import Censer from './Censer';
import LanternRight from './LanternRight';
import LanternLeft from './LanternLeft';
import FruitButton from './FruitButton';
import PrayingCash from './PrayingCash';
import GoldIngot from './GoldIngot';
import FruitOffering from './FruitOffering';
import MeatButton from './MeatButton';
import MeatOffering from './MeatOffering';
import IncenseButton from './IncenseButton';
import FinishButton from './FinishButton';

const ObonFestivalGame = () => {
  const [playLanternAndCenser, setPlayLanternAndCenser] = useState(false);
  const [playPrayingCashAndGoldIngot, setPlayPrayingCashAndGoldIngot] =
    useState(false);
  const [playFruitOffering, setPlayFruitOffering] = useState(false);
  const [playMeatOffering, setPlayMeatOffering] = useState(false);
  const [playCenser, setPlayCenser] = useState(false);
  const [playPray, setPlayPray] = useState(false);

  const [playState, setPlayState] = useState(true);

  useEffect(() => {
    function load(src) {
      return new Promise((resolve, reject) => {
          const image = new Image();
          image.addEventListener('load', resolve);
          image.addEventListener('error', reject);
          image.src = src;
      });
    }

    const backgroundImage = process.env.PUBLIC_URL + '/images/obon-festival-game/img-ghostfestival-altar_large@2x.png';
    load(backgroundImage).then(() => {
      document.getElementById('obon-festival-gam-wrapper').style.backgroundImage = `url(${backgroundImage})`;
      startGame();
    });
  }, []);

  function startGame() {
    setTimeout(() => {
      setPlayLanternAndCenser(true);
    }, 500);
    setTimeout(() => {
      setPlayPrayingCashAndGoldIngot(true);
    }, 1500);
    setTimeout(() => {
      const fruitTipsEl = document.getElementById('fruit-tips');
      if (fruitTipsEl) fruitTipsEl.style.opacity = 1;
    }, 2000);
  }

  useEffect(() => {
    if (playState === false) {
      setPlayState(true);
      startGame();
    }
  }, [playState]);

  const onFruitButtonClick = () => {
    const fruitTipsEl = document.getElementById('fruit-tips');
    if (fruitTipsEl) fruitTipsEl.style.display = 'none';
    setPlayFruitOffering(true);
    setPlayPrayingCashAndGoldIngot(false);
    setTimeout(() => {
      const meatTipsEl = document.getElementById('meat-tips');
      if (meatTipsEl) meatTipsEl.style.opacity = 1;
    }, 1500);
  };

  const onMeatButtonClick = () => {
    const meatTipsEl = document.getElementById('meat-tips');
    if (meatTipsEl) meatTipsEl.style.display = 'none';
    setPlayMeatOffering(true);
    setPlayFruitOffering(false);
    setTimeout(() => {
      const incenseTipsEl = document.getElementById('incense-tips');
      if (incenseTipsEl) incenseTipsEl.style.opacity = 1;
    }, 1500);
  };

  const onIncenseButtonClick = () => {
    const incenseTipsEl = document.getElementById('incense-tips');
    if (incenseTipsEl) incenseTipsEl.style.display = 'none';
    setPlayCenser(true);
    setPlayMeatOffering(false);
    setTimeout(() => {
      setPlayPray(true);
    }, 1000);
  };

  const onPlayAgainClick = () => {
    setPlayLanternAndCenser(false)
    setPlayPrayingCashAndGoldIngot(false);
    setPlayFruitOffering(false);
    setPlayMeatOffering(false);
    setPlayCenser(false);
    setPlayPray(false);

    setPlayState(false);
  };

  return (
    <Wrapper id='obon-festival-gam-wrapper'>
      <Moon src={process.env.PUBLIC_URL + '/images/obon-festival-game/img-ghostfestival-sun@2x.png'}/>
      {playState ? (
        <React.Fragment>
          <LanternRight
            start={playLanternAndCenser}
            show={playLanternAndCenser}
          />
          <LanternLeft
            start={playLanternAndCenser}
            show={playLanternAndCenser}
          />
          <Tips
            id="fruit-tips"
            src={process.env.PUBLIC_URL + '/images/obon-festival-game/btn-ghostfestival-fruit@2x.png'}
          />
          <Tips
            id="meat-tips"
            src={process.env.PUBLIC_URL + '/images/obon-festival-game/btn-ghostfestival-meat@2x.png'}
          />
          <Tips
            id="incense-tips"
            src={process.env.PUBLIC_URL + '/images/obon-festival-game/btn-ghostfestival-incense@2x.png'}
          />
          <Censer start={playCenser}
            show={playLanternAndCenser} />
          <PrayingCash
            start={playPrayingCashAndGoldIngot}
            show={playPrayingCashAndGoldIngot}
          />
          <GoldIngot
            start={playPrayingCashAndGoldIngot}
            show={playPrayingCashAndGoldIngot}
          />
          <FruitOffering start={playFruitOffering} />
          <MeatOffering start={playMeatOffering} />
          <FinishButton start={playPray} onPlayAgainClick={onPlayAgainClick} />
          <IncenseButton
            show={playMeatOffering}
            onClick={onIncenseButtonClick}
          />
          <MeatButton show={playFruitOffering} onClick={onMeatButtonClick} />
          <FruitButton
            show={playPrayingCashAndGoldIngot}
            onClick={onFruitButtonClick}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default ObonFestivalGame;
