import React, { useState } from 'react'

function Home() {
  const server = 'https://api.openweathermap.org/data/2.5/'
  const key = 'a6922589129783432b9e6268378c3da5'

  const dateBuild = (d) => {
    let date = String(new window.Date())
    date = date.slice(3, 15)
    return date
  }

  const [ location, setLocation ] = useState('')
  const [ weather, setWeather ] = useState({})

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(`${server}weather?q=${location}&units=metric&APPID=${key}`)
    .then((res) => res.json())
    .then((result) => {
        setLocation('')
        setWeather(result)
        console.log(result)
    })
  }

  return (
    <div className="app">
      <div className='top-container'>
        <div className='search-wrap'>
          <input
            type='text'
            placeholder='Search any city...'
            className='searchbar'
            value={location}
            onChange={ e => setLocation(e.target.value) }
          />
          <input
            type='submit'
            value='Search'
            onClick={ e => handleSearch(e) }
          />
        </div>
      </div>
      <div className='bottom-container'>
      {typeof weather.main != "undefined" ? (
          <div className="info-wrap">
            <div className="location-container">
              <div className="location">
                <span>{weather.name}, {weather.sys.country} </span>
              </div>
              <div className="date"> {dateBuild(new Date())} </div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                <h3> temperature <br/> <span>{Math.round(weather.main.temp)} &deg;C</span> </h3>
              </div>
              <div className="weather">
                <h3> weather <br/> <span>{weather.weather[0].main}</span> </h3>npm install
              </div>
            </div>
          </div>
        ) : (
          <h1 className='null-void'> Search a city to get weather details </h1>
        )}
      </div>
    </div>
  );
}

export default Home
