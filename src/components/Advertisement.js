import React from 'react'
import {Link} from 'react-router-dom'

export default function Advertisement (props) {
  const advertisements = props
    .advertisements
    .map(advertisement => <div key={advertisement.id} className="ads">
      <p>{advertisement.title.toUpperCase()}:
      {advertisement.price}</p>
    </div>)
    return <div>
      {/* {advertisements} */}
      <Link to={`/advertisement`}>{advertisements}</Link>
    </div>
}