import React from 'react'
// import { Link } from 'react-router-dom'

export default function(props){
  const {advertisement} = props.advertisement
  return <div>
    <img src={advertisement.picture} alt={advertisement.title} />
    {/* <p>Name: {title}</p>
    <p>{price}</p>
    <p>{description}</p>
    <p>{phone_number}</p> */}
  </div>
}
