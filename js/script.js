document.addEventListener('DOMContentLoaded', () => {

    // Мінімум

    // 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
    // обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:

    let car = {
        make: "Wolksvagen",
        model: "Toureg",
        yearOfManufacture: 2010,
        averageSpeed: 140,
        fuelTankVolume: 70,
        averageFuelConsumption: 9.8,
        drivers: "Tanya",

        // -Метод, який виводить на екран інформацію про автомобіль.
        info: function () {
            console.log(`Виробник - ${this.make}, 
            Модель - ${this.model}, 
            Рік випуску - ${this.yearOfManufacture},
            Середня швидкість - ${this.averageSpeed} км/год., 
            Обєм баку - ${this.fuelTankVolume} літрів, 
            Витрата палива - ${this.averageFuelConsumption} літрів на 100км.,
            Водій - ${this.drivers}`);
        },

        // -Додавання ім’я водія у список.
        addDrivers: function (obj, key) {
            obj[key] += ', ' + prompt('Введіть імя водія, яке необхідно додати', '')
        },

        // -Перевірка водія на наявність його ім’я у списку.
        reviewDriver: function (name) {
            if (name === car.drivers) {
                return true;
            } else if (name != car.drivers) {
                return false;
            }
        },

        // -Підрахунок необхідного часу та кількості палива для 
        // подолання переданої відстані з середньою швидкістю. 
        // Враховуй, що через кожні 4 години дороги водієві 
        // необхідно робити перерву на 1 годину. 
        calc: function (distance) {
            let fuel = ((100 * this['averageFuelConsumption']) / this['averageSpeed']);
            fuel = Math.ceil((distance / 100) * fuel);
            let time = (distance / this['averageSpeed']);
            time = Math.floor(time + (time / 4));
            return console.log(`Тобі потрібно ${fuel} літрів палива.Дану відстань ти подолаєш за ${time} годин`);
        },
    };

    car.info();
    car.addDrivers(car, 'drivers');
    car.info();
    console.log(car.reviewDriver('Tanya'));
    console.log(car.reviewDriver('Sasha'));
    car.calc(1500);


    // Норма  
    // Створити об'єкт, що описує час (години, хвилини, секунди),
    //  і такі функції для роботи з цим об'єктом: 

    let time = {
        hours: 20,
        minutes: 32,
        seconds: 15,

        // Для виведення часу на екран.
        showTime: function () {
            return console.log(`${this.hours}: ${this.minutes}: ${this.seconds}`)
        },

        // Зміни часу на передану кількість секунд.
        changeSeconds: function (seconds) {
            if (seconds != Number(seconds)) {
                return console.log('Введіть число!')
            } else if (seconds >= 60 && seconds < 3600) {
                time.minutes = time.minutes + Math.floor(seconds / 60);
                seconds = seconds % 60;
                return console.log(`Даний час ${time.hours}: ${time.minutes}: ${seconds}`)
            } else {
                return console.log(`Даний час ${time.hours}: ${time.minutes}: ${seconds}`)
            }
        },

        // Зміни часу на передану кількість хвилин.
        changeMinutes: function (minutes) {
            if (minutes != Number(minutes)) {
                return console.log('Введіть число!')
            } else if (minutes >= 60 && minutes < 1440) {
                time.hours = time.hours + Math.floor(minutes / 60);
                minutes = minutes % 60;
                return console.log(`Даний час ${time.hours}: ${minutes}: ${time.seconds}`)
            } else {
                return console.log(`Даний час ${time.hours}: ${minutes}: ${time.seconds}`)
            }
        },

        // Зміни часу на передану кількість годин.
        //Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, 
        // може змінитися і інша.Наприклад:
        //якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», 
        // а не «20: 59: 75».Також потрібно
        //передбачити можливість того що користувач може передати 150 секунд, 
        // або 75 хвилин.

        changeHours: function (hours) {
            if (hours >= 24) {
                hours = hours % 24;
                return console.log(`Даний час ${hours}: ${time.minutes}: ${time.seconds}`)
            } else {
                return console.log(`Даний час ${hours}: ${time.minutes}: ${time.seconds}`)
            }
        },
    };
    time.showTime();
    time.changeSeconds(58);
    time.changeSeconds(8);
    time.changeMinutes(1);
    time.changeMinutes(75);
    time.changeHours(12);
    time.changeHours(5);

    //     Максимум

    // Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи 
    // з дробом:
    // Складання 2-х об'єктів-дробів.
    // Віднімання 2-х об'єктів-дробів.
    // Множення 2-х об'єктів-дробів.
    // Ділення 2-х об'єктів-дробів.
    // Скорочення об'єкта-дробу.
    // (Тобі потрібно буде створити ще деякі методи не зазначені в завданні,
    //      для отримання математично правильної відповіді)

























    
    // Задача.
    // Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
    // который содержит только числа из arr из диапазона от a до b.
    // То есть, проверка имеет вид a ≤ arr[i] ≤ b.
    // Функция не должна менять arr.

    // let arrayNumber = ['1', '5', '9', '10', '0', '12'];
    // function filterRange(array, a, b) {
    //     let newArray = [];
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] >= a && array[i] <= b) {
    //             newArray.push(array[i]);
    //         }
    //     }
    //     return newArray;
    // }
    // let filtered = filterRange(arrayNumber, 5, 10);
    // alert(filtered);

    // Задача.
    // В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом.
    // Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет.
    // Ваша функция не должна добавлять лишних пробелов.
    // let obj = {
    //   className: 'open menu'
    // };
    // addClass(obj, 'new'); // obj.className='open menu new'
    // addClass(obj, 'open'); // без изменений
    // addClass(obj, 'me'); // obj.className='open menu new me'
    // console.log(obj.className); // "open menu new me"

    // function addClass(obj, cls) {
    //     let classes = obj.className ? obj.className.split(' ') : [];

    //     for (let i = 0; i < classes.length; i++) {
    //         if (classes[i] === cls) return;
    //     }

    //     classes.push(cls);

    //     obj.className = classes.join(' ');
    // }

    // let obj = {
    //     className: 'open new'
    // };

    // addClass(obj, 'new');
    // console.log(obj.className);
    // addClass(obj, 'open');
    // console.log(obj.className);
    // addClass(obj, 'me');
    // console.log(obj.className);

});