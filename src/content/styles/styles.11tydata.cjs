module.exports = {
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Styles",
		},
	},
	layout: "layouts/page.njk",
	permalink: "/styles/{{ title | slugify }}/",
	tags: ["styles"],
};
