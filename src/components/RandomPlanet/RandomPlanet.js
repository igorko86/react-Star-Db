import React,{Component} from 'react';

import './RandomPlanet.css'

import SwapiService from '../../services/SwapiService';

export default class RandomPlanet extends Component{
  swapiService = new SwapiService()
  state={
    planet: {}
  }
  componentDidMount(){

    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet,3000)
  }
  onPlanetLoaded = (planet)=>{
    this.setState({planet})
  }
  updatePlanet=()=>{
    const id = Math.floor(Math.random()*25)+3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
  }
  render(){
    const { planet:{id,
            PlanetName,
            population,
            rotationPeriod,
            diameter}} = this.state;
    return(
      <div className="wraperPlanet">
        <img className="img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={PlanetName} />
        <div className="wraper-ul">
          <h3>{PlanetName}</h3>
          <ul>
            <li>
              <span className="span">Population</span>
              <span>{population}</span>
            </li>
            <li>
              <span className="span">Rotation period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li>
                <span className="span">Diameter</span>
                <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
