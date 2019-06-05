import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
         {/* Change elementCount TO elementcount and save runt test and see what happened */}
        <Table elementCount={50}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
