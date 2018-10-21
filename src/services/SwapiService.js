export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`)
    if(!res.ok){
      throw new Error(`Couuld not fetch ${url}`+`, received ${res.status}`)
    }
     return await res.json();
  }

async getAllPeople(){
    const res = await this.getResource(`/people/`)
    return res.results.map(this._transformPerson);
  }
 async getPerson(id){
    const person = await this.getResource(`/people/${id}/`)
    return this._transformPerson(person)
  }
async getAllPlanets(){
    const res = await this.getResource(`/planets/`)
    return res.results.map(this._transformPlanet);
  }
  async getPlanet(id){
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }
async  getAllStarships(){
    const res = await this.getResource(`/starships/`)
    return res.results.map(this._transformStarship);
  }
 async getStarship(id){
    const starship = this.getResource(`/starships/${id}/`)
    return this._transformStarship(starship)
  }
  _transformPlanet(planet){
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];
    return {
      id,
      PlanetName: planet.name,
      population:planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  _transformStarship(starchip){
    const idRegExp = /\/([0-9]*)\/$/;
    const id = starchip.url.match(idRegExp)[1];
    return {
      id,
      StarshipName: starchip.name,
      model: starchip.model,
      manufacturer: starchip.manufacturer,
      costInCredits: starchip.costInCredits,
      length: starchip.length,
      crew: starchip.crew,
      passengers:starchip.passengers,
      cargoCapacity: starchip.cargoCapacity
    }
  }
  _transformPerson(person){
    const idRegExp = /\/([0-9]*)\/$/;
    const id = person.url.match(idRegExp)[1];
    return {
      id,
      PersonName: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}
