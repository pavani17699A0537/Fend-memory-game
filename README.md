# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## I followed below steps to build this game.

-   Downloaded the skeleton of this Project from GITHUB link through udacity in rubric structure.
-   After extracting zip file ,i modified `app.js`.
-   I observed `shuffle` function which was came from stackoverflow in `app.js`.After that i created an array to list cards named as `nodesList`.
-   when window is loaded shuffle  function will be triggered.
-   Through spread operator (`[...]`) i converted HTMLCollection into an array.
-   By keeping `nodesList` array as parameter in `shuffle` function i got shuffled array.
-   I assigned `click` EventListener to each card with a function named `showCard`.
-   I added timer function definition to `showCard` function.
-   the timer function is very crucial and it was working well.then the player runs the game until it shows matchedCards.
-   The player clicks the card to know symbol under the card by using `showCard`.
-   Then Player clicks second card to know the  symbol which it was matched or unmatched to previous card.
-   If both cards are same then the cards visible to us otherwise they will not flipped over.
-   Then the time will be calculated by using `startTimer` function.
-   And moves are updated by using `moveSection`.
-   Finally stars will be displayed by using `starRating` function during gameover.
-   If moves are greater than or equal to ten then the `starCount` will be two otherwise `starCount` will be one during gameover.
-   I have gone through the sweetalert2 to display the popup.
-   If all the cards are matched then popup `Awesome` will appear by displaying time ,moves and stars earned.
    If the game is completed then clickon the `Replay` button to replay the game.  
