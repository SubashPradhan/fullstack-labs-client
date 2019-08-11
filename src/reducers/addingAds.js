import {ADD_ADS} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ADD_ADS:
      return action.payload
    default:
      return state
  }
}