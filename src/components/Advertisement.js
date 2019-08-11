import React from 'react'
import { Link } from 'react-router-dom'
import '../style/button.css'

export default function Advertisement(props) {
  const advertisements = props
    .advertisements
    .map(advertisement => <div key={advertisement.id}>
      <Link className="ads"
        to={`/advertisement/${advertisement.id}`} >
        <p>
          {advertisement.title.toUpperCase()}:
          {advertisement.price}
        </p>
      </Link>
    </div>)
  return <div>
    <h3>Select items to view details</h3>
    {advertisements}
    <Link to ='/sellerFrom'><button className="button">WANNA SELL ?? CLICK HERE !!</button></Link>
  </div>
}