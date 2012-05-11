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

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            // code goes here

			//set up elements. container and all sub items
			//store data on each element for its depth
				//other potential attrs
					//repeat bool
					//repeat direction
					
			//sort if necessary
        }

		//public function to move based on mouse
		
		//pub func to move based on scroll
        plugin.foo_public_method = function() {
            // code goes here
        }
		
		//private func to calc X
		//private func to calc Y
		//private func to update position
			//need to test methods for performance
			//background position vs abPos
			//get animation frame vs constant
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