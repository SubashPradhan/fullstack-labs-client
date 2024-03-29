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
    <h3>Select Items to view details !!!</h3>
    {advertisements}
    <Link to ='/sellerForm'><button className="sellButton">WANNA SELL ?? CLICK HERE !!</button></Link>
  </div>
}