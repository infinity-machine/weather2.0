import React from 'react';
import { useState, useEffect } from 'react'; 
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState('');

  const handleTime = () => {
    setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss A'));
    }, 1000);
  };

  useEffect(() => {
    handleTime()
  }, []);


  return (
    <div>{currentTime}</div>
  );
};

export default Clock