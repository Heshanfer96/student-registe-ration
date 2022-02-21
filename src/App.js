import './App.css';
import Addstudent from './components/Addstudent';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Allstudents from './components/Allstudents';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>
          <Route path="/"  element={<Allstudents/>}/>
          <Route path="/add" element={<Addstudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
