const atleticoNacional = {
    name: 'Atlético Nacional',
    players: [
        { name: 'Aldair Quintana' },
        { name: 'Daniel Muñoz' },
        { name: 'Brayan Rovira' },
        { name: 'Emanuel Olivera' },
        { name: 'Yerson Mosquera' },
        { name: 'Baldomero Perlaza' },
        { name: 'Jarlan Barrera' },
        { name: 'Andrés Andrade' },
        { name: 'Yerson Candelo' },
        { name: 'Jefferson Duque' },
        { name: 'Neyder Moreno' }
    ]
};

const independienteMedellin = {
    name: 'Independiente Medellín',
    players: [
        { name: 'Andrés Mosquera' },
        { name: 'Juan Guillermo Arboleda' },
        { name: 'Juan David Mosquera' },
        { name: 'Yulián Gómez' },
        { name: 'Juan Carlos Díaz' },
        { name: 'Larry Angulo' },
        { name: 'Andrés Ricaurte' },
        { name: 'Yairo Moreno' },
        { name: 'Javier Reina' },
        { name: 'Andrés Cadavid' },
        { name: 'Leonardo Castro' }
    ]
};

const millonarios = {
    name: 'Millonarios',
    players: [
        { name: 'Wuilker Faríñez' },
        { name: 'Andrés Román' },
        { name: 'Matías de los Santos' },
        { name: 'Breiner Paz' },
        { name: 'Elvis Perlaza' },
        { name: 'Jhon Duque' },
        { name: 'David Silva' },
        { name: 'Santiago Montoya' },
        { name: 'Cristian Arango' },
        { name: 'Ayron del Valle' },
        { name: 'Hansel Zapata' }
    ]
};

const americaCali = {
    name: 'América de Cali',
    players: [
        { name: 'Joel Graterol' },
        { name: 'Cristian Arrieta' },
        { name: 'Marlon Torres' },
        { name: 'Kevin Andrade' },
        { name: 'Edwin Velasco' },
        { name: 'Carlos Sierra' },
        { name: 'Luis Paz' },
        { name: 'Yesus Cabrera' },
        { name: 'Duván Vergara' },
        { name: 'Adrián Ramos' },
        { name: 'John Arias' }
    ]
};

const junior = {
    name: 'Junior',
    players: [
        { name: 'Sebastián Viera' },
        { name: 'Marlon Piedrahita' },
        { name: 'Germán Mera' },
        { name: 'Dany Rosero' },
        { name: 'Gabriel Fuentes' },
        { name: 'Didier Moreno' },
        { name: 'Larry Vásquez' },
        { name: 'Fredy Hinestroza' },
        { name: 'Teófilo Gutiérrez' },
        { name: 'Carmelo Valencia' },
        { name: 'Miguel Borja' }
    ]
};

const santaFe = {
    name: 'Santa Fe',
    players: [
        { name: 'Leandro Castellanos' },
        { name: 'Carlos Arboleda' },
        { name: 'Jeisson Palacios' },
        { name: 'Fainer Torijano' },
        { name: 'Dairon Mosquera' },
        { name: 'Daniel Giraldo' },
        { name: 'Andrés Pérez' },
        { name: 'John Velásquez' },
        { name: 'Kelvin Osorio' },
        { name: 'Diego Valdés' },
        { name: 'Jorge Ramos' }
    ]
};

const deportivoCali = {
    name: 'Deportivo Cali',
    players: [
        { name: 'David González' },
        { name: 'Juan Camilo Angulo' },
        { name: 'Hernán Menosse' },
        { name: 'Eduard Caicedo' },
        { name: 'Darwin Andrade' },
        { name: 'Andrés Balanta' },
        { name: 'Jhojan Valencia' },
        { name: 'Deiber Caicedo' },
        { name: 'Agustín Palavecino' },
        { name: 'Ángelo Rodríguez' },
        { name: 'Harold Preciado' }
    ]
};

const onceCaldas = {
    name: 'Once Caldas',
    players: [
        { name: 'Gerardo Ortiz' },
        { name: 'David Gómez' },
        { name: 'Andrés Correa' },
        { name: 'Fáiner Torijano' },
        { name: 'Elvis Mosquera' },
        { name: 'Sebastián Guzmán' },
        { name: 'Robert Mejía' },
        { name: 'Harrison Otálvaro' },
        { name: 'Marcelino Carreazo' },
        { name: 'Mender García' },
        { name: 'David Lemos' }
    ]
};


// Array of teams
const teams = [atleticoNacional, independienteMedellin, millonarios, americaCali, junior, santaFe, deportivoCali, onceCaldas];

// Function to rotate teams
function rotateTeams(teams) {
    return teams.slice(1).concat(teams[0]);
}



// Function to assign goals randomly to players
function assignGoalsToPlayers(players, goals) {
    const goalsDistribution = players.map(player => ({ name: player.name, goals: 0 }));
    for (let i = 0; i < goals; i++) {
        const randomIndex = Math.floor(Math.random() * players.length);
        goalsDistribution[randomIndex].goals += 1;
    }
    return goalsDistribution;
}

// Function to generate matches with results and assign goals to players
function generateMatchesWithResultsAndGoals(teams) {
    const matches = [];
    let rotatedTeams = teams.slice();
    for (let i = 0; i < teams.length - 1; i++) {
        rotatedTeams = rotateTeams(rotatedTeams);
        for (let j = 0; j < teams.length; j++) {
            const homeTeam = teams[j];
            const awayTeam = rotatedTeams[j];
            const goalsHome = Math.floor(Math.random() * 6); // Random number between 0 and 5
            const goalsAway = Math.floor(Math.random() * 6); // Random number between 0 and 5

            const homeGoalsDistribution = assignGoalsToPlayers(homeTeam.players, goalsHome);
            const awayGoalsDistribution = assignGoalsToPlayers(awayTeam.players, goalsAway);

            matches.push({
                homeTeam: homeTeam.name,
                awayTeam: awayTeam.name,
                homeGoals: goalsHome,
                awayGoals: goalsAway,
                homeGoalsDistribution: homeGoalsDistribution,
                awayGoalsDistribution: awayGoalsDistribution
            });
        }
    }
    return matches;
}

// Function to print matches with results and goals distribution
function printMatchesWithResultsAndGoals(matches) {
    matches.forEach((match, index) => {
        console.log(`Match ${index + 1}: ${match.homeTeam} ${match.homeGoals} - ${match.awayGoals} ${match.awayTeam}`);
        console.log(`  Goals for ${match.homeTeam}:`);
        match.homeGoalsDistribution.forEach(player => {
            if (player.goals > 0) {
                console.log(`    ${player.name}: ${player.goals}`);
            }
        });
        console.log(`  Goals for ${match.awayTeam}:`);
        match.awayGoalsDistribution.forEach(player => {
            if (player.goals > 0) {
                console.log(`    ${player.name}: ${player.goals}`);
            }
        });
    });
}

// Generate matches with results and assign goals to players
const matches = generateMatchesWithResultsAndGoals(teams);

// Print the matches with results and goals distribution
printMatchesWithResultsAndGoals(matches);

