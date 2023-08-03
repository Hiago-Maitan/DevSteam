import SaleCard from '@/components/cards/saleCard/saleCard'
import Container from '@/components/container/container'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import GameCard from '@/components/cards/gameCard/gameCard'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard
                image={"league-of-legends.jpg"}
                discount={75}
                fullPrice={"79,99"}
                discountPrice={"39,99"}
                onAdd={()=>{handleAddProduct({name: 'league-of-legends', price: 30.00, image: 'league-of-legends.jpg' })}}
              />
              <SaleCard
                image={"dota-2.jpg"}
                discount={30}
                fullPrice={"19,99"}
                discountPrice={"9,99"}
                onAdd={()=>{handleAddProduct({name: 'dota-2', price: 30.00, image: 'dota-2.jpg' })}}
              />
              <SaleCard
                image={"valorant.jpg"}
                discount={50}
                fullPrice={"30,00"}
                discountPrice={"15,99"}
                onAdd={()=>{handleAddProduct({name: 'valorant', price: 30.00, image: 'valorant.jpg' })}}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard 
              onAdd={()=>{handleAddProduct({name: 'CS-GO', price: 99.99, image: 'counter-strike.jpg' })}}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
