import React from 'react'
import { Link } from 'react-router-dom'

export default function Advertisement(props) {
  const advertisements = props
    .advertisements
    .map(advertisement => <div>
      <Link key={advertisement.id} className="ads"
        to={`/advertisement/${advertisement.id}`} >
        <p>
          {advertisement.title.toUpperCase()}:
          {advertisement.price}
        </p>
      </Link>
    </div>)
  return <div>
    {advertisements}
  </div>
}