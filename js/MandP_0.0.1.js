// Maxin and Parallaxin
// A multipurpose parallax jQuery plugin
// version 0.0.1, May 10 2012
// by Joseph "Lupos" Chagan

// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

(function($) {

    $.MandP = function(element, options) {
        var defaults = {
            foo: 'bar',
            onFoo: function() {}
        }
        var plugin = this;

        plugin.settings = {}
		
        var $element = $(element), //jQuery object
             element = element; //html

		var layers=[], scaleUnit, docW, docH, mouseXYFromCenter;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

			//set the container elemement to have a 20px padding from the window. Temp for testing. 
			$(element).css({'width': $(document).width() - 20, 'height' : $(document).height()-20});
			
			scaleUnit = $element.attr("scaleUnit");
			//layers = document.getElementsByClassName("layer");
			var i=0;l=4;
			var eachDiv
			for(i;i<l;++i){
			 eachDiv=document.getElementsByClassName("layer")[i];
				alert(layers[i].getAttribute('depth'))
			}
			
			
			layersLength = layers.length;
	
			//plugin wide var of mouse x/y for use in all calcs
			mouseXYFromCenter = {x : 0, y : 0};
			//function to update mouse xy on mousemove so it's always uptodate independant of the animation
			$('body').mousemove(function(e){
				mouseXYFromCenter.x = e.pageX - (docW>>1);
				mouseXYFromCenter.y = e.pageY - (docH>>1);	
			})
			
			var i, curLayer, depth, timer,
				layersLength = layers.length;
			for(i = 0; i < layersLength; i++){
				curLayer = layers[i];
				log(curLayer.style.width);
				depth  = curLayer.getAttribute("depth");
				timer = setInterval(function(){
					jsMove(curLayer, depth, curLayer.width, curLayer.height)}
				, 21);
			};
			
			/*layers.each(function(index){
				var curLayer = $(this).get(0);
				log(curLayer);
				var depth = $(this).attr("depth");
				var timer = setInterval(function(){
					jsMove(curLayer, depth, $(this).width(), $(this).height())}
				, 21);
			});*/
			
			docW = $(window).width();
			docH = $(window).height();
        }
		
		var moveDebug = function(x, y){
			log(x + " " + y);
		}
		
		//Move related vars
		var targetX, targetY, targets, debug, debugWindow;
		debugWindow = $("#debug");
		//Pure JS method
		var jsMove = function(target, depth, width, height){
				//console.log("jsMove");
				//
				debug = "depth: " + depth + " / scaleUnit " + scaleUnit + " = " + depth/scaleUnit; 
				debug += "<br/>";
				debug += "* mouseFromCenter = " + (mouseXYFromCenter.x * (1 + (depth / (scaleUnit)))) ;
				debug += "<br/>";
				debug += "Add half of docW = " + ((mouseXYFromCenter.x * (1 + (depth / (scaleUnit)))) + (docW>>1));
				debug += "<br/>";
				debug += "subtract half of layerW = ";
				debug += ((mouseXYFromCenter.x * (1 + (depth / (scaleUnit)))) + (docW>>1)) - (width>>1);
				
				targetX = ((mouseXYFromCenter.x * ((depth / (scaleUnit)))) + (docW>>1)) - (width>>1);
				targetY = ((mouseXYFromCenter.y * ((depth / (scaleUnit)))) + (docH>>1)) - (height>>1);
				
				//target.style.left = targetX;
				//target.style.top = targetY;	
				targetCords = targetX + " " + targetY;
				target.style.backgroundPosition = targetCords; 
				debugWindow.html(debug);
		}
		
		//Jquery / Js Hybrid
		/*var moveTarget, thisDepth, thisHeight, thisWidth;
		var jQMove = function(target, x, y){
			layers.each(function(index){
				thisDepth = $(this).data('depth');
				thisHeight = $(this).height();
				thisWidth = $(this).width();
				targetX = ((x * (1 + (thisDepth / (scaleUnit)))) + (docW>>1)) - (thisWidth>>1);
				targetY = ((y * (1 + (thisDepth / (scaleUnit)))) + (docH>>1)) - (thisHeight>>1);
				moveTarget = this;
				moveTarget.style.left = targetX;
				moveTarget.style.top = targetY;
				if(debug){moveDebug(targetX, targetY);}
			});
		}*/
		

			//consider dynamic depth i.e. sroll to "zoom"
        var foo_private_method = function() {
            // code goes here
        }

        plugin.init();

    }

    $.fn.MandP = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('MandP')) {
                var plugin = new $.MandP(this, options);
                $(this).data('MandP', plugin);
            }
        });

    }

})(jQuery);