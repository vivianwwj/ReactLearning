import { createStore, applyMiddleware,compose  } from 'redux'  // 引入createStore方法
import reducer from './reducer' 
//import thunk from 'redux-thunk'
import mySagas from './sagas'

import createSagaMiddleware from 'redux-saga'   //引入saga
const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

//需要把thunk放在createStore的第二个参数，
//现在的情况是第二个参数被占用，因此需要使用compose
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
//同理saga也是这样的
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)          // 创建数据存储仓库
sagaMiddleware.run(mySagas)

    export default store                             //暴露出去 