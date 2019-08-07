import request from 'superagent'
import { functionTypeAnnotation } from '@babel/types';
const baseUrl = "http://localhost:4000"
export const ALL_ADS = 'ALL_ADS' 

function allAdvertisements(payload){
  return{
    types: ALL_ADS,
    payload
  }
} 

export function getAds(){
  return function(dispatch){
    request
      .get(baseUrl)
      .then(response => {
        const action = allAdvertisements(response.body)
        dispatch (action)
      })
  }
}
