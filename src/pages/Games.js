import Header from './components/Header'
import React, { Component } from 'react'
import FeaturedContent from './components/FeaturedContent'
import GameList from './components/GameList'
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
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col w-5 pr-0 border-right">
                        <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
                        <ul className="p-0">
                            <GameList gameData={games} />
                        </ul>
                    </div>
                    <div className="col-3 pl-0">
                        <div className="row no-gutters">
                            <FeaturedContent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function Games() {
    return (
        <GetData />
    )
}
