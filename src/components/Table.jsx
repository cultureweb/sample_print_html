import React from 'react'
import propTypes from 'prop-types'

export default function Table({ elementCount }) {
  //const elementCount = props.elementCount;
  //const { elementCount } = props;

  const rows = []
  
  for (let i = 0; i < elementCount; i++) {
    rows.push({
      partNumber: `ASNA2151-0${i}`,
      qty: i,
      price: 17 + i,
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Part number</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.partNumber} data-testid="table-rows">
            <td>{row.partNumber}</td>
            <td>{row.qty}</td>
            <td>{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Table.propTypes = {
//   elementCount: propTypes.number.isRequired,
// }