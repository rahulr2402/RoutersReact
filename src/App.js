import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
 import Tiger from "./Tiger";
 import Lion from "./Lion";
 import Bear from "./Bear";
 import NavBar from "./NavBar";
//  import Home from "./Home";
 
 const App = () => {
  return (
  <div>
  <Router>
  <NavBar/>
  <Routes>
  {/* <Route path="/" element={<Home/>}/> */}
  <Route path="/tiger" element={<Tiger/>}/>
  <Route path="/lion" element={<Lion/>}/>
  <Route path="/bear" element={<Bear/>}/>
  </Routes>
  </Router>
  </div>
  )
 }
 
 export default App;