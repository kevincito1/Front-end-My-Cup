import {formMain, formContainer2, formStepText, formTitleText, emailInput, formBtnSumit} from './styleLogin.css'


export function LoginPagePassword () {
  const showPagePassword = document.getElementById("app")

 const html = `
<main>
<section class="${formMain}">
  <article class="${formContainer2}">
    <p class="${formStepText}">STEP 2</p>

    <h2 class="${formTitleText}">Enter your email to paswword</h2>

    <form action="" id="formPassword">
      <input type="password" name="password" class="${emailInput}" placeholder="paswword" id="passwordInput"> 
      
      <button type="submit" class="${formBtnSumit}">continue</button>
    </form>
  </article>
</section>
</main>
`;
const logic = () =>{

const saludoRecuperado = localStorage.getItem("email");

const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', {
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
            console.log('Token:', responseData.token); // Almacena el token si es necesario
            // Aquí puedes almacenar el mensaje en una variable si lo necesitas
            return message;
        } else {
            console.log('Error message:', responseData.message);
            // Aquí puedes almacenar el mensaje de error en una variable si lo necesitas
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

showPagePassword.innerHTML = `
${html}
`

return {
  html,
  logic,
}
}