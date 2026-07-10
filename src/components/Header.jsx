import { useSelector } from 'react-redux'
import { selectMaterialsCount, selectFavoriteCount } from "../store/materialsSlice";

export const Header = () => {
  const totalCount = useSelector(selectMaterialsCount)
  const favoriteCount = useSelector(selectFavoriteCount)

  return (
    <header className="header">
      <div>
        <p className="eyebrow">Воркшоп: React Redux Toolkit</p>
        <h1>Каталог учебных материалов</h1>
        <p className="description">
          Заготовка на локальном состоянии. На практике перенесем данные, фильтры,
          избранное и статусы загрузки в Redux Toolkit.
        </p>
      </div>

      <dl className="stats" aria-label="Статистика материалов">
        <div className="stat">
          <dt>Материалов</dt>
          <dd>{totalCount}</dd>
        </div>
        <div className="stat">
          <dt>В избранном</dt>
          <dd>{favoriteCount}</dd>
        </div>
      </dl>
    </header>
  )
}
