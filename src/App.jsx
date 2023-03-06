import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/user" element={<User />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
