# [初始化项目](https://jspang.com/detailed?id=48#toc310)

这里我默认你已经看过我的“React16免费视频教程”了，所以我认为你这个过程已经了解了知识点，我只是带着你作一遍。

1. 如果你没有安装脚手架工具，你需要安装一下：

   ```
   npm install -g create-react-app
   ```

2. 直接用脚手架工具创建项目

   ```
    D:  //进入D盘
    mkdir ReduxDemo   //创建ReduxDemo文件夹
    cd ReduxDemo      //进入文件夹
    create-react-app demo01  //用脚手架创建React项目
    cd demo01   //等项目创建完成后，进入项目目录
    npm  start  //预览项目
   ```

   这样项目就制作好了，我们删除一下没用的文件，让代码结构保持最小化。删除SRC里边的所有文件，只留一个

   ```
   index.js
   ```

   ,并且index.js文件里也都清空。

# [快速生成基本代码结构](https://jspang.com/detailed?id=48#toc311)

编写`index.js`文件,这个文件就是一个基础文件，基本代码也都是一样的。

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './TodoList'

ReactDOM.render(<TodoList/>,document.getElementById('root'))
```

编写`TodoList.js`文件,这个文件可以用`Simple React Snippets`快速生成。 先输入`imrc`,再输入`ccc`

代码如下：

```js
import React, { Component } from 'react';
class TodoList extends Component {
    render() { 
        return ( 
            <div>Hello World</div>
         );
    }
}
export default TodoList;
```

做完这个，算是项目基本构建完成，可以打开浏览器看一下效果。接下来就可以安装`Ant Design`UI框架了。

# [安装`AntDesign`](https://jspang.com/detailed?id=48#toc312)

这里使用`npm`来进行安装，当然你有可以用`yarn`的方式进行安装.

```
npm install antd --save
```

`yarn`的安装方式是:

```
yarn add antd
```

如果你的网络情况不好，最好使用`cnpm`来进行安装。等待程序安装完以后，就可以进行使用了。这个我家里的网络安装起来非常耗时，所以就等待安装完成后，再下节课学习一下如何使用吧。