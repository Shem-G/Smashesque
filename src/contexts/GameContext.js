import React, { Component } from 'react'
import axios from 'axios'
export const GameContext = React.createContext()

class GameContextProvider extends Component {
    state = {
        games: []
    }

    componentDidMount() {
        const fetchData = () => {
            axios
                .get('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?view=Sorted%20view&api_key=keyxdvk2igijIb9Q0')
                .then(({ data }) => {
                    this.setState({
                        games: data.records
                    })
                })
                .catch(console.log)
        }
        fetchData();
        this.update = setInterval(fetchData, 4000);
    }

    render(){
        return (
            <GameContext.Provider value={{...this.state}}>
                {this.props.children}
            </GameContext.Provider>
        )
    }
}

export default GameContextProvider

