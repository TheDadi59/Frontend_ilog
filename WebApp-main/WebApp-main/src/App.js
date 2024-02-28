import React from 'react';
import car from './Images/car.jpeg'; 
import car2 from './Images/car2.jpeg'; 
import logo from './Images/LogoACVA.JPG'
import Header from './components/Header'
import AppContent from './components/login_register/AppContent';





function App() {
  return (
    <div className="App">
      <Header pageTitle="Authentification" logoSrc={logo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;