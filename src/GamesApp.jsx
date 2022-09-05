

import { Nav } from "./components/Nav"
import "./gamesapp.css"
import { Pages } from "./pages/Pages"
import {BrowserRouter as Router} from "react-router-dom" ;

export const GamesApp = () => {
  
  return (
    <section>
      <Router>
        <Nav/>
        <Pages/>
      </Router>
    </section>
  )
}


