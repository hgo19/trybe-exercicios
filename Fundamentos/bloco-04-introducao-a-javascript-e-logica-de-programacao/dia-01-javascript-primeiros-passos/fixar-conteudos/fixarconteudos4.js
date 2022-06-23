
///////////////////////// OPERADOR AND

const currentHour = 18;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir!";
}
    else if (currentHour >= 18 && currentHour < 22) {
        message = "Rango da noite, vamos jantar! :D";
    }

    else if (currentHour >= 14 && currentHour < 18) {
        message = "Vamos fazer um bolo pro café da tarde?";
    }

    else if (currentHour < 14 && currentHour > 11) {
        message = "Hora do almoço!!!"
    }

    else {
        message = "Hmm, cheiro de café recém passado..."
    }

    console.log(message);


    /////////////////////////// OPERADOR OR

let weekDay = "sábado";

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe! >:D")
}   else {
    console.log("FINALMENTE, descanso merecido! UwU")
}