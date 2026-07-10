import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchMaterials } from '../api/materialsApi'

export const loadMaterials = createAsyncThunk(
  'materials/loadMaterials',
  async ({ shouldFail = false } = {}) => {
    return fetchMaterials({ shouldFail })
  }
)

const initialState = {
  items: [],
  activeCategory: 'all',
  showOnlyFavorites: false,
  favoriteIds: [],
  loading: false,
  error: null,
}

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    categoryChanged: (state, action) => {
        state.activeCategory = action.payload
    },
    favoritesModeToggled: (state) => {
        state.showOnlyFavorites = !state.showOnlyFavorites
    },
    favoriteToggled: (state, action) => {
        const materialId = action.payload

        if (state.favoriteIds.includes(materialId)) {
            state.favoriteIds = state.favoriteIds.filter((id) => id !== materialId)
            return
        }

        state.favoriteIds.push(materialId)
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loadMaterials.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(loadMaterials.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })
        .addCase(loadMaterials.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
})

export const {
  categoryChanged,
  favoritesModeToggled,
  favoriteToggled,
} = materialsSlice.actions

export const selectItems = (state) => state.materials.items
export const selectActiveCategory = (state) => state.materials.activeCategory
export const selectShowOnlyFavorites = (state) => state.materials.showOnlyFavorites
export const selectFavoriteIds = (state) => state.materials.favoriteIds
export const selectLoading = (state) => state.materials.loading
export const selectError = (state) => state.materials.error

export const selectMaterialsCount = (state) => selectItems(state).length
export const selectFavoriteCount = (state) => selectFavoriteIds(state).length

export const selectVisibleMaterials = (state) => {
  const items = selectItems(state)
  const activeCategory = selectActiveCategory(state)
  const showOnlyFavorites = selectShowOnlyFavorites(state)
  const favoriteIds = selectFavoriteIds(state)

  return items.filter((material) => {
    const categoryMatched =
      activeCategory === 'all' || material.category === activeCategory

    const favoriteMatched =
      !showOnlyFavorites || favoriteIds.includes(material.id)

    return categoryMatched && favoriteMatched
  })
}

export default materialsSlice.reducer