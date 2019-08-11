import React, { Component } from 'react'
import Details from './Details'
import { connect } from 'react-redux'
import { getAds } from '../actions'

class DetailsContainer extends Component {
  componentDidMount() {
    this.props.getAds()
  }

  render() {
    const advertisements = this.props.advertisements.find(
      ad => ad.id === parseInt(this.props.match.params.id))
    console.log("single-ad",advertisements)
    return <div>
      <Details {...advertisements} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    advertisements: state.advertisements
  }
}

export default connect(mapStateToProps, { getAds })(DetailsContainer)