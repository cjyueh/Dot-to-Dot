// dot-to-dot: a connect-the-dots Game code

/*
Upon page load, show only numbered dots, connections lines hidden, dot-1 glows (start play here).
When each dot is clicked:
  1 - line from previous dot is drawn to current dot
  2 - next dot in sequence starts to glow
  3 - only next dot can be clicked, current/previous dot(s) can't be re-clicked
  Special:
    a. when dot-1 is clicked - countdown starts
    b. when dot-34 is clicked - countdown stops (you win!)
If timer reaches zero, stop game, reset image to dots for additional attempts
*/


$(document).ready(function() {
  console.log("linked.");
  // dotGlow($('#dot-1'));
  $(".dot").click(dotGlow);
  $(".dot").click(function() {
    var m = $(this);
    lineConnect(m, lineWidthsArr, lineHeightsArr);
  });
  $('#dot-1').click(countdown);
  $('#dot-34').click(winningClick);
  resetButton();
});

//Jessie's global variables
var seconds;
  
 

// function init() {
//   //calls other functions
// }

function resetDots() {
  $('#dot-1').toggleClass('glow'); //resets dot-1 glow
  // lines invisible
}

var dotsArray = ["dot-0", "dot-1", "dot-2", "dot-3", "dot-4", "dot-5", "dot-6", "dot-7", "dot-8", "dot-9", "dot-10", "dot-11", "dot-12", "dot-13", "dot-14", "dot-15", "dot-16", "dot-17", "dot-18", "dot-19", "dot-20", "dot-21", "dot-22", "dot-23", "dot-24", "dot-25", "dot-26", "dot-27", "dot-28", "dot-29", "dot-30", "dot-31", "dot-32", "dot-33", "dot-34"];
var lineWidthsArr = ["0", "+=105px", "0", "+=75", "0", "+=50px", "0", "+=35px", "+=35px", "0", "+=25px", "0", "+=20px", "0", "+=80px", "0", "+=15px", "0", "+=145px", "0", "+=40px", "0", "+=15px", "0", "+=40px", "0", "+=30px", "0", "+=20px", "0", "+=23px", "+=23px", "0", "+=105px"];
var lineHeightsArr = ["0", "0", "+=125px", "0", "+=80px", "0", "+=80", "0", "0", "+=30px", "0", "+=60px", "0", "+=60px", "0", "+=55px", "0", "+=55px", "0", "+=81px", "0", "+=50px", "0", "+=135px", "0", "+=80px", "0", "+=130px", "0", "+=20px", "0", "0", "+=70px", "0"];

function lineConnect(m, lineWidthsArr, lineHeightsArr) {
  var n = m.html();
  // console.log(n);
  // if 'this' = dot-1 is clicked, no lines drawn
  // if 'this' = other dots are clicked (n>1), draw lines from previous dot
      //if line is ".horizontal" || ".diagonal", width: lineWidthsArr[n];
      //if line is ".vertical", height: lineHeightsArr[n];
  if (n === 1) {
    // countdown();
  } else if (n > 1) {
    if ($('#line-'+(n-1)).hasClass("horizontal")) {
      var lineWidth = lineWidthsArr[(n-1)];
      // console.log(lineWidth);
      $('#line-'+(n-1)).animate({
      width: lineWidth,
      });
    } else {
      var lineHeight = lineHeightsArr[(n-1)];
      // console.log(lineHeight);
      $('#line-'+(n-1)).animate({
      height: lineHeight,
      });
    }
  }
}

function dotGlow() {
  // console.log($(this));
  $(this).toggleClass('glow'); //turn off glow of currently clicked dot
  // console.log($(this).next().next());
  $(this).next().next().toggleClass('glow'); //turn on glow of next dot  
}

function countdown() {
  var seconds = 20;
  var timer = setInterval(function() {
    $('#timer').html("timer:  " + seconds + " sec.");
    seconds -= 1;
    if (seconds === -1) {
      alert("TOO SLOW!"); //to check
      clearInterval(timer);
      //make dots do pretty glowing thing when you run out of time
      $('.dot').toggleClass('glow');
      lineConnect.stop();
    }
    //Jessie trying to make it so if button is clicked, seconds go back to 20!
    //it works! but then it won't count down again when clicking dots
    if ($('#reset').data("clicked")) {
      seconds = 20;
    }
    // if finish connecting dots, stop clock
  }, 1000);
}

function winningClick() {
  $('.container').fadeOut('slow', showImage);
}

function showImage() {
  $('body').fadeIn('slow', function() {
      $(this).css('background-image', 'url("images/background-01.jpg")');
    });
}

//Jessie's reset function!
function resetButton () {
  $('#reset').on("click", function() {
    $(this).data('clicked', true);
    $('.line').css({'width' : '0px', 'height' : '0px'});
    console.log("button pushed");
  });
}