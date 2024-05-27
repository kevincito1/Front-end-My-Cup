import {tournament, title, form1, form2, form3, form4, form5, form6, form7, btn, button} from './styleTournamentRegister.css'

export function ShowTournamentPage(){

    const $renderPage = document.getElementById("app")

    const sceneTournamentRegisterPage = `
    <div class="tournamentRegister">
                
    <form class="${tournament}">
        <h1 class="${title}">Create New Tournament Register</h1>
        <div class="${form1}">
            <label for="nameTournament">Name of tournament:</label>
            <input type="text" id="nameTournament" name="nameTournament" placeholder="Enter your tournament name" required><br>
        </div>
        
        <div class="${form2}">
                <label for="category">Category:</label>
            <select id="category" name="category" required>
                <option value="">Select a category</option>
                <option value="sub15">Sub 15</option>
                <option value="sub20">Sub 20</option>
                <option value="professional">Professional</option>
                <option value="senior">Senior</option>
            </select><br>
        </div>
        
        <div class="${form3}">
            <label for="gender">Gender:</label>
            <input type="radio" id="masculine" name="gender" value="masculine" required>
            <label for="masculine">Masculine</label>
            <input type="radio" id="femenine" name="gender" value="femenine">
            <label for="femenine">Femenine</label><br>
        </div>
        
        <div class="${form4}">
                <label for="sport">Sport:</label>
            <select name="sport" id="sport" required>
                <option value="">Select a sport</option>
                <option value="soccer">Soccer</option>
                <option value="basketball">Basketball</option>
            </select><br>
        </div>
        
        <div class="${form5}">
                <label for="city">City:</label>
            <select id="city" name="city" required>
                <option value="">Select a City</option>
                <option value="Medellin">Medellín</option>
                <option value="Envigado">Envigado</option>
                <option value="Itagui">Itagüí</option>
                <option value="Sabaneta">Sabaneta</option>
                <option value="Bello">Bello</option>
                <option value="LaEstrella">La Estrella</option>
            </select><br>
        </div>
        
        <div class="${form7}">
                <label for="numTeams">Number of teams:</label>
            <select name="numTeams" id="numTeams" required>
                <option value="">Select a number of teams</option>
                <option value="eight">8 teams</option>
                <option value="sixteen">16 teams</option>
                <option value="thirtytwo">32 teams</option>
            </select><br>
        </div>
    
        <div class="${form6}">
            <label for="awards">Awards:</label>
            <input type="text" id="awards" name="awards" placeholder="Enter awards of your tournament" required><br>
        </div>
        
        <button class="${btn}">
            <div class="${button}">
                <span class="text">Register</span>
                <span class="text">Register</span>
            </div>
        </button>
    </form>
    </div>
    `

    $renderPage.innerHTML=`
    ${sceneTournamentRegisterPage}
    `    
}

