import React, { Component } from 'react'
import {connect} from 'react-redux'
import AdvertisementContainer from './AdvertisementContainer';
import './App.css'

class App extends Component {
  render() {
    return (
        <AdvertisementContainer />
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    advertisements : state
  }
}

export default connect (mapStateToProps)(App)