import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Games from './pages/Games'
import GamePage from './pages/GamePage'
import GameContextProvider from './contexts/GameContext'

export default function App() {
  return (
    <div className="container">
    <GameContextProvider>
    <Header />
    <Switch>
        <Route exact path="/" component={Games} />
        <Route path="/Games" component={Games} />
        <Route path="/GameName" component={GamePage} />
    </Switch>
    </GameContextProvider>
    </div>
  )
}
