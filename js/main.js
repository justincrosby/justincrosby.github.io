
function rPosition(elementID) {
  // gets the relative mouse position within an element
  var X = $('html').offset().left;
  var Y = $('html').offset().top;
  var mouseX = currentMousePos.x - X;
  var mouseY = currentMousePos.y - Y;
  var offset = elementID.offset();
  relativePos.x = mouseX - offset.left;
  relativePos.y = mouseY - offset.top;
}
function applyGradient(elementID) {
  // applies a gradient to the element depending on the relative location of the mouse
  rPosition(elementID);
  var gradient = 'radial-gradient(at ' + relativePos.x + 'px ' + relativePos.y + 'px, black 20%, #3b3b38 100%';
  elementID.find('.gradient').css('background-image', gradient);
  //alert(currentMousePos.x);
}

var currentMousePos = { x: -1, y: -1 };
var relativePos = { x: -1, y: -1};
var intervalId = null;
var currentElement = null;

$( document ).ready(function() {
  $('#header_wrap a:nth-child(1)').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
  });
  $('#header_wrap a:nth-child(2)').click(function() {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 1000);
  });
  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
  });
  $('.box').hover(function () {
    currentElement = $(this);
    intervalId = setInterval(function() {
      applyGradient(currentElement);
    }, 1);
  }, function () {
    clearInterval(intervalId);
  });
});