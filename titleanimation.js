$(document).ready(function() {
  var mouseX, mouseY;
  //   var ww = $(window).width();
  //   var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (6 * mouseX) / 700 + 40;
    traY = (6 * mouseY) / 700 + 50;
    console.log(traX);
    $("#quizTitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});

//Credits go to Robert Borghesi for the source of this script
