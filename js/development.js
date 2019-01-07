/******************************************
	* Development
	*****************************************/

/**
	* The main development object
	*
	*/
let development = {};

/**
	* Initializes the main development object
	*
	*/
development.init = function() {

	development.addEventListeners();

};

/**
	* Logs the environment to the console
	*
	*/
development.logEnvironment = function () {

	let environment = 'Development environment';
	
	console.log( environment );
}

/**
	* Adds development event listners
	*
	*/
development.addEventListeners = function() {

	window.addEventListener( 'load', development.logEnvironment, false );

};

/**
	* Initialize the main development object
	*
	*/
development.init();