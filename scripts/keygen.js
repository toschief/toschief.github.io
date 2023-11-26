function generateKey() {
  const keyLength = document.getElementById("keygeninput").value.length;
  const key = generateRandomVigenereKey(keyLength);
  document.getElementById("keygenoutput").innerText = key;
}

function generateRandomVigenereKey(length) {
  let characters = "";

  if (document.getElementById("c1").checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("c2").checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("c3").checked) {
    characters += "0123456789";
  }

  let key = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}
