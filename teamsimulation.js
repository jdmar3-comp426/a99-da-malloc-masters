var teamArray = [
    {name: "Duke", logo: "./images/dukelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Wake Forest", logo: "./images/wflogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Georgia Tech", logo: "./images/GTlogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Louisville", logo: "./images/louisvillelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "NC State", logo: "./images/ncstatelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Florida State", logo: "./images/floridastatelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Virginia Tech", logo: "./images/vtechlogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Boston College", logo: "./images/bostoncollegelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Clemson", logo: "./images/clemsonlogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Virginia", logo: "./images/virginialogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Miami", logo: "./images/miamilogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Syracuse", logo: "./images/syracuselogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Notre Dame", logo: "./images/notredamelogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
    {name: "Pitt", logo: "./images/pittlogo.png", ballHandling: 0, shooting: 0, defense: 0, playmaking: 0, finishing: 0},
]

function assignOpponent() {
    var newOpponentIndex = randomIntFromInterval(0, 13);
    var newOpponent = assignOpponentStats(teamArray[newOpponentIndex]);
    activeOpponent = newOpponent;
    document.getElementById("opponentLogo").src = newOpponent.logo;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignOpponentStats(opponent) {
    opponent.ballHandling = randomIntFromInterval(ballHandlingLevel, ballHandlingLevel + 3);
    opponent.shooting = randomIntFromInterval(shootingLevel, shootingLevel + 3);
    opponent.defense = randomIntFromInterval(defenseLevel, defenseLevel + 3);
    opponent.playmaking = randomIntFromInterval(playmakingLevel, playmakingLevel + 3);
    opponent.finishing = randomIntFromInterval(finishingLevel, finishingLevel + 3);
    return opponent;
}

function simulateMatch() {
    var victoryPoints = 0;
    if (ballHandlingLevel > activeOpponent.ballHandling) {
        victoryPoints++;
    } else {
        victoryPoints--;
    }
    if (shootingLevel > activeOpponent.shooting) {
        victoryPoints++;
    } else {
        victoryPoints--;
    }
    if (defenseLevel > activeOpponent.defense) {
        victoryPoints++;
    } else {
        victoryPoints--;
    }
    if (playmakingLevel > activeOpponent.playmaking) {
        victoryPoints++;
    } else {
        victoryPoints--;
    }
    if (finishingLevel > activeOpponent.finishing) {
        victoryPoints++;
    } else {
        victoryPoints--;
    }
    if (victoryPoints >= 3) {
        wins++;
        draftPoints += victoryPoints - 3;
        document.getElementById("draftPoints").innerHTML = draftPoints;
        alert(`Congrats! You just beat ${activeOpponent.name}, earning yourself ${victoryPoints - 3} draft points! This brings your record to ${wins} - ${losses}.`);
        
    } else {
        losses++;
        alert(`Sorry, your team lost to ${activeOpponent.name}. This brings your record to ${wins} - ${losses}.`);
    }
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    
}