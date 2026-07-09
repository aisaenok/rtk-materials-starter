export const StatusMessage = ({ loading, error }) => {
  if (loading) {
    return <p className="status">Загружаем материалы...</p>
  }

  if (error) {
    return <p className="status statusError">{error}</p>
  }

  return null
}
