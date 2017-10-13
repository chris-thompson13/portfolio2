
$('button').on('click', function() {
  $(this).toggleClass('is-active');
});




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

/*
See https://www.greensock.com/splittext/ for details.
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/
var split;
var emphasis;
$(document).ready(function(){

  split = new SplitText("#quote", {type:"words", wordsClass:"word"});
  emphasis = new SplitText("#emphasis", {type:"chars", charsClass:"char"});

  TweenMax.set(".word", {autoAlpha:0});
  TweenMax.staggerFromTo( split.words, 0.4, {autoAlpha:0, scale:5, onStart:function(){
    $("#quote").css({"opacity":1});
    window.console.log(" >>> ", $("#quote").css("opacity"));
  }}, {autoAlpha:1, scale:1}, 0.3, playEmphasis );

});

function playEmphasis() {
  TweenMax.staggerFromTo( emphasis.chars, 0.5, {autoAlpha:0, scale:5, onStart:function(){
    $("#emphasis").css("opacity",1);
  }}, {autoAlpha:1, scale:1}, 0.2, function(){
    emphasis.revert();
    TweenMax.to($("#emphasis"), 0.2, {color:"#F3BC29", fontSize:50, textDecoration:'underline'});
    $("#emphasis").css("cursor","pointer");
    $("#emphasis").wrap("<a href='http://www.massivegrid.com' target='_blank'></a>");
  });
}
