
function save() {
    var save = {
        // Shop Variables
        points: points,
        draftPoints: draftPoints,
        wins: wins,
        losses: losses,
        basketballs: basketballs,
        basketballCost: basketballCost,
        jordans: jordans,
        jordansCost: jordansCost,
        jerseys: jerseys,
        jerseysCost: jerseysCost,
        gatorade: gatorade,
        gatoradeCost: gatoradeCost,
        assistantCoaches: assistantCoaches,
        assistantCoachCost: assistantCoachCost,

        // Level Variables
        ballHandlingLevel: ballHandlingLevel,
        ballHandlingCost: ballHandlingCost,
        shootingLevel: shootingLevel,
        shootingCost: shootingCost,
        defenseLevel: defenseLevel,
        defenseCost: defenseCost,
        playmakingLevel: playmakingLevel,
        playmakingCost: playmakingCost,
        finishingLevel: finishingLevel,
        finishingCost: finishingCost,

        // Player Variabels
        rosterMultiplier: rosterMultiplier,
        players: players,

        // Opponent and Time
        activeOpponent: activeOpponent,
        time: time,
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var saveGame = JSON.parse(localStorage.getItem("save"));
    if (typeof saveGame.points !== "undefined") points = saveGame.points;
    if (typeof saveGame.draftPoints !== "undefined") draftPoints = saveGame.draftPoints;
    if (typeof saveGame.wins !== "undefined") wins = saveGame.wins;
    if (typeof saveGame.basketballs !== "undefined") basketballs = saveGame.basketballs;
    if (typeof saveGame.basketballCost !== "undefined") basketballCost = saveGame.basketballCost;
    if (typeof saveGame.jordans !== "undefined") jordans = saveGame.jordans;
    if (typeof saveGame.jordansCost !== "undefined") jordansCost = saveGame.jordansCost;
    if (typeof saveGame.jerseys !== "undefined") jerseys = saveGame.jerseys;
    if (typeof saveGame.jerseysCost !== "undefined") jerseysCost = saveGame.jerseysCost;
    if (typeof saveGame.gatorade !== "undefined") gatorade = saveGame.gatorade;
    if (typeof saveGame.gatoradeCost !== "undefined") gatoradeCost = saveGame.gatoradeCost;
    if (typeof saveGame.assistantCoaches !== "undefined") assistantCoaches = saveGame.assistantCoaches;
    if (typeof saveGame.assistantCoachCost !== "undefined") assistantCoachCost = saveGame.assistantCoachCost;
    if (typeof saveGame.ballHandlingLevel !== "undefined") ballHandlingLevel = saveGame.ballHandlingLevel;
    if (typeof saveGame.ballHandlingCost !== "undefined") ballHandlingCost = saveGame.ballHandlingCost;
    if (typeof saveGame.shootingLevel !== "undefined") shootingLevel = saveGame.shootingLevel;
    if (typeof saveGame.shootingCost !== "undefined") shootingCost = saveGame.shootingCost;
    if (typeof saveGame.defenseLevel !== "undefined") defenseLevel = saveGame.defenseLevel;
    if (typeof saveGame.defenseCost !== "undefined") defenseCost = saveGame.defenseCost;
    if (typeof saveGame.playmakingLevel !== "undefined") playmakingLevel = saveGame.playmakingLevel;
    if (typeof saveGame.playmakingCost !== "undefined") playmakingCost = saveGame.playmakingCost;
    if (typeof saveGame.finishingLevel !== "undefined") finishingLevel = saveGame.finishingLevel;
    if (typeof saveGame.finishingCost !== "undefined") finishingCost = saveGame.finishingCost;
    if (typeof saveGame.rosterMultiplier !== "undefined") rosterMultiplier = saveGame.rosterMultiplier;
    if (typeof saveGame.players !== "undefined") players = saveGame.players;
    if (typeof saveGame.activeOpponent !== "undefined") activeOpponent = saveGame.activeOpponent;
    updatePointsPerSecond();
    updateCountdown();
    document.getElementById("points").innerHTML = points;
    document.getElementById("basketballPoints").innerHTML = basketballPoints;
    document.getElementById("jordansPoints").innerHTML = jordansPoints;
    document.getElementById("jerseysPoints").innerHTML = jerseysPoints;
    document.getElementById("gatoradePoints").innerHTML = gatoradePoints;
    document.getElementById("assistantCoachPoints").innerHTML = assistantCoachPoints;
    document.getElementById("basketballs").innerHTML = basketballs;
    document.getElementById("totalBasketballPoints").innerHTML = basketballPoints * basketballs;
    document.getElementById("basketballCost").innerHTML = basketballCost;
    document.getElementById("jordans").innerHTML = jordans;
    document.getElementById("totalJordansPoints").innerHTML = jordansPoints * jordans;
    document.getElementById("jordansCost").innerHTML = jordansCost;
    document.getElementById("jerseys").innerHTML = jerseys;
    document.getElementById("totalJerseysPoints").innerHTML = jerseysPoints * jerseys;
    document.getElementById("jerseysCost").innerHTML = jerseysCost;
    document.getElementById("gatorade").innerHTML = gatorade;
    document.getElementById("totalGatoradePoints").innerHTML = gatoradePoints * gatorade;
    document.getElementById("gatoradeCost").innerHTML = gatoradeCost;
    document.getElementById("assistantCoaches").innerHTML = assistantCoaches;
    document.getElementById("totalAssistantCoachPoints").innerHTML = assistantCoachPoints * assistantCoaches;
    document.getElementById("assistantCoachCost").innerHTML = assistantCoachCost;
    document.getElementById("ballHandlingLevel").innerHTML = ballHandlingLevel;
    document.getElementById("ballHandlingCost").innerHTML = ballHandlingCost;
    document.getElementById("shootingLevel").innerHTML = shootingLevel;
    document.getElementById("shootingCost").innerHTML = shootingCost;
    document.getElementById("defenseLevel").innerHTML = defenseLevel;
    document.getElementById("defenseCost").innerHTML = defenseCost;
    document.getElementById("playmakingLevel").innerHTML = playmakingLevel;
    document.getElementById("playmakingCost").innerHTML = playmakingCost;
    document.getElementById("finishingLevel").innerHTML = finishingLevel;
    document.getElementById("finishingCost").innerHTML = finishingCost;
    document.getElementById("draftPoints").innerHTML = draftPoints;
    document.getElementById("rosterMultiplier").innerHTML = rosterMultiplier;
}