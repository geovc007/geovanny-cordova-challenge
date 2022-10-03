const { count } = require("../models/Mutant");

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

const verificarMutanteDiv = (dna) => {
  let matrizDNA = [];
  for (const element of dna) {
    matrizDNA.push(element.split(""));
  }
  let matColum = [];
  let newRow = "";
  for (let i = 0; i < matrizDNA.length; i++) {
    let count = i;
    let col = 0;
    for (let j = i; j < matrizDNA.length; j++) {
      newRow += matrizDNA[col][j];
      count++;
      col++;
      if (count === matrizDNA.length) {
        if (newRow.length > 3) {
          matColum.push(newRow);
        }
        newRow = "";
      }
    }
    let countR = matrizDNA.length - 1;
    let colR = i;
    newRow="";
    for (let j = matrizDNA.length - 1; j >= i; j--) {
      newRow += matrizDNA[j][colR];
      countR++;
      colR++;
      if (colR === matrizDNA.length) {
        if (newRow.length > 3) {
          matColum.push(newRow);
        }
        newRow = "";
      }
    }
    let countL = i
    let colL = 0;
    for (let j = (matrizDNA.length- 1) - i; j >= 0; j--) {
      newRow += matrizDNA[j][colL];
      countL++;
      colL++;
      if (colL === (matrizDNA.length-i)) {
        if (newRow.length > 3) {
          matColum.push(newRow);
        }
        newRow = "";
      }
    }
  }
  return verificarMutanteRow(matColum);
};

module.exports = {
  verificarMutanteRow,
  verificarMutanteCol,
  verificarMutanteDiv,
};
