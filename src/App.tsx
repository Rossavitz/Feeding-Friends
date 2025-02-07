import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes/NavBar";
import RoutesList from "./routes/Routes";
import "./App.css"
import './index.css'

function App() {


  return (
    <div>
    <BrowserRouter>
      <NavBar/>
      <RoutesList />
    </BrowserRouter>
    </div>
  )
}

export default App
