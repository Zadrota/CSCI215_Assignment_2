function countwords() {
    var wrdlst = document.getElementsByName("incomingtext")[0].value;
    var textsplit = wrdlst.split(' ');
    for(i=0;i<textsplit.length;i++){
        textsplit[i].toLowerCase();
    }

    var numWords = 1;
    var textfreq = [1];
    //console.log(textfreq);
    var processedText = [];
    for (i=0;i<textsplit.length;i++) {
        if (textsplit[i] === textsplit[i-1]){
            textfreq[i] += 1;
            //processedText[i]+=1;
        }else{
            textfreq.push(1);
            processedText.push(textsplit[i]);
        }
    }
    console.log(processedText);
    fin = [];
    for(i=0; i<processedText;i++){
        fin.push(processedText[i] + textfreq[i]);
        console.log(fin);
    }

    //document.getElementById("output").innerHTML= fin;
}
