import React from 'react';
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import Footer from './components/footer/Footer';
import data from './data/db.json';
import TourDetails from './components/TourDetails/TourDetails';
import { Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Tours data={data} />} />
          <Route path="/tour/:id" element={<TourDetails data={data} />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
