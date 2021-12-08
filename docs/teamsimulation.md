# Team simulation and creation in teamsimulation.js

Our primary object is called `teamArray`, and it is an array of objects which contains every ACC team. Attached to these teams is their name, relative path of their logo, and all of their stats.

## assignOpponent()

This function simply calls the `randIntFromInterval` and `assignOpponentStats`, and then replaces our activeOpponent variable in main.

## randomIntFromInterval(min, max)

With the code `Math.floor(Math.random() * (max - min + 1) + min)`, we can obtain a random number between our min and max values. In this case, it is always between 0 and 13 to match the indices of our teamArray.

## assignOpponentStats(opponent)

This function just randomizes the opposing team's stats to be a random number that is 0-3 levels higher than your team's correspondgin stat.

## simulateMatch()

This function takes whatever stats you have and compares them up against whatever stats the activeOpponent has. If you have a higher stat than your opponent in at least 3 of 5 categories, you win the match. The draft points you earn are however many victory points you have left, meaning `draftPoints += victoryPoints - 3`. It then sends an alert and updates your record.