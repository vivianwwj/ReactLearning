什么时候会用到这个插件那？比如在`Dispatch`一个`Action`之后，到达`reducer`之前，进行一些额外的操作，就需要用到`middleware`（中间件）。在实际工作中你可以使用中间件来进行日志记录、创建崩溃报告，调用异步接口或者路由。 这个中间件可以使用是`Redux-thunk`来进行增强(当然你也可以使用其它的)，它就是对Redux中`dispatch`的加强，这节课我们先来学习一下安装和配置（特别是配置的使用很多小伙伴都配置不成功）。

# [安装`Redux-thunk`组件](https://jspang.com/detailed?id=48#toc362)

`Redux-thunk`并不在`Redux`基础组件中，也就是说需要进行新安装。安装使用`npm`就可以了。

```
npm install --save redux-thunk
```

在终端命令行输入上面的命令，就可以进行安装了，根据网络不同安装的时间也会有些不同，我办公室的网是秒按，家里的宽带需要10分钟左右。

# [配置`Redux-thunk`组件](https://jspang.com/detailed?id=48#toc363)

安装作起来很容易，但是配置就要稍微注意一下了，这里边还是有几个小坑的，如果你完全按照官方文档是配置不成功的。 需要在创建store的地方引入`redux-thunk`，对于我们的目录来说，就是`/store/index.js`文件。

1.引入`applyMiddleware`,如果你要使用中间件，就必须在redux中引入`applyMiddleware`.

```js
import { createStore , applyMiddleware } from 'redux' 
```

2.引入`redux-thunk`库

```js
import thunk from 'redux-thunk'
```

如果你按照官方文档来写，你直接把thunk放到`createStore`里的第二个参数就可以了，但以前我们配置了`Redux Dev Tools`，已经占用了第二个参数。

官方文档给的方法:

```js
const store = createStore(
    reducer,
    applyMiddleware(thunk)
) // 创建数据存储仓库
```

这样写是完全没有问题的，但是我们的`Redux Dev Tools`插件就不能使用了，如果想两个同时使用，需要使用**增强函数**。使用增加函数前需要先引入`compose`。

```js
import { createStore , applyMiddleware ,compose } from 'redux' 
```

然后利用`compose`创造一个增强函数，就相当于建立了一个链式函数，代码如下:

```js
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
```

有了增强函数后，就可以把`thunk`加入进来了，这样两个函数就都会执行了。

```js
const enhancer = composeEnhancers(applyMiddleware(thunk))
```

这时候直接在`createStore`函数中的第二个参数，使用这个`enhancer`变量就可以了，相当于两个函数都执行了。

```js
const store = createStore( reducer, enhancer) // 创建数据存储仓库
```

也许你对增加函数还不能完全理解，其实你完全把这个想成固定代码，直接使用就好，我在这里给出全部代码，方便你以后学习使用。

```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
import thunk from 'redux-thunk'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去
```

这样就算把`Redux`的中间件配置好了，可以运行项目，到浏览器看一下结果和看一下`Redux Dev Tools`插件了。