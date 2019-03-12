// This animation is not used but was explored

$(document).ready(function() {
  var mouseX, mouseY;
  var traX, traY;
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (6 * mouseX) / 700 + 40;
    traY = (6 * mouseY) / 700 + 50;
    $("#quizTitle").css({ "background-position": traX + "%" + traY + "%" });
  });
});

//Credits go to Robert Borghesi for the source of this script
