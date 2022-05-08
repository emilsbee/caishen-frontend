import * as i from 'types';
import { parse } from 'csv-parse/sync';

import { preformatFloat } from '.'

export const paymentCsvToArray = (
  csvString: string
): i.Payment[] => {
  const parsedPayments = parse(csvString, {
    delimiter: ';',
    columns: (records) => records.map((record: string) => {
      switch (record) {
        case 'Interest Date':
          return undefined
        case 'Counterparty':
          return undefined
        default:
          return record.toLowerCase();
      }
    }),
    skipEmptyLines: true,
    cast: (value, context) => {
      if (context.column === 'amount' && value !== 'amount') {
        return parseFloat(preformatFloat(value)).toFixed(2)
      }
      return value
    }
  });

  return parsedPayments.slice(1, parsedPayments.length);
};
