function performCipher() {
  const key = document.getElementById("keyinputp").value;
  const text = document.getElementById("inputp").value;
  const result = document.getElementById("outputp");
  let operation = false;
  if (document.getElementById("r1p").checked) {
    operation = true;
  }
  const encryptedText = playfairCipher(key, text, operation);
  document.getElementById("outputp").innerHTML = encryptedText;
}

function playfairCipher(key, text, isDecrypt) {
  function prepareText(text) {
    return text.replace(/\s/g, "").toUpperCase();
  }

  function createMatrix(key) {
    key = key.replace(/j/gi, "i"); // Replace 'j' with 'i'
    const matrix = Array(5)
      .fill(0)
      .map(() => Array(5).fill(""));
    const keySet = new Set();
    let row = 0;
    let col = 0;

    for (let i = 0; i < key.length; i++) {
      const letter = key[i].toUpperCase();
      if (!keySet.has(letter)) {
        matrix[row][col] = letter;
        keySet.add(letter);
        col++;
        if (col === 5) {
          col = 0;
          row++;
        }
      }
    }

    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 25; i++) {
      const letter = alphabet[i];
      if (letter !== "J" && !keySet.has(letter)) {
        matrix[row][col] = letter;
        col++;
        if (col === 5) {
          col = 0;
          row++;
        }
      }
    }

    return matrix;
  }

  function findCoordinates(matrix, letter) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (matrix[i][j] === letter) {
          return { row: i, col: j };
        }
      }
    }
  }

  function performEncryption(text, matrix) {
    let result = "";
    for (let i = 0; i < text.length; i += 2) {
      const pair = text.slice(i, i + 2);
      const a = pair[0];
      const b = pair[1];
      const aCoords = findCoordinates(matrix, a);
      const bCoords = findCoordinates(matrix, b);
      let encryptedPair = "";
      if (aCoords.row === bCoords.row) {
        // Same row
        encryptedPair += matrix[aCoords.row][(aCoords.col + 1) % 5];
        encryptedPair += matrix[bCoords.row][(bCoords.col + 1) % 5];
      } else if (aCoords.col === bCoords.col) {
        // Same column
        encryptedPair += matrix[(aCoords.row + 1) % 5][aCoords.col];
        encryptedPair += matrix[(bCoords.row + 1) % 5][bCoords.col];
      } else {
        // Forming a rectangle
        encryptedPair += matrix[aCoords.row][bCoords.col];
        encryptedPair += matrix[bCoords.row][aCoords.col];
      }
      result += encryptedPair;
    }
    return result;
  }

  function performDecryption(text, matrix) {
    let result = "";
    for (let i = 0; i < text.length; i += 2) {
      const pair = text.slice(i, i + 2);
      const a = pair[0];
      const b = pair[1];
      const aCoords = findCoordinates(matrix, a);
      const bCoords = findCoordinates(matrix, b);

      if (aCoords && bCoords) {
        let decryptedPair = "";
        if (aCoords.row === bCoords.row) {
          // Same row
          decryptedPair += matrix[aCoords.row][(aCoords.col + 4) % 5];
          decryptedPair += matrix[bCoords.row][(bCoords.col + 4) % 5];
        } else if (aCoords.col === bCoords.col) {
          // Same column
          decryptedPair += matrix[(aCoords.row + 4) % 5][aCoords.col];
          decryptedPair += matrix[(bCoords.row + 4) % 5][bCoords.col];
        } else {
          // Forming a rectangle
          decryptedPair += matrix[aCoords.row][bCoords.col];
          decryptedPair += matrix[bCoords.row][aCoords.col];
        }
        result += decryptedPair;
      }
    }
    return result;
  }

  const preparedText = prepareText(text);
  const matrix = createMatrix(key);

  if (isDecrypt == true) {
    return performDecryption(preparedText, matrix);
  } else {
    return performEncryption(preparedText, matrix);
  }
}
