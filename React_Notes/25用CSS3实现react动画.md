父组件的css可以传递给子组件

不需要在子组件中import



前端的动画技术发展到现在,完全可以独立出一个岗位。我目前不属于动画岗，能力有限，也只是简单的给小伙伴们讲讲，做一些前端常用的效果。这节课先用我们最熟悉的CSS3在React中制作一个显示隐藏的动画特效，注意这是用CSS3实现的，其实React只做了业务逻辑。



其实这个组件你起什么名字都行，我也是临时想到的。

需要给“小姐姐服务菜单”增加一个Boss服务人物，点击一下按钮就会自动出现"Boss级人物-孙悟空"，不要管什么恰当不恰当了，咱们是为了练习一下动画。在`src`文件夹下，新建一个`Boss.js`文件。然后用快速生成的方式生成基本结构:

在使用这些命令前，你要保证你安装了VSCode中的`Simple React Snippets`插件。

- 先输入 `imrc`,然后回车，这是为了用`import`引入`React`和`component`。
- 再输入 `ccc` 然后回车,生成最基本的带`constructor`的代码结构。

就会生成下面的基本代码了（2秒钟完成下面的代码，这也是你工作中提高效率的关键）:

```javascript
import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  );
    }
}

export default Boss;
```

然后我们先写一些JSX代码，让页面上有一段文字和一个按钮。代码如下：

```javascript
import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>BOSS级人物-孙悟空</div>
                <div><button>召唤Boss</button></div>
            </div>
          );
    }
}

export default Boss;
```

[编写业务逻辑](http://www.jspang.com/detailed?id=46#toc391)

目前组件没有任何业务逻辑，只有一个UI，这是没办法实现动画效果的。业务逻辑是点击按钮的时候可以改变字的'

'显示隐藏。 要实现这个业务逻辑，先在`constructor`里增加state值`isShow`，详情请看下面的代码。



```js
this.state = { 
    isShow:true
}
```

然后把“字”的部分，增加`className`,并用`isShow`进行控制。



```jsx
<div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
```

需要点击按钮时，有响应的事件，所以需要一个方法，我们编写一个`toToggole()`方法，代码如下：

```javascript
toToggole(){
    this.setState({
        isShow:this.state.isShow ? false : true
    })
}
```

意思就是当`isShow`为`true`时，我们赋值`false`;当`isShow`为`false时，我们赋值`true`.

有了方法后，可以给`<button>`加上`onClick`响应事件了，代码如下：

```html
<div><button onClick={this.toToggole}>召唤Boss</button></div>
```

写完这个事件，还是需要到`constructor`里绑定一下`this`。代码如下：

```js
constructor(props) {
    super(props);
    this.state = { 
        isShow:true
    }
    this.toToggole = this.toToggole.bind(this);
}
```

这样我们的基本业务逻辑就算写完了，可以把代码加入到`Xiaojiejie`组件中，看一下效果了。

[加入CSS动画](http://www.jspang.com/detailed?id=46#toc392)

在页面上看不出任何的效果，如果你打开浏览器控制台是可以看到每次点击按钮，class都会变化的。界面没变化，知识我们没有写CSS。现在可以在`style.css`里写样式，代码如下:

```css
.show{ opacity: 1; transition:all 1.5s ease-in;}
.hide{opacity: 0; transition:all 1.5s ease-in;}
```

这样就用CSS3实现了React中动画，这知识最简单的实践动画，所以先不要吐槽，接下来几节课我们会继续讲解React中动画的知识。继续跟着技术胖一起学习吧。