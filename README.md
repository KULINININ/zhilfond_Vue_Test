# Описание

Задеплоеено тут -> https://kulininin.github.io/zhilfond_Vue_Test/search

Тестовое задание для Жилфонд

Сделал две ветки: SCSS - сделано на SCSS; main - сделано на Tailwind.
Искать можно по id (1,2,3,4) или по username (Bret, Antonette), если будет введено 1, 2, Bret, Antonette, то поиск будет происходить только по username.
Запросы на https://jsonplaceholder.typicode.com идут постранично с ограничением на 3 элемента.
Индикация ошибок при работе с API реализована с использованием vue-toaster.
Использовал TypeScript.
Задеплоено на gh-pages.
SPA сделано на Vuex с children компонентами.
Во время загрузки данных сделал отображение skeleton и лоадера.

Чтобы запросы на API не спамили использовал lodash/debouncer

# zhilfond

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
