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
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	eleventyConfig.addLayoutAlias('articles', '_layouts/articles');
	eleventyConfig.addLayoutAlias('tutorial', '_layouts/tutorial');
	eleventyConfig.addLayoutAlias('tutorials', '_layouts/tutorials');
	eleventyConfig.addLayoutAlias('expertise', '_layouts/expertise');
	eleventyConfig.addLayoutAlias('testimonial', '_layouts/testimonial');
	eleventyConfig.addLayoutAlias('testimonials', '_layouts/testimonials');
	eleventyConfig.addLayoutAlias('case-study', '_layouts/case-study');
	eleventyConfig.addLayoutAlias('case-studies', '_layouts/case-studies');
	
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
			return item.data.content_type !== "archive" && item.data.content_type !== "search-results";
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
	
	// Return testimonials
	eleventyConfig.addCollection("testimonials", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "testimonial";
		});
	});
	
	// Return case studies
	eleventyConfig.addCollection("case_studies", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "case-study";
		});
	});
	
	// Return API navigation
	eleventyConfig.addCollection("api_navigation", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return "navigation" in item.data;
		}).sort( function(a,b){ return a.data.navigation - b.data.navigation } );

		return items.map(item => {
			return {
  			title: item.data.title,
  			navigation: item.data.navigation,
			};
		});

	});
	
	// Return API pages
	eleventyConfig.addCollection("api_pages", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "page";
		});

		return items.map(item => {
			return {
  			title: item.data.title,
  			seo_title: item.data.seo_title,
  			display_title: item.data.display_title,
  			nav_title: item.data.nav_title,
  			excerpt: item.data.excerpt,
  			seo_description: item.data.seo_description,
  			date: item.data.date,
  			navigation: item.data.navigation,
  			content_type: item.data.content_type,
  			topics: item.data.topics,
  			tags: item.data.tags,
  			inputPath: item.inputPath,
  			slug: item.data.slug,
  			permalink: item.data.permalink,
  			url: item.url,
  			outputPath: item.outputPath,
  			content: item.templateContent,
			};
		});

	});
	
	// Return API articles
	eleventyConfig.addCollection("api_articles", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});

		return items.map(item => {
			return {
				title: item.data.title,
				seo_title: item.data.seo_title,
				display_title: item.data.display_title,
				nav_title: item.data.nav_title,
				excerpt: item.data.excerpt,
				seo_description: item.data.seo_description,
				date: item.data.date,
				navigation: item.data.navigation,
				content_type: item.data.content_type,
				topics: item.data.topics,
				tags: item.data.tags,
				inputPath: item.inputPath,
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
			};
		});

	});
	
	// Return API tutorials
	eleventyConfig.addCollection("api_tutorials", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "tutorial";
		});

		return items.map(item => {
			return {
  			title: item.data.title,
  			seo_title: item.data.seo_title,
  			display_title: item.data.display_title,
  			nav_title: item.data.nav_title,
  			excerpt: item.data.excerpt,
  			seo_description: item.data.seo_description,
  			date: item.data.date,
  			navigation: item.data.navigation,
  			content_type: item.data.content_type,
  			topics: item.data.topics,
  			tags: item.data.tags,
  			inputPath: item.inputPath,
  			slug: item.data.slug,
  			permalink: item.data.permalink,
  			url: item.url,
  			outputPath: item.outputPath,
  			content: item.templateContent,
			};
		});

	});
	
	// Return API testimonials
	eleventyConfig.addCollection("api_testimonials", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "testimonial";
		});

		return items.map(item => {
			return {
  			title: item.data.title,
  			seo_title: item.data.seo_title,
  			display_title: item.data.display_title,
  			nav_title: item.data.nav_title,
  			excerpt: item.data.excerpt,
  			seo_description: item.data.seo_description,
  			date: item.data.date,
  			navigation: item.data.navigation,
  			content_type: item.data.content_type,
  			topics: item.data.topics,
  			tags: item.data.tags,
  			inputPath: item.inputPath,
  			slug: item.data.slug,
  			permalink: item.data.permalink,
  			url: item.url,
  			outputPath: item.outputPath,
  			content: item.templateContent,
			};
		});

	});
	
	// Return API case studies
	eleventyConfig.addCollection("api_case_studies", function(collection) {

		let items = collection.getAll().filter(function(item) {
			return item.data.content_type == "case-study";
		});

		return items.map(item => {
			return {
  			title: item.data.title,
  			seo_title: item.data.seo_title,
  			display_title: item.data.display_title,
  			nav_title: item.data.nav_title,
  			excerpt: item.data.excerpt,
  			seo_description: item.data.seo_description,
  			date: item.data.date,
  			navigation: item.data.navigation,
  			content_type: item.data.content_type,
  			topics: item.data.topics,
  			tags: item.data.tags,
  			inputPath: item.inputPath,
  			slug: item.data.slug,
  			permalink: item.data.permalink,
  			url: item.url,
  			outputPath: item.outputPath,
  			content: item.templateContent,
			};
		});

	});

	// Return search index
  eleventyConfig.addCollection("api_searchIndex", function(collection) {

  	let items = collection.getAll().filter(function(item) {
			return	( item.data.content_type !== "api" ) &&
							( item.data.slug !== "sitemap" ) &&
							( item.data.slug !== "404" ) &&
							( item.data.slug !== "offline" );
		});

		return items.map(item => {
  		return {
  			title: item.data.title,
  			seo_title: item.data.seo_title,
  			display_title: item.data.display_title,
  			nav_title: item.data.nav_title,
  			excerpt: item.data.excerpt,
  			seo_description: item.data.seo_description,
  			date: item.data.date,
  			navigation: item.data.navigation,
  			content_type: item.data.content_type,
  			topics: item.data.topics,
  			tags: item.data.tags,
  			inputPath: item.inputPath,
  			slug: item.data.slug,
  			permalink: item.data.permalink,
  			url: item.url,
  			outputPath: item.outputPath,
  			content: item.templateContent,
  		};
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
		"passthroughFileCopy": true
	};

});