import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const ListEntry = props =>  {
  const games = props.gameData.map((game) => {
  return (
        <div className="row no-gutters border-bottom">
          <div className="col-auto" width="100px">
            <img className="clearfix" src={game.fields.Image[0].thumbnails.large.url} alt={game.fields.Name} width="100px" ></img>
          </div>
          <div className="col">
            <div className="row no-gutters">
              <h5 className="pl-3 pt-1"><Link to={`/Games/${game.fields.Slug}`}>{game.fields.Name}</Link><small className="text-muted"> {game.fields.Type}</small></h5>
            </div>
            <p className="pl-3 pr-2 pb-2 m-0">{game.fields.Description}</p>
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
  )})
  return <li className="mb-0 pl-0">{games}</li>
}

export default ListEntry
