import { fetchCurrentUser } from '@/services/global';

const GlobalModel = {
  namespace: 'global',
  state: {
    message: {}
  },
  effects: {
    *effectCase({payload}, {call, put, select}) {
      const data = yield call(fetchCurrentUser)
      console.log(data)
      yield put({
        type: 'saveState',
        payload: data
      })
    }
  },
  reducers: {
    saveState(state, {payload}) {
      return {
        ...state,
        message: payload
      }
    }
  }
}

export default GlobalModel;