import style from "./style.css";
import homePage from "./assets/images/mockup_home_page.jpg"
import logo from "./assets/images/logo.jpg"


//document.getElementById("app").innerHTML=`<img src="${homePage}" alt="img home page">`

const d = document,
    $app=d.getElementById("app"),
    $h1=d.createElement("h1"),
    $img=d.createElement("img"),
    $logo=d.createElement("img")

$h1.textContent="My Cup";
$logo.src=logo;
$img.src=homePage;

$app.appendChild($h1)
$app.appendChild($img)
$app.appendChild($logo)
