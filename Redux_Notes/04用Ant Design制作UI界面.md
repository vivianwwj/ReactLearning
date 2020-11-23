已经完成了基本开发环境和`AntDesign`的安装。这节课用`Ant Design`制作一下TodoList的界面。本文不会对`Ant Design`深入讲解，只是为了让课程的界面好看一点，如果你对它有强烈的学习需要或愿望，可以看一下`Ant Design`官方文档,文档都是中文，没有什么难度。图片就是这节课最后要做出的样式。



# [引入CSS样式](https://jspang.com/detailed?id=48#toc314)

在使用`Ant Design`时，第一件事就是先引入CSS样式，有了样式才可以让UI组件显示正常。可以直接在`/src/TodoList.js`文件中直接用`import`引入。

```javascript
import 'antd/dist/antd.css'
```

# [编写Input框](https://jspang.com/detailed?id=48#toc315)

引入CSS样式之后，可以快乐的使用`antd`里的`<input>`框了，在使用的时候，你需要先引入`Input`组件。全部代码如下:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Input placeholder='jspang' style={{ width:'250px'}}/>
                </div>
            </div>
         );
    }
}
export default TodoList;
```

在`Input`组件里，我们设置了`style`，注意设置这个时不带单引号或者双引号的。

写完后就可以简单的看一下效果了。

# [编写Button按钮](https://jspang.com/detailed?id=48#toc316)

`Ant Design`也提供了丰富好看的按钮组件，直接使用最简单的`Primary`按钮。使用按钮组件前也需要先引入,为了让组件更好看，还加入了一些`Margin`样式，代码如下:

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button } from 'antd'

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='Write something' style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
            </div>
         );
    }
}
export default TodoList;
```

# [List组件制作列表](https://jspang.com/detailed?id=48#toc317)

同样用`Ant Desgin`制作todoList的列表，在制作前，我们先在`class`外部声明一个data数组，数组内容可以随便写。

```js
const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]
```

然后引入List组件，代码如下:

```js
import { Input , Button , List } from 'antd'
```

最后就是使用这个List组件了。

```js
<div style={{margin:'10px',width:'300px'}}>
    <List
        bordered
        dataSource={data}
        renderItem={item=>(<List.Item>{item}</List.Item>)}
    />    
</div>
```

为了方便学习，我给出了全部代码，如果你作起来有难度，可以直接复制下面的代码。

```javascript
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='write someting' style={{ width:'250px', marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }
}
export default TodoList;
```

**总结**:这节课主要用`Ant Design`制作了todoList的界面，使用了`<Input>`，`<Button>`和`<List>`组件，因为这个课程是讲`Redux`的，所以这些组件的使用方法并没有展开讲，主要是制作一个UI界面，为以后的课程作铺垫。如果你对`Ant Design`非常感兴趣，你可以去官方网站阅读文档。