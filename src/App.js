import './App.css';
// import ButtonTest from './components/ButtonTest';
// import CalendarWidget from './components/CalendarWidget';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import {Route, Routes} from "react-router-dom";
// import { Switch } from 'react-router-dom';


function App() {
  return (
    <div>
    
      <p>Place holder for the beginning</p>

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    
    </div>
  );
    
}

export default App;
