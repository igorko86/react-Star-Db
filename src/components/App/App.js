import React,{Component} from 'react';

import './App.css'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <RandomPlanet />
      </div>
    )
  }
}
