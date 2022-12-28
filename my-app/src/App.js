import React from "react";
import Parent from './components/Parent.js'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  render(){
    return(
      <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Parent />}
            >        
            </Route>
          </Routes>
        </Router>
      </>
      
    )
  }
}

export default App;