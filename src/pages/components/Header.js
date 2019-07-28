import React, { Component } from 'react'
import logo from '../img/logo.png';
import search from '../img/search.svg';
import { Link } from 'react-router-dom'

const Heading = props => {
    return (
            <div className="col-xs-12">
                <Link to="/"><img src={logo} className="w-25 m-3" alt="Smashesque"></img></Link>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search a Title, Platform or Tag (THIS DOESN'T WORK YET)" aria-label="Search a Title, Platform or Tag" aria-describedby="Search a Title, Platform or Tag"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><img src={search} alt="Search" height="15px"></img></button>
                    </div>
                </div>
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
  