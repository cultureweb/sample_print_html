import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components'

export const Table = styled.table`
  border: 1px solid #222;
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  font-weight: 700;
  background: #ccc;
`
const TableTr = styled.tr`
  border: 1px solid #222;
`

const Td = styled.td`
  height: 35px;
`

export default function FakeRowTable({ elementCount }) {
  //const elementCount = props.elementCount;
  //const { elementCount } = props;

  const invoiceRows = [];

  for (let i = 0; i < elementCount; i++) {
    invoiceRows.push({
      partNumber: `ASNA2151-0${i}`,
      qty: i,
      price: 17 + i
    });
  }

  return (
    <Table>
      <TableHead>
        <TableTr>
          <th>Part number</th>
          <th>Qty</th>
          <th>Price</th>
        </TableTr>
      </TableHead>
      <tbody>
        {invoiceRows.map(invoiceRow => (
          <TableTr key={invoiceRow.partNumber} data-testid="table-rows">
            <Td>{invoiceRow.partNumber}</Td>
            <Td>{invoiceRow.qty}</Td>
            <Td>{invoiceRow.price}</Td>
          </TableTr>
        ))}
      </tbody>
    </Table>
  );
}

FakeRowTable.propTypes = {
  elementCount: propTypes.number.isRequired
};
