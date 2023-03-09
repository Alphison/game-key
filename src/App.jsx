import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import User from './components/User/User';
import Tovar from './components/tovar/Tovar';
import Footer from './components/Footer/Footer';
import Basket from './components/basket/basket';
import { useState } from 'react';

function App() {
  const [activeModal, setActive] = useState(false)

  return (
      <BrowserRouter>
        <div className="App">
          <Basket activeModal={activeModal} setActive={setActive}/>
          <Header setActive={setActive} />
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/user" element={<User />}/>
                <Route path="/tovar/:id" element={<Tovar />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
