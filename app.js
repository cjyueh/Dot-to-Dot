// Connect-the-Dots Game boilerplate pseudo-code

// Cool name for game: ??


// GAME LOGIC / RULES OF PLAY
// HTML/CSS has full image, dots and connections lines in separate tags
// Upon page load, show only numbered dots, lines invisible
// Click starter dotOne and 2 things happen:
// 1 - countdown/timer starts
// 2 - make connection line visible by clicking dotTwo
// Dots glow as cursor hovers over them
// Continue making connection lines visible by clicking dots in numbered order until finish back at dotOne
// If timer reaches zero, stop game, reset image to dots for additional attempts

$(document).ready(function() {
  console.log("linked.");
  $('#dotOne').animate({backgroundColor: 'red'});
});


// function setImage() {
//   // sets only dots visible / lines invisible
//   // set dotOne effect

// }

// function clickDot() {
//   // on dotOne click {
//   //   countdown();
//   // }
//   // on dotTwo and other clicks {
//   //   showConnect();
//   // }
//   // .hover(dot glows);
// }

// function countdown() {
//   // timer countdown
//   // if timer reaches zero {
//   //   setImage();
//   // }
// }

// function showConnect() {
//   // make connection lines visible
// }