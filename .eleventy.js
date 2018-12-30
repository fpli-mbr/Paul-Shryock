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
    }).sort( function(a,b){ return a.data.navigation - b.data.navigation } );
  });
  
  // Return pages
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob([ "*.md", "pages/*.md" ]);
  });
  
  // Return pages
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob([ "articles/*.md" ]);
  });
  
  // Return pages
  eleventyConfig.addCollection("tutorials", function(collection) {
    return collection.getFilteredByGlob([ "tutorials/*.md" ]);
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