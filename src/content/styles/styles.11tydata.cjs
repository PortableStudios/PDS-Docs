module.exports = {
  layout: "layouts/page.njk",
  tags: ["styles"],
  permalink: "/styles/{{ title | slugify }}/",
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title,
      parent: "Styles",
    },
  },
};
