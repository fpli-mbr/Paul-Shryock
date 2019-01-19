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
development.init = () => {

	development.addEventListeners();

};

/**
	* Logs the environment to the console
	*
	*/
development.logEnvironment = () => {

	let environment = 'Development environment';
	
	console.log( environment );
}

/**
	* Load Netlify CMS Identity
	*
	*/
development.loadNetlifyCMSIdentity = () => {

	if (window.netlifyIdentity) {
		window.netlifyIdentity.on("init", user => {
			if (!user) {
				window.netlifyIdentity.on("login", () => {
					document.location.href = "/admin/";
				});
			}
		});
	}

}

/**
	* Adds development event listners
	*
	*/
development.addEventListeners = () => {

	window.addEventListener( 'load', development.logEnvironment, false );
	window.addEventListener( 'load', development.loadNetlifyCMSIdentity, false );

};

/**
	* Initialize the main development object
	*
	*/
development.init();