# [利用easy-mock创建模拟数据](https://jspang.com/detailed?id=48#toc358)

这个在基础课程中已经讲过了，我就不作过多的介绍了，如果你还不会，就直接看基础课程吧，反复讲也没什么意思。如果你说我也懒得新建一个，你也可以使用我的模拟数据，我在这里给出地址。

> 地址：https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList

JSON的基本格式，如果上面的接口不管用了，你可以用`Easy mock`自己作一个这样的接口:

```json
{
  "data": {
    "list": [
      '早上4点起床，锻炼身体',
      '中午下班游泳一小时',
      '晚上8点到10点，学习两个小时'
    ]
  }
}
```

# [安装并使用`Axios`](https://jspang.com/detailed?id=48#toc359)

因为在`Redux`的学习中，我们使用了新的项目和目录，所以要重新安装`Axios`插件（以前安装的不能再使用了）。直接使用`npm`进行安装。

```
npm install --save axios
```

安装完成后，就可以在`TodoList.js`中，引入并进行使用了。

```js
import axios from 'axios'
```

引入后，在组件的声明周期函数里`componentDidMount`获取远程接口数据。

```js
componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        console.log(res)
    })
}
```

做完这一步骤后，可以在浏览器中打开，预览下是否控制台(console)获取数据，如果可以获取，说明完全正常。

# [获取数据后跟`Redux`相结合（重点）](https://jspang.com/detailed?id=48#toc360)

接下来就可以把得到的数据放到`Redux`的`store`中了，这部分和以前的知识都一样，我就尽量给出代码，少讲理论了。 先创建一个函数，打开以前写的`store/actionCreatores.js`函数，然后写一个新的函数，代码如下：

```js
export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})
```

这时候保存会显示找不到`GET_LIST`,我们再到`actionTypes.js`文件中加入一个常量，然后引入到`actionCreatores.js`中

```js
export const  GET_LIST = 'getList'
```

引入到`actionCreatores.js`中

```js
import {CHANGE_INPUT , ADD_ITEM , DELETE_ITEM , GET_LIST}  from './actionTypes'
```

这步完成后，回到`TodoList.js`文件，继续编写`axios`中的回调内容，在写之前，记得先把`getListAction`进行引入。

```js
import {changeInputAction , addItemAction ,deleteItemAction,getListAction} from './store/actionCreatores'
componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{    
        const data = res.data
        const action = getListAction(data)
        store.dispatch(action)
    })
}
```

现在数据已经通过`dispatch`传递给`store`了，接下来就需要`reducer`处理业务逻辑了。打开`reducer.js`代码如下(详细步骤在代码中作了注释)：

```js
//----关键代码--------start --------引入GET_LIST
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'
//----关键代码--------end 
const defaultState = {
    inputValue : 'Write Something',
    //----关键代码--------start --------删除原来的初始化代码，减少冗余
    list:[]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM ){ 
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    //----关键代码--------start --------
    if(action.type === GET_LIST ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list = action.data.data.list //复制性的List数组进去
        return newState
    }
    //----关键代码--------en'd --------

    return state
}
```

这样就完成了一次从后台请求数据，然后和Redux结合的过程。希望小伙伴都能练习一下，我们的程序员越来越像真实的开发了，小伙伴也要在练习中不断熟悉这种开发模式。