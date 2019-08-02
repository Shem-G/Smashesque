import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext';
import ListEntry from './GameList'

class ContentList extends Component {
    static contextType = GameContext
    render(){
        const { games } = this.context
        return(
                <ListEntry gameData={games} />
        )}
}

export default ContentList
