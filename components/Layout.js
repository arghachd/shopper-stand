import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { Store } from '../utils/Store'

const Layout = ({ title, description, children }) => {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <>
      <Head>
        <title>{title ? title + ' - Shopper Stand' : 'Shopper Stand'}</title>
        <meta
          name='description'
          content={description ? description : 'Ecommerce website'}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between items-center shadow-md px-4'>
            <Link href='/'>
              <a className='text-lg font-bold'>Shopping Stand</a>
            </Link>

            <div className='flex space-x-2'>
              <Link href='/cart'>
                <a>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </a>
              </Link>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center h-10 shadow-inner mt-4'>
          <p>Copyright &copy; 2022 - Shopper Stand</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
