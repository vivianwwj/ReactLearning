在父组件向子组件传递数据时，使用了属性的方式，也就是==props==，但“小姐姐服务菜单”的案例并没有任何的限制。这在工作中时完全不允许的，因为大型项目，如果你不校验，后期会变的异常混乱，业务逻辑也没办法保证。

我们在`Xiaojiejie.js`组件里传递了4个值，有字符串，有数字，有方法，这些都是可以使用`PropTypes`限制的。在使用需要先引入`PropTypes`。

```js
import PropTypes from 'prop-types'
```

引入后，就可以在组件的下方进行引用了，需要注意的是子组件的最下面（不是类里边），写入下面的代码：

```js
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
```

具体意思，我会在视频中进行讲解，请观看视频。为了防止你的为止写错，我这里给出这个`XiaojiejieItem.JS`文件的代码。

```js
import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types'

class XiaojiejieItem  extends Component { //cc

   constructor(props){
       super(props)
       this.handleClick=this.handleClick.bind(this)
   }

    render() { 
        return ( 
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        );
    }

    handleClick(){

        this.props.deleteItem(this.props.index)
    }

}
 //--------------主要代码--------start
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
 //--------------主要代码--------end
export default XiaojiejieItem;
```

这时候你在浏览器中查看效果，是什么都看不出来的，你需要修改一个错误的校验。比如我们把index改为必须是字符串。

```js
index:PorpTypes.string
```

这时候浏览器的`console`里就会报错了，报错信息如下：

```
Warning: Failed prop type: Invalid prop `index` of type `number` supplied to `XiaojiejieItem`, expected `string`.
    in XiaojiejieItem (at Xiaojiejie.js:28)
    in Xiaojiejie (at src/index.js:5)
```

意思就是要求传递字符串，而我们却传递了数字过去，所以给了警告。

\###　必传值的校验

比如现在我们加入一个`avname`的属性，并放入`JSX`中，就算不传递这个值也不会报错的。代码如下：

```js
render() { 
    return ( 
        <div onClick={this.handleClick}>
            {this.props.avname}为你做- {this.props.content}
        </div>
    );
}
```

这时候代码是不会报错的，我们传不传无所谓。比如我们现在传一个属性过来。

```jsx
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <XiaojiejieItem 
                key={index+item}  
                content={item}
                index={index}
                avname='波多野结衣'
                deleteItem={this.deleteItem.bind(this)}
                />
            )
        })
    }
</ul>  
```

这时候页面显示正常了，但是怎样避免必须传递avname这个属性值?如果不传递就报错,这就需要使用`isRequired`关键字了,它表示必须进行传递，如果不传递就报错。

```js
avname:PropTypes.string.isRequired
```

\###　使用默认值`defaultProps`

有些人是非常腼腆的，他是不好意思选择的，所以有时候是需要有一个默认的人为她服务的。`defalutProps`就可以实现默认值的功能，比如现在把`avname`的默认值设置成"松岛枫" ，然后把`avname`的属性删除掉。

```js
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
```

其实检测的类型非常多，你最好去官方文档看一下，能得到比较全面的了解。下面的课程有用到特殊的类型，还会继续给小伙伴们讲解。