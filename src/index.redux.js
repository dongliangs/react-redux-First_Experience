const ADD_NUM = 'INCREMENT';
const REMOVE_NUM = 'DECREMENT';

export function counter(state = 1, action) {
    switch (action.type) {
    case ADD_NUM:
      return state + 1;
    case REMOVE_NUM:
      return state - 1;
    default:
      return state;
    }
}

// action creator
export function addNum(){
    return {type:ADD_NUM}
}
export function removeNum(){
    return {type:REMOVE_NUM}
}
// action 创建函数；延迟添加
export function addNumAsync(){
  //thunk插件的作用，这里可以返回函数
  return dispatch => {
    // 异步结束后，手动执行dispatch
    setTimeout(()=>{
      dispatch(addNum())
    },2000)
  }
}