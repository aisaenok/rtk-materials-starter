import { MaterialCard } from './MaterialCard'

export const MaterialsList = ({ materials, favoriteIds, onFavoriteToggle }) => {
  if (materials.length === 0) {
    return (
      <section className="emptyState">
        <h2>Материалы не найдены</h2>
        <p>Попробуйте выбрать другую категорию или отключить фильтр избранного.</p>
      </section>
    )
  }

  return (
    <section className="grid" aria-label="Список материалов">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          isFavorite={favoriteIds.includes(material.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </section>
  )
}
