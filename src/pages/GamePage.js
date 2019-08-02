import React, { Component } from 'react'
import Header from '../components/Header'
import axios from 'axios'


class Page extends Component {
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
        const { game } = this.state
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col w-5 pr-0 border-right">
                        <h3 className="bg-dark text-light text-center p-1 m-0">{game.fields.Name}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
                
            
            
export default function GamePage() {
    return (
        <Page />
    )
}