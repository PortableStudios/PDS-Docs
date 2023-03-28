const anchor = require("markdown-it-anchor");
const container = require("markdown-it-container");
const path = require("path");
const slugify = require("@sindresorhus/slugify");

let markdownLibrary = require("markdown-it")({
	breaks: true,
	html: true,
	linkify: true,
	typographer: true,
})
	.use(require("markdown-it-ins-del"))
	.disable("strikethrough")
	.use(require("markdown-it-sup"))
	.use(require("markdown-it-footnote"))
	.use(require("markdown-it-mark"))
	.use(require("markdown-it-abbr"))
	.use(container, "aside", {
		render: (tokens, idx) => {
			const title = tokens[idx].info.trim().match(/^aside\s+(.*)$/);
			if (tokens[idx].nesting === 1) {
				return `<aside>
						<strong>${markdownLibrary.render(title[1])}</strong>
						<div>
					`;
			} else {
				return ` </div>
					</aside>
					`;
			}
		},
	})
	.use(container, "details", {
		render: (tokens, idx) => {
			let summary = tokens[idx].info.trim().match(/^details\s+(.*)$/);

			if (tokens[idx].nesting === 1) {
				return `<details><summary>${markdownLibrary.utils.escapeHtml(
					summary[1]
				)}</summary>\n`;
			} else {
				return `</details>\n`;
			}
		},
		validate: (params) => params.trim().match(/^details\s+(.*)$/),
	})
	.use(anchor, {
		level: 2,
		permalink: anchor.permalink.headerLink({
			safariReaderFix: true,
		}),
		slugify: slugify,
	})
	.use(require("markdown-it-emoji"))
	.use(require("markdown-it-deflist"))
	.use(require("markdown-it-attrs"))
	.use(require("markdown-it-eleventy-img"), {
		globalAttributes: {
			class: "[ image ]",
			decoding: "async",
			loading: "lazy",
			sizes: "(max-width: 768px) 100vw, 768px",
		},
		imgOptions: {
			formats: ["avif", "webp", "auto"],
			outputDir: path.join("_site", "img"),
			urlPath: "/img/",
			widths: ["auto"],
		},
	});

markdownLibrary.renderer.rules.emoji = (token, idx) =>
	`<span class="[ emoji ]">${token[idx].content}</span>`;

module.exports.plugin = (eleventyConfig) => {
	eleventyConfig.setLibrary("md", markdownLibrary);
};
module.exports.library = markdownLibrary;
