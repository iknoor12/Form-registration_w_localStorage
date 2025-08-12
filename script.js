const body = document.querySelector('body');

const style = document.createElement('style');
style.textContent=`
    body {
        display: grid;
        gap: 1em;
        justify-content: center;
        justify-items: center;
        margin: 0;
        background-color: #fff7f4;
    }

    h1 {
        margin-top: 2em;
    }

    form {
        display: grid;
        gap: 2em;
        justify-content: center;
        border: 2px solid black;
        width: 20em;
        padding: 2em 1em;
        font-size: 1.4em;
        background-color: #e8ac9e;
        border-radius: 1em;
        box-shadow: 4px 4px 8px 5px rgba(182, 173, 173, 1);
    }

    input {
        font-size: 0.7em;
        padding: 0.4rem 0.7em;
        border-radius: 0.5em;
        background-color: #fff7f4;
    }

    #ageInput {
        margin-left: 0.6em;
    }

    .radiobtn {
        margin-left: 1em;
        margin-right: 0.7em;
        transform: scale(1.4);
    }

    #stateSelect {
        padding: 0.3rem 0.6rem;
        width: 13em;
        border-radius: 0.5em;
        margin-left: 0.5em;
        background-color: #fff7f4;
        font-size: 0.8em;
    }

    .submitDiv {
        display: flex;
        justify-content: center;
    }

    .pass {
        position: relative;
    }

    span {
        margin-left: -2em;
    }

    button {
        font-size: 1.2em;
        padding: 0.5rem;
        width: 40%;
        color: white;
        background-color: #bf7b78;
    }
`;
document.head.appendChild(style);


// HEADING
let heading = document.createElement('h1');
heading.textContent = 'User Registration Form';


let form = document.createElement('form');

// form.innerHTML=`<label for='Username'>Name</label>
// <input type='number'>`


// NAME
let label1 = document.createElement('label');
label1.setAttribute('for', 'name');
label1.textContent='Name: ';

let input1 = document.createElement('input');
input1.id='nameInput';
input1.setAttribute('name', 'Username');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Enter your name ');
input1.setAttribute('name', Math.random().toString(36).substring(2)); // to prevent the autofill of e-mail 
label1.appendChild(input1);



// AGE
let label2 = document.createElement('label');
label2.setAttribute('for', 'age');
label2.textContent='Age: ';

let input2 = document.createElement('input');
input2.id='ageInput';
input2.setAttribute('name', 'Age');
input2.setAttribute('min', '18');
input2.setAttribute('type', 'number');
input2.setAttribute('placeholder', 'Minimum 18 yrs. ');
label2.appendChild(input2);



// E-MAIL
let label3 = document.createElement('label');
label3.setAttribute('for', 'e-mail');
label3.textContent='E-mail: ';

let input3 = document.createElement('input');
input3.id='emailInput';
input3.setAttribute('name', 'Email');
input3.setAttribute('type', 'email');
input3.setAttribute('placeholder', 'Write email..');
label3.appendChild(input3);



// GENDER
let label4 = document.createElement('label');
label4.setAttribute('for', 'gender');
label4.textContent='Gender: ';

let inputM = document.createElement('input');
inputM.setAttribute('type', 'radio');
inputM.setAttribute('class', 'radiobtn');
inputM.setAttribute('name', 'Gender');
inputM.setAttribute('value', 'Male');

let labelM = document.createElement('label');
labelM.textContent='Male';

let inputF = document.createElement('input');
inputF.setAttribute('type', 'radio');
inputF.setAttribute('class', 'radiobtn');
inputF.setAttribute('name', 'Gender');
inputF.setAttribute('value', 'Female');

let labelF = document.createElement('label');
labelF.textContent='Female';

label4.append(inputM,labelM,inputF,labelF);



// STATE 
let label5 = document.createElement('label');
label5.setAttribute('for', 'state');
label5.textContent='State: ';

let input5 = document.createElement('select');
input5.setAttribute('name', 'State');
input5.setAttribute('id', 'stateSelect');
label5.appendChild(input5);

let option1 = document.createElement('option');
option1.setAttribute('value', 'select state');
option1.textContent='Select state';

let option2 = document.createElement('option');
option2.setAttribute('value', 'Punjab');
option2.textContent='Punjab';

let option3 = document.createElement('option');
option3.setAttribute('value', 'Delhi');
option3.textContent='Delhi';

let option4 = document.createElement('option');
option4.setAttribute('value', 'Mumbai');
option4.textContent='Mumbai';

let option5 = document.createElement('option');
option5.setAttribute('value', 'Rajasthan');
option5.textContent='Rajasthan';

let option6 = document.createElement('option');
option6.setAttribute('value', 'Gujurat');
option6.textContent='Gujurat';

let option7 = document.createElement('option');
option7.setAttribute('value', 'Himachal Pradesh');
option7.textContent='Himachal Pradesh';

let option8 = document.createElement('option');
option8.setAttribute('value', 'UttraPradesh');
option8.textContent='Uttar-Pradesh';

input5.append(option1,option2,option3,option4,option5,option6,option7,option8);



// PASSWORD
let label6 = document.createElement('label');
label6.setAttribute('for', 'password');
label6.classList.add('pass');
label6.textContent='Password: ';

let input6 = document.createElement('input');
input6.id='passfield';
input6.setAttribute('name', 'Pass');
input6.setAttribute('type', 'password');
input6.setAttribute('placeholder', 'Min 8-char password');


let icon = document.createElement('span');
icon.setAttribute('onclick', 'togglepassword()');
icon.textContent='👁️';

label6.append(input6,icon);


// BUTTON
let div1 = document.createElement('div');
div1.classList.add('submitDiv');

let submitBtn = document.createElement('button');
submitBtn.textContent='Submit';
div1.appendChild(submitBtn);

body.append(heading, form);
form.append(label1, label2, label3, label4, label5, label6, div1);



// FUNCTIONALITY

function togglepassword() {
  const passField = document.getElementById("passfield");

  if (passField.type === "password") {
    passField.type = "text"; 
  } else {
    passField.type = "password"; 
  }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.clear();
    alert('Form is submitted!');

    let formData = {};

    let inputs = this.querySelectorAll("input");

    inputs.forEach(input => {
        let key;

        if (input.type !== "radio") {
             if (input.placeholder.trim() === "Enter your name") {
                key = "Username";
            } else if (input.placeholder === "Enter your age") {
                key = "Age";
            } else if (input.placeholder === "Enter your email") {
                key = "Email";
            } else if (input.placeholder === "Enter your password") {
                key = "Pass";
            } else {
                key = input.name; // fallback
            }
            formData[key] = input.value;

        } else {
             if (input.checked) {
                key = "Gender";
                formData[key] = input.value;
            }   
        }
    });

    // Save the select dropdown (State)
    let stateSelect = this.querySelector("#stateSelect");
    formData[stateSelect.name] = stateSelect.value;

    // Save the whole object in localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    alert('saved in localstorage!');

});