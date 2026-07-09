const levelLabels = {
  basic: 'Базовый',
  middle: 'Средний',
  advanced: 'Продвинутый',
}

export const MaterialCard = ({ material, isFavorite, onFavoriteToggle }) => {
  return (
    <article className="card">
      <div className="cardHeader">
        <span className="badge">{levelLabels[material.level]}</span>
        <span className="duration">{material.duration} мин</span>
      </div>

      <h2>{material.title}</h2>
      <p>{material.description}</p>

      <div className="cardFooter">
        <span className="category">#{material.category}</span>
        <button
          className={isFavorite ? 'favorite favoriteActive' : 'favorite'}
          type="button"
          onClick={() => onFavoriteToggle(material.id)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? 'В избранном' : 'В избранное'}
        </button>
      </div>
    </article>
  )
}
