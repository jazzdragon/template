// jQuery design pattern
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/

(function($) {
	$.fn.PlugInName = function(opts) {
		// default configuration
		var config = $.extend({}, {
			opt1: null
		}, opts);
		// main function
		var DoSomething = function(obj) {
		};
		// initialize every element
		this.each(function() {
			DoSomething($(this));
		});
		return this;
	};
	// auto start
	$(function() {
		$('#select').PlugInName();
	});
})(jQuery);