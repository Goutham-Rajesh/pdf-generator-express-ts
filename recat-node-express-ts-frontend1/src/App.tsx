import React from 'react';
import POForm from './components/POForm'; // Import the POForm component
import './styles/app.css'; 
import PurchaseOrderList from './components/PurchaseOrderList';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Purchase Order Generator</h1>
      <POForm />
      <PurchaseOrderList/>
    </div>
  );
};

export default App;
