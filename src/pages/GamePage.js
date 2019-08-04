import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext'

class GamePage extends Component {
    constructor() {
        super()
        this.state = {
            game: []
        }
    }

    render() {
        return (
            <GameContext.Consumer>{(context) => {
                const { game } = context
                console.log(game)
                return (
                    <div className="container">                     
                        <div className="row">
                            <div className="col w-5 pr-0 border-right">
                                <h3 className="bg-dark text-light text-center p-1 m-0">
                                Hi
                                </h3>
                            </div>
                        </div>
                    </div>
                )
            }}
            </GameContext.Consumer>
        )
    }
}                
    
export default GamePage

