import SaleCard from '@/components/cards/saleCard/saleCard'
import Container from '@/components/container/container'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import GameCard from '@/components/cards/gameCard/gameCard'
import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard
                image={"league-of-legends.jpg"}
                discount={75}
                fullPrice={"79,99"}
                discountPrice={"39,99"}
              />
              <SaleCard
                image={"dota-2.jpg"}
                discount={30}
                fullPrice={"19,99"}
                discountPrice={"9,99"}
              />
              <SaleCard
                image={"valorant.jpg"}
                discount={50}
                fullPrice={"30,00"}
                discountPrice={"15,99"}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gameContainer}>
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
