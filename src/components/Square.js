import React, {useRef, useState} from 'react';

const Square = (props) => {
  const square = useRef();

  const colorChanger = () => {
    if (props.currentPlayer === '1') {
      square.current.style.backgroundColor = 'red';
    } else if (props.currentPlayer === '2') {
      square.current.style.backgroundColor = 'blue';
    } else {
      return;
    }
  };

  const clickHandler = () => {
    props.checkEmpty(props.coords[1]);
    props.togglePlayer(props.currentPlayer);
    props.squareHandler(props.currentPlayer);
    colorChanger();
    console.log(props.currentPlayer);
  };

  return (
    <div
      style={{
        border: '1px solid black',
        flexGrow: '1',
      }}
      onClick={() => clickHandler()}
      ref={square}
    ></div>
  );
};

export default Square;
