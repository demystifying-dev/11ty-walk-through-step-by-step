var moment = require("moment-timezone");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addFilter("dateformat", function (dateIn) {
    return moment(dateIn).tz("GMT").format("YYYY MMMM DD, dddd, HH:MM:SS z");
  });
  eleventyConfig.addShortcode("shorttest", function (subtitle, greeting) {
    return "<h2><em>" + subtitle + "</em>, " + greeting + "</h2>";
  });
  eleventyConfig.addPairedShortcode("pairedtest", function (
    data,
    subtitle,
    greeting
  ) {
    return (
      "<h3>" +
      subtitle +
      "</h3><h4>" +
      greeting +
      "</h4>" +
      "<p><em>" +
      data +
      "</em></p>"
    );
  });

  // Collections
  // new collection from tags in markdown files
  eleventyConfig.addCollection("testCollection01", function (collection) {
    var postCollection = collection.getFilteredByTag("post");
    return postCollection;
  });

  return {
    dir: {
      output: "dist",
      input: "src",
      data: "jsondata",
      includes: "partials_layouts",
    },

    templateFormats: ["njk", "md"],
  };
};
