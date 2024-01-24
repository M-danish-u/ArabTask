import React from 'react';

// Sample data for the table
const tableData = [
  { id: 1, name: 'Item 1', quantity: 10, price: 20 },
  { id: 2, name: 'Item 2', quantity: 15, price: 25 },
  { id: 3, name: 'Item 3', quantity: 8, price: 15 },
  { id: 4, name: 'Item 4', quantity: 12, price: 30 },
  { id: 5, name: 'Item 5', quantity: 18, price: 22 },
];

const Table = () => {
  return (
    <table className="  border-gray-300  w-full rounded-lg shadow-2xl">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 bg-white">Id</th>
          <th className="border p-2 bg-white">Name</th>
          <th className="border p-2 bg-white">Quantity</th>
          <th className="border p-2 bg-white">Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border p-2">{item.id}</td>
            <td className="border p-2">{item.name}</td>
            <td className="border p-2">{item.quantity}</td>
            <td className="border p-2">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Table />
    </div>
  );
};

export default App;
