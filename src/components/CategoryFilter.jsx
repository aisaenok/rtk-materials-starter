export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="filterGroup" aria-label="Фильтр по категории">
      {categories.map((category) => {
        const isActive = category.id === activeCategory

        return (
          <button
            className={isActive ? 'chip chipActive' : 'chip'}
            type="button"
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
