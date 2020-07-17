// const BASE_URL = process.env.NODE_ENV === 'production' ?
//     '/pushMsg/' :
//     '/'


// webpack 配置,在Vue.config.js加入处理 svg 的 loader：
// https://juejin.im/post/5bc93881f265da0aea69ae2e

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    // publicPath: BASE_URL,
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8989,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/apis': {
                target: 'http://127.0.0.1:8988/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/apis': '/apis'
                }
            }
        }
    },
    // svg配置
    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')
        //svgRule.uses.clear()
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }

}