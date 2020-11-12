const matrixGenerator = () => {
  let matrix = [];
  for (let r = 0; r < 7; r++) {
    let columns = [];
    for (let c = 0; c < 6; c++) {
      columns.push(null);
    }
    matrix.push(columns);
  }

  return matrix;
};

export default matrixGenerator;
