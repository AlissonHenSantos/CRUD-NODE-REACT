import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import logo from './logo.svg';
import './App.css';
import Content from './components/template/Content';
import Footer from './components/template/Footer';
import Header from './components/template/Header';
import Router from './main/Router';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
