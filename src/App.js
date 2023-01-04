import './App.css';
import ButtonTest from './components/ButtonTest';
import FirstPage from './components/FirstPage';
// import FirstPage from './FirstPage';
// import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div>
    <p>Place holder for the beginning</p>
    <FirstPage/>
    <ButtonTest/>

    {/* <BrowserRouter>
    <Routes>
      <Route path="/firstpage" element={<FirstPage/>}/>
      <Route path="/buttontest" element={<ButtonTest/>}/>
        
    </Routes>
    </BrowserRouter> */}
    </div>
  );
    
}

export default App;
