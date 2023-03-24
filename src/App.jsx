import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolios/Portfolios';
import Testinomials from './components/testinomials/Testinomials';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testinomials />
        <Contacts />
        <Footer />
      </>
    </div>
  );
}

export default App;
