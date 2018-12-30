module.exports = (function(eleventyConfig) {
  
  /**
    * Add custom filters
    */

  // Add prependSiteClass filter
  eleventyConfig.addFilter("prependSiteClass", function(value) {
  	if (value) return 'site ' + value;
  });
  
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