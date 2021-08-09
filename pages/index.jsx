import commerce from '../lib/commerce';
import Image from 'next/image';
import Head from 'next/head'

import logo from '../public/layfoot_preto.png';
import { useEffect, useState } from 'react';

export default function Home({ allProducts }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      allProducts.sort(function (a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      }))
  }, [])

  return (
    <>
    <Head>
      <title>Layfoot | Catálogo</title>
      <link rel="shortcut icon" href="/fut_preto.png" />
    </Head>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 bg-gray-100 p-8">

      <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex items-center justify-center">
        <Image src={logo} quality={100} width="94.5px" height="36.875px" />
      </div>
      <div className="flex justify-between items-center col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 px-2">
        <h1 className="font-bold text-lg md:text-2xl uppercase">catálogo</h1>
        <span className="text-xs text-right w-1/3">{filteredProducts.length} RESULTADOS ENCONTRADOS</span>
      </div>

      {filteredProducts.map((product, index) => (
        <div key={product.id} className="flex items-center flex-col bg-gray-50 shadow-lg px-2 py-4 rounded-md">
          <img src={product.media.source} className="w-56" />
          <div className="flex flex-col items-center justify-center flex-wrap mt-6">
            <span className="text-xs md:text-base text-center">{product.name}</span>
            <span className="font-bold text-xs md:text-base">{(product.price.raw).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </div>
      ))}

    </div>
    </>
  )
}

export async function getStaticProps() {
  const { data: allProducts } = await commerce.products.list();

  return {
    props: {
      allProducts,
    },
  };
}