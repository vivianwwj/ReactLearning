import React from 'react';
//Router表示路由器，Route表示线路，Link是跳转的组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

// function Index() {
//     return <h2>JSPang.com</h2>;
// }

// function List() {
//     return <h2>List-Page</h2>;
// }


function AppRouter() {
    return (
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/123">列表</Link> </li>
            </ul>
            {/* 告诉系统怎么跳转 */}
            {/* 无状态组件也要使用component */}
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    );
}


export default AppRouter;