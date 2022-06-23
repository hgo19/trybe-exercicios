let primeiraCaixa = document.getElementById('header-container');
primeiraCaixa.style.color = 'black';
primeiraCaixa.style.backgroundColor = 'darkolivegreen';


let contents = document.getElementsByTagName('section');
    for (let index = 0; index < contents.length; index += 1){
        contents[index].style.marginTop = '2px';
    }


let emergencyBoxes = document.getElementsByClassName('emergency-tasks');
    for (let index = 0; index < emergencyBoxes.length; index += 1){
        emergencyBoxes[index].style.backgroundColor = 'darkgreen';
    };

let noEmergencyBoxes = document.getElementsByClassName('no-emergency-tasks');
    for (let index in noEmergencyBoxes){
        noEmergencyBoxes[index].style.backgroundColor = 'darkkhaki';
    }


