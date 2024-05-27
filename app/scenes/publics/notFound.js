import {container,errorMessage, backHome} from './stylesNotFound.css'

export function ShowNotFound(){
    const $renderPage = document.getElementById("app")
    const sceneNotFound = `
    <div class="${container}">
        <div class="${errorMessage}">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>We are sorry, but the page you are looking for does not exist.</p>
            <a href="/" class="${backHome}">Back to home</a>
        </div>
    </div>
    `

    $renderPage.innerHTML = `
    ${sceneNotFound}
    `
}