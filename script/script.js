'use strict';

let money, time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", "");
   time = prompt("Введите дату в формате YYYY-MM-DD", "");

   while(isNaN(money) || money == '' || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "");
   }
}
start();



let appData = {
   cash: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
}; 

function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", '');
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
         && a != '' && b != '' && a.length < 50) {
         console.log('done');
         appData.expenses[a] = b;
      } else {
         console.log("bad result");
         i--;
      }
   }
   
}
chooseExpenses();

// appData.moneyPerDay = (appData.cash / 30).toFixed();
// alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");



function detectDayBudget() {
   appData.moneyPerDay = (appData.cash / 30).toFixed();
   alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();



function detectLevel() {
   if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
   } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
   } else {
      console.log("Произошла ошибка");
   }
}

detectLevel();

// if (appData.moneyPerDay < 100) {
//    console.log("Это минимальный уровень достатка!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//    console.log("Это средний уровень достатка!");
// } else if (appData.moneyPerDay > 2000) {
//    console.log("Это высокий уровень достатка!");
// } else {
//    console.log("Произошла ошибка");
// }



function checkSavings() {
   if (appData.savings == true){
      let save = +prompt('Какова сумма накоплений'),
         percent = +prompt('Какой процент?');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего процента:' + appData.monthIncome);
   }
}

checkSavings();

console.log(appData);


function chooseOptExpenses() {
      for (let i =1; i <= 3; i++) {
         let questionOptExpenses = prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = questionOptExpenses;
         console.log(appData.optionalExpenses);
   }
}
chooseOptExpenses();












// let i = 0;


// while (i < 2){
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//       b = prompt("Во сколько обойдется?", '');
//    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//       a != '' && b != '' && a.length < 50) {
//       console.log('done');
//       appData.expenses[a] = b;
//    } else {
//       console.log("bad result");
//       i--;
//    }
//    i++
// }

// let i = 0; 

// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt ("Во сколько обойдется?", "");
//       if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
//             console.log ("done");
//             appData.expenses[a] = b;
//       } else {
//          console.log("bad result");
//          i--;
//       }
//    i++
// }
// while (i < 2);





