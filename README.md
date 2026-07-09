# RTK Materials Starter

Базовая заготовка для воркшопа по React Redux Toolkit.

Проект специально оставлен в pre-Redux состоянии: верстка, компоненты и mock API уже готовы, но состояние пока хранится в `App.jsx` через `useState`. На воркшопе это состояние удобно перенести в Redux Toolkit.

## Что есть в проекте

- Каталог учебных материалов
- Фильтр по категории
- Режим "только избранное"
- Добавление и удаление материала из избранного
- Mock API с задержкой
- Loading и error состояния
- Кнопка для симуляции ошибки запроса
- Установленные зависимости для Redux Toolkit и React Redux

## Запуск

```bash
npm install
npm run dev
```

Для Vite 8 нужен Node.js 20.19+ или 22.12+.

## Структура

```txt
src/
  api/
    materialsApi.js
  components/
    CategoryFilter.jsx
    Header.jsx
    MaterialCard.jsx
    MaterialsList.jsx
    StatusMessage.jsx
    Toolbar.jsx
  data/
    materials.js
  App.jsx
  main.jsx
  styles.css
```

## Что переносить в Redux на воркшопе

Сейчас в `App.jsx` лежит состояние:

```js
const [materials, setMaterials] = useState([])
const [activeCategory, setActiveCategory] = useState('all')
const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
const [favoriteIds, setFavoriteIds] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
```

На практике можно пройти такой путь:

1. Создать `src/store.js`
2. Создать `src/materialsSlice.js`
3. Описать `initialState`
4. Перенести reducers:
   - `categoryChanged`
   - `favoritesModeToggled`
   - `favoriteToggled`
5. Подключить reducer в `configureStore`
6. Обернуть приложение в `Provider`
7. Заменить props на `useSelector` и `useDispatch`
8. Вынести `getVisibleMaterials` в selector
9. Заменить ручную загрузку на `createAsyncThunk`
10. Обработать `pending`, `fulfilled`, `rejected` через `extraReducers`

## Почему заготовка сделана так

В проекте уже есть несколько частей состояния, которые используются в разных местах интерфейса:

- список материалов нужен для карточек и счетчика;
- избранное нужно для карточек, фильтра и счетчика;
- категория нужна для фильтрации списка;
- loading и error нужны для отображения статуса запроса.

Это позволяет быстро показать, почему локальный `useState` начинает разрастаться и как Redux Toolkit помогает вынести логику состояния из компонентов.
