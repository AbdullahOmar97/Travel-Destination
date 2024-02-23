
import React from 'react'
import Header from './components/header/Header'
import Tours from './components/tours/Tours'
import Footer from './components/footer/Footer'
import data from './data/db.json'

function App() {
  return (
    <div>
      <Header />
      <Tours data={data} />
      <Footer />
    </div>
  );
}

export default App;
