
import {sceneHome} from "./scenes/publics/homePage/indexHome"
import { newsPage } from "./scenes/publics/news/indexNews"
import {loggedPage} from "./scenes/privates/playerRegister/indexPlayerRegisterLogged"
import {gamePLacesPage} from "./scenes/privates/gamePLaces/indexGamePLaces"
import {LoginPageEmail} from "./scenes/publics/login/indexLoginPageEmail"
import {RegisterPage} from "./scenes/publics/register/register"
import {LoginPagePassword} from "./scenes/publics/login/indexLoginPagePassword"
// import {tournamentRegisterPage} from "./scenes/privates/tournamentRegister/indexTournamentRegister"


 const page = document.getElementById("app")


// page.innerHTML = `
// ${newsPage}`

// page.innerHTML = `
// ${sceneHome}`

// page.innerHTML = `
// ${loggedPage}
// `

// page.innerHTML = `
// ${gamePLacesPage}
// `    

// page.innerHTML = `
// ${LoginPageEmail}
// `

page.innerHTML = `
${LoginPagePassword}
`


// page.innerHTML = `
// ${tournamentRegisterPage}
// `

// page.innerHTML = `
// ${RegisterPage}
// `




