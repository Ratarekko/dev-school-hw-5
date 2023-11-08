function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let result = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (abc.includes(char)) {
                const keyChar = key[i % key.length];
                const shift = abc.indexOf(keyChar);
                const charIndex = abc.indexOf(char);
                const encodedCharIndex = (charIndex + shift) % abc.length;
                result += abc[encodedCharIndex];
            } else {
                result += char;
            }
        }
        return result;
    };

    this.decode = function (str) {
        let result = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (abc.includes(char)) {
                const keyChar = key[i % key.length];
                const shift = abc.indexOf(keyChar);
                const charIndex = abc.indexOf(char);
                const decodedCharIndex = (charIndex - shift + abc.length) % abc.length;
                result += abc[decodedCharIndex];
            } else {
                result += char;
            }
        }

        return result;
    };
}