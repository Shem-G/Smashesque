import React, { Component } from 'react'

const SideBar = props => {
    const entry = { Entry }
    return (
        <div className="col bg-white">
            <h3 className="bg-danger text-light text-center p-1 m-0">Featured Content</h3>
            <div className="list-container p-0" id="featured">
                <ul className="p-0 m-0">
                    {Entry}
                </ul>
            </div>
        </div>
    )
}

const Entry = () => {
    return (
        <div>
            <li className="border-bottom">
                <div className="row no-gutters">
                    <div className="col-9 p-3">
                        <h6 className="m-0">Mission 40: Ninja Knock Out tutorial (TMNT: Smash-Up!) by Smashesque on YouTube</h6>
                    </div>
                    <div className="col">
                        <img className="img-fluid featured-image" src="data:image/jpeg;base64,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" alt="test"></img>
                    </div>
                </div>
            </li>
            <li className="border-bottom">
                <div className="row no-gutters">
                    <div className="col-9 p-3">
                        <h6 className="m-0 align-middle">Cartoon Network Punch Time Explosion 4v4 gameplay by Smashesque on YouTube</h6>
                    </div>
                    <div className="col">
                        <img className="img-fluid featured-image" src="https://images-na.ssl-images-amazon.com/images/I/81uRONjVMKL._SL1500_.jpg" alt="test"></img>
                    </div>
                </div>
            </li>
        </div>
    )
}

class FeaturedContent extends Component {
    render() {
        return (
            <SideBar />
        )
    }
}

export default FeaturedContent