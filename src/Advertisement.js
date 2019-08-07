import React, { Component } from 'react'


const RenderAds = ({ advertisements }) => {
  if (advertisements && advertisements.length > 0) {
    return advertisements.map((advertisement) => (
      <div>
        <h3>{advertisements.title}</h3>
        <img src={advertisement.url} alt="advertisement" key={advertisement.id} />
      </div>
    ))
  }
  return (
    <p>Loading...</p>
  )
}

class Advertisement extends Component{
  render(){
    const {advertisements} = this.props
    return(
      <div>
        <RenderAds advertisements = {advertisements} />
      </div>
    )
  }
}

export default Advertisement