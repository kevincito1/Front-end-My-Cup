
import {showLandingPage} from "./scenes/publics/homePage/indexHome"
import { newsPage } from "./scenes/publics/news/indexNews"
import {loggedPage} from "./scenes/privates/playerRegister/indexPlayerRegisterLogged"
import {gamePLacesPage} from "./scenes/privates/gamePLaces/indexGamePLaces"
import {LoginPage} from "./scenes/privates/login/LoginPage"


const page = document.getElementById("app")


// page.innerHTML = `
// ${newsPage}`

// page.innerHTML = `
// ${showLandingPage}`

// page.innerHTML = `
// ${loggedPage}
// `

// page.innerHTML = `
// ${gamePLacesPage}
// `

const {html: loginHtml, logic: loginLogic} = LoginPage()

page.innerHTML = `
${loginHtml}
`
loginLogic()