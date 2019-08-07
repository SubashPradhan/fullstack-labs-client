import ALL_ADS from '../actions'

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ALL_ADS:
      return action.payload
    default:
      return state
  }
}