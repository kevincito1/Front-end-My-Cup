import {styles} from '../../../helpers/pairings/style.css';
import {matches} from '../../../helpers/pairings/index.js';

export function ScoreScene() {
    const score = documentgetElementById('test');

    const showScore =`
    <div class="${styles.container}">
    <div class="${styles.result}">
        <div class="${styles.homeTeam}">
            <img src="/src/assets/images/shields_teams/atlanta-nacional-logo.svg" alt="Nacional" class="${styles.shield_home_team1}">
            <h1 id></h1>
        </div>
        <div class="${styles.goals}">
            <h2>${matches.homeGoals} - ${matches.awayGoals}</h2>
        </div>
        <div class="${styles.awayTeam}">
            <h1>${matches.awayTeam}</h1>
            <img src="/src/assets/images/shields_teams/america-de-cali-logo.svg" alt="america-de-cali-logo " class="${styles.shield_away_team1}">                
        </div>
    </div>
    <div class="${styles.result}">
        <div class="${styles.homeTeam}"></div>
        <div class="${styles.goals}"></div>
        <div class="${styles.awayTeam}"></div>
    </div>
    <div class="${styles.result}">
        <div class="${styles.homeTeam}"></div>
        <div class="${styles.goals}"></div>
        <div class="${styles.awayTeam}"></div>
    </div>
    <div class="${styles.result}">
        <div class="${styles.homeTeam}"></div>
        <div class="${styles.goals}"></div>
        <div class="${styles.awayTeam}"></div>
    </div>
</div>
    `

    fetch("localhost:taya")
        .then(e => e.json())
        .then(data => {
            const $h1 = document.getElementById("h1")
            
        })

    score.innerHTML = `
    ${showScore}
`
}

