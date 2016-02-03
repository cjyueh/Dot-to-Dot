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
  clickDot();
});

// function init() {
//   //calls other functions
// }

// function setImage() {
//   // sets only dots visible / lines invisible
//   // set dotOne effect
// }

function clickDot() {
  $('#dot-one').on('click', switchGlow);
  $('#dot-two').on('click', connectDots);
  // on dotOne click {
  //   countdown();
  // }
  // on dotTwo and other clicks {
  //   showConnect();
  // }
  // .hover(dot glows);
}

function connectDots() {
  $('.line').animate({
      width: "+=700px"
  });
  $('#dot-two').removeClass('glow');
}

function switchGlow() {
  $('#dot-one').removeClass('glow');
  $('#dot-two').toggleClass('glow');
}


// function setTimer() {
//   var count = document.getElementById('timer');
//   var timeOut = function(){
//     count.innerHTML = parseInt(count.innerHTML) - 1;
//     timer = setTimeout(timeOut, 1000);
//     if (count.innerHTML === "0") {
//       clearTimeout(timer);
//    }
//   };
//   setTimeout(timeOut, 1000);
// }
// var count = 10;
// var timer = setInterval(function() {
//     $("#timer").html(count--);
//     if(count == 1) clearInterval(timer);
// }, 1000);

// function countdown() {
//   // timer countdown
//   // if timer reaches zero {
//   //   setImage();
//   // }
// }

// function showConnect() {
//   // make connection lines visible
// }