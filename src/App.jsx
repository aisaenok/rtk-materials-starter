import { useEffect, useMemo, useState } from 'react'
import { fetchMaterials } from './api/materialsApi'
import { categories } from './data/materials'
import { Header } from './components/Header'
import { CategoryFilter } from './components/CategoryFilter'
import { Toolbar } from './components/Toolbar'
import { MaterialsList } from './components/MaterialsList'
import { StatusMessage } from './components/StatusMessage'

const getVisibleMaterials = ({ materials, activeCategory, showOnlyFavorites, favoriteIds }) => {
  return materials.filter((material) => {
    const categoryMatched = activeCategory === 'all' || material.category === activeCategory
    const favoriteMatched = !showOnlyFavorites || favoriteIds.includes(material.id)

    return categoryMatched && favoriteMatched
  })
}

export default function App() {
  // На воркшопе это состояние будет переноситься в Redux store.
  const [materials, setMaterials] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [favoriteIds, setFavoriteIds] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadMaterials = async ({ shouldFail = false } = {}) => {
    setLoading(true)
    setError(null)

    try {
      const loadedMaterials = await fetchMaterials({ shouldFail })
      setMaterials(loadedMaterials)
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMaterials()
  }, [])

  const handleFavoriteToggle = (materialId) => {
    setFavoriteIds((currentFavoriteIds) => {
      if (currentFavoriteIds.includes(materialId)) {
        return currentFavoriteIds.filter((id) => id !== materialId)
      }

      return [...currentFavoriteIds, materialId]
    })
  }

  const visibleMaterials = useMemo(() => {
    return getVisibleMaterials({
      materials,
      activeCategory,
      showOnlyFavorites,
      favoriteIds,
    })
  }, [materials, activeCategory, showOnlyFavorites, favoriteIds])

  return (
    <main className="page">
      <Header totalCount={materials.length} favoriteCount={favoriteIds.length} />

      <section className="panel" aria-label="Фильтры материалов">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <Toolbar
          loading={loading}
          showOnlyFavorites={showOnlyFavorites}
          onFavoritesModeToggle={() => setShowOnlyFavorites((value) => !value)}
          onReload={() => loadMaterials()}
          onFail={() => loadMaterials({ shouldFail: true })}
        />
      </section>

      <StatusMessage loading={loading} error={error} />

      <MaterialsList
        materials={visibleMaterials}
        favoriteIds={favoriteIds}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </main>
  )
}
