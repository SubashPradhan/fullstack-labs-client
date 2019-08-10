import React from 'react'

export default function Advertisement (props) {
  const advertisements = props
    .advertisements
    .map(advertisement => <div key={advertisement.id} className="ads">
      <h3>{advertisement.title.toUpperCase()}</h3>
      <img src = {advertisement.picture} alt = {advertisement.title} />

    </div>)
    return <div>
      {advertisements}
    </div>
}