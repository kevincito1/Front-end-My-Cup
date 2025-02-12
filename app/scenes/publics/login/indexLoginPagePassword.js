import {formMain, formContainer2, formStepText, formTitleText, emailInput, formBtnSumit} from './styleLogin.css'
import { navigateTo } from '../../../Router';


export function ShowPageLoginPassword(){
  const $renderPage = document.getElementById("app")
  const sceneLoginPassword = `
  <main>
  <section class="${formMain}">
    <article class="${formContainer2}">
      <p class="${formStepText}">STEP 2</p>
  
      <h2 class="${formTitleText}">Enter your email to password</h2>
  
      <form action="" id="formPassword">
        <input type="password" name="password" class="${emailInput}" placeholder="password" id="passwordInput">      
        <button type="submit" class="${formBtnSumit}" id="sendUserLogged">continue</button>
      </form>
    </article>
  </section>
  </main>
  `;
  const logic = () =>{
  
  const saludoRecuperado = localStorage.getItem("email");
  
  const login = async (email, password) => {
      try {
          const response = await fetch('https://mycupback.loca.lt/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password })
          });
  
          const responseData = await response.json();
          if (response.ok) {
              const message = responseData.message;
              console.log('Message:', message);
              console.log('Token:', responseData.token); // Store the token 
              // store the message 

              return message;
          } else {
              console.log('Error message:', responseData.message);
              // Store the error message
              return responseData.message;
          }
      } catch (error) {
          console.error('Error:', error);
          return 'An error occurred';
      }
  };
  
  document.addEventListener("DOMContentLoaded", (event) => {
  
    document.getElementById("formPassword").addEventListener("submit", function (e) {
      e.preventDefault()
      const password = document.getElementById("passwordInput").value
      const span = document.getElementById("formSpanText")
      console.log(password ,saludoRecuperado)
  
      login(saludoRecuperado,password)
        .then(data => {
          console.log('Success:', data);
          localStorage.setItem("token", data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  
  
    })
  })
  }
  
  $renderPage.innerHTML = `
  ${sceneLoginPassword}
  `

  const $sendUserLogged = document.getElementById("sendUserLogged")
  $sendUserLogged.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/userLogged')
  })
  
  return {
    sceneLoginPassword,
    logic,
  }
}

 
