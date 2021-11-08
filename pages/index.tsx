import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Navbar } from '../src/components/Navbar'
import { ProductsList } from '../src/components/ProductsList'
import { useProducts } from '../src/store/products/hook'
import { useTitle } from '../src/store/title/hook'

const Home: NextPage = () => {
  const { changeTitle } = useTitle()
  const { loadProducts } = useProducts()
  changeTitle('Produtos')

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <main>
      <Navbar />
      <ProductsList />
    </main>
  )
}

export default Home
