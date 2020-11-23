Instructions:

https://github.com/zalmoxisus/redux-devtools-extension

# [安装`Redux DevTools`](https://jspang.com/detailed?id=48#toc323)

我使用`Chrome`浏览器安装插件，在浏览器右上角有三个点，然后点击"更多工具",再点击"扩展程序"，再点击右侧的"打开Chrome网上商店",然后搜索`Redux DevTools`，可以看到下面这个插件，直接安装就可以了。

![ReduxDevTools](https://www.jspang.com/images/reduxTools.png)

安装完成后，你在控制台中就可以看到`Redux`标签了，有了这个标签也说明安装成功了。

# [配置`Redux Dev Tools`](https://jspang.com/detailed?id=48#toc324)

这也算是小伙伴经常问我的一个问题，就是如何配置这个`Redux Dev Tools`插件，其实网站上已经说的非常清楚了，现在通过插件，打开这个网站。根据网站提示，我们把上节课的`index.js`代码改为下面的样子。

```js
import { createStore } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // 创建数据存储仓库
export default store   //暴露出去
```

其实就是加了这样一句话.

```js
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

这句话的意思就是看window里有没有这个方法，有则执行这个方法（不要被大写的方法名吓到）。

这步完成后，就可以启动项目测试一下了，你会发现State数据变的一目了然，以后再进行Redux调试，就会变的非常简单了。

那这节课就先到这里，下节课我们继续学习如何通过创建`Action`来改变`Redux`里`State`的值。