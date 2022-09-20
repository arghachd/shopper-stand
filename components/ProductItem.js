/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

const ProductItem = ({ product }) => {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            class='rounded-t-lg p-8 object-cover'
            src={product.image}
            alt={product.name}
          />
        </a>
      </Link>

      <div class='px-5 pb-5'>
        <Link href={`/product/${product.slug}`}>
          <a>
            <h3 class='text-gray-900 font-semibold text-xl tracking-tight'>
              {product.name}
            </h3>
          </a>
        </Link>
        <p className='text-gray-500 text-sm font-semibold my-2'>
          {product.brand}
        </p>
        {/* <div class='flex items-center mt-2.5 mb-5'>
          2 of
          <span class='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3'>
            5.0
          </span>
        </div> */}
        <div class='flex items-center justify-between'>
          <span class='text-3xl font-bold text-gray-900'>${product.price}</span>
          <button className='primary-button'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
