/**
 * @see https://gist.github.com/dirtystylus/d488ea82fec9ebda8308a288015d019b
 * @param {string} content
 * @param {string} caption
 * @param {string} className
 * @returns {string}
 */
module.exports = (content, caption, className) => {
	const classMarkup = className ? ` class="${className}"` : "";
	const captionMarkup = caption ? `<figcaption>${caption}</figcaption>` : "";
	return `<figure${classMarkup}>${content}${captionMarkup}</figure>`;
};
