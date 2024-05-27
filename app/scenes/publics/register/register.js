
import {
    formMain,
    formContainer,
    formStepText,
    formTitleText,
    emailInput,
    formSpanText,
    formBtnSumit,
  } from "./styleRegister.css";
  
import { navigateTo } from "../../../Router";

  export function ShowRegisterPage(){
    const $renderPage = document.getElementById("app")
    const sceneRegister = `
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
            <button type="submit" class="${formBtnSumit}" id="sendUserLogged">continue</button>
          </form>
        </article>
      </section>
    </main>  
    `;
  
    $renderPage.innerHTML = `
    ${sceneRegister}
    `

    const $sendUserLogged = document.getElementById("sendUserLogged")
    $sendUserLogged.addEventListener('click',(e)=>{
      e.preventDefault();
      navigateTo('/userLogged')
    })

  }
  




