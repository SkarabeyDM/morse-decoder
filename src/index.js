const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
    const space = "**********"
    return expr.match(/.{1,10}/g).map(letter => letter === space ? " " : MORSE_TABLE[binToMorse(letter)]).join("")
}

function binToMorse(str) {
    return str.match(/.{1,2}/g).map(symb => {
            switch (symb) {
                case "00": return ""
                case "10": return "."
                case "11": return "-"
            }
        }).join("")
}

console.log(decode(expr))

module.exports = {
    decode
}