import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Parent from './components/Parent'



function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route
        exact path="/"
        element={<Parent/>}
        >
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
