import itinerary from '../data/itinerary'
import TodayView from '../components/TodayView'
import DestinationCards from '../components/DestinationCards'
import './Home.css'

const TRIP_START = new Date('2026-06-21')
const TRIP_END   = new Date('2026-07-09')

export default function Home() {
  const today = new Date()
  const duringTrip = today >= TRIP_START && today <= TRIP_END

  return (
    <div className="home">
      <header className="home__header">
        <p className="home__eyebrow">June 21 – July 9, 2026</p>
        <h1 className="home__title">日本</h1>
        <p className="home__subtitle">Japan Trip</p>
      </header>

      {duringTrip && <TodayView itinerary={itinerary} today={today} />}

      <DestinationCards itinerary={itinerary} />
    </div>
  )
}