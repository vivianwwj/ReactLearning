import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST}  from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

//使用thunk,把后台请求数据放在这里
/*
export const getTodoList = ()=>{
   //这里相当于返回一个函数
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            console.log(data)
        })
    }
}
*/

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})