import React, { useState, useMemo } from 'react';

function MyTable() {
  const [tableData, setTableData] = useState([
    { id: 1, name: "John Doe", city: "New York" },
    { id: 2, name: "Jane Doe", city: "Los Angeles" },
    // ... more data
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return tableData;

    return tableData.filter((item) => {
      const searchText = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.city.toLowerCase().includes(searchText)
      );
    });
  }, [tableData, searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;