import React from 'react';


export default function Crosstable({ headings, sideHeadings, textValues }) {
  return (
    <div>
    <table className="tableC">
      <thead>
        <tr>
          <th></th>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sideHeadings.map((sideHeading, rowIndex) => (
          <tr key={rowIndex}>
            <th>{sideHeading}</th>
            {textValues[rowIndex].map((value, colIndex) => (
              <td key={colIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}