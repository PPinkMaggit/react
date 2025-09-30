import { useState } from 'react'
import Header from './components/Header';
import Navigation from './components/Nav';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      < Header />
      < Navigation />
      < Main />
      < Gallery />
      < Footer />
    </div>
  )
}

export default App
