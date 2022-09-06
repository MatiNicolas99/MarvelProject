

import { Nav } from "./components/Nav"
import "./marvelapp.css"
import { Pages } from "./pages/Pages"
import {BrowserRouter as Router} from "react-router-dom" ;

export const MarvelApp = () => {
  
  return (
    <section>
      <Router>
        <Nav/>
        <Pages/>
      </Router>
    </section>
  )
}


