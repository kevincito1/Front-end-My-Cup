import {formMain, formContainer2, formStepText, formTitleText, emailInput, formBtnSumit} from './styleLogin.css'
import {usersArray} from '../register/register'




 export const LoginPagePassword = `
<main>
<section class="${formMain}">
  <article class="${formContainer2}">
    <p class="${formStepText}">STEP 2</p>

    <h2 class="${formTitleText}">Enter your email to password</h2>

    <form action="" id="formPassword">
      <input type="password" name="password" class="${emailInput}" placeholder="password" id="passwordInput">      
      <button type="submit" class="${formBtnSumit}">continue</button>
    </form>
  </article>
</section>
</main>
`;

let trust;

const logic = () =>{
  document.addEventListener('DOMContentLoaded', () => {
   
    const form = document.getElementById('formPassword');    
    
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();        
        
        const userPasswordVerification = document.getElementById('passwordInput').value;

        for(let i=0; i<= usersArray.length; i++) {
          if(userPasswordVerification === usersArray[i].password){
            trust = true
            return
          }       
        }
          if(trust=== true){
            console.log('access granted')
          }else{
            console.log('access denied')
          }         
    });
});
  
}

logic()