function objectTemplate(options){

	var objectTemplateObject = new function(){

		var that = this;

		this.opions = {};

		this.init = function(options){

			this.opions = $.extend(this.opions, options);

			this.addEventHandler();

			return this;
		};

		this.addEventHandler = function(){};
	};

	return objectTemplateObject.init(options);


}