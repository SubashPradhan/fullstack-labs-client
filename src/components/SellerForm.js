import React, { Component } from 'react'
import {addAdvertisement} from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../style/form.css'

class Sellerform extends Component {
  state ={
    title: "",
    price:"",
    description: "",
    phone_number: "",
    email: "",
    picture: ""
  }
  handleChange =(e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAdvertisement(this.state)
    this.setState({
      title: "",
      price:"",
      description: "",
      phone_number: "",
      email: "",
      picture: ""

    })
    alert(`Your product has been updated !! Thank you`)

  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit} className="form">
        <label> NAME :
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label> PRICE :
          <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
        </label>
        <label> DESCRIPTION :
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <label> PHONE-NUMBER :
          <input type="number" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/>
        </label>
        <label> E-MAIL :
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <label> PICTURE :
          <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange}/>
        </label>
        
        <input type="Submit" name="submit" className="submit"/>
      </form>
      <Link to = "/"><button className="submit">GO BACK TO HOMEPAGE</button></Link>
    </div>
  }
}

export default connect(null, {addAdvertisement})(Sellerform)