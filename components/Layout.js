import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title, description, children }) => {
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
                <a>Cart</a>
              </Link>
              <Link href='/login'>
                <a>Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>
          <p>Copyright &copy; 2022 - Shopper Stand</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
