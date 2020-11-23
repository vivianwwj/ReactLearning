这节课要作的就是通过`Input`的改变，体验一下`Redux`的整体流程，是如何编写代码的。我们要实现的是在`TodoList`的Demo中,只要文本框中的值改变就`redux`中`store`的值就跟着改变，并且随着`Redux`中的`state`值改变，组件也跟着改变。整个流程就是以前讲过的这个图，

# [增加Input响应事件](https://jspang.com/detailed?id=48#toc326)

如果想`Input`改变，`redux`也跟着改变，需要在`Input`组件上增加`onChange`响应事件， 打开`src`目录下的`ToDolist.js`文件，修改具体代码如下：

```javascript
<Input 
    placeholder={this.state.inputValue} 
    style={{ width:'250px', marginRight:'10px'}}
    //---------关键代码----start
    onChange={this.changeInputValue}
    //---------关键代码----end
/>
```

写完这一步，还要记得在`constructor`进行`this`的绑定，修改`this`的指向。

```javascript
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
}
```

这步完成后，就可以编写`changeInputValue`方法的代码了。我们先在控制台打印出文本框的变化，代码如下：

```javaScript
changeInputValue(e){
    console.log(e.target.value)
}
```

然后打开浏览器，按`F12`看一下控制台的结果。这里给出目前的全部代码:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store'



class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
    }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }

    changeInputValue(e){
        console.log(e.target.value)
    }
}
export default TodoList;
```

下面需要作的事就是改变`Redux`里的值了，我们继续向下学习。

# [创建`Action`](https://jspang.com/detailed?id=48#toc327)

想改变`Redux`里边`State`的值就要创建`Action`了。Action就是一个对象，这个对象一般有两个属性，第一个是对`Action`的描述，第二个是要改变的值。

```js
changeInputValue(e){
    const action ={
        type:'changeInput',
        value:e.target.value
    }
}
```

action就创建好了，但是要通过`dispatch()`方法传递给`store`。我们在action下面再加入一句代码。

```js
changeInputValue(e){
    const action ={
        type:'changeInput',
        value:e.target.value
    }
    store.dispatch(action)
}
```

这是`Action`就已经完全创建完成了，也和`store`有了联系。

# [`store`的自动推送策略](https://jspang.com/detailed?id=48#toc328)

前面的课程，我已经说了`store`只是一个仓库，它并没有管理能力，它会把接收到的`action`自动转发给`Reducer`。我们现在先直接在`Reducer`中打印出结果看一下。打开`store`文件夹下面的`reducer.js`文件，修改代码。

```javascript
export default (state = defaultState,action)=>{
    console.log(state,action)
    return state
}
```

讲到这里，就可以解释一下两个参数了：

- **state**: 指的是原始仓库里的状态。
- **action**: 指的是action新传递的状态。

通过打印你可以知道，`Reducer`已经拿到了原来的数据和新传递过来的数据，现在要作的就是改变store里的值。我们先判断`type`是不是正确的，如果正确，我们需要从新声明一个变量`newState`。（**记住：Reducer里只能接收state，不能改变state。**）,所以我们声明了一个新变量，然后再次用`return`返回回去。

```js
export default (state = defaultState,action)=>{
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    return state
}
```

# [让组件发生更新](https://jspang.com/detailed?id=48#toc329)

现在store里的数据已经更新了，但是组件还没有进行更新，我们需要打开组件文件`TodoList.js`，在`constructor`，写入下面的代码。

```js
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    //----------关键代码-----------start
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态
    //----------关键代码-----------end
}
```

当然我们现在还没有这个`storeChange`方法，只要写一下这个方法，并且重新`setState`一次就可以实现组件也是变化的。在代码的最下方，编写`storeChange`方法。

```js
 storeChange(){
     this.setState(store.getState())
 }
```

现在浏览器中预览，可以看到组件和Redux中都同步进行了改变。这节课的内容比较多，把Redux的流程都走了一遍，如果这节课你能独立作下来，也就算Redux入门了。你可以把这节课的视频多看两遍，保证把基础知识打扎实。我真的是苦口婆心的说哦，你一定要动手作，不然你真的学不会的。