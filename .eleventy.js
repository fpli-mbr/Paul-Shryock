module.exports = (function(eleventyConfig) {
	
	/**
		* Add custom filters
		*/

	// Add prependSiteClass filter
	eleventyConfig.addFilter("prependSiteClass", function(value) {
		if (value) return 'site ' + value;
	});

	eleventyConfig.addLiquidFilter("timePosted", date => {
		let numDays = ((Date.now() - date) / (1000 * 60 * 60 * 24));
		let daysPosted = Math.round( parseFloat( numDays ) );
		let weeksPosted = parseFloat( (numDays / 7).toFixed(0) );
		let monthsPosted = parseFloat( (numDays / 30).toFixed(0) );
		let yearsPosted = parseFloat( (numDays / 365).toFixed(1) );

		if( daysPosted < 7 ) {
			return daysPosted + " day" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} else if( daysPosted < 30 ) {
			return weeksPosted + " week" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} if( daysPosted < 365 ) {
			return monthsPosted + " month" + (daysPosted !== 1 ? "s" : "") + ' ago';
		} else {
			return yearsPosted + " year" + (yearsPosted !== 1 ? "s" : "") + ' ago';
		}
	});
	
	/**
		* Add layout aliases
		*/

	eleventyConfig.addLayoutAlias('global', '_globals/global');
	eleventyConfig.addLayoutAlias('page', '_layouts/page');
	eleventyConfig.addLayoutAlias('archive', '_layouts/archive');
	eleventyConfig.addLayoutAlias('expertise', '_layouts/expertise');
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	eleventyConfig.addLayoutAlias('articles', '_layouts/articles');
	eleventyConfig.addLayoutAlias('tutorial', '_layouts/tutorial');
	eleventyConfig.addLayoutAlias('tutorials', '_layouts/tutorials');
	
	/**
		* Add custom collections
		*/
	
	// Return all content including archives
	eleventyConfig.addCollection("everything", function(collection) {
		return collection.getAll();
	});
	
	// Return all content except archives
	eleventyConfig.addCollection("all", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type !== "archive";
		});
	});
	
	// Return navigation items
	eleventyConfig.addCollection("navigation", function(collection) {
		return collection.getAll().filter(function(item) {
			return "navigation" in item.data;
		}).sort( function(a,b){ return a.data.navigation - b.data.navigation } );
	});
	
	// Return pages
	eleventyConfig.addCollection("pages", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "page";
		});
	});
	
	// Return archives
	eleventyConfig.addCollection("archives", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "archive";
		});
	});
	
	// Return articles
	eleventyConfig.addCollection("articles", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});
	});
	
	// Return tutorials
	eleventyConfig.addCollection("tutorials", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "tutorial";
		});
	});
	
	// Return expertise (articles and tutorials)
	eleventyConfig.addCollection("expertise", function(collection) {
		return collection.getAll().filter(function(item) {
			return  item.data.content_type == "article" ||
							item.data.content_type == "tutorial";
		});
	});
	
	/**
		* Copy static assets
		*/
	// requires `passthroughFileCopy: true` in the final `return`
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("img");
	
	return {
		passthroughFileCopy: true,

		markdownTemplateEngine: "liquid",
		htmlTemplateEngine: "liquid"
	};

});