import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../data/materials'
import {
  categoryChanged,
  selectActiveCategory,
} from '../store/materialsSlice'

export const CategoryFilter = () => {
  const dispatch = useDispatch()
  const activeCategory = useSelector(selectActiveCategory)

  const handleCategoryChange = (categoryId) => {
    dispatch(categoryChanged(categoryId))
  }

  return (
    <div className="filterGroup" aria-label="Фильтр по категории">
      {categories.map((category) => {
        const isActive = category.id === activeCategory

        return (
          <button
            className={isActive ? 'chip chipActive' : 'chip'}
            type="button"
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}