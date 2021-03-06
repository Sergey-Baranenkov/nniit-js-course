//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n){
   return (n ^ 0)==n; //так как побитовые операции обрезают целую часть, воспользуемся оператором побитового или с 0
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
  let arr = [];
  for (let i=2; i<=20; i=i+2){
    arr.push(i);
  }
  return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
  return (n==1)? 1 : n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
  return n ? n*factorial(n-1) : 1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n<1 && n!=0 )         // Если степень отрицательная или число меньше 0
    {
      n = (n>0)? 1/n : 0;
    };
    return n && !(n & (n - 1)); // степени в 2 виде всегда содержат 1 единицу и нули, поэтому,
}               // только в этом случае с предыдущим значением будет давать 0 скобка (n&(n-1))

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
  let a = b = 1; // 1 и 2 значения
  let c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
