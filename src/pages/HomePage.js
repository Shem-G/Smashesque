import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'

export default function HomePage() {
    return (
        <div className="container">
            <Header />
            <p>
                <Link to="/Games">All games</Link>
                <Link to="/GamePage">Game Page</Link>
            </p>
        </div>
    )
}