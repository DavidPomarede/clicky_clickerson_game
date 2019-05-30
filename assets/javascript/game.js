var wins = 0;
var losses = 0;
tally = 0;
var tallyDiv1 = document.getElementById("#tallyDiv");
var winDiv1 = document.getElementById("#winDiv");
var lossDiv1 = document.getElementById("#lossDiv");


game() {

    var firstNumber = Math.floor(Math.random() * 100 + 1);


    var c1 = Math.floor(Math.random() * 100 + 1);
    var c2 = Math.floor(Math.random() * 100 + 1);
    var c3 = Math.floor(Math.random() * 100 + 1);
    var c4 = Math.floor(Math.random() * 100 + 1);


    $( "#button1" ).click(function() {
        tally = tally + c1;
        targetDiv1.textContent = tally;
    });
    $( "#button2" ).click(function() {
        tally = tally + c2;
        targetDiv1.textContent = tally;
    });
    $( "#button3" ).click(function() {
        tally = tally + c3;
        targetDiv1.textContent = tally;
    });
    $( "#button4" ).click(function() {
        tally = tally + c4;
        targetDiv1.textContent = tally;
    });

    if (tally >= firstNumber) {
        losses++;
        lossDiv1.textContent = losses;
        tally = 0;
        targetDiv1.textContent = tally;
    }
    else if (tally === firstNumber) {
        wins++;
        winDiv1.textContent = wins;
        tally = 0;
        targetDiv1.textContent = tally;
    }

};

game();
