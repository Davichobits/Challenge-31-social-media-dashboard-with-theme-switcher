import { Header } from "./components/Header"
import { OverviewCard } from "./components/OverviewCard"
import { OverviewTodayCard } from "./components/OverviewTodayCard"
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
          data.overview.map(object => 
            <OverviewCard
              key={object.id}
              user={object.user}
              network={object.network}
              audienceType={object.audienceType} 
              audience={converNumbertoK(object.audience)}
              today={object.today} 
              isUp={object.isUp}
            />
          )
        }
      </section> 
      <section className="w-[326px] mx-auto">
        <h2 className="text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue">Overview - Today</h2>
        {
          data['overview-today'].map(object => 
            <OverviewTodayCard
              key={object.id}
              network={object.network}
              statsType={object.statsType}
              stats={converNumbertoK(object.stats)}
              porcentage={object.porcentage}
              isUp={object.isUp}
            />
          )
        }
      </section>
    </>
  )
}

export default App