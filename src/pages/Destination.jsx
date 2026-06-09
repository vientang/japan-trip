import { useParams, useNavigate, Link } from 'react-router-dom'
import itinerary from '../data/itinerary'
import { DESTINATIONS } from '../components/DestinationCards'
import './Destination.css'

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

function previewItems(entry) {
  return [...(entry.see || []), ...(entry.eat || []), ...(entry.explore || [])]
    .slice(0, 3)
    .map(i => i.name)
    .join(', ')
}

export default function Destination() {
  const { name } = useParams()
  const navigate = useNavigate()
  const decodedName = decodeURIComponent(name)
  const meta = DESTINATIONS.find(d => d.name === decodedName) || {}

  const entries = itinerary.filter(e => e.destination.startsWith(decodedName))
  const accommodationName = entries.find(e => e.logistics?.accommodation)?.logistics?.accommodation ?? ''
  const hotelBooking = itinerary
    .flatMap(e => e.bookings ?? [])
    .find(b => b.time === 'Check-in' && b.name === accommodationName)

  return (
    <div className="dest-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <header className="dest-page__header">
        <span className="dest-page__emoji">{meta.emoji}</span>
        <div>
          <h1 className="dest-page__name">{decodedName}</h1>
          <p className="dest-page__dates">{meta.dates}</p>
          {hotelBooking && (
            <div className="dest-page__hotel">
              <p className="dest-page__hotel-name">{hotelBooking.name}</p>
              {hotelBooking.address && <p className="dest-page__hotel-detail">{hotelBooking.address}</p>}
              {hotelBooking.phone && (
                <p className={`dest-page__hotel-detail ${hotelBooking.phone.startsWith('ADD-') ? 'dest-page__hotel-detail--placeholder' : ''}`}>
                  {hotelBooking.phone.startsWith('ADD-') ? hotelBooking.phone.replace(/-/g, ' ') : `☎ ${hotelBooking.phone}`}
                </p>
              )}
              {hotelBooking.confirmationNumber && (
                <p className={`dest-page__hotel-detail ${hotelBooking.confirmationNumber.startsWith('ADD-') ? 'dest-page__hotel-detail--placeholder' : ''}`}>
                  {hotelBooking.confirmationNumber.startsWith('ADD-')
                    ? hotelBooking.confirmationNumber.replace(/-/g, ' ')
                    : `Conf · ${hotelBooking.confirmationNumber}`}
                </p>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="dest-page__days">
        {entries.map(entry => (
          <Link key={entry.date} to={`/day/${entry.date}`} className="day-row">
            <div className="day-row__meta">
              <span className="day-row__date">{formatDate(entry.date)}</span>
              {entry.destination.includes('→') && (
                <span className="day-row__travel-badge">Travel</span>
              )}
            </div>
            <h3 className="day-row__title">{entry.title}</h3>
            {previewItems(entry) && (
              <p className="day-row__preview">{previewItems(entry)}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
