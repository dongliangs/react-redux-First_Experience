import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import AllayConnect from './ally-connect';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from './login.reduc'

function List(){
    return <h2>list 页面</h2>
}

function Content(){
    return <h2>this isContent页面</h2>
 }

 @connect(
    state=>state.sign,
    {logout}
)
class Home extends Component{
    render(){
        // console.log(this.props);
        const match = this.props.match;
        const redired = <Redirect to="/login"></Redirect>
        const reslut = (
             <div>
                 <h2>hello Boy</h2>
                 {this.props.isLogin ? <button onClick={this.props.logout}>注销登陆</button>: null}
                <ul>
                    <li>
                        <Link to={`${match.url}`}>去 首页</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/list`}>去列表页</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/content`}>主要内容</Link>
                    </li>
                </ul>
                <Route path={`${match.url}`} exact component={AllayConnect}/>
                <Route path={`${match.url}/list`} component={List}/>
                <Route path={`${match.url}/content`} component={Content}/>
            </div>
        )
        return this.props.isLogin ? reslut : redired 
    }
}
export default Home