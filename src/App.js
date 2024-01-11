import React from 'react';

// import react router dom
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import pages
import Home from './pages/home';
import Shop from './pages/shop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/contact';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
       <Header/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/home' element={<Home />} />
          <Route path='/pages/shop' element={<Shop />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/pages/contact' element={<Contact />} />

       </Routes>
       <Sidebar/>
       <Footer />
      </Router>
    </div>
  );
};

export default App;
