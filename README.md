# server express
Разработка бэкенда для проекта (Mesto)

# API 
Запрос: GET localhost:3000/users Ответ: JSON-список всех пользователей

Запрос: GET localhost:3000/cards Ответ: JSON-список всех карточек

Запрос: GET localhost:3000/users/8340d0ec33270a25f2413b69 Ответ: JSON-user с таким идентификатором. Если такого нет JSON:{ "message": "Нет пользователя с таким id" }

Запрос: Несуществующий адрес Ответ: JSON: { "message": "Запрашиваемый ресурс не найден"}

## How to install
1. Склонировать проект
* git clone git@github.com:RA404/backend12.git
2. Установите экпресс и пакеты
* npm init -y
* npm install express
* npm i body-parser
3. Установить зависимости для разработчика
* npm install nodemon -D
* npm install eslint --save-dev   
* npm i eslint-config-airbnb-base --save-dev
* npm i eslint-plugin-import --save-dev
3. Запустить сервер (продакшн версию)
* npm run start
4. Запустить сервер (версия для разработчиков с hot reload)
* npm run dev

# Project link 
[https://github.com/RA404/backend12](https://github.com/RA404/backend12)

## Version v0.0.2
v0.0.1 - первая версия проекта

v0.0.2 - исправлены выявленные ошибки, проведен небольшой рефакторинг кода