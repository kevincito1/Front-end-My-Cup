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

import { navigateTo } from "../../../Router";

export function ShowPageLoginEmail() {
  const $renderPage = document.getElementById("app")
  const sceneLoginEmail = `
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
          <button type="submit" class="${formBtnSumit}" id="sendBtn">continue</button>
        </form>
      </article>
    </section>
  </main>
  `;
    const logic = () => {
  
  
  
      document
        .getElementById("formEmail")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const emailImp = document.getElementById("emailInput").value;
          const span = document.getElementById("formSpanText");
          const email = encodeURIComponent(emailImp);
          let url = `http://127.0.0.1:3000/api/login/${email}`
  
          fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => response.json())
            .then(data =>{
              if(data.data == true){
                localStorage.setItem('email', emailImp);
              }
            })
            .catch(error => console.error('Error:', error));
  
            
  
        });
    };
  
    $renderPage.innerHTML = `
    ${sceneLoginEmail}
    `
    const $sendBtn = document.getElementById("sendBtn");
    $sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/loginPassword");
  });

  
    return {
      sceneLoginEmail,
      logic,
    }

   
    
}

 




