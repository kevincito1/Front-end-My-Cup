import {container, sidebar, userInfo, userIcon, userText,logout, menu, menuItem, icon, mainContent, header, teams, team } from './styleUserRegisterLogged.css'

import { navigateTo } from '../../../Router'

export function ShowUserLoggedPage(){
    const $renderPage = document.getElementById("app")
    const sceneLoggedPage = `
    <div class="${container}">
        <div class="${sidebar}">
            <div class="${userInfo}">
                <div class="${userIcon}">👤</div>
                <div class="${userText}">
                    <span>User</span>
                    <a href="#" class="${logout}" id="sendHome">Log out</a>
                </div>
            </div>
            <div class="${menu}">
                <a href="#" class="${menuItem}" id="sendTournament">
                    <div class="${icon}">🏆</div>
                    <span>Tournament Register</span>
                </a>
                <a href="#" class="${menuItem}" id="sendTeams">
                    <div class="${icon}">👥</div>
                    <span>Team Register</span>
                </a>
                <a href="#" class="${menuItem}" id="sendPlayers">
                    <div class="${icon}">⚽</div>
                    <span>Player Register</span>
                </a>
                <a href="#" class="${menuItem}" id="sendPlaces">
                    <div class="${icon}">📍</div>
                    <span>Game Places</span>
                </a>
                <a href="#" class="${menuItem}">
                    <div class="${icon}">🏅</div>
                    <span>My Tournaments</span>
                </a>
            </div>
        </div>
        <div class="${mainContent}">
            <div class="${header}">
                <span>Choose Team For Add Player</span>
            </div>
            <div class="${teams}">
                <div class="${team}">Team 1</div>
                <div class="${team}">Team 2</div>
                <div class="${team}">Team 3</div>
                <div class="${team}">Team 4</div>
                <div class="${team}">Team 5</div>
                <div class="${team}">Team 6</div>
            </div>
        </div>
    </div>
`
$renderPage.innerHTML = `
${sceneLoggedPage}
`
const $sendTournament = document.getElementById("sendTournament")
$sendTournament.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/tournametRegister');
  });

    const $sendPlaces = document.getElementById("sendPlaces")
    $sendPlaces.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/gamePlaces');
  });

  const $sendHome = document.getElementById("sendHome")
    $sendHome.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/');
    });

    const $sendPlayerRegister = document.getElementById("sendPlayers")
    $sendPlayerRegister.addEventListener('click',(e)=>{
        e.preventDefault();
        navigateTo('/playerRegister')
    });

    const $sendTeamsRegister = document.getElementById("sendTeams")
    $sendTeamsRegister.addEventListener('click',(e)=>{
        e.preventDefault();
        navigateTo('/teamRegister')
    });


}


