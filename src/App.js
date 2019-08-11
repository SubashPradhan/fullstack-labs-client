import React, { Component } from 'react'
import AdvertisementContainer from './components/AdvertisementContainer';
import DetailsContainer from './components/DetailsContainer'
import { Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return <div className="ads">
      <Route exact path='/' component={AdvertisementContainer} />
      <Route path='/advertisement/:id' component={DetailsContainer} />
    </div>
  }
}

export default App
