import Head from 'next/head'
import { useRecoilState } from 'recoil'

import { cartState } from '../atoms/cart'

import styles from '../styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'


export default function Home() {
  const [cart, setCart] = useRecoilState(cartState)

  const handleAddProduct = (info) => {
    setCart([...cart, info])
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
        <Navbar/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard
                image={"league-of-legends.jpg"}
                discount={75}
                fullPrice={"79,99"}
                discountPrice={"39,99"}
                onAdd={() => { handleAddProduct({ name: 'league-of-legends', price: 30.00, image: 'league-of-legends.jpg' }) }}
                adress={"signup.leagueoflegends.com/pt-br/signup/redownload"}
              />
              <SaleCard
                image={"dota-2.jpg"}
                discount={30}
                fullPrice={"19,99"}
                discountPrice={"9,99"}
                onAdd={() => { handleAddProduct({ name: 'dota-2', price: 30.00, image: 'dota-2.jpg' }) }}
                adress={"store.steampowered.com/app/570/Dota_2/"}
              />
              <SaleCard
                image={"valorant.jpg"}
                discount={50}
                fullPrice={"30,00"}
                discountPrice={"15,99"}
                onAdd={() => { handleAddProduct({ name: 'valorant', price: 30.00, image: 'valorant.jpg' }) }}
                adress={"playvalorant.com/pt-br/?gad=1&gclid=Cj0KCQjwrMKmBhCJARIsAHuEAPT0q8MdePXIK-UJTgIokljf_NSe1wW815No27sthHIcRV6mUrHlJu8aAo3UEALw_wcB&gclsrc=aw.ds"}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard
                onAdd={() => { handleAddProduct({ name: 'CS-GO', price: 99.99, image: 'counter-strike.jpg' }) }}
                adress={"store.steampowered.com/app/730/CounterStrike_Global_Offensive/"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
