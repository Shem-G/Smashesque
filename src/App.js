import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  state = {
    games: []
  }
  componentDidMount(){
    fetch('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?api_key=keyxdvk2igijIb9Q0')
    .then(res => res.json())
    .then ((data) => {
      this.setState({games: data.records})
      console.log(this.state.games)
    })
    .catch(console.log)
  }

  render() {
    return (
       <div className="container">
        <div className="col-xs-12">
        <img src={logo} className="w-50 m-3" alt="Smashesque"></img>
        {this.state.games.map((game) => (
          <div className="card">
          <div className="card-body">
            <h5 className="card-title">{game.fields.Name}</h5>
            <h6>{game.fields.Type}</h6>
            <h6>Max Players:</h6><span><p>{game.fields.MaxPlayers}</p></span>
            <h6>Roster size: </h6><span><p>{game.fields.Roster}</p></span>
            <h7>Platforms: {game.fields.Platforms}</h7>
          </div>
        </div>
          ))}
        
          
        </div>
       </div>
    );
  }
}

export default App;