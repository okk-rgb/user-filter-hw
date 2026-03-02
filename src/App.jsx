import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Users from './components/users/Users'

const App = () => {
  const [products, setProducts] = useState([])
  const [find, setFind] = useState('')

  useEffect (() => {
    fetch('https://dummyjson.com/recipes?limit=50')
    .then  (res  => res.json())
    .then (data => setProducts(data.recipes)
    )
  }, [])

  return (
    <div>
      <Header find={find} setFind={setFind}/>
      <Users products={products} find={find}/>
    </div>
  )
}

export default App
