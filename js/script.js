// //1)
// let n = "Alex"

// let say_hello = function (name) {
//     console.log(`hello ${name}`);
// }
// say_hello(n)
// let n2 ='Joji'
// let n3 = "Jojo"

// say_hello(n2) 
// say_hello(n3)
// say_hello('Roma')

// // //2)
// let mark = [1,2,34,5,6,7,8,89,9,9]
// let numbers = [1,24,6,7,9,42,30]
// let members = [1,23,5,7,8,904,2,5,6,67,5,10]

//1 - способ
// let for_formassiv = function(arr){
//     let s = 0
//     for(let item of arr){
//         s+=item
//     }
//     console.log(s);
// }

// for_formassiv(mark)  //arr = mark
// for_formassiv(numbers)
// for_formassiv(members)

//2 - способ
// function for_formassiv(arr) {   //эта функция работает, но она нигде не сохраняется
//         for(let item of arr){
//         s+=item
//     } 
//     console.log(s);
// }

//3 - способ (стрелочная функция)
// let for_formassiv =(arr)=>{
//     let s = 0
//     for(let item of arr){
//         s+=item
//     }
//     console.log(s);
// }


// let name = 'r'

// function ct_obj(name) {
//     let obj = {
//         his_name: name
//     }
//     console.log(obj);

// }
// ct_obj(name)
// ct_obj('Roma')



//Задание

// let name = 'Sheryl'

// let bio = function (arr) {
//     console.log(`hello  &{name}`);
// }


// let patronymic = 'Blossom'
// let age = 18

// bio(name )


//Teacher's 

// let ct_obj = function(his_name, his_sname, his_age) {
//     let obj = {
//         name: his_name,
//         surename: his_sname,
//         age: his_age
//     }
//     console.log(obj);
// }
// let n = 'mike'
// let s = 'will'
// let age = 23
// ct_obj(n, s, age)
// ct_obj("muzki", "tjk", age)

// let name = "Konstantin"
// let srn = "Miladze"

// ct_obj(name, srn, age + 20)




//H/W

//1)
/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 *4. Вызовите функцию и выведите результат в консоль
*/

// let h_w =()=>{
//     console.log(`hello world!`);
// }
// h_w()


//2)
/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


// setTimeout(function time_out(){
//     console.log('Hello world!');
// }, 5000);

// console.log('Wait...');
// time_out()


// //3)
// setTimeout(function myFn() {
//     console.log('Hello world')
//   }, 2000)
//   myFn()



//4)
/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 * 5 новый объект должен вноситься через функцию
 */

// let cars = [
//     {
//         carBrand: "Bugatti",
//         price: 100000,
//         isAvailableForSale: true,
//     },
//     {
//         carBrand: "Lamborgini",
//         price: 200000,
//         isAvailableForSale: false,
//     },
//     {
//         carBrand: "BMW",
//         price: 300000,
//         isAvailableForSale: true,
//     }
// ]

// let new_obj = {
//     carBrand: "Audi",
//     price: 400000,
//     isAvailableForSale: false,
// }

// let f_cars = function (arr) {
//     console.log(cars);
//     cars[3] = new_obj //Добавление нового обьекта в массив
// }
// f_cars()



//5) 
/** ЗАДАЧА 36 - Случайные числа
/* 1. Cгенерируйте новое 4-значное случайное число.
* Диапазон для случайного числа 1000 - 9999.
*
* 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
*
* 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
*
* 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
*
* ВАЖНО: В решении задачи используйте функции:
*  - для генерации случайного числа в заданном диапазоне
*  - для добавления случайного числа в массив с возвратом измененного массива
*/

// const MIN = 1000
// const MAX = 9999

// const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351] 


// let min_max = function(){

//     let rand = Math.random()
//     myNumbers.push(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
//     console.log(myNumbers);

//     // if (rand == myNumbers) {
//     //     console.log(0);  
//     // }
//     // myNumbers[6] = rand;
// }
// min_max()



//6)
/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */
// for each 

// let myCities = ['London', 'New York', 'Singapore']

// myCities.forEach((item, number) => {

//     const text = (`${item} is at the index ${number} in the myCities massive`);


//     console.log(text);
// }
// )




















































