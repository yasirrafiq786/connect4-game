import React, {useRef, useState} from 'react';

const Square = (props) => {
  const [clicked, setClicked] = useState(false);
  const square = useRef();

  const colorChanger = () => {
    if (!clicked) {
      props.togglePlayer(props.currentPlayer);
      if (props.currentPlayer === '1') {
        square.current.style.backgroundColor = 'red';
      } else if (props.currentPlayer === '2') {
        square.current.style.backgroundColor = 'blue';
      } else {
        return;
      }
    }
  };

  const clickHandler = () => {
    props.squareHandler(props.currentPlayer);
    colorChanger();
    setClicked(true);
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
