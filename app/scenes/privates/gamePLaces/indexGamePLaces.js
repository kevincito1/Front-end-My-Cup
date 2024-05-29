import {container, mainContent, header, teams, team } from "./styleGamePLaces.css";

import { navigateTo } from "../../../Router";

export function ShowGamePLaces(){
    const $renderPage = document.getElementById("app")
    const sceneGamePLaces = `
    
        <div class="${container}">
            <div class="${mainContent}">
                <div class="${header}">Choose your favorite court:</div>
                <div class="${teams}">
                    <div class="${team}">Sabaneta</div>
                    <div class="${team}">La Estrella</div>
                    <div class="${team}">Envigado</div>
                    <div class="${team}">Medellin</div>
                    <div class="${team}">Itagui</div>
                    <div class="${team}">Bello</div>
                </div>
            </div>
        </div>
    `
    $renderPage.innerHTML = `
    ${sceneGamePLaces}
    `
    const $sendHome = document.getElementById("sendHome")
    $sendHome.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/');
    });

    const $sendTournament = document.getElementById("sendTournament")
    $sendTournament.addEventListener('click',(e)=>{
    e.preventDefault();
    navigateTo('/tournametRegister');
  });

}


