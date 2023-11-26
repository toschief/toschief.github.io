function generateKey() {
    const keyLength = document.getElementById("keygeninput").innerText.length;
    const key = generateRandomVigenereKey(keyLength);
    document.getElementById('keygenoutput').innerText = key;
}

function generateRandomVigenereKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let key = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        key += characters.charAt(randomIndex);
    }

    return key;
}