let sumHome = document.getElementById("score-home")
let sumGuest = document.getElementById("score-guest")
let headHome = document.getElementById("head-home")
let headGuest = document.getElementById("head-guest")
let homeScore = 0
let guestScore = 0


//home score add up
function addOneHome() {
  homeScore += 1
  sumHome.innerText = homeScore
  leadingTeam();
}
function addTwoHome() {
  homeScore += 2
  sumHome.innerText = homeScore
  leadingTeam();
}
function addThreeHome() {
  homeScore += 3
  sumHome.innerText = homeScore
  leadingTeam();
}

//guest score add up
function addOneGuest() {
  guestScore += 1
  sumGuest.innerText = guestScore
  leadingTeam();
}
function addTwoGuest() {
  guestScore += 2
  sumGuest.innerText = guestScore
  leadingTeam();
}
function addThreeGuest() {
  guestScore += 3
  sumGuest.innerText = guestScore
  leadingTeam();
}

//reset scores for new game
function backToZero(){
  let newGame = 0
  sumHome.innerText = newGame
  sumGuest.innerText = newGame
  homeScore = 0
  guestScore = 0
  headHome.style.color = "#EEEEEE";
  headGuest.style.color = "#EEEEEE";
}

//highlighting the leading team
function leadingTeam() {
  if (homeScore > guestScore ) {
headHome.style.color = "red";
}     else {
headHome.style.color = "#EEEEEE";
}
  if (homeScore < guestScore ) {
headGuest.style.color = "red";
}     else {
headGuest.style.color = "#EEEEEE";
}
}
