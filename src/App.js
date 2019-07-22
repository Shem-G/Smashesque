import React, { Component } from 'react';
import logo from './logo.png';
import search from './search.svg';
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
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search a Title, Platform or Tag" aria-label="Search a Title, Platform or Tag" aria-describedby="Search a Title, Platform or Tag"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"><img src={search} alt="Search"></img></button>
            </div>
          </div>
        </div>

        {this.state.games.map((game) => (
          <div className="card border-0">
            <div className="row">
              <div className="col-1">
                <img src={game.fields.Image[0].thumbnails.large.url} alt={game.fields.Name} width="100px" className=""></img>
              </div>
              <div className="col">
                <div className="card-body pt-0">
                  <h5 className="card-title">{game.fields.Name} <span className="text-muted">{game.fields.Type}</span></h5>
                  <p>{game.fields.Description}</p>
                  <div className="row">
                    <div className="col-auto"><strong>Max Players: </strong>
                    <p>{game.fields.MaxPlayers}</p></div>
                    <div className="col-auto"><strong>Roster size: </strong><p>{game.fields.Roster === 0 ? 'Other' : game.fields.Roster}</p></div>
                    <div className="col-auto"><h6>Platforms:</h6>
                      
                        {game.fields.Platforms.map((element) => (
                          <button className="btn btn-outline-info btn-sm m-1">{element} </button>
                        ))}
                      
                      </div>

                      <div className="col-auto"><h6>Tags: </h6>
                      
                        {game.fields.Tags.map((element) => (
                          <button className="btn btn-outline-success btn-sm m-1">{element} </button>
                        ))}
                      
                    </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col pt-3">
                    </div>
                  </div>
                </div>
              </div>
            </div>


            ))}
      </div>
        );
        }
      }
      
export default App;