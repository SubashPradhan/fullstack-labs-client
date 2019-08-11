import React from 'react'
// import { Link } from 'react-router-dom'

export default function(props){
  return <div>
    <img src={props.picture} alt={props.title} />
    <p>Name: {props.title}</p>
    <p>Price: {props.price}</p>
    <p>Description: {props.description}</p>
    <p>Phone-Number: {props.phone_number}</p>
  </div>
}
