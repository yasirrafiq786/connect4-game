const newBoard = () => {
  let newBoard = [];
  for (let r = 0; r < 7; r++) {
    let newCol = [];
    for (let c = 0; c < 6; c++) {
      newCol.push(null);
    }
    newBoard.push(newCol);
  }

  return newBoard;
};

export default newBoard;
