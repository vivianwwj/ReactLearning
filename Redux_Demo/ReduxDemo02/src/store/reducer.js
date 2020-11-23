import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    inputValue:'王文婧小可爱叫你添加任务啦😘',
    list:[
        '早上7点起床，锻炼身体',
        '晚上回家学习一个半小时'
    ]
}  //默认数据

export default (state = defaultState,action)=>{  //就是一个方法函数
    //state指的原本仓库状态
    //action指的新传递的参数
    //console.log(state,action)
    if(action.type=== CHANGE_INPUT ){
        //（记住：Reducer里只能接收state，不能改变state。）
        let newState =JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }

    if(action.type=== ADD_ITEM ){
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type=== DELETE_ITEM ){
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    if(action.type=== GET_LIST ){
        let newState =JSON.parse(JSON.stringify(state))
        newState.list=action.data.data.list
        return newState
    }
    
    return state
}