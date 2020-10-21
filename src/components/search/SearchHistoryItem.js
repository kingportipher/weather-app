import React from 'react'


function SearchHistoryItem(props) {

  const dateBuild = (d) => {
    let date = String(new window.Date())
    date = date.slice(3, 15)
    return date
  }
  
  return (
    <div>
      <h3>
        Search Term: {props.term}
      </h3>

      <div className="info-wrap">
        <div className="location-container">
          <div className="location">
            <span>{props.result.name}, {props.result.sys.country} </span>
          </div>
          <div className="date"> {dateBuild(new Date())} </div>
        </div>
        <div className="weather-container">
          <div className="temperature">
            <h3> temperature <br /> <span>{Math.round(props.result.main.temp)} &deg;C</span> </h3>
          </div>
          <div className="weather">
            <h3> weather <br /> <span>{props.result.weather[0].main}</span> </h3>npm install
              </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHistoryItem
