import React from 'react'
import Clock from './Clock'

const Current = (props) => {

  return (
    <div>
      <div>
        <h2>{props.location.name}</h2>
        <p>{props.location.region}, {props.location.country}</p>
      </div>
      <Clock />
      <div>
        <p>{props.current.temp_f}&deg;</p>
        <p>{props.current.condition.text}</p>
        <p>feels like {props.current.feelslike_f}&deg;</p>
      </div>
      <div>
        <p>wind: {props.current.wind_mph} mph {props.current.wind_dir}</p>
      </div>
      <div>
        {/* {
          props.current.is_day ? (
            <p>{props.current.uv}</p>
          ) : <></>
        } */}
      </div>
    </div>
  )
}

export default Current