import * as React from 'react'

import { PaymentOverview } from '../components/PaymentOverview'

const Home: React.FC = () => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <PaymentOverview />
  )
}

export default Home