import React, { Component } from 'react'

const ListEntry = props => {
  const games = props.gameData.map((game) => {
      return(
        <div className="row no-gutters">
          <div className="col-auto" width="100px">
            <img src={game.fields.Image[0].thumbnails.large.url} alt={game.fields.Name} width="100px" ></img>
          </div>
          <div className="col">
            <div className="">
              <div className="row no-gutters">
                <h5 className="pl-3">{game.fields.Name} <small className="text-muted">{game.fields.Type}</small></h5>
              </div>
              <p className="pl-3 pb-2 m-0">{game.fields.Description}</p>
              <div className="row pl-3 no-gutters">
                <div className="col-auto"><strong>Max Players: </strong>
                  <p className=""><button className="btn btn-outline-danger btn-sm m-1">{game.fields.MaxPlayers} </button></p></div>
                <div className="col-auto pl-5"><strong>Roster size: </strong>
                  <p className=""><button className="btn btn-outline-danger btn-sm m-1">{game.fields.Roster === 0 ? 'N/A' : game.fields.Roster}</button></p></div>
                <div className="col-auto pl-5"><strong>Platforms:</strong>
                  <p className="">
                    {game.fields.Platforms.map((element) => (
                      <button className="btn btn-outline-info btn-sm m-1">{element} </button>
                    ))}
                  </p>
                </div>

                <div className="col-auto pl-5"><strong>Tags: </strong>
                  <p className="m-0">
                    {game.fields.Tags.map((element) => (
                      <button className="btn btn-outline-success btn-sm m-1">{element} </button>
                    ))}
                  </p>
                </div>
 
              </div>
            </div>
          </div>
        </div>
      );
  })
  return <li className="mb-0 pr-2 pl-0 border-bottom">{games}</li>
}

class GameList extends Component {
  render() {
    const { gameData } = this.props

    return (
      <ul className="p-0">
        <ListEntry gameData={gameData} />
      </ul>
      )
  }
}

export default GameList
