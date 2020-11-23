React有着极好的开发生态，开发需要的任何基本需求都可以找到官方或大神造的轮子，动画这种必不可少的东西当然也不例外，React生态中有很多第三方的动画组件，你应该学习一下`react-transition-group`动画组件。目前我在工作中使用表现很好，可以满足日常动画开发需求。

推荐的最重要理由是：这个也是react官方提供的动画过渡库，有着完善的API文档（完善到我都不好意思再讲一遍）。

使用它要先进行安装，这里使用`npm`的形式进行安装了，当然也可以使用`yarn`。

先用`VSCode`打开项目根目录，然后打开终端，输入下面的命令，进行安装：

```shell
npm install react-transition-group --save
```

安装好后，你可以先去github上来看一下文档，他是有着三个核心库（或者叫组件）。

- Transition
- CSSTransition
- TransitionGroup

\###　使用CSSTransition

其实这个库用起来根`ng-animate`差不多，先来看看如何使用`CSSTransition`。

先用`import`进行引入，代码如下：

```js
import { CSSTransition } from 'react-transition-group'
```

引入后便可以使用了，使用的方法就和使用自定义组件一样,直接写`<CSSTransition>`，而且不再需要管理`className`了，这部分由`CSSTransition`进行管理。修改上节课写的`Boss.js`文件里的`render`区域。

```jsx
render() { 
    return ( 
        <div>
            <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
            >
                <div>BOSS级人物-孙悟空</div>
            </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
        </div>
        );
}
```

需要注意的是`classNames`这个属性是由`s`的，如果你忘记写，会和原来的`ClassName`混淆出错，这个一定要注意。

我们把上节课的代码进行了改造，然后你就可以到CSS中改写`style`了。在修改样式之前，有那些类名。

- xxx-enter: 进入（入场）前的CSS样式；
- xxx-enter-active:进入动画直到完成时之前的CSS样式;
- xxx-enter-done:进入完成时的CSS样式;
- xxx-exit:退出（出场）前的CSS样式;
- xxx-exit-active:退出动画知道完成时之前的的CSS样式。
- xxx-exit-done:退出完成时的CSS样式。

知道了这些要设置的CSS，就可以删除原来写的CSS了，把下面的代码写上：

```css
.input {border:3px solid #ae7000}

.boss-text-enter{
    opacity: 0;
}
.boss-text-enter-active{
    opacity: 1;
    transition: opacity 2000ms;

}
.boss-text-enter-done{
    opacity: 1;
}
.boss-text-exit{
    opacity: 1;
}
.boss-text-exit-active{
    opacity: 0;
    transition: opacity 2000ms;

}
.boss-text-exit-done{
    opacity: 0;
}
```

这时候你的动画样式就正常了，你回发现我们再也不用自己管理className了，而是完全交给了`react-transition-group`来作。

[unmountOnExit 属性](http://www.jspang.com/detailed?id=46#toc399)

学到这里，会感觉这样写也没有简化多少，更没特殊的效果，技术胖你又玩我。

其实不是的，比如我们给`<CSSTransition>`加上`unmountOnExit`,加上这个的意思是在元素退场时，自动把DOM也删除，这是以前用CSS动画没办法做到的。

比如我们把代码写成这个样子：

```js
render() { 
    return ( 
        <div>
            <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
                unmountOnExit
            >
                <div>BOSS级人物-孙悟空</div>
            </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
        </div>
        );
}
```

总结:这几课简单的学习了一下React官方的`react-transition-group`动画库，也实现了一些动画效果。下节课继续学习动画库中的钩子函数和`transition-group`。