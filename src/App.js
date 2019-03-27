import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addNum, removeNum,addNumAsync} from './index.redux'

// const mapStateToProps = (state) => {
//   return {
//     prop: state
//   }
// }
// const actionCreators = {addNum,removeNum,addNumAsync}
@connect(
  state=>({prop:state}),
  {addNum,removeNum,addNumAsync}
)
class App extends Component {
    render() {
      return (
        <div>
          <p>Hello reducer action{this.props.prop}个；</p>
          <button onClick={this.props.addNum}>加一个</button>&nbsp;&nbsp;
          <button onClick={this.props.removeNum}>减一个</button>&nbsp;
          <button onClick={this.props.addNumAsync}>两秒后再添加一个</button>
        </div>
        
      );
    }
  }

export default App