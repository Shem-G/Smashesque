import React, { Component } from 'react';
import logo from './logo.png';
import search from './search.svg';
import './App.css';
import GameList from './components/GameList';

class App extends Component {
  state = {
    games: []
  }

  
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?view=Sorted%20view&api_key=keyxdvk2igijIb9Q0')
      .then(res => res.json())
      .then((data) => {
        this.setState({ games: data.records })
        
      })
      .catch(console.log)
  }

  

  render() {
    
    const { games } = this.state
    console.log(games)
    return (
      <div className="container">
        
        <div className="col-xs-12">
          <img src={logo} className="w-25 m-3" alt="Smashesque"></img>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search a Title, Platform or Tag" aria-label="Search a Title, Platform or Tag" aria-describedby="Search a Title, Platform or Tag"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"><img src={search} alt="Search" height="15px"></img></button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col w-5 pr-0 border-right">
            <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
            <ul className="p-0">
            <GameList gameData={games} />
            </ul>
          </div>
          <div className="col-3 pl-0">
            <div className="row no-gutters">
              <div className="col bg-white">
                <h3 className="bg-danger text-light text-center p-1">Featured Content</h3>
                <div className="list-container p-3" id="featured">
                  <ul className="p-0">
                    <li>

                    </li>
                  </ul>
                  <h6>Smashesque tournament has begun!</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}

export default App;