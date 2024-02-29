function convert() {
    const inputText = document.getElementById('inputText').value;
    const outputText = stringToUnicode(inputText);
    document.getElementById('outputText').value = outputText;
}

function stringToUnicode(str) {
    const unicodeArray = [];

    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        unicodeArray.push('U+' + charCode.toString(16).toUpperCase());
    }

    return unicodeArray.join(' ');
}

