import Layout from '@components/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://nextjs-avocado-i0xw0ov53-nilia2020.vercel.app/api/avo'
  )
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
