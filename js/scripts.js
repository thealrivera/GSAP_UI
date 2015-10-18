$(function() {
    FastClick.attach(document.body);
});


MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline, #big");


var tl = new TimelineMax();
var swipeL = new TimelineMax();
var swipeR = new TimelineMax();
var pressExpand = new TimelineMax();
var tapExpand = new TimelineMax();


var square = document.getElementById("square");
var triangle = document.getElementById("triangle");
var circle = document.getElementById("circle");

// var text = document.getElementById("big");

tl.to(square, 2, {morphSVG:"#triangle"});

//var first = document.getElementById("first");
var swiped = false;
var expanded = false;

var item = $('.item');


// var hammertime = new Hammer(item);
$(item).hammer().bind("swipeleft", swiperL);
$(item).hammer().bind("swiperight", swiperR);
$(item).hammer().bind("press", pressItem);
$(item).hammer().bind("tap", tapItem);







function swiperL(ev) {
	
	// if (swiped === false){
	// 	$(this).append('<div class="tap">X</div>');
	// 	swiped = true;
	// }

	$(this).append('<div class="tap">X</div>');
	
	
	swipeL.to(this, 0.3, {left:-60, ease:Expo.easeOut});
    console.log(ev);
    console.log('swiped L');
    clickHandler();
}

function swiperR(ev) {

	
	swipeR.to(this, 0.3, {left:320, autoAlpha:0, display:'none', ease:Cubic.easeOut});
    console.log(ev);
    console.log('swiped R');
}

function pressItem(ev) {


	if (expanded == false){
		
		$(this).append('<div class="clear"></div><i class="icon fa fa-automobile"></i><i class="icon fa fa-camera two"></i>');
		pressExpand.to(this, 0.3, {height:100, ease:Expo.easeout})
		.to($('.icon'), 0.3, {left: 40,autoAlpha:1});
	    //console.log(ev);
	    console.log('press expand');
	    
	}

}


function tapItem(ev) {

	var scrollTop     = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        distance      = (elementOffset - scrollTop),
        height        = $(window).height(),
        open          = $(this).hasClass('active');


        if (!open){
        	$(this).append('<i class="close fa fa-remove"></i>');
        	tapExpand.to(this, 0.3, {top:'-'+distance +'px', height:height, ease:Expo.easeOut})
        		.to($(this).find('.close'), 0.4, {autoAlpha:1}, '-=0.2');
		    //console.log(ev);
		    console.log('tap expanded');
		    //console.log(this);
		    console.log(distance);
		    console.log(height);
		   	console.log(open);

		   	$(this).addClass('active');
		   	//clickHandler(distance);
        } 
        if(open){
        	$('.close').on('click', function(){

				var current = $(this).parent();
				console.log('distance =' + distance);
				console.log(current);

				tapExpand.to(this, 0.3, {autoAlpha:0})
				.to(current, 0.3, {top:distance +'px', height:60, ease:Expo.easeIn}, '-=0.2');
					//console.log(ev);
					console.log('tap closed');
					console.log(distance);
					$('.close').delay(600).remove();
					$('.item').removeClass('active');

			});
        }        
}




function clickHandler(distance){
	
}





