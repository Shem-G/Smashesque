import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Games from './pages/Games'
import GamePage from './pages/GamePage'


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Games" component={Games} />
      <Route path="/Games/GamePage" component={GamePage} />
    </Switch>
  )
}