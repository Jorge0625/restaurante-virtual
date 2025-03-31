import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import PrivateRoute from "../components/PrlvateRoute";
import Admin from "../pages/Admin";
import Contacto from "../pages/Contacto";
import Reserver from "../pages/Reserver";


function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Register />} />
          <Route path="/home"element={<Home/>} />
          <Route path="/menu"element={<Menu/>}/>
          <Route path="/admin"element={<PrivateRoute element={<Admin/>} /> }/>
          <Route path="/Resever"element={<Reserver/>} />
          <Route path="/Contacto"element={<Contacto/>} />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
