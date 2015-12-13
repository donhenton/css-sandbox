var doMenuResize;
var initialMenuRatio = 0.05;
var initialPadding = 0;


$('document').ready(
        function ()
        {

             resizemenu();
        });


function resizemenu() {
    
    var containerWidth = $(window).width();
    var newPadding = containerWidth*initialMenuRatio;
    var newPaddingStr = newPadding+"px";
    //console.log("new padding "+newPaddingStr+" width "+containerWidth);
    $('nav ul > li').css('padding',newPaddingStr);
}
window.onresize = function () {
    clearTimeout(doMenuResize);
    doMenuResize = setTimeout(function () {
        resizemenu();
    }, 100);
};