import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/registration/Registration';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>,
    </div>
  );
}

export default App;
