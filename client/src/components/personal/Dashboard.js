import React from 'react'

const Dashboard = (props) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <div>
      <p>{props.user.email}</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Dashboard