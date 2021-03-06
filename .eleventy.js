module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('./src/sass/');

    // eleventyConfig.addWatchTarget('./src/_includes/partials/');

    eleventyConfig.addPassthroughCopy('src/assets/');

    if (process.env.ELEVENTY_ENV === 'prod') {
        eleventyConfig.ignores.add('./src/__docs/');
    }

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
