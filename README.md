# Avatar.cypress.js
Cквозной e2e автотест для покемонов: на покупку нового аватара для своего тренера
<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://pokemonbattle.ru
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировал
* е2е тест на покупку нового аватара для своего тренера

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Ожидаемый результат: получим отчёт о прохождении тестов.
![image](https://raw.githubusercontent.com/Valentin-2025/Avatar.cypress.js/refs/heads/main/Cypress_cli.png)

## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку login.cy.js

Ожидаемый результат: получим отчёт о прохождении тестов.
![alt text](https://raw.githubusercontent.com/Valentin-2025/Avatar.cypress.js/refs/heads/main/Cypress_Ul.png)


## Автор

Валентин Ретюнский (e-mail: retvaliv72@mail.ru)
