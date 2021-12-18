// Задача: необхідно створити форму в якій буде 2 інпута для чисел і один селект для математичної операції(+, -,*, /). 
// По сабміту форми користувач має побачити результат.Результат має бути завжди цілим числом.Додай лейбли до полів вводу та анотації, щоб було інтуітивно зрозуміло що робити. 
// Завдання можеш оформити у Github та прислати нам посиланням на репозіторій або розшарити нам його за допомогою гуглдоку.

let numberFirst = document.getElementById("numberf").value;
let numberSecond = document.getElementById("numberc").value;
let numberFirstValue = parseFloat(numberFirst);
let numberSecondValue = parseFloat(numberSecond);
let result = document.getElementById("result_multi").textContent;
let result_Number = parseFloat(result);
const button = document.querySelector(".my-button");
let action  = document.getElementById('sample').value;
console.log(numberFirstValue)

   switch (action) {
   case "+":
        result = numberFirstValue + numberSecondValue;
        console.log(result);
      break
   case "-":
     result = numberFirstValue - numberSecondValue;
      break   
    case "*":
     result = numberFirstValue * numberSecondValue;
      break   
    case "/":
     result = numberFirstValue / numberSecondValue;
      break   
    }
    