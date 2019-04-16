
// 合并所有reducer 并返回

import {combineReducers} from 'redux';
import {counter} from './index.redux';
import {sign} from './login.reduc';

export default combineReducers({counter, sign})