import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext'
import ListEntry from '../components/GameList'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Games extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value })
    }


    render() {
        return (

            <GameContext.Consumer>{(context) => {
                const { games } = context
                let filteredGames = games.filter(
                    (game) => {
                        return game.fields.Name.toLowerCase().indexOf(
                            this.state.search.toLowerCase()) !== -1

                    }

                )
                console.log(filteredGames)
                return (
                    <div className="row no-gutters">
                        <div className="input-group mb-3">
                            <input type="text" className="rounded-0 form-control" placeholder="Search games" aria-label="Search games"
                                value={this.state.search}
                                onChange={this.updateSearch.bind(this)}
                            />
                        </div>
                        <div className="row no-gutters">
                                <div className="col w-5 pr-0 scrollable">
                                <PerfectScrollbar>
                                    <ul className='p-0'>
                                        <ListEntry gameData={filteredGames}/>
                                    </ul>
                                </PerfectScrollbar>
                                </div>
                        </div>
                    </div>
                )
            }}</GameContext.Consumer>

        )
    }
}

export default Games
