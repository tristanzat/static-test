import React, { useState } from 'react';

function App() {
  // Sample data for the table
  const initialData = [
    { name: 'Alice', age: 30, city: 'London' },
    { name: 'Bob', age: 25, city: 'Paris' },
    { name: 'Charlie', age: 35, city: 'New York' },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const onSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div>
      <h2>Sortable Table</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th onClick={() => onSort('name')} style={{ cursor: 'pointer' }}>
              Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => onSort('age')} style={{ cursor: 'pointer' }}>
              Age {sortConfig.key === 'age' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => onSort('city')} style={{ cursor: 'pointer' }}>
              City {sortConfig.key === 'city' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
