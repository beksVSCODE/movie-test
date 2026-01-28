# 🎬 Movies App

Современное веб-приложение для просмотра информации о фильмах с использованием TMDB API. Проект построен с применением методологии **Feature Sliced Design** и лучших практик React-разработки.

## 📋 Содержание

- [Технологический стек](#-технологический-стек)
- [Архитектура](#-архитектура)
- [Функциональность](#-функциональность)
- [Установка и запуск](#-установка-и-запуск)
- [Структура проекта](#-структура-проекта)
- [Особенности реализации](#-особенности-реализации)

## 🛠 Технологический стек

### Core
- **React 18** - библиотека для построения пользовательских интерфейсов
- **TypeScript** - типизация для критичных частей приложения
- **React Router DOM** - клиентская маршрутизация

### Управление состоянием
- **React Query (@tanstack/react-query)** - управление серверным состоянием, кэширование
- **Zustand** - управление клиентским состоянием (поиск, пагинация)

### Работа с API
- **Axios** - HTTP клиент с interceptors
- **TMDB API** - база данных фильмов

### Стилизация
- **Styled Components** - CSS-in-JS решение
- Адаптивный дизайн (Mobile First)
- Темная тема в стиле Netflix

## 🏗 Архитектура

Проект построен по методологии **Feature Sliced Design (FSD)**:

```
src/
├── app/                    # Инициализация приложения
│   ├── providers/         # Провайдеры (Router, Query, Theme)
│   └── styles/            # Глобальные стили и тема
├── pages/                 # Страницы приложения
│   ├── movies-list/       # Список фильмов
│   └── movie-details/     # Детальная информация о фильме
├── widgets/               # Композитные блоки
│   ├── movie-card/        # Карточка фильма
│   └── movies-grid/       # Сетка карточек
├── features/              # Функциональные модули
│   └── search-movies/     # Поиск фильмов с debounce
├── entities/              # Бизнес-сущности
│   └── movie/
│       ├── api/           # API запросы
│       ├── model/         # Хуки и store
│       └── ui/            # UI компоненты сущности
└── shared/                # Переиспользуемый код
    ├── api/               # Axios instance
    ├── config/            # Конфигурация
    ├── lib/               # Утилиты и хуки
    ├── types/             # TypeScript типы
    └── ui/                # UI kit компоненты
```

### Принципы FSD
- **Слоистая архитектура** - четкое разделение ответственности
- **Изолированность модулей** - низкая связанность
- **Переиспользуемость** - DRY принцип
- **Типобезопасность** - TypeScript для критичных частей

## ✨ Функциональность

### Основные возможности
- ✅ Отображение популярных фильмов
- ✅ Поиск фильмов по названию с debounce (500ms)
- ✅ Пагинация результатов (до 500 страниц)
- ✅ Детальная информация о фильме
- ✅ Адаптивный дизайн

### Информация о фильме
- Постер и backdrop изображения
- Название и слоган
- Рейтинг (с количеством голосов)
- Дата выхода
- Продолжительность
- Жанры
- Полное описание
- Бюджет и сборы
- Компании-производители

### UX фичи
- Состояния загрузки со спиннером
- Обработка ошибок с понятными сообщениями
- Плавные анимации и transitions
- Автоскролл вверх при смене страницы
- Кнопка "Назад" на детальной странице
- Placeholder для отсутствующих изображений

## 🚀 Установка и запуск

### Требования
- Node.js >= 14.0.0
- npm >= 6.0.0

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm start
```
Приложение откроется по адресу [http://localhost:3000](http://localhost:3000)

### Сборка для production
```bash
npm run build
```
Собранное приложение будет в папке `build/`

### Запуск тестов
```bash
npm test
```

## 📁 Структура проекта

### App Layer (Инициализация)
```
app/
├── providers/
│   ├── QueryProvider.jsx    # React Query provider
│   ├── ThemeProvider.jsx    # Styled Components theme
│   └── RouterProvider.jsx   # React Router provider
└── styles/
    ├── theme.js             # Дизайн-токены
    └── GlobalStyles.js      # Глобальные стили
```

### Pages Layer (Страницы)
```
pages/
├── movies-list/
│   ├── MoviesListPage.jsx       # Страница списка
│   ├── MoviesListPage.styles.js
│   └── index.js
└── movie-details/
    ├── MovieDetailsPage.jsx     # Страница деталей
    ├── MovieDetailsPage.styles.js
    └── index.js
```

### Entities Layer (Бизнес-логика)
```
entities/movie/
├── api/
│   └── moviesApi.ts         # API методы (typed)
├── model/
│   ├── useMovies.ts         # React Query хуки (typed)
│   └── searchStore.ts       # Zustand store (typed)
└── index.js
```

### Shared Layer (Инфраструктура)
```
shared/
├── api/
│   └── axios.instance.js    # Настроенный Axios
├── config/
│   └── api.config.js        # API конфигурация
├── lib/
│   ├── imageHelpers.ts      # Утилиты для изображений
│   └── useDebounce.ts       # Debounce хук
├── types/
│   ├── movie.types.ts       # TypeScript типы
│   └── index.ts
└── ui/                       # UI Kit
    ├── Container.jsx
    ├── Grid.jsx
    ├── Button.jsx
    ├── Card.jsx
    ├── Loading.jsx
    ├── ErrorMessage.tsx
    ├── Pagination.tsx
    └── index.js
```

## 🎯 Особенности реализации

### React Query
- **Кэширование** - staleTime: 5 минут
- **Автоматический retry** при ошибках
- **Devtools** для отладки
- **Оптимизация** - предотвращение дублирующих запросов

```typescript
const { data, isLoading, error } = useMovies(page);
```

### Zustand Store
```typescript
interface SearchStore {
  searchQuery: string;
  currentPage: number;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  clearSearch: () => void;
}
```

### Debounce Search
- Задержка 500ms перед запросом
- Минимум 3 символа для активации поиска
- Автосброс страницы при новом поиске

### TypeScript интеграция
- Типизация критичных частей (API, хуки, компоненты)
- Strict mode для максимальной безопасности
- Поддержка JS файлов (allowJs: true)

### Styled Components Theme
```javascript
theme: {
  colors: { primary, secondary, dark, ... }
  spacing: { xs, sm, md, lg, xl, xxl }
  breakpoints: { mobile, tablet, desktop, wide }
  shadows, transitions, fontSizes, ...
}
```

### Адаптивность
- Desktop: > 1024px
- Tablet: 768px - 1024px  
- Mobile: < 768px
- Адаптивная сетка (auto-fill, minmax)

## 📝 API

Проект использует [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)

### Endpoints
- `GET /discover/movie` - Популярные фильмы
- `GET /search/movie` - Поиск фильмов
- `GET /movie/{id}` - Детали фильма

### Конфигурация
```javascript
// src/shared/config/api.config.js
export const API_CONFIG = {
  baseURL: 'https://api.themoviedb.org/3',
  apiKey: 'YOUR_API_KEY',
  imageBaseURL: 'https://image.tmdb.org/t/p'
};
```

## 🎨 Дизайн

- **Цветовая схема**: Темная тема Netflix-стайл
- **Primary Color**: #e50914 (красный)
- **Background**: #141414 (темно-серый)
- **Типографика**: System fonts
- **Анимации**: Плавные transitions (0.2s - 0.5s)

## 📦 Основные зависимости

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-router-dom": "^6.x",
    "@tanstack/react-query": "^5.x",
    "zustand": "^4.x",
    "axios": "^1.x",
    "styled-components": "^6.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x"
  }
}
```

## 🔧 Возможные улучшения

- [ ] Добавить ESLint + Prettier
- [ ] Расширить TypeScript покрытие до 100%
- [ ] Добавить unit тесты (Jest + React Testing Library)
- [ ] Реализовать infinite scroll
- [ ] Добавить фильтры по жанрам
- [ ] Сохранение избранных фильмов (localStorage)
- [ ] Server-Side Rendering (Next.js миграция)
- [ ] Progressive Web App (PWA)

## 📄 Лицензия

MIT

## 👨‍💻 Автор

Тестовое задание - демонстрация навыков React-разработки

---

**Стек**: React • TypeScript • React Query • Zustand • Styled Components • FSD

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
