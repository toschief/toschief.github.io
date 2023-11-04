function vigenereCipher() {
  let key = document.getElementById("keyinputv").value;
  let inputText = document.getElementById("inputv").value;

  if (document.getElementById("r2v").checked) {
    let encryptedText = vigenereEncrypt(inputText, key);
    document.getElementById("outputv").innerHTML = encryptedText;
  } else {
    decryptedText = vigenereDecrypt(inputText, key);
    document.getElementById("outputv").innerHTML = decryptedText;
  }
}

function vigenereEncrypt(plainText, key) {
  plainText = plainText.toUpperCase();
  key = key.toUpperCase();
  const keyLength = key.length;
  let encryptedText = "";

  for (let i = 0; i < plainText.length; i++) {
    const plainChar = plainText.charAt(i);
    const keyChar = key.charAt(i % keyLength);

    if (plainChar >= "A" && plainChar <= "Z") {
      const plainCode = plainChar.charCodeAt(0) - 65;
      const keyCode = keyChar.charCodeAt(0) - 65;
      const encryptedCode = (plainCode + keyCode) % 26;
      const encryptedChar = String.fromCharCode(encryptedCode + 65);
      encryptedText += encryptedChar;
    } else {
      encryptedText += plainChar;
    }
  }

  return encryptedText;
}

function vigenereDecrypt(encryptedText, key) {
  encryptedText = encryptedText.toUpperCase();
  key = key.toUpperCase();
  const keyLength = key.length;
  let decryptedText = "";

  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedChar = encryptedText.charAt(i);
    const keyChar = key.charAt(i % keyLength);

    if (encryptedChar >= "A" && encryptedChar <= "Z") {
      const encryptedCode = encryptedChar.charCodeAt(0) - 65;
      const keyCode = keyChar.charCodeAt(0) - 65;
      let decryptedCode = (encryptedCode - keyCode) % 26;
      if (decryptedCode < 0) {
        decryptedCode += 26;
      }
      const decryptedChar = String.fromCharCode(decryptedCode + 65);
      decryptedText += decryptedChar;
    } else {
      decryptedText += encryptedChar;
    }
  }

  return decryptedText;
}
