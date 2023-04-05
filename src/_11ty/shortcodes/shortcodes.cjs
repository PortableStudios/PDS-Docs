module.exports = (eleventyConfig) => {
	eleventyConfig.addPairedShortcode("figure", require("./figure.cjs"));
	eleventyConfig.addPairedShortcode("markdown", require("./markdown.cjs"));
};
