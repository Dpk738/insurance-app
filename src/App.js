import Home from'../src/components/Home/Home'

import './App.css';
import {Route,Routes,Navigate} from 'react-router-dom';
import InsPo from "../src/components/InsPo/InsPo";
import Premium from '../src/components/Premium/Premium';
import Report from '../src/components/Report/Report'
import Login from '../src/components/Login/Login'
import Life from '../src/components/InsPo/Life';
import Health from '../src/components/InsPo/Health';
import Invest from '../src/components/InsPo/Invest';
import Car from '../src/components/InsPo/Car';
import NavBar from '../src/components/NavBar/NavBar';
import Register from './components/Register/Register';
function App() {

  const user = localStorage.getItem("token");
  return (
    <div className="App">
        
     <NavBar/>
     <Routes>
     <Route path="/home" exact element={<Home />}/>
        
       <Route path="/insurance" element={<InsPo/>}>
        <Route path="/insurance/life" element={<Life/>}/>
        <Route path="/insurance/invest" element={<Invest/>}/>
        <Route path="/insurance/car" element={<Car/>}/>
        <Route path="/insurance/health" element={<Health/>}/>
       </Route>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/premium" element={<Premium/>}/>
       <Route path="/report" element={<Report/>}/>
       <Route path="/login" element={<Navigate replace to="/login" />} />
     </Routes>
    </div>
  );
}

export default App;
