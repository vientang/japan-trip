import { useParams, useNavigate } from 'react-router-dom'
import itinerary from '../data/itinerary'
import './Day.css'

const SECTIONS = [
  { key: 'bookings', label: 'Bookings' },
  { key: 'see',      label: 'See' },
  { key: 'eat',      label: 'Eat' },
  { key: 'explore',  label: 'Explore' },
]

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

export default function Day() {
  const { date } = useParams()
  const navigate = useNavigate()
  const entry = itinerary.find(e => e.date === date)

  if (!entry) return (
    <div className="day-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <p style={{ color: 'var(--color-ink-muted)', marginTop: 'var(--space-xl)' }}>Day not found.</p>
    </div>
  )

  const isTravelDay = entry.destination.includes('→')

  return (
    <div className="day-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <header className="day-page__header">
        <p className="day-page__date">{formatDate(entry.date)}</p>
        <h1 className="day-page__title">{entry.title}</h1>
        <p className="day-page__destination">{entry.destination}</p>
      </header>

      {isTravelDay && (
        <div className="day-section day-section--travel">
          <p className="day-section__label">Travel</p>
          {entry.logistics.transport && <p className="day-item day-item--plain">{entry.logistics.transport}</p>}
          {entry.logistics.accommodation && <p className="day-item day-item--plain">{entry.logistics.accommodation}</p>}
        </div>
      )}

      {SECTIONS.map(({ key, label }) => {
        const items = entry[key]
        if (!items?.length) return null
        return (
          <div key={key} className="day-section">
            <p className="day-section__label">{label}</p>
            {items.map((item, i) => (
              <div key={i} className="day-item">
                <div className="day-item__header">
                  <span className="day-item__name">{item.name}</span>
                  {item.time && <span className="day-item__time">{item.time}</span>}
                </div>
                {item.description && <p className="day-item__desc">{item.description}</p>}
                {item.confirmationNumber && (
                  <p className="day-item__conf">Conf: {item.confirmationNumber}</p>
                )}
              </div>
            ))}
          </div>
        )
      })}

      {entry.notes && (
        <div className="day-section">
          <p className="day-section__label">Notes</p>
          <p className="day-item day-item--plain day-item--notes">{entry.notes}</p>
        </div>
      )}
    </div>
  )
}
