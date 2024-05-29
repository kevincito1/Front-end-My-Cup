import { tournamentRegister, tournament, title, form1, form2, form3, form4, form5, form6, form7, btn, button, btnsection, containerbtn, Addbtn, listaArticulos, container, childdiv, card,BtnAddteam } from './styleTournamentRegister.css'

document.addEventListener("DOMContentLoaded", function () {
    var mostrarBtn = document.getElementById("mostrarBtn");
    var ventanaEmergente = document.getElementById("tournamentRegisterventanaemergente");
    var cerrarBtn = document.getElementById("cerrarBtn");
    var form = document.getElementById("tournamentform");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Capturar valores del formulario
        const name = document.getElementById("nameTournament").value;
        const category = document.getElementById("category").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const sport = document.getElementById("sport").value;
        const city = document.getElementById("city").value;
        const numTeams = document.getElementById("numTeams").value;
        const awards = document.getElementById("awards").value;

        // Crear nuevo objeto
        const nuevoArticulo = {
            name: name,
            numero: numTeams + " equipos",
            deporte: sport,
            category: category,
            gender: gender,
            city: city,
            awards: awards
        };

        // Agregar nuevo objeto al array
        Articulos.push(nuevoArticulo);

        // Volver a renderizar la lista de artículos
        displayArticles();

        // Ocultar la ventana emergente
        ventanaEmergente.style.display = "none";

        // Resetear el formulario
        form.reset();
    });

    AddBtn(mostrarBtn, ventanaEmergente);
    RemoveWindow(cerrarBtn, ventanaEmergente);
    displayArticles();

    const container = document.getElementById('container');
    const addDivBtn = document.getElementById('addDivBtn');
    let divCounter = 0;

    addDivBtn.addEventListener('click', () => {
        createChildDiv();
    });

    function createChildDiv() {
        const childDiv = document.createElement('div');
        childDiv.classList.add(childdiv);
        childDiv.draggable = true;
        childDiv.id = `div-${divCounter++}`;
        childDiv.style.left = '0px'; // Initialize position
        childDiv.style.top = '0px';  // Initialize position

        const input = document.createElement('input');
        input.type = 'text';
        input.value = `EQUIPO ${divCounter}`;

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('close-btn');
        closeButton.addEventListener('click', () => {
            childDiv.remove();
        });

        childDiv.appendChild(input);
        childDiv.appendChild(closeButton);
        container.appendChild(childDiv);

        childDiv.addEventListener('dragstart', dragStart);
        childDiv.addEventListener('dragend', dragEnd);
    }

    let draggedElement = null;

    function dragStart(event) {
        draggedElement = this;
        setTimeout(() => this.style.display = 'none', 0);
    }

    function dragEnd(event) {
        this.style.display = 'block';
        draggedElement = null;
    }

    container.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    container.addEventListener('drop', (event) => {
        event.preventDefault();
        if (draggedElement) {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left - draggedElement.offsetWidth / 2;
            const y = event.clientY - rect.top - draggedElement.offsetHeight / 2;
            draggedElement.style.left = `${x}px`;
            draggedElement.style.top = `${y}px`;
        }
    });
});

let Articulos = [
    {
        "name": "TorneoPepito",
        "numero": "8 equipos",
        "deporte": "futbol",
        "category": ""
    },
    {
        "name": "TorneoJuanito",
        "numero": "16 equipos",
        "deporte": "basketball",
    }
    // Puedes agregar más artículos aquí
];

function AddBtn(btnmostrar, ventanamostrar) {
    // Mostrar la ventana emergente cuando se hace clic en el botón
    btnmostrar.addEventListener("click", function () {
        ventanamostrar.style.display = "block";
    });
}

function RemoveWindow(btncerrar, ventanacerrar) {
    // Ocultar la ventana emergente cuando se hace clic en el botón de cerrar
    btncerrar.addEventListener("click", function () {
        ventanacerrar.style.display = "none";
    });
}

function displayArticles() {
    const listaArticulos = document.getElementById('listaarticulos');
    listaArticulos.innerHTML = ''; // Limpiar la lista antes de agregar los artículos

    Articulos.forEach(articulo => {
        const card = document.createElement('div');
        card.className = "card";

        const cardContent = document.createElement('div');
        cardContent.className = 'cardContent';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'cardTitle';
        cardTitle.textContent = articulo.name;

        const cardText = document.createElement('p');
        cardText.className = 'cardText';
        cardText.textContent = `Número de equipos: ${articulo.numero}`;

        const cardText2 = document.createElement('p');
        cardText2.className = 'cardText';
        cardText2.textContent = `Deporte: ${articulo.deporte}`;

        var btneat = document.createElement("button");
        btneat.style.width = "100px";
        btneat.style.height = "50px";
        btneat.textContent = "TOURNAMENT TEAMS";
        var ventanaEmergente1 = document.getElementById("ventanaEmergente1");
        var cerrarBtn1 = document.getElementById("cerrarBtn1");

        AddBtn(btneat, ventanaEmergente1);
        RemoveWindow(cerrarBtn1, ventanaEmergente1);

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardText2);
        card.appendChild(cardContent);
        card.appendChild(btneat);

        listaArticulos.appendChild(card);

        card.style.backgroundColor = "#a80b0b";
        card.style.border = "1px solid #000000";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.padding = "16px";
        card.style.width = "300px";

        // .cardContent styles
        cardContent.style.padding = "10px";

        // .cardTitle styles
        cardTitle.style.fontSize = "1.25em";
        cardTitle.style.marginBottom = "10px";

        // .cardText styles
        cardText.style.fontSize = "1em";
        cardText.style.marginBottom = "5px";
    });
}
export function ShowTournamentPage(){

    const $renderPage = document.getElementById("app")

    const sceneTournamentRegisterPage = `
    <div class="${tournamentRegister}">
                
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

