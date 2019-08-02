import React, { Component } from 'react'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

const Heading = props => {
    return (
            <div className="row no-gutters">
                <Link to="/"><img src={logo} className="w-25 m-3" alt="Smashesque"></img></Link>
            </div>
    )
}

class Header extends Component {
    render() {
      return (
          <Heading />
        )
    }
  }
  
  export default Header
  