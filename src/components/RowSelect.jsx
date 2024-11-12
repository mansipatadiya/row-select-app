import React, { useState } from 'react';

const RowSelect = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [baseRow, setBaseRow] = useState('');

  const rows = [
    'Row1', 'Row2', 'Row3', 'Row4', 'Row5', 'Row6'
  ];

  const handleCheckboxChange = (row) => {
    setSelectedRows(prev => {
      if (prev.includes(row)) {
        if (row === baseRow && prev.length > 1) {
          const nextBaseRow = prev.find(r => r !== row);
          setBaseRow(nextBaseRow);
        }
        return prev.filter(r => r !== row);
      } else {
        if (prev.length === 0) {
          setBaseRow(row);
        }
        return [...prev, row];
      }
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Row Select</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Select Rows</h3>
          {rows.map((row) => (
            <div key={row} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={row}
                checked={selectedRows.includes(row)}
                onChange={() => handleCheckboxChange(row)}
                className="mr-2"
              />
              <label htmlFor={row}>{row}</label>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Base Row</h3>
          <div className="border p-2 rounded">
            {baseRow || 'No row selected'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSelect;