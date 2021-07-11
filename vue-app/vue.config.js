module.exports = {
    devServer:{
        port:10000, //对应乾坤中的entry
        headers:{
            'Access-Control-Allow-Origin':'*' //允许所有人访问-就是跨域问题
        }
    },
    //配置打包后的目录
    configureWebpack:{
        output:{
            library:'vueApp',
            libraryTarget:'umd'
        }
    }
}