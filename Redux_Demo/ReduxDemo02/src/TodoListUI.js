//import React, { Component } from 'react';
import React from 'react'
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

//props其他父组件传递
//无状态组件（没有业务逻辑，只有UI）
const TodoListUI=(props)=>{
    return ( 
        <div style={{margin:'10px'}}>
            <div>
                <Input 
                    placeholder={props.inputValue} 
                    style={{ width:'250px', marginRight:'10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type="primary"
                    onClick={props.addList}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>
                        (<List.Item 
                            onClick={()=>props.deleteItem(index)}>
                                {item}
                        </List.Item>)}
                />    
            </div>
        </div>
     );
}
// class TodoListUI extends Component {
    
//     render() { 
//         return ( 
//             <div style={{margin:'10px'}}>
//                 <div>
//                     <Input 
//                         placeholder={this.props.inputValue} 
//                         style={{ width:'250px', marginRight:'10px'}}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     <Button 
//                         type="primary"
//                         onClick={this.props.addList}
//                     >增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index)=>
//                             (<List.Item 
//                                 onClick={()=>this.props.deleteItem(index)}>
//                                     {item}
//                             </List.Item>)}
//                     />    
//                 </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUI;