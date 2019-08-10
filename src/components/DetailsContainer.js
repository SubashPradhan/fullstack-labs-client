import React, { Component } from 'react'
import Details from './Details'
import { connect } from 'react-redux'



class DetailsContainer extends Component {
  render() {
    const advertisement = this.props.advertisement
    if (!advertisement) { return <p>Loading...</p> } else {
      return <Details advertisement={advertisement} />
    }
  }
}

const mapStateToProps = (state) => {
  return{
    advertisement: state.advertisement
  }
}

export default connect(mapStateToProps)(DetailsContainer)