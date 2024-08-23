const HtmlWebpackPlugin = require("html-webpack-plugin")
const {resolve} = require("path")  //node模块化语法
module.exports={
    entry:"./src/index.js",//入口文件
    output:{
        filename:"bundle.js",//打包之后生成的js文件名
        path:resolve(__dirname,"dist")//__dirname代表Demo中的一个变量，
    },
    //loader 处理非webpack非js文件
    module:{
        rules:[
            {
                //匹配.css结尾的文件
                test:/\.css$/,
                use:[
                    "style-loader",//创建一个标签，将js中的css样式字符串，加入到head中的style标签中
                    "css-loader"//将css文件已字符串形式加载到js文件中
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader" //将less编译成css
                ]
            },
            {
                test:/\.html$/,
                use:["html-loader"] //处理html中的img图片

            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    mode:"development",
    devServer:{
        port:8080,
        
    }
}
// npm i webpack-dev-server -D
// npx webpack
//npm i less less-loader -D   css
//npm i css-loader style-loader -D
// npm init
//npm install webpack     
//npm install webpack-cil -g  
//npm i webpack webpack-cli --D   
//npm i css-loader style-loader -D
//