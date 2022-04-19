import Head from 'next/head'
import Image from 'next/image'
import { formatPrice, storefront } from '../utils'
import Link from 'next/link';


const staticProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]


export default function Home({products}) {
// console.log( {products} )
  
  return (
    <div className="">
      <Head>
        <title>E-Commerce Prototype using NextJS and GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
        <div className='text-center'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Digital products for you to</span>{' '}
            <span className='block text-yellow-600 xl:inline'>level up</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-xl md:mt-5 md:text-2xl md:max-w-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus vel ullam dolorum culpa ab enim molestias magni quis molestiae, assumenda incidunt eaque architecto ipsa commodi accusantium, hic magnam recusandae!
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <a href='#' className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-x divide-gray-600  hover:bg-gray-700 md:text-lg md:px-10 transition-all'>
                <span className='pr-6'>Get the bundle</span>
                <span className='pl-6'>$199</span>
              </a>
            </div>
            {/* <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a href='#' className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-indigo-600 bg-white'>
                Live demo
              </a>
            </div> */}
          </div>
        </div>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.edges.map((item) => {
            const product = item.node
            const image = product.images.edges[0].node
            return (
              <Link key={product.handle} href={`/products/${product.handle}`}>
            <a className='group'>
              <div className='w-full aspect-w-4 aspect-h-5 rounded-lg overflow-hidden'>
                <img 
                  src={image.transformedSrc}
                  alt={image.altText}
                  className='w-full h-full object-center object-cover group-hover:opacity-75'
                />
              </div>
              <div className='mt-4 flex items-center justify-between text-base font-medium text-gray-900'>
                <h3>{product.title}</h3>
                <p>{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
              </div>
              <p className='mt-1 text-sm italic text-gray-500'>{product.tags[0]}</p>
            </a>
            </Link>
          )})}
        </div>
      </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery)
  return {
    props: {
      products: data.products,
    },
  }
}

const gql = String.raw

const productsQuery= gql`
  query Products {
    products(first: 6) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`

