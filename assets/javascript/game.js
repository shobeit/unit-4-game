var winCounter = 0;
var lossCounter = 0;

// Setting goal number for player to guess
var targetNum = Math.floor(Math.random() * 101) + 19;
$("#targetNum").text(targetNum);


// Setting random values for the 4 crystals
var crystal1 = Math.floor(Math.random() * 11) + 1;
var crystal2 = Math.floor(Math.random() * 11) + 1;
var crystal3 = Math.floor(Math.random() * 11) + 1;
var crystal4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#currentScore").text(counter);

function restartGame() {

    targetNum = Math.floor(Math.random() * 101) + 19;
    $("#targetNum").text(targetNum);
    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;
    counter = 0;
    $("#currentScore").text(counter);

}

function win() {

    alert("You win!");
    winCounter++;
    $("#winCounter").text(winCounter);
    restartGame();
}

function lose() {

    alert("You lose!");
    lossCounter++;
    $("#lossCounter").text(lossCounter);
    restartGame();
}

$('#crystal1').on('click', function () {
    counter = counter + crystal1;

    $('#currentScore').text(counter);

    if (counter == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        lose();
    }
});

$('#crystal2').on('click', function () {
    counter = counter + crystal2;

    $('#currentScore').text(counter);

    if (counter == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        lose();
    }
});

$('#crystal3').on('click', function () {
    counter = counter + crystal3;

    $('#currentScore').text(counter);

    if (counter == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        lose();
    }
});

$('#crystal4').on('click', function () {
    counter = counter + crystal4;

    $('#currentScore').text(counter);

    if (counter == targetNum) {
        win();
    }
    else if (counter > targetNum) {
        lose();
    }
});  