import commerce from '../lib/commerce';
import Image from 'next/image';

import logo from '../public/layfoot_preto.png';

export default function Home({ allProducts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 bg-gray-100 p-8">

      <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 flex items-center justify-center">
        <Image src={logo} quality={100} width="94.5px" height="36.875px" />
      </div>
      <div className="flex justify-between items-center col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 px-2">
        <h1 className="font-bold text-2xl uppercase">FUTEBOL</h1>
        <span className="text-xs">{allProducts.length} RESULTADOS ENCONTRADOS</span>
      </div>

      {allProducts.map((product, index) => (
        <div key={product.id} className="flex items-center flex-col bg-gray-50 shadow-lg px-2 py-4 rounded-md">
          <img src={product.media.source} className="w-56" />
          <div className="flex flex-col items-center justify-center flex-wrap mt-6">
            <span className="text-xs md:text-base text-center">{product.name}</span>
            <span className="font-bold text-xs md:text-base">{(product.price.raw).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </div>
      ))}

    </div>
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