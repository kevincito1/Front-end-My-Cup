import {container, sidebar, userInfo, userIcon, userText,logout, menu, menuItem, icon, mainContent, header, teams, team } from './styleGamePLaces.css'

export const gamePLacesPage = `
<body>
    <div class="${container}">
        <div class="${sidebar}">
            <div class="${userInfo}">
                <div class="${userIcon}">👤</div>
                <div class="${userText}">
                    <span>User</span>
                    <a href="#" class="${logout}">Log out</a>
                </div>
            </div>
            <div class="${menu}">
                <a href="#" class="${menuItem}"><div class="${icon}">🏆</div>Tournament Register</a>
                <a href="#" class="${menuItem}"><div class="${icon}">👥</div>Team Register</a>
                <a href="#" class="${menuItem}"><div class="${icon}">⚽</div>Player Register</a>
                <a href="#" class="${menuItem}"><div class="${icon}">📍</div>Game Places</a>
                <a href="#" class="${menuItem}"><div class="${icon}">🏅</div>My Tournaments</a>
            </div>
        </div>
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
</body>
`