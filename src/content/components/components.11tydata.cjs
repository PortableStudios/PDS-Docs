module.exports = {
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Components",
		},
	},
	layout: "layouts/page.njk",
	permalink: "/components/{{ title | slugify }}/",
	tags: ["components"],
};
