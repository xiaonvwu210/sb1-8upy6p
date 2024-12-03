const HERBS = ['人参', '当归', '黄芪', '枸杞', '灵芝', '何首乌', '菊花', '红枣'];

export const generateBoard = (rows, cols) => {
  // Create pairs of herbs
  const totalCells = rows * cols;
  const herbs = [];
  
  for (let i = 0; i < totalCells / 2; i++) {
    const herb = HERBS[i % HERBS.length];
    herbs.push(herb, herb);
  }

  // Shuffle the herbs
  for (let i = herbs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [herbs[i], herbs[j]] = [herbs[j], herbs[i]];
  }

  // Create the board
  const board = [];
  let herbIndex = 0;
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(herbs[herbIndex++]);
    }
    board.push(row);
  }

  return board;
};