import { GetStaticProps } from 'next'
import Layout from '@components/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import fetch from 'isomorphic-unfetch'

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://nextjs-avocado-i0xw0ov53-nilia2020.vercel.app/api/avo'
  )
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://nextjs-avocado-i0xw0ov53-nilia2020.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()
  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
