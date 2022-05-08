import styled from 'styled-components'

export const PaymentOverviewWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PaymentTable = styled.table`
  position: relative;
  display: block;
  height: 800px;
  overflow-y: scroll;
  max-width: 1200px;
`

export const PaymentTableHeaderRow = styled.tr`
  padding: 10px 0;
  height: 50px;
`

export const PaymentTableRow = styled.tr`
  padding: 10px 0;
  height: 50px;

  &:hover {
    background-color: lightgray;
  }
`
