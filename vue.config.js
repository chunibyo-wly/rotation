module.exports = {
    outputDir:'./rotation',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/rotation/'
        : '/'
}