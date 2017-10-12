function decode() {
    morse = document.getElementsByName('incomingtext')[0].value;
    morse = morse.split(' ');
    translation = []
    for (i = 0; i < morse.length; i++) {
        if (morse[i] == '.-') {
            translation.push('A');
        } else if (morse[i] == '-...') {
            translation.push('B');
        } else if (morse[i] == '-.-.') {
            translation.push('C');
        } else if (morse[i] == '-..') {
            translation.push('D');
        } else if (morse[i] == '.') {
            translation.push('E');
        } else if (morse[i] == '..-.') {
            translation.push('F');
        } else if (morse[i] == '--.') {
            translation.push('G');
        } else if (morse[i] == '....') {
            translation.push('H');
        } else if (morse[i] == '..') {
            translation.push('I');
        } else if (morse[i] == '.---') {
            translation.push('J');
        } else if (morse[i] == '-.-') {
            translation.push('K');
        } else if (morse[i] == '.-..') {
            translation.push('L');
        } else if (morse[i] == '--') {
            translation.push('M');
        } else if (morse[i] == '-.') {
            translation.push('N');
        } else if (morse[i] == '---') {
            translation.push('O');
        } else if (morse[i] == '.--.') {
            translation.push('P');
        } else if (morse[i] == '--.-') {
            translation.push('Q');
        } else if (morse[i] == '.-.') {
            translation.push('R');
        } else if (morse[i] == '...') {
            translation.push('S');
        } else if (morse[i] == '-') {
            translation.push('T');
        } else if (morse[i] == '..-') {
            translation.push('U');
        } else if (morse[i] == '...-') {
            translation.push('V');
        } else if (morse[i] == '.--') {
            translation.push('W');
        } else if (morse[i] == '-..-') {
            translation.push('X');
        } else if (morse[i] == '-.--') {
            translation.push('Y');
        } else if (morse[i] == '--..') {
            translation.push('Z');
        } else if (morse[i] == ' ') {
            translation.push(' ');
        }

    }
    document.getElementById("output").innerHTML = translation.join('');
}