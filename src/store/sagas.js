import { takeLatest, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { InitListItem } from './actionCreators'
import axios from 'axios'

function* getInitList(){
    try {
        const res = yield axios.get('./list.json')
        const action = InitListItem(res.data)
        yield put(action)
    }catch(e){
        console.log('list.json网络请求失败')
    }
}

function* mySaga() {
    yield takeLatest(GET_INIT_LIST, getInitList);
  }
  
  export default mySaga;