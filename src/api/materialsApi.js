import { materials } from '../data/materials'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchMaterials = async ({ shouldFail = false } = {}) => {
  await delay(600)

  if (shouldFail) {
    throw new Error('Не удалось загрузить материалы. Попробуйте еще раз.')
  }

  return materials
}
