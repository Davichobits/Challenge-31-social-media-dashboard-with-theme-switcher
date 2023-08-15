import { Header } from "./components/Header"
import { OverviewCard } from "./components/OverviewCard"
import data from '../data/data.json'

const converNumbertoK = (number) => {
  if( number >= 10000){
    number = number / 1000
    return number + 'k'
  }
  return number
}

function App() {
  return (
    <>
      <Header />
      <section className="w-[326px] absolute top-[191px] left-0 right-0 mx-auto">
        {
          data.overview.map(card => 
            <OverviewCard
              key={card.followers}
              user={card.user}
              network={card.network}
              followers={converNumbertoK(card.followers)}
            />
          )
        }
      </section>
    </>
  )
}

export default App
