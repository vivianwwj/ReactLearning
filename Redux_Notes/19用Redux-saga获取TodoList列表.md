[P19:进阶-用Redux-saga获取TodoList列表](https://jspang.com/detailed?id=48#toc270)

上节课已经完成了`redux-saga`的安装和基本配置，这篇文章就用`Redux-saga`来完成TodoList的列表获取。其实`redxu-saga`是比`redux-thunk`要复杂的，它多出了很多API需要学习，至少是学习成本增加了。但是有的人说`saga`更适合于大型项目，本人不予表态，也不想引战，如果你的公司用了`saga`，这两篇文章足可以让你入门了。话不多说，我们继续学习。



我们先来改造`TodoList.js`文件，现在`componentDidMount`里边是空的，所以我们要进行redux的基本操作，这个流程我不再多作介绍了，已经练习了10几遍了。

当然可以先引入一个`action`，当然这个action还没有，我们一会再进行编写，给它起名叫做`getMyListAction`(你可以起任何名字，记住就好，因为下面我们要不断使用)

```js
import {getMyListAction, changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreatores'
```

然后顺势在`actionCreators.js`文件里把这个action创建出来。

```js
export const getMyListAction = ()=>({
    type:GET_MY_LIST
})
```

写完你会发现`GET_MY_LIST`也没有，需要先引入，再到`actionTypes.js`里进行定义

```js
import {GET_MY_LIST,CHANGE_INPUT , ADD_ITEM,DELETE_ITEM,GET_LIST}  from './actionTypes'
```

actionTypes.js文件定义`GET_MY_LIST`

```js
export const  GET_MY_LIST = 'getMyList'
```

之后就可以回到`TodoList.js`文件，编写`componentDidMount`里的内容了。

```js
componentDidMount(){
    const action =getMyListAction()
    store.dispatch(action)
    console.log(action)
}
```

测试完成，可以删除`console.log()`,保持代码的简洁和没有冗余代码。

[编写sagas.js文件(也是业务逻辑)](https://jspang.com/detailed?id=48#toc372)

用`saga`的中间件业务逻辑，就都写在这个`sagas.js`文件里，文件里我们用`mySaga`来作为入口函数。在入口函数中捕获传递过来的`action`类型，根据类型不同调用不同的方法。

```js
import { takeEvery } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    console.log('jspang')
}

export default mySaga;
```

写完上面的代码，我们看一下是否可以正确在浏览器的控制台打印出结果，如果可以顺利的打印出来，说明到目前为止制作正确。然后接下来我们就要用`axios`来请求结果了。

这里给出`sagas.js`的所有内容，然后详细的意思在视频中进行讲解。

```js
import { takeEvery ,put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreatores'
import axios from 'axios'

//generator函数
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    //这段代码我就不删除了。
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)

    // })
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;
```

总结：这就是`Redux-saga`的基本使用方法，其实saga还有其它一些API，但是我工作中用的也不是很多，所以这里也只能保证你达到入门的水平，至于深入，你可以自己探索。至于`redux-thunk`和`redux-saga`哪个好的问题，这里不作争论，用网上流行的话说，小孩子才做选择题，技术老鸟全都学。