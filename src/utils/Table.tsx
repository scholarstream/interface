import { FC, ReactNode } from 'react';

interface TableProps {
  headers: string[];
  data: (ReactNode | string)[][];
}

const Table: FC<TableProps> = ({ headers, data }) => (
  <table border={1} style={{ margin: '16px 0' }}>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
