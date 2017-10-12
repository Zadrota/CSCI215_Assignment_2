function countwords() {
    var wrdlst = document.getElementsByName("incomingtext")[0].value;
    var textsplit = wrdlst.split(' ');
    for (i = 0; i < textsplit.length; i++) {
        textsplit[i].toLowerCase();
    }
    var counted = {};
    for (i = 0; i < textsplit.length; i++) {
        var wrd = textsplit[i];
        if (!counted[wrd]) {
            counted[wrd] = 1;
        } else {
            counted[wrd]++;
        }

    }
    JSON.stringify(console.log(counted));

    document.getElementById("output").innerHTML = JSON.stringify(counted);
}

