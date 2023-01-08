import { useEffect, useState } from 'react';
import { Login, Dashboard } from './components/personal';
import { Forecast } from './components/forecast'
import { hasToken } from './utils/auth'

function App() {
  const [ user, setUser ] = useState('');
  useEffect(() => {
    const user_data = hasToken();
    if (user_data) setUser(user_data);
  }, []);

  return (
    <div>
      {
        user ? < Dashboard /> : < Login />
      }
      < Forecast />
    </div>
  );
}

export default App;
