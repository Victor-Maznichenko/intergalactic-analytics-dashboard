# Intergalactic Analytics Dashboard 👽📊🛸

React-приложение для анализа межгалактических финансовых данных с визуализацией статистики и историей операций.

## ⚙️ Технологии
<table width='100%'>
  <tr>
      <td align="center" width="110" height="90">
         <img src="https://i.ibb.co/MB4fxFC/react.png" width="36" height="36" alt="React" />
         <br>React
      </td>
     <td align="center" width="110" height="90"> 
      <a href="#stack" >
        <img src="https://vite.dev/logo.svg" width="36" height="36" alt="Vite" />
      </a>
      <br>Vite
    </td>
      <td align="center" width="110" height="90">
         <img src="https://zustand-demo.pmnd.rs/logo192.png" width="36" height="36" alt="Zustand" />
         <br>
         Zustand
    </td>
      <td align="center" width="110" height="90">
         <img src="https://reactrouter.com/favicon-light.png" width="36" height="36" alt="React Router DOM" />
         <br>
         React Router DOM
      </td>
      <td align="center" width="110" height="90">
         <img src="https://eslint.org/apple-touch-icon.png" width="36" height="36" alt="ESLint" />
         <br>
         ESLint
      </td>
      <td align="center" width="110" height="90">
         <img src="https://prettier.io/icon.png" width="36" height="36" alt="Prettier" />
         <br>
         Prettier
      </td>
   </tr> 
</table>


## 🚀 Запуск проекта
1. Клонируйте репозиторий:
```bash
   git clone https://github.com/your-username/intergalactic-analytics-dashboard.git
```
2. Установите зависимости:
```bash
	yarn
```
3. Запустите приложение
```bash
	yarn dev
```

## Доступные команды

<p>В этом проекте вы можете пользоваться следующими скриптами:</p>

| Скрипт     | Описание                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------- |
| dev        | Запускает приложение в режиме разработки.                                                     |
| build      | Собирает приложение для production в папку `dist`.                                            |
| lint       | Запускает Eslint для проверки кода на ошибки.                                                 |
| format     | Запускает Prettier для автоматического форматирования кода.                                   |
| preview    | Собирает приложение для production в папку `dist` и запускает локальный сервер для просмотра. |


## 🧩 Архитектура фронтенда


```
src/
├── @types/           
├── app/       
│   ├── ...
│   ├── ...
│   └── ...
├── shared/          
│   └── 
├── pages/            
│   ├── ...
│   ├── ...
│   └── ...
└── ...
```

## ✨ Особенности
- **Загрузка CSV**: Drag-and-drop или выбор файла для анализа
- **Аналитика в реальном времени**: Отслеживание прогресса парсинга данных
- **Тестовая генерация**: Создание демо-данных для проверки системы
- **История операций**: Просмотр и управление предыдущими загрузками (LocalStorage)
- **Ключевые метрики**:
  - Общие/средние расходы в галактических кредитах
  - Дни с мин/макс расходами
  - Цивилизации с экстремальными затратами

## ⚙️ Бэкенд-требования

- Эндпоинты для загрузки CSV и генерации тестовых данных
- Потоковая передача прогресса обработки
- CORS-политики для локальной разработки
    

## 📄 Тестовые данные

Пример CSV-структуры:
Дата,Цивилизация,Сумма
2023-04-01,humans,45056
2023-04-02,blobs,678899

