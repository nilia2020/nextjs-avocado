import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '@components/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import fetch from 'isomorphic-unfetch'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
