import React, { Component } from 'react';
import { login, getUserData } from './login.reduc';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

@connect(
    state=>state.sign,
    {login, getUserData}
)
class Login extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         data:[],
    //         isLoad:false
    //     }
    // }
    componentDidMount(){
        this.props.getUserData()
    }
    render(){
        // if (this.state.isLoad){
        //     console.log(this.state.data)
            return (
                <div>
                    {
                        this.props.data.map((item,index) => {
                            return (
                                <div key={item._id}> 
                                    <span>{item.user}</span>
                                    <span>{item.age}</span>
                                </div>
                                )
                        })
                     }
                    <button onClick={this.props.login}>请登录</button>
                    {this.props.isLogin? <Redirect to='/home'></Redirect>: null}
                    <h2>这是Login页面</h2>
                </div>
            )
        // }else{
        //     return <div>Loading...</div>
        // }
       
    }
}
export default Login