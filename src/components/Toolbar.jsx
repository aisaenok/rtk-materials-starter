import { useDispatch, useSelector } from 'react-redux'
import {
  favoritesModeToggled,
  loadMaterials,
  selectLoading,
  selectShowOnlyFavorites,
} from "../store/materialsSlice";

export const Toolbar = () => {
  const dispatch = useDispatch();

  const showOnlyFavorites = useSelector(selectShowOnlyFavorites);
  const loading = useSelector(selectLoading);

  return (
    <div className="toolbar">
      <button
        className={showOnlyFavorites ? "button buttonPrimary" : "button"}
        type="button"
        onClick={() => dispatch(favoritesModeToggled())}
      >
        {showOnlyFavorites ? "Показать все" : "Только избранное"}
      </button>

      <button
        className="button"
        type="button"
        onClick={() => dispatch(loadMaterials())}
        disabled={loading}
      >
        Обновить
      </button>

      <button
        className="button buttonDanger"
        type="button"
        onClick={() => dispatch(loadMaterials({ shouldFail: true }))}
        disabled={loading}
      >
        Сымитировать ошибку
      </button>
    </div>
  );
};
