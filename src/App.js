import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {addNum, removeNum,addNumAsync} from './index.redux';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import Login from './login'
import Home from './home'
// const mapStateToProps = (state) => {
//   return {
//     prop: state
//   }
// }
// const actionCreators = {addNum,removeNum,addNumAsync}
// @connect(
//   state=>({prop:state}),
//   {addNum,removeNum,addNumAsync}
// )
class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/home' component={Home}/>
              <Redirect to='/home'/>
          </Switch>
        </BrowserRouter>
      );
    }
  }

export default App