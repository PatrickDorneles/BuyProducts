import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Navbar } from '../src/components/Navbar'
import { ProductsList } from '../src/components/ProductsList'
import { useProducts } from '../src/store/products/hook'
import { useTitle } from '../src/store/title/hook'

const Home: NextPage = () => {
  const { changeTitle } = useTitle()

  useEffect(() => {
    changeTitle('Produtos')
  }, [])
  
  return (
    <main>
      <Navbar cart />
      <ProductsList  />
    </main>
  )
}

export default Home
