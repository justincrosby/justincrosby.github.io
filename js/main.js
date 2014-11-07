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
    }
    if ( $( this ).hasClass( "left" ) ) {
      $( this ).css( "transform", "rotate(" + -angledeg + "deg)" );
    }
    //$( this ).css( "transform", "rotate(" + angle + "deg)" );
    $( this ).css( "margin-top", vcenter );
    $( this ).css( "margin-left", -hcenter );

    hyp = (slantheight / 2) / Math.cos( Math.PI / 2 - angle );
    $( ".content.block.right .right" ).css( "width", hyp );
    $( ".content.block.left .left" ).css( "width", hyp );
  });
}
$( document ).ready(function() {
  slant();
  $( window ).resize(function() {
    slant();
  });
});