'use strict';
class Car {
  brand;
  model;
  price;
    
    constructor({brand, model, price}){
    this.brand = brand;
    this.model = model;
    this.price = price;
    }
  }
  // Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

  // Тесты
  // Объявлен класс Car.
  // Конструктор класса принимает объект со свойствами brand, model и price.
  // В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
  // В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
  // В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }. 