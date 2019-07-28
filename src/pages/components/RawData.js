import { Component } from 'react'
import axios from 'axios';

class GetData extends Component {
    constructor(props){
        super(props)
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        const fetchData = () => {
            axios
            .get('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?view=Sorted%20view&api_key=keyxdvk2igijIb9Q0')
            .then(({ data })=> {
                this.setState({
                    games: data.records
                })
                console.log(games);
            })
            .catch(console.log)
            }
            fetchData();
            this.update = setInterval(fetchData, 4000);
        }
    }

export default GetData