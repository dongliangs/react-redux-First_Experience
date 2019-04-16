import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNum, removeNum, addNumAsync } from './index.redux'

@connect(
    state=> ({num:state.counter}),
    {addNum,removeNum,addNumAsync}
  )
class AllayConnect extends Component {
    render() { 
        return (
            <div>
                <p>Hello reducer action{this.props.num}个；</p>
                <button onClick={this.props.addNum}>加一个</button>&nbsp;&nbsp;
                <button onClick={this.props.removeNum}>减一个</button>&nbsp;
                <button onClick={this.props.addNumAsync}>两秒后再添加一个</button>
            </div>
        )
    }
}
export default AllayConnect