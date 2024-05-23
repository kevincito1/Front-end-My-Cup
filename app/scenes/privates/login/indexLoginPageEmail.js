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

export function LoginPageEmail() {
  const html = `
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
    const getdata = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/login");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const respJson = await res.json();
        return respJson;
      } catch (error) {
        console.error("error", error);
      }
    };

    let arrayemails = [];
    const obtener = async (array) => {
      const datausers = await getdata();
      datausers.forEach((element) => {
        element.forEach((element2) => {
          array.push(element2.email);
        });
      });
    };

    obtener(arrayemails);
    console.log(arrayemails);

    let user = [];
    const obteneruser = async (usuario, email) => {
      const datausers = await getdata();
      datausers.forEach((element) => {
        element.forEach((element2) => {
          if (element2.email === email) {
            usuario.push(element2);
          }
        });
      });
    };

    async function obtenerYMostrarpassword() {
      await obteneruser(user, "peitoperez@gmail.com");
      console.log(user[0].password);
    }

    document
      .getElementById("formEmail")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("emailInput").value;
        const span = document.getElementById("formSpanText");

        if (arrayemails.includes(email)) {
          localStorage.setItem("email", email);
          window.location = "index2.html";
        } else {
          span.innerText = "El usuario no ha sido registrado";
        }
      });
  };

  return {
    html,
    logic,
  }
}
