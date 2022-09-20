import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import data from '../../utils/data'

const ProductScreen = () => {
  const { query } = useRouter()
  const { slug } = query
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Layout title={product?.name} description={product?.description}>
      <div className='py-2'>
        <Link href='/'>Back to Product</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          />
        </div>

        <div>
          <ul>
            <li>
              <h1 className='text-lg font-bold'>{product.name}</h1>
            </li>
            <li className='text-sm font-semibold'>
              Category: {product.category}
            </li>
            <li className='text-sm text-gray-600'>Brand: {product.brand}</li>
            <li className='flex items-center mt-2 mb-2'>
              {product.rating} of
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3'>
                {product.numReviews}
              </span>{' '}
              reviews
            </li>
            <li className='text-sm text-gray-800'>{product.description}</li>
          </ul>
        </div>

        <div>
          <div className='card p-2 md:p-4'>
            <div className='mb-2 flex justify-between'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div
                className={
                  product.countInStock > 0 ? 'text-green-600' : 'text-red-600'
                }
              >
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
            <button className='primary-button w-full'>Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductScreen
