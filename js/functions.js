function checkStringLength(line, number) {
  return line.length <= number;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом

function isPolindrom(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
};

// function isPolindrom(str) {
//   const len = Math.floor(str.length / 2);
//   for (let i = 0; i < len; i++)
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   return true;
// }

isPolindrom('топот');
isPolindrom('ДовОд');
isPolindrom('Кекс');
isPolindrom('Лёша на полке клопа нашёл');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

function isNumber(str) {
  return parseInt(str.replace(/[^\d]/g, ''));
}
isNumber('2023 год');
isNumber('ECMAScript 2022');
isNumber('1 кефир, 0.5 батона');
isNumber('а я томат');
//когда вместо строки приходит число:
const findNumbers = (value) => {
  const inputValue = String(value);
  const digits = inputValue.replace(/[^0-9]/g, '');
  if (digits.length !== 0) {
    return parseInt(digits, 10);
  }
  return NaN;
};
findNumbers(2023);
findNumbers(-1);
findNumbers(1.5);
//Функция, которая принимает три параметра

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}

myPadStart('1', 2, '0');
myPadStart('1', 4, '0');
myPadStart('q', 4, 'werty');
myPadStart('q', 4, 'we');
myPadStart('qwerty', 4, '0');
