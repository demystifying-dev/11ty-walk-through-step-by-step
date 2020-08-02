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
