import React from 'react'

const Clock = () => {
    const date = new Date();
    console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    console.log('hi');

  return (
    <div>Clock</div>
  )
}

export default Clock