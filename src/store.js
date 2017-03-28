import { createStore, combineReducers } from 'redux'
import createPatients from './lib/create-patients'

const INIT = 'INIT_STORE'

// reducers
const patients = function (patients=[], action) {
  switch (action.type) {
    case INIT:
      return action.payload
    default:
      return patients
  }
}

// create store
const store = createStore(
  combineReducers({
    patients
  })
)

store.dispatch({type: INIT, payload: createPatients(100) })

// export store
export default store
