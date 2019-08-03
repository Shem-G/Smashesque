import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext'
import ListEntry from '../components/GameList';
import { throwStatement } from '@babel/types';

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
                        <div className="col w-5 pr-0">
                            <div class="input-group-append mb-3">
                                <input type="text" class="rounded-0 form-control" placeholder="Search games" aria-label="Search games"
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                />
                            </div>
                            <ul className='p-0'>
                                <ListEntry gameData={filteredGames} />
                            </ul>
                        </div>
                    </div>
                )
            }}</GameContext.Consumer>
        )
    }
}

export default Games
