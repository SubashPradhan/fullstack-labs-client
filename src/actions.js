import * as request from 'superagent'
const baseUrl = "https://pure-thicket-37035.herokuapp.com"
// const baseUrl = "http://localhost:4000"
export const ALL_ADS = 'ALL_ADS' 
export const GET_DETAILS = 'GET_DETAILS'
export const ADD_ADS = "ADD_ADS"

function allAdvertisements(payload){
  return{
    type: ALL_ADS,
    payload
  }
} 

export const getAds = () => (dispatch, getState) => {
  const state = getState()
  const { advertisements} = state

  if(!advertisements.length) {
    request(`${baseUrl}`)
      .then(response => {
        const action = allAdvertisements(response.body)

        dispatch(action)
        console.log(response.body)
      })
      .catch(console.error);
  }
}

function addAds(payload){
  return{
    type: ADD_ADS,
    payload
  }
}

export const addAdvertisement = data => (dispatch) => {
  request
  .post(`${baseUrl}/advertisement`)
  .send(data)
  .then(response => {
    const action = addAds(response.body)
    dispatch(action)
  })
  .catch(console.error)
}