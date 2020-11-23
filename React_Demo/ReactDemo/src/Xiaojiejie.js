import React from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'
import {CSSTransition , TransitionGroup} from 'react-transition-group'

const Component = React.Component
const Fragment = React.Fragment

class Xiaojiejie extends Component {
    //js的构造函数，由于其他任何函数执行
    constructor(props) {
        //super调用父级方法
        //因为Xiaojiejie继承的是Component中的方法
        //所以props是Conponent中的方法
        super(props)
        this.state = {
            //输入框中的数据
            inputValue: '',
            //服务列表
            //list: ['唱歌','跳舞']
            list: []
        }
    }
    componentDidMount(){
        //表示DOM加载完的自动运行
        //必须使用单引号，否则也不行
        axios.get('https://www.easy-mock.com/mock/5fb3a737a544b8175e45fc90/ReactDemo01/xiaojiejie')
        //下面的叫做回调函数
        .then((res)=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            }) 
        })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    // componentWillMount(){
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }

    // componentDidMount(){
    //     console.log('componentDidMount----组件挂载完成的时刻执行')
    // }

    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdate---组件发生改变前执行')
    //     return true
    // }

    //shouldComponentUpdate返回true才会被执行。
    // componentWillUpdate(){
    //    console.log('2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    // }

    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate----组件更新之后执行')
    // }

    render() {
        // console.log('3-render---组件挂载中.......')
        return (
            //flex
            <Fragment>
                {/*flex*/}
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input 
                    id="jspang" 
                    className="input" 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    ref={(input)=>{this.input=input}}
                
                />
                    <button onClick={this.addList.bind(this)}> 增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                        
                                <CSSTransition
                                timeout={1000}
                                classNames='boss-text'
                                unmountOnExit
                                appear={true}
                                key={index+item}  
                            >
                                     <XiaojiejieItem 
                                     key={index+item}
                                     content={item}
                                     index={index} 
                                     //子组件调用父组件代码，在我看来就像是将父组件中的方法传递给子组件
                                     deleteItem={this.deleteItem.bind(this)}
                                     /> 
                                     </CSSTransition>  
                            )
                        })
    
    }                     
                </TransitionGroup>                  
                </ul>
                
                <ul>
                    <Boss/>
                    </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        //这行固定
        //在这个方法中，this是undefined的
        //采取的措施利用ES6的语法
        console.log(e.target.value);
        //需要使用的是下面形式行进数据绑定
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        })

    }

    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{ console.log(this.ul.querySelectorAll('li').length)}
        )
       
    }

    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

}


export default Xiaojiejie