[redux-saga的安装](https://jspang.com/detailed?id=48#toc367)

你可以直接使用`npm`来进行安装，当然用`yarn`也是没有问题的，根据自己的喜好吧。我这里使用了`npm`来进行安装。

```
npm install --save redux-saga
```

这里给出github地址，方便你更好的学习。

> https://github.com/redux-saga/redux-saga

[引入并创建`Redux-saga`](https://jspang.com/detailed?id=48#toc368)

安装好后，就可以使用了，直接在`/src/store/index.js`里引入`redux-saga`,并创建一个`sagaMiddleware`，代码如下:

```js
import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
```

创建好后，还是用Redux的增强函数进行传递。也就是把原来的`Redux-thunk`替换成`saga`中间件（注意去掉原来不用的`redux-thunk`引入）。

```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'   
//------关键代码----start----------- 
import createSagaMiddleware from 'redux-saga' 
const sagaMiddleware = createSagaMiddleware();
//------关键代码----end-----------

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
//------关键代码----end-----------

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去
```

这步完成后，就把原来的`redux-thunk`替换成`redux-saga`了，当然，现在我们还不能使用，我们还需要继续配置`sagas.js`文件。

[创建`sagas.js`文件并引入](https://jspang.com/detailed?id=48#toc369)

`redux-saga`希望你把业务逻辑单独写一个文件，这里我们在`/src/store/`文件夹下建立一个`sagas.js`文件。

```js
function* mySaga() {} 
export default mySaga;
```

创建好以后直接引入到`index.js`里。

```js
import mySagas from './sagas' 
```

然后执行run方法，让`saga`运行起来。

```js
sagaMiddleware.run(mySagas)
```

为了方便你学习，这里给出`/src/store/index.js`的全部内容。

```js
import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'   
import createSagaMiddleware from 'redux-saga' 
import mySagas from './sagas' 

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore( reducer, enhancer) 
sagaMiddleware.run(mySagas)


export default store  
```

现在已经完全替换成`redux-saga`了，所以以前在`TodoList.js`中的代码需要删除，不删除就会报错。主要删除`componentDidMount`声明周期函数里的代码。 这样`redux-saga`的安装和配置就算完成了，之后我们就可以编写中间件了。其实这个配置一般在项目中也只需要作一次，你完全可以收藏网页，然后需要时回来看一下就可以了。