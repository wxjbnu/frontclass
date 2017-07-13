module.exports = {
    // configuration
    entry: __dirname+"/index.js", //代表入口(总)文件，可以写多个
    output: {
        path: __dirname+"/dist/", //输出文件夹
        filename: "bundle.js" //最终打包生成的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                exclude: /node_modules/, //排查文件夹
                loader: "babel-loader",
                // query: {presets: ['es2015']}
            }

        ]
    }
};