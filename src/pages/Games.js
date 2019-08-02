import React, { Component } from 'react'
import { GameContext } from '../contexts/GameContext'
import ContentList from '../components/ContentList'

class Games extends Component {
    static contextType = GameContext

    constructor(props) {
        super(props)
        this.state = {
            gameFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            gameFilter: e.target.value
        })
        this.props.onChange(e.target.value)
        console.log(this.state.gameFilter)
    }

    render() {
        return (
            <div className="row no-gutters">
                <div className="col w-5 pr-0">
                    <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
                    <input type="text" id="filter"
                        value={this.state.gameFilter}
                        onChange={this.handleChange} />
                    <ul className='p-0'>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Games
