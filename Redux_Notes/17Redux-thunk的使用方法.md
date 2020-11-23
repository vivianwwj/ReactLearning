这节课我们把向后台请求数据的程序放到中间件中，这样就形成了一套完整的Redux流程，所有逻辑都是在Redux的内部完成的，这样看起来更完美，而且这样作自动化测试也会变动简单很多，所以工作中你还是要尽量按照这种写法来写。



# [在`actionCreators.js`里编写业务逻辑](https://jspang.com/detailed?id=48#toc365)

以前`actionCreators.js`都是定义好的action，根本没办法写业务逻辑，有了`Redux-thunk`之后，可以把`TodoList.js`中的`componentDidMount`业务逻辑放到这里来编写。也就是把向后台请求数据的代码放到`actionCreators.js`文件里。那我们需要引入`axios`,并写一个新的函数方法。（以前的action是对象，现在的action可以是函数了，这就是`redux-thunk`带来的好处）

```js
import axios from 'axios'
...something...
export const getTodoList = () =>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            console.log(data)
        })
    }
}
```

现在我们需要执行这个方法，并在控制台查看结果，这时候可以修改`TodoList.js`文件中的`componentDidMount`代码。

```js
//先引入getTodoList
import {getTodoList , changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
---something---
componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
}
```

然后我们到浏览器的控制台中查看一下，看看是不是已经得到了后端传给我们的数据，如果一切正常，应该是可以得到。得到之后，我们继续走以前的Redux流程就可以了。

```js
export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)

        })
    }
}
```

这个函数可以直接传递`dispatch`进去，这是自动的，然后我们直接用`dispatch(action)`传递就好了。现在我们就可以打开浏览器进行测试了。

这时候还会有一些警告，主要是我们引入了并没有使用，我们按照警告的提示，删除没用的引入就可以了。

也许你会觉的这么写程序很绕，其实我刚开始写Redux的时候也会这么想，但是随着项目的越来越大，你会发现把共享`state`的业务逻辑放到你`Redux`提示当中是非常正确的，它会使你的程序更加有条理。而在自动化测试的时候，可以直接对一个方法进行测试，而对生命周期测试是困难的。我目前接触的大公司都是要求这样写的，如果现在还不能理解里边的好处，也不用纠结，先按照这种形式进行编写。等你写过2至3个项目后，你就能理解这种写法的好处了。