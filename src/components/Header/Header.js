import React,{Component} from 'react';

import './Header.css'

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <h1 className=""><a href='#'>Star DB </a></h1>
        <ul className="ul">
          <li><a href='#'>People</a></li>
          <li><a href='#'>Planets</a></li>
          <li><a href='#'>Starships</a></li>
        </ul>
      </div>
    )
  }
}
