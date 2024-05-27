import {
  formMain,
  formContainer,
  formStepText,
  formTitleText,
  emailInput,
  formSpanText,
  formBtnSumit,
  formInfoText,
} from "./styleLogin.css";

import {usersArray} from '../register/register'


 export const LoginPageEmail = `
<main>
  <section class="${formMain}">
    <article class="${formContainer}">
      <p class="${formStepText}">STEP 1</p>

      <h2 class="${formTitleText}">Enter your email to continue</h2>

      <p class="${formInfoText}">
        You need to sign in to MyCup with your MyCup account. If you do
        not have one, you will receive instructions to create one.
      </p>

      <form action="" id="formEmail">
        <input type="email" name="emailinput" class="${emailInput}" placeholder="Email" id="emailInput"> 
        <span class="${formSpanText}" id = "formSpanText"></span>
        <button type="submit" class="${formBtnSumit}">continue</button>
      </form>
    </article>
  </section>
</main>

`;
  const logic = () => {
    document.addEventListener('DOMContentLoaded', () => {
   
      const form = document.getElementById('formEmail');
      
      
      form.addEventListener('submit', (event) => {
          
          event.preventDefault();        
          
          const userEmailVerification = document.getElementById('emailInput').value;
          for(let i=0; i<= usersArray.length; i++) {
            if(userEmailVerification === usersArray[i].email){
              console.log('Email encontrado')
            }          
          }          
      });
  });
  }
  
logic()


  


