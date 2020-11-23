import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
// import { Input } from 'antd';
// import { Button } from 'antd';

//Redux相关
import store from './store/index'
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreatores'

// const data = [
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
    constructor(props){
        super(props)
        //将store中的数据存为state中的数据
        this.state={

        }
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.addList=this.addList.bind(this)
        
         this.storeChange=this.storeChange.bind(this)
         store.subscribe(this.storeChange)

    }

    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                    placeholder={this.state.inputValue} 
                    style={{ width: '250px' , marginRight:'10px'}} 
                    onChange={this.changeInputValue} 
                    />

                    <Button  
                    type="primary"
                    onClick={this.addList}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                     bordered
                        dataSource={this.state.list}
                        // renderItem={item => (
                        //     <List.Item>
                        //        {item}
                        //     </List.Item>
                        // )}
                        renderItem={(item,index)=>(
                            <List.Item 
                            onClick={this.deleteItem.bind(this,index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e){

        //创建action
        //一般两个参数，分别是：Action描述和值
        const action=changeInputAction(e.target.value)
        // {
        //     // type:'changeInput',
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        store.dispatch(action)
    }

    addList(){
        const action=addItemAction()
        // {
        //     // type:'addList',
        //     type:ADD_ITEM,
        //     //这里甚至不需要参数的传递我真是惊了
        //     //原因在于在之前的编写changeInputValue中已经对于参数进行传递
        //     //value:this.state.inputValue
        // }
        store.dispatch(action)
    }

    deleteItem(index){
        // console.log(index)
        const action =deleteItemAction(index)
        // {
        //     // type:'deleteItem',
        //     type:DELETE_ITEM,
        //     // value:index
        //     //value是可以省略的
        //     index
        // }
        store.dispatch(action)
    }

    //进行store订阅
    storeChange(){
        this.setState(store.getState())
    }

}

export default TodoList;