import React from "react";
import {  Route, Link  } from "react-router-dom";
import Reactpage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'


function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/Video/reactpage">React教程</Link></li>
                    <li><Link to="/Video/vue">Vue教程</Link></li>
                    <li><Link to="/Video/flutter">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/Video/reactpage/"   component={Reactpage} />
                <Route path="/Video/vue/"   component={Vue} />
                <Route path="/Video/flutter/"   component={Flutter} />
            </div>
        </div>
    )
}
export default Video;