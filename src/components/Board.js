import React from 'react';
import newBoard from '../helpers/newBoard';

const Board = () => {
  const renderNewBoard = newBoard().map((row) => {
    return (
      <tr>
        {row.map((col) => (
          <th
            style={{
              height: '50px',
              width: '50px',
              border: '1px solid black',
            }}
          ></th>
        ))}
      </tr>
    );
  });

  return (
    <table style={{margin: '5em auto', borderCollapse: 'collapse'}}>
      {renderNewBoard}
    </table>
  );
};

export default Board;
