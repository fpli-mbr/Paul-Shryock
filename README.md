# Paul Shryock
> Personal Website

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/paulshryock/Paul-Shryock/graphs/commit-activity)

Reboot of my personal website, [pshry.com](https://pshry.com/). Starting from scratch without reinventing the wheel.

## Content Types

These are the existing content types:

- page
- archive
- article
- tutorial
- testimonial
- case-study

Single content type pages (i.e., an article) will have the `.single` body class, and archive content type pages (i.e., an articles archive) will have the `.archive` body class. All posts of that content type will use the `.post` class.

To style a single article, use `.single .post`. To style an article on an archive page, use `.archive .post`.

### Add a Content Type

1. Create a folder with the plural content type name (i.e., `/articles`)
1. Create a front matter template with the singular content type name (i.e., `/articles/article.front-matter.template`), and include all desired data fields for this content type
1. Create a default data file for this content type with the plural content type name (make sure this matches the folder name, i.e., `/articles/articles.json`), and remember to include a layout
1. If this content type will use a new layout, create that template file (i.e., `/_includes/_layouts/article.html`)
1. If you created a new layout, add a layout alias using `eleventyConfig.addLayoutAlias()`:

	```javascript
	eleventyConfig.addLayoutAlias('article', '_layouts/article');
	```
	
1. In `.eleventy.js`, use `eleventyConfig.addCollection()` to add a custom collection to return content from the new content type:

	```javascript
	// Return articles
	eleventyConfig.addCollection("articles", function(collection) {
		return collection.getAll().filter(function(item) {
			return item.data.content_type == "article";
		});
	});
	```
	
### Add a Content Type API
	
1. To create a custom API that returns content from this content type, create a custom collection in `.eleventy.js` using `eleventyConfig.addCollection()` that returns an object with the specific data fields you want for the API:

	```javascript
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
				inputPath: item.inputPath, // `inputPath` is required to use `templateContent`
				slug: item.data.slug,
				permalink: item.data.permalink,
				url: item.url,
				outputPath: item.outputPath,
				content: item.templateContent,
			};
		});

	});
	```
	
1. Then use an `.ejs` template to generate the `.json` file:

	```ejs
	---
	permalink: api/articles.json
	content_type: api
	---
	<%- JSON.stringify(collections.api_articles) -%>
	```
	
	You will be able to access this from `/api/articles.json`
	
### Add a Content Type Archive

1. Create a new archive layout template file (i.e., `/_includes/_layouts/articles.html`)
1. Add a layout alias using `eleventyConfig.addLayoutAlias()`:

	```javascript
	eleventyConfig.addLayoutAlias('articles', '_layouts/articles');
	```
	
1. Create an archive page for this content type (i.e., `/articles/articles.md`)

	```javascript
	---
	title: Articles
	excerpt: This is the Articles archive excerpt.
	topics: [ ]

	seo_title: Articles by Paul Shryock

	content_type: archive
	layout: articles
	body_class: [
		archive,
		articles
	]
	---
	```
	
	In the above example, `topics` is reset with an empty array

## Links

- Project homepage: [https://paulshryock.github.io/Paul-Shryock/](https://paulshryock.github.io/Paul-Shryock/)
- Repository: [https://github.com/paulshryock/Paul-Shryock](https://github.com/paulshryock/Paul-Shryock)
- Releases:
	- [v0.1.0 - Development](https://github.com/paulshryock/Paul-Shryock/releases/tag/v0.1.0)
- Issue tracker: [https://github.com/paulshryock/Paul-Shryock/issues](https://github.com/paulshryock/Paul-Shryock/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact [Paul Shryock](mailto:paul@pshry.com) directly instead of using issue tracker. I value your effort
    to improve the security and privacy of this project!

## Licensing

The code in this project is not licensed for re-use. Unauthorized copying of these files is strictly prohibited.

&copy; 2019 Paul Shryock. All Rights Reserved.