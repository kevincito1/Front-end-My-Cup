import {mainContent,h2, form, label, input, gender, button, select } from './styleTeamRegister.css'

export function ShowTeamRegister(){
    const $renderPage = document.getElementById('app')
    const sceneTeamRegister = `
    <div class="${mainContent}">
        <h2 class="${h2}">Register New Team</h2>
        <form class="${form}">
            <label for="team-name" class="${label}">Name:</label>
            <input type="text" id="team-name" name="team-name" placeholder="Insert Team Name" class="${input}">

            <label for="category" class="${label}">Category:</label>
            <select id="category" name="category" class="${select}">
                <option value="sub15">Sub 15</option>
                <option value="sub20">Sub 20</option>
                <option value="senior">Senior</option>
            </select>

            <label for="gender" class="${label}">Gender:</label>
            <div class="${gender}">
                <input type="radio" id="male" name="gender" value="M" class="${input}">
                <label for="male" class="${label}">M</label>
                <input type="radio" id="female" name="gender" value="F" class="${input}">
                <label for="female" class="${label}">F</label>
            </div>

            <label for="sport" class="${label}">Sport:</label>
            <select id="sport" name="sport" class="${select}">
                <option value="soccer">Soccer</option>
                <option value="basketball">Basketball</option>
            </select>

            <label for="logo" class="${label}">Logo:</label>
            <input type="file" id="logo" name="logo">

            <button type="submit" class="${button}">Import</button>
        </form>
    </div>
    `

    $renderPage.innerHTML=`
    ${sceneTeamRegister}
    `
}