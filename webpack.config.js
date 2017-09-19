module.exports = {
    entry: ["./utils", "./app"],
    output:{
        filename:"bundle.js"
    }, 
    
    resolve: {
        extensions: ['.js', '.es6']
    }, 

    module: {
        rules : [
            {
                test: /\.js$/, 
                enforce: "pre",
                exclude: /node_modules/,
                loader: "jshint-loader"
            }, 
            {
                test: /\.es6$/, 
                exclude: /node_modules/, 
                loader:"babel-loader"
            }
        ]
    }
}