//variables
var score=0;
var target=0;
var crystalValues=[0,0,0,0];
var wins=0;
var losses=0;

function randTarget() {
    return Math.floor(Math.random()*101) + 19;
}

function randCrystal() {
    return Math.floor(Math.random()*12) + 1;
}

function gameStart() {
    for (var i=0;i<4;i++) {
        crystalValues[i]=randCrystal();
    }
    target=randTarget();
    score=0;
    refreshUI();
}

//write function to refresh UI
function refreshUI() {
    $("#losses").html(losses);
    $("#wins").text(wins);
    $("#score").text(score);
    $("#target").text(target);
    console.log("refreshed");
}


function checkResolve() {
    refreshUI();
    if (score===target) {
        $('#winModal').modal('show');
        wins++;
        gameStart();
    } else if (score>target) {
        $('#lossModal').modal('show');
        losses++;
        gameStart();
    }
}

$(document).ready(function() {
    gameStart();

    $("#crystal1").on("click", function() {
        score+=crystalValues[0];
        checkResolve();
    })
    
    $("#crystal2").on("click", function() {
        score+=crystalValues[1];
        checkResolve();
    })

    $("#crystal3").on("click", function() {
        score+=crystalValues[2];
        checkResolve();
    })

    $("#crystal4").on("click", function() {
        score+=crystalValues[3];
        checkResolve();
    })

});
