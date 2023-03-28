const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	eleventyConfig.addAsyncShortcode(
		"image",
		async function imageShortcode(src, alt, widths, sizes) {
			let formats = ["avif", "webp", "auto"];
			let file = relativeToInputPath(this.page.inputPath, src);
			let metadata = await eleventyImage(file, {
				formats,
				outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
				widths: widths || ["auto"],
			});

			let imageAttributes = {
				alt,
				decoding: "async",
				loading: "lazy",
				sizes,
			};
			return eleventyImage.generateHTML(metadata, imageAttributes);
		}
	);
};
