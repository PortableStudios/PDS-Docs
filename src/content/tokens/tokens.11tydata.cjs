module.exports = {
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Tokens",
		},
	},
	layout: "layouts/page.njk",
	permalink: "/tokens/{{ title | slugify }}/",
	tags: ["tokens"],
};
