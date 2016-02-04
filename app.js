// Connect-the-Dots Game boilerplate pseudo-code

/*
Upon page load, show only numbered dots, connections lines hidden, dot-1 glows (start play here).
When each dot is clicked:
  1 - line from previous dot is drawn to current dot
  2 - next dot in sequence starts to glow
  3 - only next dot can be clicked
  Special:
    a. when dot-1 is clicked - countdown starts
    b. when dot-34 is clicked - countdown stops (you win!)
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
  // $('#dot-1').on('click', dotGlow1to2);
  // $('#dot-2').on('click', lineConnect1to2);
  // $('#dot-2').on('click', dotGlow2to3);
  // $('#dot-3').on('click', lineConnect2to3);
  // $('#dot-3').on('click', dotGlow3to4);
  // $('#dot-4').on('click', lineConnect3to4); 

  var n = this.innerHTML;
  $("#"+dotsArray[n]).on('click', dotGlow(n));

  lineConnect(n);

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

var dotsArray = ["dot-0", "dot-1", "dot-2", "dot-3", "dot-4", "dot-5", "dot-6", "dot-7", "dot-8", "dot-9", "dot-10", "dot-11", "dot-12", "dot-13", "dot-14", "dot-15", "dot-16", "dot-17", "dot-18", "dot-19", "dot-20", "dot-21", "dot-22", "dot-23", "dot-24", "dot-25", "dot-26", "dot-27", "dot-28", "dot-29", "dot-30", "dot-31", "dot-32", "dot-33", "dot-34"];
var lineWidthsArr = ["0", "+=105px", "0", "+=75", "0", "+=50px", "0", "+=35px", "+=35px", "0", "+=25px", "0", "+=20px", "0", "+=80px", "0", "+=15px", "0", "+=145px", "0", "+=40px", "0", "+=15px", "0", "+=40px", "0", "+=30px", "0", "+=20px", "0", "+=23px", "+=23px", "0", "+=105px"];
var lineHeightsArr = ["0", "0", "+=125px", "0", "+=100px", "0", "+=80", "0", "0", "+=50px", "0", "+=60px", "0", "+=60px", "0", "+=55px", "0", "+=55px", "0", "+=81px", "0", "+=50px", "0", "+=135px", "0", "+=80px", "0", "+=130px", "0", "+=20px", "0", "0", "+=70px", "0"];

function lineConnect(n) {
  $("#"+dotsArray[n]).animate({
    width: lineWidthsArr[n],
  });
  $("#"+dotsArray[n]).animate({
    height: lineHeightsArr[n],
  });
}

function lineConnect1to2() {
  $('#line-1').animate({
      width: "+=105px"
  });
  console.log(this);
  console.log(this.innerHTML);
}

function lineConnect2to3() {
  $('#line-2').animate({
      height: "+=125px"
  });
}

function lineConnect3to4() {
  $('#line-3').animate({
    width: "+=75px",
  });
  $('#dot-1').removeClass('glow');
}

function dotGlow(n) {
  $("#"+dotsArray[n]).toggleClass('glow');
  $('#'+dotsArray[n+1]).toggleClass('glow');
}
// function dotGlow1to2() {
//   $('#dot-1').toggleClass('glow');
//   $('#dot-2').toggleClass('glow');
//   countdown();
// }

// function dotGlow2to3() {
//   $('#dot-2').toggleClass('glow');
//   $('#dot-3').toggleClass('glow');
// }

// function dotGlow3to4() {
//   $('#dot-3').toggleClass('glow');
//   $('#dot-4').toggleClass('glow');
// }

function countdown() {
  var seconds = 15;
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