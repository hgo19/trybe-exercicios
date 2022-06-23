function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  //////////////////////// Exercicio 1

  let listOfDays = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function toAddDays (array){
    for (let numbers = 0; numbers < array.length; numbers += 1){
        let daysNumber = array[numbers];
        let daysNumberList = document.createElement('li');
        daysNumberList.className = 'day';
        daysNumberList.innerHTML = daysNumber;

        
        if (daysNumber === 24 | daysNumber === 31){
            daysNumberList.classList.add('holiday');
        } else if (daysNumber === 25){
            daysNumberList.classList.add('friday', 'holiday');
        } else if (daysNumber === 4 | daysNumber === 11 | daysNumber === 18){
            daysNumberList.classList.add('friday');
        }

        listOfDays.appendChild(daysNumberList);
    }};

  toAddDays(dezDaysList);


 //////////////////////// Exercicio 2

let theButton = document.querySelector('.buttons-container');
function holidays(string){
    let myButton = document.createElement('button');
    myButton.id = 'btn-holiday';
    myButton.innerHTML = string;
    theButton.appendChild(myButton);
  }

  holidays('Feriados');


 //////////////////////// Exercicio 3

function whenIsHoliday(){
    let holidayButton = document.querySelector('#btn-holiday');
    let myHolidays = document.getElementsByClassName('holiday');
    let oldBackgroundColor = 'rgb(238,238,238)';
    let newColor = 'darkgreen';
    let oldLetterColor = '#777';
    let newLetterColor = 'white';

    holidayButton.addEventListener('click', function(){
    for (let elements = 0; elements < myHolidays.length; elements += 1){
        if (myHolidays[elements].style.backgroundColor === newColor && myHolidays[elements].style.color === newLetterColor){
        myHolidays[elements].style.backgroundColor = oldBackgroundColor;
        myHolidays[elements].style.color = oldLetterColor;
        } else {
            myHolidays[elements].style.backgroundColor = newColor;
            myHolidays[elements].style.color = newLetterColor;
        };
    };
});
};

whenIsHoliday();


//////////////////////// Exercicio 4

function fridays(string){
    let button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = string;
    theButton.appendChild(button);
};

fridays('Sexta-feira');


//////////////////////// Exercicio 5

function whenIsFriday(array){
    let fridayButton = document.querySelector('#btn-friday');
    let myFridays = document.querySelectorAll('.friday');
    let happiness = 'Sexta-feira';
    
    fridayButton.addEventListener('click', function(){
        for (let index = 0; index < myFridays.length; index += 1){
            // let dayNumber = myFridays[index].innerHTML;
            if (myFridays[index].innerHTML !== happiness){
                myFridays[index].innerHTML = happiness;
            } else {
                // myFridays[index].innerHTML = dayNumber;
                myFridays[index].innerHTML = array[index];
            };
        };
    });
};

let dezFridays = [ 4, 11, 18, 25 ];
whenIsFriday(dezFridays);


//////////////////////// Exercicio 6

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function dayMouseAction(){
    let myDays = document.querySelector('#days');
    myDays.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '25px';
        event.target.style.fontWeight = 'bold';
    })

    myDays.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
};

dayMouseAction();


//////////////////////// Exercicio 7

let myTasks = document.querySelector('.my-tasks')

function oneMoreTask(string){
    let anotherTask = document.createElement('span');
    anotherTask.innerHTML = string;
    myTasks.appendChild(anotherTask);
};

oneMoreTask('Lateral Rodinei');

//////////////////////// Exercicio 8

function taskSubtitle(string){
    let createTask = document.createElement('div');
    createTask.className = 'task';
    createTask.style.backgroundColor = string;
    myTasks.appendChild(createTask);
};

taskSubtitle('red');

//////////////////////// Exercicio 9

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

//////////////////////// Exercicio 10

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();