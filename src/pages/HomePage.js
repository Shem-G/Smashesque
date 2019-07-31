import React from 'react'
import GetData from './Games'
import Header from './components/Header'

export default function HomePage() {
    return (
        <div className="container">
        <div className="row no-gutters">
            <Header />
            </div>
        <div className="row no-gutters">    
            <GetData />
        </div>
        </div>
        )
}