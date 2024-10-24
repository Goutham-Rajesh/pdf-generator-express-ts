import React, { useState } from 'react';
import axios from 'axios';

const POForm: React.FC = () => {
  const [poNumber, setPONumber] = useState('');
  const [description, setDescription] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/pos', {
        poNumber,
        description,
        totalAmount,
      }, { responseType: 'blob' });
      const fileURL = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', 'purchase_order.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error creating PO', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        PO Number:
        <input type="text" value={poNumber} onChange={(e) => setPONumber(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Total Amount:
        <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
      </label>
      <button type="submit">Generate PO</button>
    </form>
  );
};

export default POForm;
