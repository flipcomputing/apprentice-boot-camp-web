module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css/')
  eleventyConfig.addPassthroughCopy('./src/js/')
  eleventyConfig.addPassthroughCopy('./src/images/')

  return {
    // pathPrefix: "/public/slides/slide_000",
    dir: {
      input: "src",
      output: "public"
    }
  };
}