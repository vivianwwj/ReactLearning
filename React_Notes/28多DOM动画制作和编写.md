通过上一节的学习，只能控制一个DOM元素的动画，想控制多个动画`react-transition-group`这个动画库也是可以做到的。这节课就带你了解一下多DOM动画控制的方法。

它就是负责多个DOM元素的动画的，我们还是拿小姐姐这个案例作例子，现在可以添加任何的服务项目，但是都是直接出现的，没有任何动画，现在就给它添加上动画。添加动画，先引入`transitionGrop`。

直接打开`/src/Xiaojiejie.js`的文件，然后在最顶部同时

```js
import {CSSTransition , TransitionGroup} from 'react-transition-group'
```

引入之后，就可以使用这个组件了，方法是在外层增加`<TransitionGroup>`标签。

```jsx
<ul ref={(ul)=>{this.ul=ul}}>
    <TransitionGroup>
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
    </TransitionGroup>
</ul> 
```

这个需要放在循环的外边，这样才能形成一个组动画,但是只有这个`<TransitonGroup>`是不够的，你还是需要加入`<CSSTransition>`,来定义动画。

[加入``标签](http://www.jspang.com/detailed?id=46#toc3102)

可以完全仿照上节课的经验，为`Xiaojiejie`组件，加上具体的动画设置，就可以实现多DOM元素的动画效果了。代码如下：

```jsx
<ul ref={(ul)=>{this.ul=ul}}>
    <TransitionGroup>
    {
        this.state.list.map((item,index)=>{
            return (
                <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}  
                >
                    <XiaojiejieItem 
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    />
                </CSSTransition>
            )
        })
    }
    </TransitionGroup>
</ul>  
<Boss />
</Fragment>
```

总结:React动画还有很多知识，能做出很多酷炫的效果，完全可以单独分出来一个岗位，我在工作中用的都是比较简单的动画，用`react-transition-group`动画已经完全可以满足我的日常开发需求了。如果你想学习更多的React动画知识，可以看看文档或者书。

学完这节，React的基础知识部分就到这里了，下节课开始讲解`Rudex`的知识，希望你能跟着技术胖继续学习，一起努力进步。