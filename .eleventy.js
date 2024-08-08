const mdxPlugin = require("@jamshop/eleventy-plugin-mdx");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(mdxPlugin);
	return {
		dir: {
			input: "links",
			includes: "../_includes",
			data: "../_data",
		},
	};
};
