
import {
    formMain,
    formContainer,
    formStepText,
    formTitleText,
    emailInput,
    formSpanText,
    formBtnSumit,
  } from "./styleRegister.css";

    export const RegisterPage = `
  <main>
    <section class="${formMain}">
      <article class="${formContainer}">
        <p class="${formStepText}">Register</p>
  
        <h2 class="${formTitleText}">Enter your info for registrate</h2>
  
        <form action="" id="formEmail">
            <input type="text" name="nameinput" class="${emailInput}" placeholder="Name" id="nameInput">
            <input type="email" name="emailinput" class="${emailInput}" placeholder="Email" id="emailInput">
            <input type="password" name="passwordinput" class="${emailInput}" placeholder="Password" id="passwordInput">
            <input type="number" name="numberinput" class="${emailInput}" placeholder="Telephone" id="telephoneInput">
          <span class="${formSpanText}" id = "formSpanText"></span>
          <button type="submit" class="${formBtnSumit}">continue</button>
        </form>
      </article>
    </section>
  </main>  
  `;


export let usersArray = [{
    name: 'Kevin',
    email: 'kevin@gmail.com',
    password: 'kevin123',
    telephone: 32064863
},
{
    name: 'Jafet',
    email: 'jafet@gmail.com',
    password: 'jafet123',
    telephone: 32064863
},
{
    name: 'Felipe',
    email: 'felipe@gmail.com',
    password: 'felipe123',
    telephone: 32064863
},
{
    name: 'Jhonier',
    email: 'jhonier@gmail.com',
    password: 'jhonier123',
    telephone: 32064863
},
{
    name: 'Robinson',
    email: 'robinson@gmail.com',
    password: 'robinson123',
    telephone: 32064863
}
];

export const logicRegister = () => {

document.addEventListener('DOMContentLoaded', () => {
   
    const form = document.getElementById('formEmail');
    
    
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();        
        
        const nameValue = document.getElementById('nameInput').value;
        const emailValue = document.getElementById('emailInput').value;
        const passwordValue = document.getElementById('passwordInput').value;
        const telephoneValue = document.getElementById('telephoneInput').value;        
        
        const userObject = {
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            telephone: telephoneValue
        };
                
        usersArray.push(userObject);
        console.log(usersArray);       
        
        
    });
});
}

logicRegister();




