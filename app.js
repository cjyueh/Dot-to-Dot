// Connect-the-Dots Game boilerplate pseudo-code

// Cool name for game: ??


/*
GAME LOGIC / RULES OF PLAY
Upon page load, show only numbered dots, connections lines hidden, dot-1 glows (start play here).
When each dot is clicked:
  1 - line from previous dot is drawn to current dot
  2 - next dot in sequence starts to glow
  3 - only next dot can be clicked
  Special when dot-1 is clicked - countdown starts
If timer reaches zero, stop game, reset image to dots for additional attempts
*/

$(document).ready(function() {
  console.log("linked.");
  clickDot();
});

// function init() {
//   //calls other functions
// }

// function setImage() {
//   // sets only dots visible / lines invisible
//   // set dot1 effect
// }

function clickDot() {
  // set event listener on a set of jquery elements
  // $(".dot").on("click", function(e){ console.log(e.target, "clicked")})
  $('#dot-1').on('click', switchGlow1to2);
  $('#dot-2').on('click', connectDots1to2);
  $('#dot-2').on('click', switchGlow2to3);
  $('#dot-3').on('click', connectDots2to3);
  $('#dot-3').on('click', switchGlow3to1);
  $('#dot-1').on('click', connectDots3to1); 


  // on dot1 click {
  //   countdown();
  // }
  // on dot2 and other clicks {
  //   showConnect();
  // }
  // .hover(dot glows);
}

/*
  event callback functions get passed the event object
  use the `.target` method on the event to find the element that the event
  just occurred on
*/

function oneDotActive(event) {
  var dots = document.getElementsByClassName("dot");
  var listener = function() {
    // something;
  };
  event.target.addEventListener('click', listener, false);
  event.target.removeEventListener('click', listener, false);
}

function connectDots1to2() {
  $('#line-1').animate({
      width: "+=105px"
  });
  console.log(this);
  console.log(this.innerHTML);
}

function connectDots2to3() {
  $('#line-2').animate({
      height: "+=125px"
  });
}

function connectDots3to1() {
  $('#line-3').animate({
    width: "+=75px",
  });
  $('#dot-1').removeClass('glow');
}

function switchGlow1to2() {
  $('#dot-1').toggleClass('glow');
  $('#dot-2').toggleClass('glow');
  countdown();
}

function switchGlow2to3() {
  $('#dot-2').toggleClass('glow');
  $('#dot-3').toggleClass('glow');
}

function switchGlow3to1() {
  $('#dot-3').toggleClass('glow');
  $('#dot-1').toggleClass('glow');
}

function countdown() {
  var seconds = 30;
  var timer = setInterval(function() {
    $('#timer').html(seconds);
    seconds -= 1;
    if (seconds === -1) {
      console.log("out of time"); //to check
      clearInterval(timer);
    }
    // if finish connecting dots, stop clock
  }, 1000);

}

var dotsArray = ["dot-0", "dot-1", "dot-2", "dot-3", "dot-4"];
var lineWidths = ["0", "+=725px", "0", "+=741"];
var lineHeights = ["0", "0", "+=125px", "0"];

function connect (){
  var n = this.innerHTML;
  connectDots(n);
  switchGlow(n);
}

function connectDots(n) {
  $("#"+dotsArray[n]).animate({
    width: lingLengths[n],
  });
  $('#dot-1').removeClass('glow');
}

function switchGlow(n) {
  $("#"+dotsArray[n]).toggleClass('glow');
  $('#'+dotsArray[n+1]).toggleClass('glow');
}