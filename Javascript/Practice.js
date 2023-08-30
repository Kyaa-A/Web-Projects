// Tasks


/* 10. Rewrite with arrow function */

    // function ask(question, yes, no){
    //     if(confirm(question)) yes();
    //     else no();
    // }

    // ask(
    //     "Do you agree?",
    //     () => alert("You agreed."),
    //     () => alert("You canceled the execution.")
    // );

/* 9. Rewrite "if" into "Switch" */

// PROBLEM CODE

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// IF TO SWITCH

// let a = +prompt('a?', '');

// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

/* 8. Rewrite the "switch" into an "if" */

// PROBLEM CODE

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// SWITCH TO IF

// let browser = prompt("Which browswer are u going to use?");
// if(browser == "Edge"){
//     alert("You've got the Edge!");
// }else if(browser == "Chrome" 
//     || browser == "Firefox" 
//     || browser == "Safari" 
//     || browser == "Opera"){
//     alert("Okay we suport these browsers too");
// }else{
//     alert("We hope that this page looks ok!");
// }

/* 7. If and Else */

//     let user = prompt("Who's there?")
// if (user == "Admin"){
//     let pass = prompt("What is the password?");
//     if(pass == "TheMaster"){
//         alert("Welcome!");
//     }else if (pass == " "){
//         alert("Canceled");
//     }else{
//         alert("Wrong Password");
//     }
// } else if(user == "Cancel"){
//     alert("Canceled, Access Denied");
// } else {
//     alert("You aren't allowed");
// }


/* 6. Fixing the prompt */

// let a = +prompt("First number?");
// let b = +prompt("Second number?");

// alert(a + b);


/* 5. Ask for confirmation using if and else */

// let isConfirm = confirm("Is this okay?");
// if(isConfirm){
//     alert("Confirmed");
// }else{
//     alert("Cancelled")
// }


/* 4. A simple page asking a name and outputs it. */

// let askName = "";
// let name = prompt("What is your name?", askName);
// alert(`Your name is ${name}`)


/* 3. In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. */

// let name ="Asnari";
// let age = 19;
// alert(`Hi ${name} ur age is ${age}`)


/* 2. Giving the right name */

// let ourPlanet = "Earth";
// let currentVisitor = "John";


/* 1. Working with Variables */

// let admin;
// let name = "John";
// admin = name;
// alert(admin);

