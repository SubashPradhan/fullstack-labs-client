import React, { Component } from 'react'
import {getAds} from '../actions'
import {connect} from 'react-redux'
import Advertisement from './Advertisement'

class AdvertisementContainer extends Component{
  
  componentDidMount() {
    this.props.getAds()
  }
  
  render(){
    return(
      <div>
        <Advertisement 
          advertisements ={this.props.advertisements} />

      </div>
    )
  }

}

const mapsStateToProps = (state) => {
  return {
    advertisements: state.advertisements

  }
}  

const mapdispatchToProps = {getAds}

export default connect (mapsStateToProps, mapdispatchToProps)(AdvertisementContainer)