module.exports = {
    //路径前缀
    productionSourceMap: false,
    publicPath: './',
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target: 'https://mindray-api.mymowa.com/',
                ws: true,
            }
        }
    }
}
