var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber =  0;
var crystalNumber1 =  0;
var crystalNumber2 =  0;
var crystalNumber3 =  0;
var crystalNumber4 =  0;
var imageCrystal1 = $("<img>");
var imageCrystal2 = $("<img>");
var imageCrystal3 = $("<img>");
var imageCrystal4 = $("<img>");

var randomizer = function() {
    targetNumber =  Math.floor(Math.random() * 86 + 15);

    crystalNumber1 =  Math.floor(Math.random() * 13 + 1);
    crystalNumber2 =  Math.floor(Math.random() * 13 + 1);
    crystalNumber3 =  Math.floor(Math.random() * 13 + 1);
    crystalNumber4 =  Math.floor(Math.random() * 13 + 1);
    imageCrystal1.attr("data-crystalvalue", crystalNumber1);
    imageCrystal2.attr("data-crystalvalue", crystalNumber2);
    imageCrystal3.attr("data-crystalvalue", crystalNumber3);
    imageCrystal4.attr("data-crystalvalue", crystalNumber4);
    $("#number-to-guess").text(targetNumber);
    return;
};


randomizer();

$("#number-to-guess").text(targetNumber);



//I tried to make the following less wordy with a function, but couldn't figure out how to do it.

imageCrystal1.attr("src", "./assets/images/c1.jpg");
imageCrystal1.addClass("crystal-image");
imageCrystal1.attr("data-crystalvalue", crystalNumber1);
$("#crystals").append(imageCrystal1);
imageCrystal2.attr("src", "./assets/images/c2.jpg");
imageCrystal2.addClass("crystal-image");
imageCrystal2.attr("data-crystalvalue", crystalNumber2);
$("#crystals").append(imageCrystal2);
imageCrystal3.attr("src", "./assets/images/c3.jpg");
imageCrystal3.addClass("crystal-image");
imageCrystal3.attr("data-crystalvalue", crystalNumber3);
$("#crystals").append(imageCrystal3);
imageCrystal4.attr("src", "./assets/images/c4.jpg");
imageCrystal4.addClass("crystal-image");
imageCrystal4.attr("data-crystalvalue", crystalNumber4);
$("#crystals").append(imageCrystal4);





$(".crystal-image").on("click", function() {


var crystalValue = ($(this).attr("data-crystalvalue"));
console.log(crystalValue);
crystalValue = parseInt(crystalValue);
console.log(crystalValue);

counter += crystalValue;
console.log(counter);
$("#yourTotal").text(counter);



if (counter === targetNumber) {
  wins++;
  $("#wins").text("Wins: " + wins);
  $("#yourTotal").text(0);
  counter = 0;
  randomizer();
}

else if (counter >= targetNumber) {
  losses++;
  $("#losses").text("Losses: " + losses);
  $("#yourTotal").text(0);
  counter = 0;
  randomizer();
}

});
