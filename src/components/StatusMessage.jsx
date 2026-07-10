import { useSelector } from 'react-redux'
import {
  selectLoading,
  selectError,
} from '../store/materialsSlice'

export const StatusMessage = () => {
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  if (loading) {
    return <p className="status">Загружаем материалы...</p>
  }

  if (error) {
    return <p className="status statusError">{error}</p>
  }

  return null
}
