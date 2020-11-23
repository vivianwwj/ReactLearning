# [JSX代码注释](https://jspang.com/detailed?id=46#toc343)

`JSX`中的代码注释是非常有讲究的，这个书上介绍的也非常少，所以在这里讲一下，因为技术胖在初学`React`在这里踩过坑。

我第一次写`JSX`注释，是直接这样写的，当然这样写是完全不对的。

```jsx
<Fragment>
    //第一次写注释，这个是错误的
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```

那写`JSX`的注释，可以有下面两种写法:

```jsx
<Fragment>
    {/* 正确注释的写法 */}
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```

如果你记不住，有个简单的方法，就是用`VSCode`的快捷键，直接按`Ctrl+/`，就会自动生成正确的注释了。

你可以把这个理解为，在jsx中写javascript代码。所以外出我们套入了`{}`，然后里边就是一个多行的javascript注释。如果你要使用单行祝注释`//`，你需要把代码写成下面这样。

```jsx
<Fragment>
    {
        //正确注释的写法 
    }
    <div>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addList.bind(this)}> 增加服务 </button>
    </div>
```

也就是你要进行换行，所以个人认为这种方法不太优雅，所以推荐第一种注释方法。

# [JSX中的class陷阱](https://jspang.com/detailed?id=46#toc344)

比如要给朴素单纯的界面，加入黄色成分，让我们的文本框又粗又黄。我们先来错误演示。

第一步：先写一个CSS样式文件，在`src`目录下，新建一个`style.css`的样式文件。

```css
.input {border:3px solid #ae7000}
```

第二步：在`Xiaojiejie.js`里引入，先用`import`进行引入,能用import引入，都是webpack的功劳。

```javascript
import './style.css'
```

第三部：给`JSX`加入`class,注意下面的代码是错误的。

```jsx
<input class="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```

虽然现在页面是可以正常显示结果的，但是你代开浏览器控制台会发现`Warning`警告。

```jsx
index.js:1437 Warning: Invalid DOM property `class`. Did you mean `className`?
    in input (at Xiaojiejie.js:19)
    in div (at Xiaojiejie.js:18)
    in Xiaojiejie (at src/index.js:5)
```

意思就是要把`class`换成`className`，它是防止和`js`中的`class`类名 冲突，所以要求换掉。这也算是一个小坑吧。

# [JSX中的`html`解析问题](https://jspang.com/detailed?id=46#toc345)

如果想在文本框里输入一个`<h1>`标签，并进行渲染。默认是不会生效的，只会把`<h1>`标签打印到页面上，这并不是我想要的。如果工作中有这种需求，可以使用`dangerouslySetInnerHTML`属性解决。具体代码如下：

```jsx
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <li 
                    key={index+item}
                    onClick={this.deleteItem.bind(this,index)}
                    dangerouslySetInnerHTML={{__html:item}}
                >
                </li>
            )
        })
    }
</ul> 
```

上面的代码就可以实现`html`格式的输出。

# [JSX中``标签的坑](https://jspang.com/detailed?id=46#toc346)

JSX中`<label>`的坑，也算是比较大的一个坑，label是`html`中的一个辅助标签，也是非常有用的一个标签。

先看下面的代码，我们在文本框前面加入一个`<label>`。

```jsx
<div>
    <label>加入服务：</label>
    <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候想点击“加入服务”直接可以激活文本框，方便输入。按照`html`的原思想，是直接加ID就可以了。代码如下：

```jsx
<div>
    <label for="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候你浏览效果虽然可以正常，但`console`里还是有红色警告提示的。大概意思是不能使用`for`.它容易和javascript里的for循环混淆，会提示你使用`htmlfor`。

```jsx
<div>
    <label htmlFor="jspang">加入服务：</label>
    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
    <button onClick={this.addList.bind(this)}> 增加服务 </button>
</div>
```

这时候代码就正确了，可以实现点击`<label>`后,激活`<input>`标签了。

这节算是我总结的一些`JSX`中的坑吧，总结出来，希望小伙伴们少踩这些坑，能快速上手`React`。