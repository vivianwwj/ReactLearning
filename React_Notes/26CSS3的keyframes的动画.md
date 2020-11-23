用`transition`只能作一些最简单的动画，如果你想稍微复杂点，`transition`就做不出来了。这时候就可以用CSS3中的关键帧动画`keyframes`。这节课就花几分钟学习一下keyframes，如果你CSS3动画不能分的知识很好，完全可以跳过这节课。

此属性与`animation`属性是密切相关的，`keyframes`译成中文就是关键帧，我最早接触这个关键帧的概念是字flash中，现在Flash已经退出历史舞台了。他和`transition`比的优势是它可以更加细化的定义动画效果。比如我们设置上节课的按钮隐藏动画，不仅可以设置透明度，还可以设置颜色。

```css
@keyframes hide-item{
    0% {
        opacity:1;
        color:yellow;
    }
    50%{
        opacity: 0.5 ;
        color:red;
    }
    100%{
        opacity:0;
        color: green;
    }
}
```

这就算是你的动画制作好了，但是动画还没有使用。

# [使用动画](http://www.jspang.com/detailed?id=46#toc395)

使用动画的关键词是`animation`，然后后边跟上你的制作的动画名称，如下面这段代码。

```css
.hide{ animation:hide-item 2s ease-in ; }
```

这句的意思就是,使用`hide-item`动画，持续时间是2秒钟，然后缓动效果是由慢到快（开始的时候慢，之后快）。

但是你会发现，动画执行一遍后又恢复了原状，这个是因为没设置`forwards`属性，它是用来控制停止到最后一帧的。 我们把代码改写成下面的样子。

```css
.hide{ animation:hide-item 2s ease-in forwards; }
```

# [完整代码的实现](http://www.jspang.com/detailed?id=46#toc396)

那`keyframes`的动画已经基本学会了，接下来就把所有的代码修改为`keyframes`的形式吧。所有代码如下：

```css
.show{ animation:show-item 2s ease-in forwards; }
.hide{ animation:hide-item 2s ease-in forwards; }

@keyframes hide-item{
    0% {
        opacity:1;
        color:yellow;
    }
    50%{
        opacity: 0.5 ;
        color:red;
    }
    100%{
        opacity:0;
        color: green;
    }
}

@keyframes show-item{
    0% {
        opacity:0;
        color:yellow;
    }
    50%{
        opacity: 0.5 ;
        color:red;
    }
    100%{
        opacity:1;
        color: green;
    }
}
```

**总结**:`keyframes`也是只能实现很简单的动画效果，一些复杂的动画最好还是使用别人造好的轮子，下节课继续学习`React`中的动画吧。