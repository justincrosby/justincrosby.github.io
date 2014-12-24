<<<<<<< HEAD
function slant() {
  $( ".slant " ).each(function() {
    // get the dimensions
    blockheight = $( this ).parent().height();
    blockwidth = $( this ).parent().width();
    slantheight = $( this ).height();
    // MATH
    hypo = Math.sqrt( Math.pow( blockheight, 2 ) + Math.pow( blockwidth, 2 ) );
    // angle in radians
    angle = Math.atan( blockheight / blockwidth );
    // convert to degrees
    angledeg = angle * (180 / Math.PI);
    vcenter = blockheight / 2 - slantheight / 2;
    hcenter = (hypo - blockwidth) / 2;
    // apply the css
    $( this ).css( "width", hypo );
    if ( $( this ).hasClass( "right" ) ) {
      $( this ).css( "transform", "rotate(" + angledeg + "deg)" );
      $( this ).find( ".background" ).css( "transform", "rotate(" + -angledeg + "deg)" );
    }
    if ( $( this ).hasClass( "left" ) ) {
      $( this ).css( "transform", "rotate(" + -angledeg + "deg)" );
      $( this ).find( ".background" ).css( "transform", "rotate(" + angledeg + "deg)" );
    }

    $( this ).css( "margin-top", vcenter );
    $( this ).css( "margin-left", -hcenter );
    $( this ).find( ".background" ).css( "margin-top", -vcenter );

    hyp = (slantheight / 2) / Math.cos( Math.PI / 2 - angle );
    $( ".content.block.right .right" ).css( "width", hyp );
    $( ".content.block.right .right" ).css( "left", blockwidth-hyp );
    $( ".content.block.left .left" ).css( "width", hyp );
    //$( ".content.block.right .left" ).css( "width", blockwidth-hyp );
    $( ".content.block.left .right" ).css( "width", blockwidth-hyp );
    $( ".content.block.left .right" ).css( "margin-left", hyp );
  });
=======

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
>>>>>>> c9c15337a87018f4c4c2f7a68f87d7b02db6485e
}

var currentMousePos = { x: -1, y: -1 };
var relativePos = { x: -1, y: -1};
var intervalId = null;
var currentElement = null;

$( document ).ready(function() {
  $('a.about').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 1000);
  });
  $('a.projects').click(function() {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 1000);
  });
  $('a.experience').click(function() {
    $('html, body').animate({
        scrollTop: $('#experience').offset().top
    }, 1000);
  });
  $('a.top').click(function() {
    $('html, body').animate({
        scrollTop: $('#header_wrap').offset().top
    }, 1000);
  });
  $(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
  });
  $('.box').hover(function () {
    currentElement = $(this);
    currentElement.find('.description').animate({bottom: '0'});
    intervalId = setInterval(function() {
      applyGradient(currentElement);
    }, 1);
  }, function () {
    clearInterval(intervalId);
    currentElement.find('.description').animate({bottom: '-115'});
  });
});