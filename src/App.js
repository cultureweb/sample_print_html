import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Table elementcount={3}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
