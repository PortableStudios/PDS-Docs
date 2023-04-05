module.exports = (eleventyConfig) => {
	// External plugins
	eleventyConfig.addPlugin(require("eleventy-plugin-gen-favicons"), {
		generateManifest: false,
	});
	eleventyConfig.addPlugin(require("@11ty/eleventy").EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(require("@photogabble/eleventy-plugin-interlinker"));
	eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
	eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
	eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"), {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(require("eleventy-plugin-unfurl"), {
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
	eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-vite"), {
		viteOptions: {
			/**
			 * @see https://github.com/vitejs/vite/blob/ee1a686abf69db8a4026ed5462615766f222c29a/packages/vite/src/node/constants.ts#L97
			 */
			assetsInclude: ["**/*.xml"],

			build: {
				manifest: true,
				rollupOptions: {
					external: "/pagefind/pagefind.js",
				},
				sourcemap: "true",
			},
		},
	});
	eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-webc"), {
		components: "src/_includes/components/**/*.webc",
	});

	// Internal plugins
	eleventyConfig.addPlugin(require("./drafts.cjs"));
	eleventyConfig.addPlugin(require("./image.cjs"));
	eleventyConfig.addPlugin(require("./markdown.cjs").plugin);
};
