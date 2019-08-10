import React, { Component } from 'react'
import AdvertisementContainer from './components/AdvertisementContainer';
import { Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return <div className="ads">
      <Route exact path='/' Component={AdvertisementContainer} />
      <AdvertisementContainer />
    </div>
  }
}

export default App
