const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
	const url =
		"https://api.airtable.com/v0/appzlMuqYUIjxOeY1/Colour?view=Grid%20view";

	/* This returns a promise */
	return EleventyFetch(url, {
		duration: "1d",
		fetchOptions: {
			headers: {
				Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
			},
		},
		type: "json",
	});
};
