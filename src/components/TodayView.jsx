import './TodayView.css'

const SECTIONS = [
  { key: 'logistics', label: 'Travel' },
  { key: 'bookings', label: 'Bookings' },
  { key: 'see',      label: 'See' },
  { key: 'eat',      label: 'Eat' },
  { key: 'explore',  label: 'Explore' },
]

function toDateStr(date) {
  return date.toISOString().split('T')[0]
}

export default function TodayView({ itinerary, today }) {
  const todayStr = toDateStr(today)
  const todayEntries = itinerary.filter(d => d.date === todayStr)

  if (!todayEntries.length) return null

  return (
    <section className="today">
      <p className="today__label">Today</p>
      {todayEntries.map((entry, i) => (
        <div key={i} className="today__entry">
          <h2 className="today__title">{entry.title}</h2>
          <p className="today__destination">{entry.destination}</p>

          {SECTIONS.map(({ key, label }) => {
            if (key === 'logistics') {
              const { transport, accommodation } = entry.logistics
              if (!transport && !accommodation) return null
              return (
                <div key={key} className="today__section today__section--travel">
                  <p className="today__section-label">{label}</p>
                  {transport && <p className="today__item">{transport}</p>}
                  {accommodation && <p className="today__item">{accommodation}</p>}
                </div>
              )
            }

            const items = entry[key]
            if (!items?.length) return null
            return (
              <div key={key} className="today__section">
                <p className="today__section-label">{label}</p>
                {items.map((item, j) => (
                  <div key={j} className="today__item">
                    <span className="today__item-name">{item.name}</span>
                    {item.time && <span className="today__item-time">{item.time}</span>}
                    {item.description && <p className="today__item-desc">{item.description}</p>}
                  </div>
                ))}
              </div>
            )
          })}

          {entry.notes && <p className="today__notes">{entry.notes}</p>}
        </div>
      ))}
    </section>
  )
}