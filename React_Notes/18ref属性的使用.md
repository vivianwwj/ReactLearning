Xiaojiejie.js

```react
ref={(input)=>{this.input=input}}
```



setState是异步的方法(虚拟DOM渲染)

先打印后进行的setState

所以ref绑定后，打印出来的数量会比实际的少1

```react
<ul ref={(ul)=>{this.ul=ul}}>
    
 addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        //在这边进行一个输出
        console.log(this.ul.querySelectorAll('li').length)
    } 
```



问题解决：

``` react
    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{ console.log(this.ul.querySelectorAll('li').length)}
        )   
```



---------



JSpang官网讲解

在编写组件中的方法时，经常会遇到语义化很模糊的代码，这对于团队开发是一个很大的问题。因为review代码或者合作时都会影响开发效率。或者到这核心成员离开，项目倒闭的严重影响。所以我们必须重视react代码当中的语义化。ref是个不错的工具，快来学习一下吧。

以前的案例中，我们写了下面的代码，使用了`e.target`，这并不直观，也不好看。这种情况我们可以使用`ref`来进行解决。

```javascript
inputChange(e){

    this.setState({
        inputValue:e.target.value
    })
}
```

如果要使用`ref`来进行，需要现在`JSX`中进行绑定， 绑定时最好使用ES6语法中的箭头函数，这样可以简洁明了的绑定DOM元素。

```jsx
<input 
    id="jspang" 
    className="input" 
    value={this.state.inputValue} 
    onChange={this.inputChange.bind(this)}
    //关键代码——----------start
    ref={(input)=>{this.input=input}}
    //关键代码------------end
    />
```

绑定后可以把上边的类改写成如下代码:

```js
inputChange(){
    this.setState({
        inputValue:this.input.value
    })
}
```

这就使我们的代码变得语义化和优雅的多。但是就我个人的经验来讲，我是不建议用`ref`这样操作的，因为`React`的是数据驱动的，所以用ref会出现各种问题。

[`ref`使用中的坑](http://www.jspang.com/detailed?id=46#toc367)

比如现在我们要用ref绑定取得要服务的数量，可以先用`ref`进行绑定。

```jsx
<ul ref={(ul)=>{this.ul=ul}}>
    {
        this.state.list.map((item,index)=>{
            return (
                <XiaojiejieItem 
                key={index+item}  
                content={item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
                />
            )
        })
    }
</ul>  
```

绑定后可以在`addList()`方法中，获取当前`<div>`的值.

```js
 addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
    //关键代码--------------start
    console.log(this.ul.querySelectorAll('div').length)
    //关键代码--------------end

}
```

这时候你打开控制台，点击添加服务按钮，你会返现数量怎么少一个？（就是这个坑），其实这个坑是因为React中更多`setState`是一个异步函数所造成的。也就是这个`setState`，代码执行是有一个时间的，如果你真的想了解清楚，你需要对什么是虚拟DOM有一个了解。简单的说，就是因为是异步，还没等虚拟Dom渲染，我们的`console.log`就已经执行了。

那这个代码怎么编写才会完全正常那，其实`setState`方法提供了一个回调函数，也就是它的第二个函数。下面这样写就可以实现我们想要的方法了。

```js
addList(){
    this.setState({
        list:[...this.state.list,this.state.inputValue],
        inputValue:''
        //关键代码--------------start
    },()=>{
        console.log(this.ul.querySelectorAll('div').length)
    })
    //关键代码--------------end
}
```

现在到浏览器中查看代码，就完全正常了。这节课主要学习了`ref`的用法和`ref`中的坑。学完后练习一下吧，代码这东西，不练习你是学不会的。