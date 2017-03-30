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

const patient = function (patient={}, action) {
  switch (action.type) {
    case 'SET_PATIENT':
      return action.payload
    default:
      return patient
  }
}

// create store
const store = createStore(
  combineReducers({
    patients,
    patient
  })
)

store.dispatch({type: INIT, payload: createPatients(10) })

// export store
export default store
