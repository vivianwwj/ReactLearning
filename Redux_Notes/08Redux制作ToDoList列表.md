# [编写按钮添加响应事件和Action](https://jspang.com/detailed?id=48#toc331)

先来编写按钮点击后的响应事件，打开`TodoList.js`文件，然后在按钮的地方加入`onClick`事件，记得要进行绑定哦。

```js
<Button 
    type="primary"
    onClick={this.clickBtn}
>增加</Button>
```

然后在`constructor`里进行绑定，代码如下:

```js
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    //关键代码------------start----------
    this.clickBtn = this.clickBtn.bind(this)
    //关键代码------------end----------
    store.subscribe(this.storeChange) //订阅Redux的状态
}
```

绑定之后就可以编写`clickBtn()`方法了，这里先用一个打印语句代替业务内容。

```js
clickBtn(){
    console.log('jspang.com')
}
```

这时候预览一下，点击"增加按钮"，在控制台就可以输出`jspang.com`了。说明我们的事件添加成功了。

# [创建Action并用`dispatch()`传递给`store`](https://jspang.com/detailed?id=48#toc332)

在`clickBtn`方法里增加Action，然后用`dispatch()`方法传递给store，代码如下:

```js
clickBtn(){
   const action = { type:'addItem'}
   store.dispatch(action)
}
```

这时候已经把action传递给了`store`，然后去`Reducer`里编写业务逻辑就可以了。

# [编写Reducer的业务逻辑](https://jspang.com/detailed?id=48#toc333)

打开`reducer.js`文件，先编写代码判断`type`是不是`addItem`，如果向redux的list中插入新值。

```js
export default (state = defaultState,action)=>{
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if(action.type === 'addItem' ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
     //关键代码------------------end----------
    return state
}
```

因为上节课已经编写了订阅方法，所以到这里就可以打开浏览器进行预览了。你可以试着添加一些新的东西进来。这节课到这里就结束了，虽然没有什么新的知识点，但是这个`Redux`的流程你必须要熟练掌握，因为在工作中编写Redux程序，我几乎每天都在和这个流程打交道，实现界面的快速响应。