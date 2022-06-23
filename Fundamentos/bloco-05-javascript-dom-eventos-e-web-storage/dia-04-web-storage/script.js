let navBar = document.getElementsByTagName('li');
let backgroundButton = navBar[0];
let textColorButton = navBar[1];
let fontTypeButton = navBar[2];
let fontSizeButton = navBar[3];
let letterSpacingButton = navBar[4];


function setBackgroundColor(){
    backgroundButton.addEventListener('click', function(){
        let body = document.body;
        let myColors = ['#F2E9E4', '#C9ADA7', '#9A8C98', '#4A4E69', '#22223B']
        let myNewColor = body.style.backgroundColor;
        if (myNewColor === body.style.backgroundColor){
            myNewColor = myColors[0];
         }
        //   else if (myNewColor === myColors[0]){
        //     myNewColor = myColors[1];
        // } else if (myNewColor === myColors[1]){
        //     myNewColor = myColors[2];
        // } else if (myNewColor === myColors[2]){
        //     myNewColor = myColors[3];
        // } else if (myNewColor === myColors[3]){
        //     myNewColor === body.style.backgroundColor;
        // }
        return body.style.backgroundColor = myNewColor;
    });

    backgroundButton.addEventListener('click', function(){
        let body = document.body;
        let myColors = ['#F2E9E4', '#C9ADA7', '#9A8C98', '#4A4E69', '#22223B']
        let myNewColor = body.style.backgroundColor;
        if (myNewColor === myColors[0]){
            myNewColor = myColors[1]
        }
        return body.style.backgroundColor = myNewColor;
    })
};

setBackgroundColor();

// function setFontType(){
//     fontTypeButton.addEventListener('click', function(){
//         let myTextFont = document.querySelector('.text');
        
//     })
// }