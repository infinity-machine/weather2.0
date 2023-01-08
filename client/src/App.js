import { Login } from './components/personal';
import { Forecast } from './components/forecast'
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <div>
      < Login />
      < NavLink to="/register">REGISTER</NavLink>
      < Forecast />
    </div>
  );
}

export default App;
