import * as i from 'types';
import * as React from 'react';

import { paymentCsvToArray, calculateBalance } from '../../services'
import {
  PaymentOverviewWrapper, PaymentTable, PaymentTableHeaderRow,
  PaymentTableRow
 } from './styled'

export const PaymentOverview = () => {
  const [file, setFile] = React.useState<File | undefined>();
  const [paymentData, setPaymentData] = React.useState<i.Payment[]>([]);
  const [balance, setBalance] = React.useState<string>()

  const fileReader = new FileReader();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target?.result;

        if (text) {
          const paymentTableData = paymentCsvToArray(text.toString())
          setPaymentData(paymentTableData)
        }
      };

      fileReader.readAsText(file);
    }
  };

  React.useEffect(() => {
    setBalance(calculateBalance(paymentData))
  }, [paymentData])

  return (
    <PaymentOverviewWrapper>
      <form onSubmit={handleOnSubmit}>
        <input
          type="file"
          id="csvFileInput"
          accept=".csv"
          onChange={handleOnChange}
        />

        <button type="submit">
          IMPORT CSV
        </button>
      </form>
      <p>Balance: {balance}</p>
      <br />

      <PaymentTable>
        <thead>
          <PaymentTableHeaderRow>
            {['date', 'amount', 'account', 'name', 'description'].map(paymentColumn => (
              <th key={paymentColumn}>
                {paymentColumn}
              </th>
            ))}
          </PaymentTableHeaderRow>
        </thead>

        <tbody>
          {paymentData.map((item, j) => (
            <PaymentTableRow key={j}>
              {Object.values(item).map((val, i) => (
                <td key={`${i} ${j}`}>{val}</td>
              ))}
            </PaymentTableRow>
          ))}
        </tbody>
      </PaymentTable>
    </PaymentOverviewWrapper>
  )
}