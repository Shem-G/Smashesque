import Header from './components/Header'
import React, { Component } from 'react'
import FeaturedContent from './components/FeaturedContent'
import ListEntry from './components/GameList'
import App from '../App'
import axios from 'axios'

class GetData extends Component {
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

    

    render() {
        const { games } = this.state
       
        return (
                <div className="row no-gutters">
                    <div className="col w-5 pr-0">
                        <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
                        <ul className="p-0">
                            <ListEntry gameData={this.state.games} />
                        </ul>
                    </div>
                </div>
        )
    }
}

export default function AllGames() {
    return (
        <GetData />
    )
}
