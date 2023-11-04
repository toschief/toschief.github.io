var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var move = 0;

function onbuttonleft() {
  move--;
  if (move < 0) {
    move = 25;
  }
  document.getElementById("keyletter").innerHTML = "Key: " + alphabet[move];
  document.getElementById("keynumber").innerHTML = move;
}

function onbuttonright() {
  move++;
  if (move > 25) {
    move = 0;
  }
  document.getElementById("keyletter").innerHTML = "Key: " + alphabet[move];
  document.getElementById("keynumber").innerHTML = move;
}

function onbuttonstart() {
  var e = document.getElementById("input").value;
  let c = e.split("");

  let counter = c.length - 1;
  let fs = [];

  for (let ct = 0; ct <= counter; ct++) {
    let target = c[ct];

    let lca = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]; // An array of lowercase letters
    let uca = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ]; // An array of uppercase letters
    let position = -1;

    for (let i = 0; i < lca.length; i++) {
      if (lca[i] == target) {
        position = i;
        break;
      }
    }
    let cu = false;
    if (position == -1) {
      for (let i = 0; i < uca.length; i++) {
        if (uca[i] == target) {
          position = i;
          cu = true;
          break;
        }
      }
    }
    if (position == -1) {
      let f = c[ct];
      fs.push(f);
    } else {
      for (let r = 0; r <= move - 1; r++) {
        if (document.getElementById("r1").checked) {
          position--;
        } else {
          position++;
        }
      }
      if (position < 0) {
        position = 26 + position;
      } else if (position > 25) {
        position = position - 26;
      }
      let f;
      if (cu == true) {
        f = uca[position];
      } else {
        f = lca[position];
      }
      fs.push(f);
    }
  }
  let fss = fs.join("");
  document.getElementById("output").innerHTML = fss; // Set the output
}
