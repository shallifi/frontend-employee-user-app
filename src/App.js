import './App.css';
import FilterPage from './components/FilterPage';
// import ButtonTest from './components/ButtonTest';
// import CalendarWidget from './components/CalendarWidget';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import {Route, Routes} from "react-router-dom";
// import { Switch } from 'react-router-dom';


function App() {
  return (
    <div>
    
      <header className='header-app'>New User Form</header>
    
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/filter-page" element={<FilterPage />} />
      </Routes>
    
    </div>
  );
    
}

export default App;
