import React, { useEffect, useState } from 'react';
import commerce from '../lib/commerce';
import Image from 'next/image';
import Head from 'next/head';

import { RiArrowDownSLine } from 'react-icons/ri';

import logo from '../public/layfoot_preto.png';

export default function Home({ allProducts }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [tournament, setTournament] = useState();
  const [openDropdownTournament, setOpenDropdownTournament] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFilteredProducts(
      allProducts.sort(function (a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      }))

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const TournamentProducts = [];

    if (tournament) {
      if (tournament.slug === 'todos') {
        setFilteredProducts(allProducts);
      } else {
        allProducts.map(product => {
          product.categories.map(cat => {
            if (cat.slug === tournament.slug) {
              TournamentProducts.push(product);
            }
          })
        })
        setFilteredProducts(TournamentProducts);
      }
    }
  }, [tournament]);

  const DropdownTournaments = () => (
    <div className="absolute z-20">
      <button className="inline-flex justify-center items-center w-full border-b-2 border-black p-2" onClick={() => setOpenDropdownTournament(!openDropdownTournament)}>
        {tournament ? (<span>{tournament.name}</span>) : (<span>Campeonatos</span>)}<RiArrowDownSLine />
      </button>

      {openDropdownTournament && (
        <div className="border-2">
          <div onClick={() => {
            setTournament({ name: 'Todos', slug: 'todos' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Todos
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Brasileirão', slug: 'campeonato-brasileiro' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Brasileirão
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Premier League', slug: 'premier-league' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Premier League
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'La Liga', slug: 'la-liga' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                La Liga
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Ligue 1', slug: 'ligue-1' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Ligue 1
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Série A', slug: 'serie-a' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Série A
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Retrô', slug: 'retro' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Retrô
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'Outras Ligas', slug: 'outras-ligas' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                Outras Ligas
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTournament({ name: 'NBA', slug: 'nba' })
            setOpenDropdownTournament(false)
          }}>
            <div className="py-1 bg-gray-50 cursor-pointer" >
              <div className="group flex item-center px-4 py-2 text-sm text-gray-700
                        hover:bg-indigo-500 hover:text-white">
                NBA
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )

  const Products = () => (
    <>
      {filteredProducts.map((product, index) => (
        <div key={product.id} className="flex items-center flex-col bg-gray-50 shadow-lg px-2 py-4 rounded-md">
          <img src={product.media.source} className="w-56" />
          <div className="flex flex-col items-center justify-center flex-wrap mt-6">
            <span className="text-xs md:text-base text-center">{product.name}</span>
            <span className="font-bold text-xs md:text-base">{(product.price.raw).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </div>
      ))}
    </>
  )

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

        <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 mb-8">
          <DropdownTournaments />
        </div>

        {isLoading ? (
          <div className="col-span-5 flex justify-center items-center">
            <h1>Carregando...</h1>
          </div>
        ) : (
          <>
            <Products />
          </>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data: allProducts } = await commerce.products.list({
    limit: 250,
  });

  return {
    props: {
      allProducts,
    },
  };
}