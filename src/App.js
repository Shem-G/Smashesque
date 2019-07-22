import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  state = {
    games: []
  }
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?api_key=keyxdvk2igijIb9Q0')
      .then(res => res.json())
      .then((data) => {
        this.setState({ games: data.records })
        console.log(this.state.games)
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <img src={logo} className="w-50 m-3" alt="Smashesque"></img>
        </div>
        {this.state.games.map((game) => (
          <div className="card mb-3">
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h5 className="card-title">{game.fields.Name} <span className="text-muted">{game.fields.Type}</span></h5>
                  <p>{game.fields.Description}</p>
                </div>
              </div>
              <div className="col p-3">
                
                <p><strong>Max Players: </strong>{game.fields.MaxPlayers}</p>
                <p><strong>Roster size: </strong>{game.fields.Roster === 0 ? 'Other' : game.fields.Roster}</p>
                <h6>Platforms:</h6>
                <p>
                  {game.fields.Platforms.map((element) => (
                    <button className="btn btn-outline-info btn-sm mr-1">{element} </button>
                  ))}
                </p>
                <h6>Tags: </h6>
                <p>
                  {game.fields.Tags.map((element) => (
                    <button className="btn btn-outline-success btn-sm mr-1">{element} </button>
                  ))}
                </p>
              </div>
              <div className="col p-3">
                <img src={game.fields.Image[0].thumbnails.large.url} alt={game.fields.Name} width="300px"></img>
              </div>
            </div>

          </div>
        ))}
      </div>
    );
  }
}

export default App;