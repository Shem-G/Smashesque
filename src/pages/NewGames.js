import React, { Component } from 'react'
import GameContext from './components/GameContext'

class Games extends Component {
    static contextType = GameContext

    componentDidMount() {
        this.setState(this.context)
    }

    render() {
        return(
            <p>
                {console.log(this.state)}
            </p>
            
        )
    }
}


export default Games