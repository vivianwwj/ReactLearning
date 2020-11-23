import React, { Component } from 'react';
import PropTypes from 'prop-types'

class  XiaojiejieItem extends Component {
    //主要代码start,直接在constructor中进行this的绑定能够有效提高代码效率
    constructor(props){
        super (props)
        this.handleClick=this.handleClick.bind(this)
    }
    //主要代码end

    //满足两个条件
    //组件第一次存在于Dom中，函数是不会执行的
    //如果已经存在于Dom中，函数才会执行
    //工作中很少使用

    // componentWillReceiveProps(){
    //     console.log('child+componentWillReceiveProps')
    // }

    //当组件从页面中删除的时候执行
    // componentWillUnmount(){
    //     console.log('child - componentWillUnmount')
    // }
    shouldComponentUpdate(nextProps,nextState){
        //注意Props中具体属性的变化
        if(nextProps.content!==this.props.content)
        {
            //传递进来的参数和现在的参数不一样
            return true;
        }else{
            return false;
        }    
    }

    render() { 
        console.log("child-render")
        return ( 
        <div
        onClick={this.handleClick.bind(this)}
        >
            {this.props.avname}+{this.props.content}
            </div>
         );
    }

    handleClick(e){
       this.props.deleteItem(this.props.index)
    
    }

}

XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number,
    avname:PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps={
    avname:'郑俊'
}
export default XiaojiejieItem;