import * as i from 'types';

export const calculateBalance = (payments: i.Payment[]) => {
  const { amount } = payments.reduce(
    (previousValue, currentValue) => {
      const result = parseFloat(previousValue.amount) + parseFloat(currentValue.amount)

      return { 
        amount: result.toFixed(2)
      }
    },
    {
      amount: '0.0',
    }
  )
  
  return amount
}