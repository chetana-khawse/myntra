import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from './Layout';
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
         <Route index element={<Register/>} />
         <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
         </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
