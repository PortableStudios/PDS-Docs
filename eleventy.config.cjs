// External
const pluginFavicons = require("eleventy-plugin-gen-favicons");
const { EleventyHtmlBasePlugin: pluginHtmlBase } = require("@11ty/eleventy");
const pluginInterlinker = require("@photogabble/eleventy-plugin-interlinker");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginUnfurl = require("eleventy-plugin-unfurl");
const pluginVite = require("@11ty/eleventy-plugin-vite");
const pluginWebC = require("@11ty/eleventy-plugin-webc");

// Internal

module.exports = function (eleventyConfig) {
	// External plugins
	eleventyConfig.addPlugin(pluginFavicons, { generateManifest: false });
	eleventyConfig.addPlugin(pluginHtmlBase);
	eleventyConfig.addPlugin(pluginInterlinker);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginUnfurl, {
		template: ({ title, url, image }) =>
			`<a href="${url}" class="[ unfurl ][ popout ]">
        ${
					image
						? `<img
                src="${image.url}"
                width="${image.width}"
                height="${image.height}"
                alt=""
              >`
						: ``
				}
        <span>${title}</span>
      </a>`,
	});
	eleventyConfig.addPlugin(pluginVite, {
		viteOptions: {
			/**
			 * @see https://github.com/vitejs/vite/blob/ee1a686abf69db8a4026ed5462615766f222c29a/packages/vite/src/node/constants.ts#L97
			 */
			assetsInclude: ["**/*.xml"],

			build: {
				manifest: true,
				sourcemap: "true",
			},
		},
	});
	eleventyConfig.addPlugin(pluginWebC, {
		components: "src/_includes/components/**/*.webc",
	});

	// Internal plugins
	eleventyConfig.addPlugin(require("./src/_11ty/plugins/drafts.cjs"));
	eleventyConfig.addPlugin(require("./src/_11ty/plugins/image.cjs"));
	eleventyConfig.addPlugin(require("./src/_11ty/plugins/markdown.cjs").plugin);

	// Filters
	eleventyConfig.addFilter("limit", require("./src/_11ty/filters/limit.cjs"));
	eleventyConfig.addFilter("unique", require("./src/_11ty/filters/unique.cjs"));
	eleventyConfig.addFilter(
		"readableDate",
		require("./src/_11ty/filters/readableDate.cjs")
	);
	eleventyConfig.addFilter(
		"htmlDateString",
		require("./src/_11ty/filters/htmlDateString.cjs")
	);
	eleventyConfig.addFilter(
		"getAllTags",
		require("./src/_11ty/filters/getAllTags.cjs")
	);
	eleventyConfig.addFilter(
		"filterTagList",
		require("./src/_11ty/filters/filterTagList.cjs")
	);
	eleventyConfig.addFilter(
		"excerpt",
		require("./src/_11ty/filters/excerpt.cjs")
	);
	eleventyConfig.addFilter(
		"addNonBreakingSpace",
		require("./src/_11ty/filters/addNonBreakingSpace.cjs")
	);
	eleventyConfig.addFilter("newUrl", require("./src/_11ty/filters/newUrl.cjs"));

	// Shortcodes
	eleventyConfig.addPairedShortcode(
		"figure",
		require("./src/_11ty/shortcodes/figure.cjs")
	);
	eleventyConfig.addPairedShortcode(
		"markdown",
		require("./src/_11ty/shortcodes/markdown.cjs")
	);

	// Passthrough copy
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

	return {
		dir: {
			data: "../_data", // Relative to input
			includes: "../_includes", // Relative to input
			input: "src/content",
			output: "_site",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		templateFormats: ["html", "md", "njk", "webc"],
	};
};
