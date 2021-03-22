// 06.08 JavasScript code

function play() {
var bet= Number(document.getElementById("txtBet").value);
var pips= Math.round( (Math.random( ) * 5) + 1 );

    if (pips===1){
        outputText=" Pip was 1- no pay";
    } else if(pips===2){
        outputText="Pips was 2-Paid back: "+1.25*bet;
    } else if(pips===3){
        outputText=" Pip was 3- no pay";
    } else if(pips===4){
        outputText="Pips was 4-Paid back:" +1.25*bet;
    }else if(pips===5){
        outputText=" Pip was 5- no pay";
    } else if(pips===6) {
    outputText="Pips was 6-Paid back: "+1.5*bet;
}
    document.getElementById("divAnswer").innerHTML=outputText;
    console.log("outputText");
}