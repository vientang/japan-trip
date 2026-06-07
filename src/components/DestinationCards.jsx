import './DestinationCards.css'

const DESTINATIONS = [
  { name: 'Tokyo',              dates: 'Jun 21 – Jun 27', emoji: '🗼' },
  { name: 'Mt. Fuji',          dates: 'Jun 27 – Jun 29', emoji: '🗻' },
  { name: 'Kyoto',             dates: 'Jun 29 – Jul 3',  emoji: '⛩️' },
  { name: 'Yokohama',          dates: 'Jul 3 – Jul 9',   emoji: '🎡' },
]

export default function DestinationCards() {
  return (
    <section className="destinations">
      <p className="destinations__label">Destinations</p>
      <div className="destinations__grid">
        {DESTINATIONS.map((d) => (
          <div key={d.name} className="dest-card">
            <span className="dest-card__emoji">{d.emoji}</span>
            <h3 className="dest-card__name">{d.name}</h3>
            <p className="dest-card__dates">{d.dates}</p>
          </div>
        ))}
      </div>
    </section>
  )
}