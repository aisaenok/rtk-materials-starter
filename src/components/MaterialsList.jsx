import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteToggled,
  selectFavoriteIds,
  selectVisibleMaterials,
  selectError,
  selectLoading,
  loadMaterials,
} from "../store/materialsSlice";
import { MaterialCard } from "./MaterialCard";

export const MaterialsList = () => {
  const dispatch = useDispatch();

  const favoriteIds = useSelector(selectFavoriteIds);
  const materials = useSelector(selectVisibleMaterials);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(loadMaterials());
  }, [dispatch]);

  const handleFavoriteToggle = (materialId) => {
    dispatch(favoriteToggled(materialId));
  };

  if (loading || error) return null;

  if (materials.length === 0) {
    return (
      <section className="emptyState">
        <h2>Материалы не найдены</h2>
        <p>
          Попробуйте выбрать другую категорию или отключить фильтр избранного.
        </p>
      </section>
    );
  }

  return (
    <section className="grid" aria-label="Список материалов">
      {materials.map((material) => (
        <MaterialCard
          key={material.id}
          material={material}
          isFavorite={favoriteIds.includes(material.id)}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </section>
  );
};
