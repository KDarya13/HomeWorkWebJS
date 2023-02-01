/*Задача 1. Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8

Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые

были получены ранее.

Формула перевода градусов Цельсия в градусы Фаренгейта:

градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

Примечания: Пользователь всегда вводит корректное число.*/

//Вариант 1 (с округлением до целого числа)
let temp = prompt("Введите температуру воздуха (C):")
alert(Math.round(temp = 9 / 5 * temp + 32));

//Вариант 2 
let temp = prompt("Введите температуру воздуха (C):")
alert((temp = 9 / 5 * temp + 32).toFixed(1));


