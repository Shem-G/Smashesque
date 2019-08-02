import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext';
import ContentList from '../components/ContentList'

class Games extends Component {
    static contextType = GameContext
    render(){
        const { games } = this.context
        return(
            <div className="row no-gutters">
                    <div className="col w-5 pr-0">
                        <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
                        <ul className='p-0'>
                            <ContentList gamedata={games} />
                        </ul>
                    </div>
                </div>
        )}
}

export default Games
