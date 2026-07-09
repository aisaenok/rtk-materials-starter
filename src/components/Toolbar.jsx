export const Toolbar = ({
  loading,
  showOnlyFavorites,
  onFavoritesModeToggle,
  onReload,
  onFail,
}) => {
  return (
    <div className="toolbar">
      <button
        className={showOnlyFavorites ? 'button buttonPrimary' : 'button'}
        type="button"
        onClick={onFavoritesModeToggle}
      >
        {showOnlyFavorites ? 'Показать все' : 'Только избранное'}
      </button>

      <button className="button" type="button" onClick={onReload} disabled={loading}>
        Обновить
      </button>

      <button className="button buttonDanger" type="button" onClick={onFail} disabled={loading}>
        Сымитировать ошибку
      </button>
    </div>
  )
}
