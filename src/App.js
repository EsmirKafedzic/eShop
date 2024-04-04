import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
