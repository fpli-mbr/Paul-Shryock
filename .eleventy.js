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
  
  // Return all content
  eleventyConfig.addCollection("all", function(collection) {
    return collection.getAll();
  });
  
  // Return navigation items
  eleventyConfig.addCollection("navigation", function(collection) {
    return collection.getAll().filter(function(item) {
      // Side-step tags and do your own filtering
      return "navigation" in item.data;
    }).sort( function(a,b){ return a - b } );
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