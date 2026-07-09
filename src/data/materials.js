export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'react', name: 'React' },
  { id: 'state', name: 'Состояние' },
  { id: 'testing', name: 'Тестирование' },
  { id: 'architecture', name: 'Архитектура' },
]

export const materials = [
  {
    id: 1,
    title: 'React: состояние компонента',
    category: 'react',
    level: 'basic',
    duration: 12,
    description: 'Разбираем, когда компоненту достаточно локального состояния и как обновлять его безопасно.',
  },
  {
    id: 2,
    title: 'Redux flow без магии',
    category: 'state',
    level: 'basic',
    duration: 15,
    description: 'Store, action, dispatch, reducer и selector на одной простой схеме.',
  },
  {
    id: 3,
    title: 'Асинхронная загрузка данных',
    category: 'state',
    level: 'middle',
    duration: 18,
    description: 'Как показывать loading, error и успешный результат без хаоса в компонентах.',
  },
  {
    id: 4,
    title: 'Композиция компонентов',
    category: 'react',
    level: 'middle',
    duration: 20,
    description: 'Как разделять интерфейс на компоненты и не превращать App в большой контейнер.',
  },
  {
    id: 5,
    title: 'Тестирование пользовательского сценария',
    category: 'testing',
    level: 'middle',
    duration: 25,
    description: 'Проверяем поведение интерфейса через действия пользователя, а не детали реализации.',
  },
  {
    id: 6,
    title: 'Нормализация коллекций',
    category: 'architecture',
    level: 'advanced',
    duration: 17,
    description: 'Почему иногда удобнее хранить коллекции как ids + entities вместо массива объектов.',
  },
]
