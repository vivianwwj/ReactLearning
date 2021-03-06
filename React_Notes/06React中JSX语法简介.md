上节课已经接触到了JSX语法，看起来跟`html`标签几乎一样，事实也是如此。JSX语法确实也有很多需要注意的事项，但是对于初学者学太多反而不好。所以这节课我们作一个最简单的JSX语法介绍。

# [JSX简介](https://jspang.com/detailed?id=46#toc324)

> JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，当遇到`<`，JSX就当作HTML解析，遇到`{`就当JavaScript解析.

比如我们写一段JSX语法

```html
<ul className="my-list">
    <li>JSPang.com</li>
    <li>I love React</li>
</ul>
```

比如我们以前写一段代码JS代码：

```javascript
var child1 = React.createElement('li', null, 'JSPang.com');
var child2 = React.createElement('li', null, 'I love React');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
```

从代码量上就可以看出JSX语法大量简化了我们的工作。

# [组件和普通JSX语法区别](https://jspang.com/detailed?id=46#toc325)

这个说起来也只有简单的一句话，就是你自定义的组件必须首写字母要进行大写，而JSX是小写字母开头的。

这个也算是一个比较重要的知识点吧。

# [JSX中使用三元运算符](https://jspang.com/detailed?id=46#toc326)

在JSX中也是可以使用js语法的，这节课我们先简单讲解一个三元元算符的方法，见到了解一下。

```javascript
import React from 'react'
const Component = React.Component


class App extends Component{
    render(){
        return (
            <ul className="my-list">
                <li>{false?'JSPang.com':'技术胖'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}

export default App;
```

总结:通过这节课的简单学习，小伙伴们一定对JSX语法有个简单的了解，其实作为一个初学者，我们先知道这么多就足够了。随着课程以后我们会继续深入讲解。