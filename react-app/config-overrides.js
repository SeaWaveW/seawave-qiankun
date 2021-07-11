module.exports = {
    webpack:( config ) => {
        config.output.library = 'reactApp'
        config.output.libraryTarget = 'umd'
        config.output.publicPath = 'http://localhost:20000/' //表示访问的资源

        return config //最后将配置返回
    },
    devServer:( configFunction ) => { //configFunction默认有的
        return function ( proxy,allowedHost ) {
            const config = configFunction( proxy,allowedHost ) //这样就可以拿到dev的配置
            config.headers = {
                'Access-control-Allow-Origin':'*'
            }
            return config
        }
    }
}