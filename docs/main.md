# main.js, where the majority of the javascript lives.

# Sections

## Variable declaration

For the first 62 lines, we just declaring all of our variables which determine the state of the game. Levels, prices, points, etc is all declared here.

## pointClick(number) 

Here is the heart of the game. Every time points are added to the total `pointClick` is called. All it does is add whatever number is passed as an argument and then replace the point total in the html. This function is simple, yet the most important in the whole game.

## Shop Functions

The next 5 functions are all built to handle purchases of store items. They check if you have enough points, detract them from your total if you do, and add +1 to your total of that item. `pointClick` does not need to be called because items are used as a multiplier in our 1 second intervals. The next cost of every item is defined by `itemCost = Math.ceil(itemCost * 1.15)`, meaning that every time you purchase an item this function will set its price to 1.15x that of what it was.

## Level Functions

These all work the same way as the shop functions, just without influencing points per second.

## updatePointsPerSecond()

`updatePointsPerSecond()` is used to give the player an accurate representation of how many points their items are earning them. This function is called any time there is a purchase that affects pps, and it simply calculates how much you are making based on the number of items you have of each type, and replaces the pps counter in the html.

## Player purchase handling

Here, between `purcahsePlayer(ele, item)` and `addPlayerImg(item)` is all the code to handle buying players and adding them to your roster. In `purchasePlayer` if the 
player isn't already owned and you have enough draft points, it sets that player in our players object to true and replaces their picture with `checkmark.png`. It calls `addPlayerImg(item)` to add the purchased player to the active roster, and then modifies the multiplier which is calculated on the interval.

## window.setInterval(function)

Like in the countdown timer, we have an interval function running every 1 econd to calculate all of the passive point income earned by items and player multipliers. 