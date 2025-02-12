import { ShowHomePage } from "./scenes/publics/homePage/indexHome"
import { ShowRegisterPage } from "./scenes/publics/register/register"
import { ShowPageLoginEmail } from "./scenes/publics/login/indexLoginPageEmail"
import { ShowPageLoginPassword } from "./scenes/publics/login/indexLoginPagePassword"
import { ShowNewsPage } from "./scenes/publics/news/indexNews"
import { ShowGamePLaces } from "./scenes/privates/gamePLaces/indexGamePLaces"
import { ShowUserLoggedPage } from './scenes/privates/userRegister/indexUserRegisterLogged'
import { ShowNotFound } from "./scenes/publics/notFound"
import { ShowTournamentPage } from "./scenes/privates/tournamentRegister/indexTournamentRegister"
import { ShowPLayerRegister } from "./scenes/privates/playerRegister/indexPlayerRegister"
import { ShowTeamRegister } from "./scenes/privates/teamRegister/teamRegister"


export const routes = {
    public:[
        {path: '/', page: ShowHomePage },
        {path: '/register', page: ShowRegisterPage},
        {path: '/loginEmail', page: ShowPageLoginEmail},
        {path: '/loginPassword', page: ShowPageLoginPassword},
        {path: '/news', page: ShowNewsPage },
        {path: '/notFound', page:ShowNotFound }

    ],
    private:[
        {path: '/gamePlaces', page: ShowGamePLaces},
        {path: '/userLogged', page: ShowUserLoggedPage },
        {path: '/tournametRegister', page: ShowTournamentPage},
        {path: '/playerRegister', page: ShowPLayerRegister },
        {path: '/teamRegister', page: ShowTeamRegister}
    ]
}