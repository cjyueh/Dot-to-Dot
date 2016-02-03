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
  // set event listener on an set of jquery elements
  // $(".dot").on("click", function(e){ console.log(e.target, "clicked")})
  $('#dot-one').on('click', switchGlow1to2);
  $('#dot-two').on('click', connectDots1to2);
  $('#dot-two').on('click', switchGlow2to3);
  $('#dot-three').on('click', connectDots2to3);
  $('#dot-three').on('click', switchGlow3to1);
  $('#dot-one').on('click', connectDots3to1); 
  // on dotOne click {
  //   countdown();
  // }
  // on dotTwo and other clicks {
  //   showConnect();
  // }
  // .hover(dot glows);
}

/*
  event callback functions get passed the event object
  use the `.taget` method on the event to find the element that the event
  just occurred on
*/

function connectDots1to2() {
  $('#line-one').animate({
      width: "+=675px"
  });
}

function connectDots2to3() {
  $('#line-two').animate({
      height: "+=125px"
  });
  // $('#dot-three').removeClass('glow');
}

function connectDots3to1() {
  $('#line-three').animate({
    width: "+=691px",
  });
  $('#dot-one').removeClass('glow');
}

function switchGlow1to2() {
  $('#dot-one').removeClass('glow');
  $('#dot-two').toggleClass('glow');
}

function switchGlow2to3() {
  $('#dot-two').removeClass('glow');
  $('#dot-three').toggleClass('glow');
}

function switchGlow3to1() {
  $('#dot-three').removeClass('glow');
  $('#dot-one').toggleClass('glow');
}

var seconds = 30;
var timer = setInterval(function(){
  $('#timer').html(seconds);
  seconds -= 1;
  if (seconds === -1) {
    console.log("out of time"); //to check
    clearInterval(timer);
  }
  // if finish connecting dots, stop clock
}, 1000);

// function showConnect() {
//   // make connection lines visible
// }