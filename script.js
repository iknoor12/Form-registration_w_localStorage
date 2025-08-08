const body = document.querySelector('body');

const style = document.createElement('style');
style.textContent=`
    body {
        text-align: center;
    }
`;
document.head.appendChild(style);


// HEADING
let heading = document.createElement('h1');
heading.textContent = 'User Registration Form';


let form = document.createElement('form');


// NAME
let label1 = document.createElement('label');
label1.setAttribute('for', 'name');
label1.textContent='Name: ';

let input1 = document.createElement('input');
input1.setAttribute('name', 'Username');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Enter your name ');
label1.appendChild(input1);


// AGE
let label2 = document.createElement('label');
label2.setAttribute('for', 'age');
label2.textContent='Age: ';

let input2 = document.createElement('input');
input2.setAttribute('name', 'Age');
input2.setAttribute('type', 'number');
input2.setAttribute('placeholder', 'Minimum 18 yrs. ');
label2.appendChild(input2);


// E-MAIL
let label3 = document.createElement('label');
label3.setAttribute('for', 'e-mail');
label3.textContent='E-mail: ';

let input3 = document.createElement('input');
input3.setAttribute('name', 'Email');
input3.setAttribute('type', 'email');
input3.setAttribute('placeholder', 'Write email..');
label3.appendChild(input3);


// GENDER
let label4 = document.createElement('label');
label4.setAttribute('for', 'gender');
label4.textContent='Gender: ';

let input4 = document.createElement('select');
input4.setAttribute('placeholder', 'Select Gender ');
input4.setAttribute('name', 'Gender');

label4.appendChild(input4);


// CITY
let label5 = document.createElement('label');
label5.setAttribute('for', 'city');
label5.textContent='City: ';

let input5 = document.createElement('input');
input5.setAttribute('name', 'City');
input5.setAttribute('type', 'dropdown');
input5.setAttribute('placeholder', 'Select your city')
label5.appendChild(input5);


// PASSWORD
let label6 = document.createElement('label');
label6.setAttribute('for', 'password');
label6.textContent='Password: ';

let input6 = document.createElement('input');
input6.setAttribute('name', 'Pass');
input6.setAttribute('type', 'password');
input6.setAttribute('placeholder', 'At least 8 characters password');
label6.appendChild(input6);


// BUTTON
let submitBtn = document.createElement('button');
submitBtn.textContent='Submit';


body.append(heading, form, label1, label2, label3, label4, label5, label6, submitBtn);