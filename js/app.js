
var current = 0;
var imagenes = new Array();
 
$(document).ready(function() {
    var numImages = 5;
   
    $('.left-arrow').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 1;
        }
 
        $(".carrusel").animate({"left": -($('#item_'+current).position().left)+30}, 600);
 
        return false;
    });
 
 
    $('.right-arrow').on('click', function() {
        if (numImages > current + 1) {
            current = current+1;
        } else {
            current = 0;
        }
 
        $(".carrusel").animate({"left": -($('#item_'+current).position().left)+30}, 600);
 
        return false;
    }); 

    $('.toggle-button').click(function(){        
        $('#menu').toggleClass("show");
    })
    
 });

   