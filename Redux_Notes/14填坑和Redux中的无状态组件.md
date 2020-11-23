上节课程序写完，有一个小错误，当时我并没注意到，还是VIP群里的小伙伴告诉我的，无意中给大家留了一个坑，跟大家说对不起了。这节课我们先解决这个遗留问题，再讲一下无状态组件。无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在`state`（状态）。因为无状态组件其实就是一个函数（方法）,所以它的性能也比普通的`React`组件要好。



上节课写完UI和业务分离后，在删除`TodoList`的项目时，是有一个错误的，这个错误属于业务逻辑错误，并不是语法错误。就是在删除item时，正序删除是没有问题的，但是倒叙删除是有问题的。 主要是我们的`index`出现了重新声明的问题。

原来的错误代码是这样的：

```js
<List
    bordered
    dataSource={this.props.list}
    renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
/>   
```

只要改成下面这样就正确了。

//否则参数item,index中的index并没有被使用

```js
 <List
    bordered
    dataSource={this.props.list}
    renderItem={
        (item,index)=>(
            <List.Item onClick={()=>{this.props.deleteItem(index)}}>
                {item}
            </List.Item>
        )
    }
/>    
```

# [无状态组件的改写](https://jspang.com/detailed?id=48#toc356)

把UI组件改成无状态组件可以提高程序性能，具体来看一下如何编写。

1. 首先我们不在需要引入React中的`{ Component }`，删除就好。
2. 然后些一个`TodoListUI`函数,里边只返回`JSX`的部分就好，这步可以复制。
3. 函数传递一个`props`参数，之后修改里边的所有`props`，去掉`this`。

这里给出最后修改好以后的无状态组件代码，这样的效率要高于以前写的普通`react`组件。

```js
import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUi = (props)=>{
    return(
        <div style={{margin:'10px'}}>
            <div>
                <Input  
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item,index)=>(
                            <List.Item onClick={()=>{props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )
                    }
                />    
            </div>
        </div>
    )

}

export default TodoListUi;
```

总结:这节课主要学习了`React`中的无状态组件，如果是以前没有`Redux`的时候，实现分离是比较困难的，但是现在我们作项目，一定想着找个组件是否可以作成无状态组件。如果能做成无状态组件就尽量作成无状态组件，毕竟性能要高很多。