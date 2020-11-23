import React, { Component } from 'react'
import 'antd/dist/antd.css'
//import { Input, Button, List } from 'antd'
//import ToDoListUi from './TodoListUI'
import axios from 'axios'

//Redux相关
import store from './store/index'
//import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction, getListAction,getTodoList,getMyListAction } from './store/actionCreatores'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super(props)
        //将store中的数据存为state中的数据
        this.state = {
        }
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

    }

    

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue.bind(this)}
                addList={this.addList.bind(this)}
                deleteItem={this.deleteItem.bind(this)} />
        );
    }

    changeInputValue(e) {

        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    addList() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    // componentDidMount() {
    //     const action = getTodoList()
    //     store.dispatch(action)
    // }

    componentDidMount(){
        const action =getMyListAction()
        store.dispatch(action)
        console.log(action)
    }

    //进行store订阅
    storeChange() {
        this.setState(store.getState())
    }

}

export default TodoList;