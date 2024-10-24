import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseOrderList: React.FC = () => {
  const [purchaseOrders, setPurchaseOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPurchaseOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pos');
        setPurchaseOrders(response.data);
      } catch (err) {
        setError('Error fetching purchase orders');
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Purchase Orders</h2>
      <ul>
        {purchaseOrders.map((po) => (
          <li key={po.id}>
            <strong>PO Number:</strong> {po.poNumber} | <strong>Description:</strong> {po.description} | <strong>Total Amount:</strong> ${po.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchaseOrderList;
