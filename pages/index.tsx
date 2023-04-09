import { useState, useEffect } from 'react'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <p>Avocado</p>
      {productList.map((product, key) => (
        <div key={key}>
          <h3>{product.name}</h3>
          <p>Price: {product.price} USD</p>
        </div>
      ))}
    </div>
  )
}

export default Home
