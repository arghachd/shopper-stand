import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout
      title='Home Page'
      description='Home page of shopper stand ecommerce website'
    >
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </Layout>
  )
}
