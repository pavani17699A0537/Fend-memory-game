 // use strict
 "use strict";
 var parent = document.getElementById("deck");
 /*
  * Create a list that holds all of your cards
  */
 var nodes = document.getElementsByClassName("card");
 var nodesList = [...nodes];
 var hrs, min, sec;
 let timer = false;
 var time;
 var timeArea = document.getElementById("time");
 // Matching variable, increments when matches found
 let matched = 0;
 var moves = 0;
 var moveSection = document.getElementById("moves");
 var cardStore = [];

 var starCount = 3;
 var starSection = [...document.getElementsByClassName("fa-star")];

 /*
  * Display the cards on the page
  *   - shuffle the list of cards using the provided "shuffle" method below
  *   - loop through each card and create its HTML
  *   - add each card's HTML to the page
  */

 // Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
   var currentIndex = array.length,
     temporaryValue, randomIndex;
   while (currentIndex !== 0) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
   return array;
 }
 window.onload = inceptGame();

 function inceptGame() {
   var shuffledCards = shuffle(nodesList);
   shuffledCards.map(function(i) {
     parent.appendChild(i);
   })
 }

 for (var i = 0; i < nodesList.length; i++) {
   nodesList[i].addEventListener("click", showCard);
 }
 // viewCard function
 function showCard() {
   if (timer == false) {
     startTimer();
     timer = true;
   }

   this.classList.add("card");
   this.classList.add("open");
   this.classList.add("show");
   // for matched and unmatched cards
   cardStore.push(this);
   if (cardStore.length == 2) {
     moves = moves + 1;
     moveSection.innerHTML = moves;
     starRating();
     if (cardStore[0].type == cardStore[1].type) {
       cardStore[0].classList.add("match");
       cardStore[1].classList.add("match");
       matched++;
       if (matched == 8) {
         clearInterval(time);
         // swal fire
         swal.fire({
           title: "awesome",
           html: 'you have earned <strong style="color:#c44cc4;">' + starCount + '<i class="fa fa-star"> </i> </strong> <br> And game over with time of <br>' + hrs + 'hours :' + min + 'minutes :' + sec + 'seconds :' + moves + 'moves',
           confirmButtonText: '<i class="fa fa-refresh"></i> Replay',
         }).then(() => {
           document.location.reload();
         });
       }

       cardStore = [];
     } else {
       console.log("notmatched");
       cardStore[0].classList.add("notmatch");
       cardStore[1].classList.add("notmatch");
       cardStore.map((card) => {
         setTimeout(() => {

           card.classList.remove("notmatch", "open", "show", "disable");
         }, 200);
       })

       cardStore = [];
     }
   }
 }
 //time functionality
 function startTimer() {
   sec = 0;
   min = 0;
   hrs = 0;
   time = setInterval(() => {
     sec = sec + 1;
     if (sec == 60) {
       sec = 0;
       min = min + 1;
     }
     if (min == 60) {
       min = 0;
       hrs = hrs + 1;
     }
     timeArea.innerHTML = hrs + " :: " + min + " :: " + sec;
   }, 1000)
 }
 /*
  * set up the event listener for a card. If a card is clicked:
  *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  */
 // starRating function
 function starRating() {
   if (moves >= 10) {
     starCount = 2;
     starSection[2].style.display = "none";
   }
   if (moves >= 20) {
     starCount = 1;
     starSection[1].style.display = "none";
   }
 }
