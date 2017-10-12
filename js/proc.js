function countwords() {
    var wrdlst = document.getElementsByName("incomingtext")[0].value;
    var textsplit = wrdlst.split(' ');
    for(i=0;i<textsplit.length;i++){
        textsplit[i].toLowerCase();
    }

    var numWords = 1;
    var textfreq = [1];
    //console.log(textsplit);
    /*textsplit.sort();
    for(i=1;i<textsplit.length;i++){
        numWords++;
    }
    //console.log(numWords);
    for(i=1;i<=textsplit.length;i++) {
        if (textsplit[i] == textsplit[i+1]) {
            textfreq[i]= textfreq[i]+1;
            console.log(textfreq);
        } else if(textsplit[i] != textsplit[i+1]){
            textfreq.push(1);
        }
    }
    display(textsplit, textfreq);*/
    var processedText = [];
    for (i=0;i<textsplit.length;i++) {
        if (processedText.indexOf(textsplit[i]) > -1){
            textfreq[i] += 1;
        }else{
            textfreq.push(1);
            processedText.push(textsplit[i]);
        }
    }
    console.log(processedText);
    document.getElementById("output").innerHTML=processedText;
}
function display(split,freq){
    /*var processedText = []
    for(i=0;i<split.length;i++){
        processedText.push(split[i]);
        processedText.push(freq[i]);

    }*/

}
