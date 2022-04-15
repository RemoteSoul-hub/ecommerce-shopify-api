import { useState } from 'react';
import Link from 'next/link';
import { formatPrice, storefront } from '../../utils'

const relatedproducts = [
    {
        id: 1,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
        imageAlt: 'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 2,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
        imageAlt: 'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 3,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
        imageAlt: 'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 4,
        name: 'Fusion',
        category: 'UI Kit',
        href: '#',
        price: '$49',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
        imageAlt: 'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
]

export default function Handle({ product, products }) {
    const [isLoading, setIsLoading] = useState(false)
    console.log(product)
    const image = product.images.edges[0].node
    const variantId = product.variants.edges[0].node.id

    async function checkout() {
        setIsLoading(true)
        const { data } = await storefront(checkoutMutation, { variantId })
        const { webUrl } = data.checkoutCreate.checkout
        window.location.href = webUrl
    }

    const relatedProducts = products.edges.filter((item) => item.node.handle != product.handle).slice(0, 4)
    return (
        <div className='bg-white'>
            <p className='bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8'>
                Save 20% when you buy two or more kits
            </p>
            <main className='mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
                    <div className='lg:row-end-1 lg:col-span-4'>
                        <div className='aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden'>
                            <img
                                 src={image.transformedSrc}
                                 alt=''
                                 className='object-center object-cover group-hover:opacity-75'
                                 />
                        </div>
                    </div>
                {/* Product details */}
                <div className=' mt-4 lg:row-end-1 lg:col-span-4 space-y-3'>
                    <p>Star reviews</p>
                    <h1 className='text-4xl font-semibold'>{product.title}</h1>
                    <p className='text-gray-500 text-sm'>{product.tags[0]} &middot; Updated{' '}
                    <time dateTime={product.updatedAt}>{product.updatedAt}</time>
                    </p>
                    <p className='text-gray-500'>
                        The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.
                    </p>
                    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2'>
                        <button
                        onClick={checkout}
                        type='button' className='w-full bg-yellow-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500'>
                           {isLoading && (
                               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                             </svg>
                           )}
                            Pay 69$
                        </button>
                        <button type='button' className='w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-600'>
                            Preview
                        </button>
                    </div>
                    <div className='py-4 lg:py-6'>
                    <hr />
                    </div>
                    {/* <div className='highlights'>
                        <h3 className='text-base font-medium mb-2'>
                            Highlights
                            </h3>
                            <ul className='list-disc font-normal ml-4 space-y-2 text-gray-500'>
                                <li>200+ SVG icons in 3 unique styles</li>
                                <li>Compatible with Figma, Sketch, and Adobe XD</li>
                                <li>Drawn on 24 x 24 pixel grid</li>
                            </ul>
                        
                    </div> */}
                    <div className='highlights'>
                        <h3 className='text-base font-medium mb-2'>
                            License
                            </h3>
                            <p className=' font-normal space-y-2 text-gray-500'>
                                For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.{' '}
                                <a href='#' className='font-medium text-yellow-500 hover:text-yellow-600'>
                                    Read full license
                                </a>
                            </p>
                        
                    </div>
                </div>
             
                </div>
                <div className='max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none'>
                    <div className='flex items-center justify-between space-x-4'>
                        <h2 className='text-lg font-medium text-gray-900'>Customers also viewed</h2>
                        <a 
                            href='#'
                            className='whitespace-nowrap text-sm font-medium text-yellow-500 hover:text-yellow-600'
                        >
                            View all <span aria-hidden='true'> &rarr; </span>
                        </a>
                    </div>
                    <div className='mt-6 grid grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-10'>
                        {relatedProducts.map((item)=> {
                            const product = item.node
                            const image = product.images.edges[0].node
                            return (
                                  <Link key={product.handle} href={`/products/${product.handle}`}>
                                  <a className='group'>
                                    <div className='w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
                                      <img 
                                        src={image.transformedSrc}
                                        alt={image.altText}
                                        className='w-full h-full object-center object-cover group-hover:opacity-75'
                                      />
                                    </div>
                                    <div className='mt-4 flex items-center justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                          <Link href={`/products/${product.handle}`}>
                                              <a>
                                                  {product.title}
                                              </a>
                                          </Link>
                                      </h3>
                                      <p>{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                        {product.category}
                                    </p>
                                   
                                  </a>
                                  </Link>   
                        )})}
                    </div>
                </div>
            </main>
        </div>
    )
}


export async function getStaticPaths(){
    const { data } = await storefront(gql`
        {
            products(first: 6) {
                edges {
                    node {
                        handle
                    }
                }
            }
        }
    `)
    return {
        paths: data.products.edges.map(product => ({ params: { handle: product.node.handle } })),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const { data } = await storefront(singleProductQuery, { handle : params.handle})
    return {
        props: {
            product: data.productByHandle,
            products: data.products,
        }
    }
}

const gql = String.raw

const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
        productByHandle(handle: $handle) {
            title
            handle
            description
            updatedAt
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
            variants(first: 1) {
              edges {
                  node {
                      id
                  }
              }
          }
        }
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

const checkoutMutation = gql`
    mutation CheckoutCreate($variantId: ID!) {
        checkoutCreate(input: { lineItems: { variantId: $variantId, quantity: 1 }}) {
            checkout {
                webUrl
            }
        }
    }
`