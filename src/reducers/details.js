export const GET_DETAILS = 'GET_DETAILS'

export default function (state=[], action={}){
  switch (action.type){
    case GET_DETAILS:
      return action.payload
    default:
      return state  
  }
}