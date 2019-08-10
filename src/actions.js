import * as request from 'superagent'
const baseUrl = "https://pure-thicket-37035.herokuapp.com"
// const baseUrl = "http://localhost:4000"
export const ALL_ADS = 'ALL_ADS' 

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

// export const getImages = () => (dispatch, getState) => {
//   const state = getState()
//   const { images } = state

//   if (!images.length) {
//     request(`${baseUrl}/image`)
//       .then(response => {
//         const action = allImages(response.body)

//         dispatch(action)
//       })
//       .catch(console.error)
//   }
// }