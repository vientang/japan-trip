import { useParams, useNavigate } from 'react-router-dom'
import itinerary from '../data/itinerary'
import './Day.css'

const TRANSPORT_LABELS = {
  van:     'Private Transfer',
  bus:     'Bus',
  train:   'Train',
  taxi:    'Taxi',
  luggage: 'Luggage Forwarding',
  flight:  'Flight',
}

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

function ConfNumber({ value }) {
  if (!value) return null
  const isPlaceholder = value.startsWith('ADD-')
  return (
    <p className={`day-item__conf ${isPlaceholder ? 'day-item__conf--placeholder' : ''}`}>
      {isPlaceholder ? value.replace(/-/g, ' ') : `Conf · ${value}`}
    </p>
  )
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
  const transportLegs = entry.logistics?.transport ?? []

  return (
    <div className="day-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <header className="day-page__header">
        <p className="day-page__date">{formatDate(entry.date)}</p>
        <h1 className="day-page__title">{entry.title}</h1>
        <p className="day-page__destination">{entry.destination}</p>
      </header>

      {transportLegs.length > 0 && (
        <div className={`day-section ${isTravelDay ? 'day-section--travel' : ''}`}>
          <p className="day-section__label">Transport</p>
          {transportLegs.map((leg, i) => (
            <div key={i} className="transport-leg">
              <div className="transport-leg__header">
                <span className="transport-leg__type">
                  {TRANSPORT_LABELS[leg.type] ?? leg.type}
                </span>
                {leg.time && <span className="transport-leg__time">{leg.time}</span>}
              </div>
              {leg.description && <p className="transport-leg__desc">{leg.description}</p>}
              {(leg.from || leg.to) && (
                <p className="transport-leg__route">
                  {leg.from && leg.to ? `${leg.from} → ${leg.to}` : leg.from || leg.to}
                </p>
              )}
              <ConfNumber value={leg.confirmationNumber} />
            </div>
          ))}
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
                {item.address && <p className="day-item__address">{item.address}</p>}
                <ConfNumber value={item.confirmationNumber} />
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
