const markdown = require("../plugins/markdown.cjs");

module.exports = (content) => {
  return markdown.library.render(content);
};
