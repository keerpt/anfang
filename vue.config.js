module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/case/':{
                target:'172.16.0.36',
                changeOrigin:true,
                // pathRewrite:{
                //     '/api/':''
                // }
            }
        }
    }
}
