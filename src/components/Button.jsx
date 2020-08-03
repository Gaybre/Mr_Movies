import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/button.css'

const Button = props => (
  <Link
    to={`/Mr_Movies/${ props.navigation }`}
    className="button"
  >
    <p>{ props.title }</p>
  </Link>
)

export default Button