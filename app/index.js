
import {sceneHome} from "./scenes/publics/homePage/indexHome"
import { newsPage } from "./scenes/publics/news/indexNews"
import {loggedPage} from "./scenes/privates/playerRegister/indexPlayerRegisterLogged"
import {gamePLacesPage} from "./scenes/privates/gamePLaces/indexGamePLaces"
import {LoginPageEmail} from "./scenes/publics/login/indexLoginPageEmail"
// import {LoginPagePassword} from "./scenes/privates/login/indexLoginPagePassword"
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

const {html: loginHtmlEmail, logic: loginLogic} = LoginPageEmail()

page.innerHTML = `
${loginHtmlEmail}
`
loginLogic()

// const {html: loginHtmlPassword, logic: loginLogicPassword} = LoginPagePassword()

// page.innerHTML = `
// ${loginHtmlPassword}
// `
// loginLogicPassword()

// page.innerHTML = `
// ${tournamentRegisterPage}
// `

// import { App } from './app';

// document.addEventListener('DOMContentLoaded', App);