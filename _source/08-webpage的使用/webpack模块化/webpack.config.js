// 自定义webpack配置文件(固定文件)

const path = require('path')

module.exports = {
  //入口:可以是字符串/数组/对象,入口只有一个,写一个字符即可
  entry: './src/main.js',
  //出口:通常是一个对象,至少包含两个重要属性,path和filename
  output: {
    path: path.resolve(__dirname, 'dist'), //通常是一个绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [ //规则
      {
        test: /\.m?js$/,
        /*
          - exclude :排除
          - include : 包含
        */
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],

      }
    ]
  },
  resolve: { //解决只运行环境
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }

}

// .\node_modules\.bin\webpack  输入命令在控制台打包文件