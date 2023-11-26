
        function generateKey() {
            const keyword = document.getElementById('keygeninput').value;
            const key = generateVigenereKey(keyword);
            document.getElementById('keygenoutput').innerText = key;
        }

        function generateVigenereKey(keyword) {
            const keyLength = keyword.length;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let key = '';

            for (let i = 0; i < keyLength; i++) {
                const keywordChar = keyword.charAt(i).toUpperCase();
                const keywordIndex = characters.indexOf(keywordChar);

                // Shift the characters to the right by the keyword index
                const shiftedCharacters = characters.substring(keywordIndex) + characters.substring(0, keywordIndex);

                key += shiftedCharacters;
            }

            return key;
        }
		