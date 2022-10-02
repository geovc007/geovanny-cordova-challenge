const verificarMutanteRow = (dna) => {
  for (const element of dna) {
    let adn = element.split("");
    for (let j = 0; j < adn.length - 3; j++) {
      let count = 1;
      let sign = adn[j];
      for (let k = j + 1; k < adn.length; k++) {
        if (sign == adn[k]) {
          count++;
        } else {
          break;
        }
        if (count > 3) {
          return true;
        }
      }
    }
  }
  return false;
};

const verificarMutanteCol = (dna) => {
  let matrizDNA = [];
  console.log("dna: ", dna);
  for (const element of dna) {
    matrizDNA.push(element.split(""));
  }
  let matColum = [];
  let col = 0;
  let newRow = "";
  for (let i = 0; i < matrizDNA.length; i++) {
    for (const element of matrizDNA) {
      newRow += matrizDNA[col][i];
      col++;
      if (col == matrizDNA.length) {
        matColum.push(newRow);
        newRow = "";
        col = 0;
      }
    }
  }
  return verificarMutanteRow(matColum);
};

module.exports = { verificarMutanteRow, verificarMutanteCol };
