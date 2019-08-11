import React, { Component } from 'react'
import AdvertisementContainer from './components/AdvertisementContainer';
import DetailsContainer from './components/DetailsContainer'
import SellerForm from './components/SellerForm'
import { Route } from 'react-router-dom'
import './style/App.css'

class App extends Component {
  render() {
    return <div className="ads">
      <Route exact path='/' component={AdvertisementContainer} />
      <Route path='/advertisement/:id' component={DetailsContainer} />
      <Route path='/sellerForm' component={SellerForm} />
    </div>
  }
}

export default App
