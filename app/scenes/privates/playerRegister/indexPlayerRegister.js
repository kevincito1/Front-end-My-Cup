import { form, li, label, input, select, button, body, h2, ul } from './stylePlayerRegister.css';

export function ShowPLayerRegister (){
    const $renderPage = document.getElementById('app');
    const scenePlayerRegister = `
    <div id="formPlayerRegister" class="${body}">
        <form action="" class="${form}">
            <h2 class="${h2}">Player Information</h2>
            <ul class="${ul}">
                <li class="${li}">
                    <label for="name" class="${label}">Name</label>
                    <input type="text" name="name" id="name" placeholder="Insert Player Name" size="12px" class="${input}">
                </li>
                <li class="${li}">
                    <label for="age" class="${label}">Age</label>
                    <input type="number" name="age" id="age" max="100" min="12" placeholder="Insert Player Age" class="${input}">
                </li>
                <li class="${li}">
                    <label for="gender" class="${label}">Gender</label>
                    <select name="gender" id="gender" class="${select}">
                        <option selected disabled value="disabled">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </li>
                <li class="${li}">
                    <label for="sport" class="${label}">Sport</label>
                    <select name="sport" id="sport" class="${select}">
                        <option selected disabled value="disabled">Select</option>
                        <option value="male">Football</option>
                        <option value="female">Basketball</option>
                    </select>
                </li>
            </ul>
            <button type="submit" class="${button}">Send</button>
        </form>
    </div>
    `

    $renderPage.innerHTML = `
    ${scenePlayerRegister}
    `
}