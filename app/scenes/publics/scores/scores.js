import {styles} from 'style.css';
import {matches} from '../../../helpers/pairings/index.js';

export function ScoreScene() {
    const score = documentgetElementById('test');

    const showScore =`    
    <div class="${styles.result}">
        <div class="${styles.homeTeam}">
            <img src="" alt="" class="${styles.shield_home_team1}>
            <h1></h1>
        </div>
        <div class="${styles.goals}">
            <h2></h2>
        </div>
        <div class="${styles.awayTeam}">
            <h1></h1>
            <img src="" alt="" class="${styles.shield_away_team1}">                
        </div>
    </div>
    `
    score.innerHTML = `
    ${showScore}

    
`
}

