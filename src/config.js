import axios from 'axios';

import {Toast} from 'antd-mobile';

// 拦截请求

axios.interceptors.request.use(function(config){
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
      });
    return config
})

axios.interceptors.response.use(function(config){
    setTimeout(()=>{
        Toast.hide()
    },2000)
    return config
})