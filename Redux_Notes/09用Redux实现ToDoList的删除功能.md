# [绑定子项响应事件](https://jspang.com/detailed?id=48#toc335)

打开src目录下的`TodoList.js`文件，然后找到`List`组件的`renderItem`属性，编写代码如下:

```jsx
<div style={{margin:'10px',width:'300px'}}>
    <List
        bordered
        dataSource={this.state.list}
        renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
    />    
</div>
```

然后编写这个`deleteItem()`方法，记得它需要接收一个`index`参数。

```js
deleteItem(index){
    console.log(index)
}
```

这时候我们到浏览器预览一下，按F12打开控制台，可以看到点击按钮时可以看到控制台输出了对应的数组下标。

# [在方法里编写Redux的Action](https://jspang.com/detailed?id=48#toc336)

写完绑定方法就可以写`action`了，在编写时，我们要传递index过去，代码如下：

```js
deleteItem(index){
    const action = {
        type:'deleteItem',
        index
    }
    store.dispatch(action)
}
```

# [reducer业务逻辑的实现](https://jspang.com/detailed?id=48#toc337)

编写和传递完`action`就可以到`reducer.js`来编写相关的业务逻辑了。其实要作的就是删除数组下标的对应值。

```js
if(action.type === 'deleteItem' ){ 
    let newState = JSON.parse(JSON.stringify(state)) 
    newState.list.splice(action.index,1)  //删除数组中对应的值
    return newState
}
```

这时候就做完了这个TodoList组件的基本功能，当然，这个案例还是有很多不足的，我们需要学习更多的知识来完善它，这节课先到这里，下节课继续学习了。