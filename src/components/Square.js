import React, {useState, useRef} from 'react';

const Square = (props) => {
  const square = useRef();
  const clickHandler = () => {
    console.log('yes');
    if (props.start) {
      switch (props.player1) {
        case true:
          square.current.style.backgroundColor = 'blue';
          props.changePlayer();

          console.log('player 2 turn');
          break;
        case false:
          square.current.style.backgroundColor = 'red';
          props.changePlayer();
          console.log('player 1 turn');
          break;
        default:
          return;
      }
    } else {
      return;
    }
  };

  return (
    <th
      onClick={() => clickHandler()}
      ref={square}
      style={{
        height: '50px',
        width: '50px',
        border: '1px solid black',
      }}
    ></th>
  );
};

export default Square;
