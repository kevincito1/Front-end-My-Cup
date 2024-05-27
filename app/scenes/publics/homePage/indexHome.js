import {
  header,
  logocontainer,
  containerlogo,
  titlelogo,
  navbar,
  ulnavbar,
  elementul,
  containerbuttons,
  buttonnav,
  heroprincipaltext1,
  heroprincipaltext2,
  herosecondarytext,
  buttonsinghero1,
  aboutsection,
  midcontainer1,
  midcontainer2,
  containerimgabout,
  imgabout,
  titleabout,
  textabout,
  team,
  containerteam,
  servicessection,
  servicessectiontitle,
  card,
  title,
  emptybar,
  filledbar,
  circle,
  bar,
  videocontainer,
  videooverlay,
  backgroundvideo,
  imgcontainercard,
  title2,
} from "./styleHomePage.css";

import myvideo from "./assetsHomePage/video.mp4";
import imageabout from "./assetsHomePage/arseny-togulev-xjnSIF9keGY-unsplash.jpg";
import imagekevin from "./assetsHomePage/kevin.jpeg";
import imageJhonier from "./assetsHomePage/jhonier.jpeg";
import imageFelipe from "./assetsHomePage/felipe.jpeg";
import { navigateTo } from "../../../Router";
import { routes } from "../../../routes"



export function ShowHomePage() {
  const $renderPage = document.getElementById("app");
  const sceneHome = `
    <main>
    <header class="${header}">
      <div class ="${logocontainer}">
        <div class="${containerlogo}">
          <h2 class="${titlelogo}">My Cup</h2>
        </div>
      </div>
      <div class="${navbar}">
        <ul class="${ulnavbar}">
          <li class="${elementul}"><a href="" >ABOUT</a></li>
          <li class="${elementul}"><a href="">SERVICES</a></li>
          <li class="${elementul}"><a href="" id="sendNews">NEWS</a></li>
          <li class="${elementul}"><a href="">TEAM</a></li>
          <li class="${elementul}"><a href="">CONTACT</a></li>
        </ul>
      </div>
      <div class="${containerbuttons}">
        <button class="${buttonnav}" id="logInBtn">Login</button>
        <button class="${buttonnav}" id="signUpBtn">Sign Up</button>
      </div>
      <h2 class="${heroprincipaltext1}">CREATE YOUR OWN TEAM</h2>
      <h2 class="${heroprincipaltext2}">PLAY EVERY GAME</h2>
      <p class="${herosecondarytext}">
        Get to play and live a memorable experience with your team. What are you waiting for this great adventure and winning rewards and bonuses
      </p>
      <button class="${buttonsinghero1}" id="sendBtn">Create your tournament now</button>
    </header>
    <div class="${aboutsection}">
        <div class="${midcontainer1}">
          <div class="${containerimgabout}">
            <img class="${imgabout}" src="${imageabout}" alt="About Us">
          </div>
        </div>
        <div class="${midcontainer2}">
          <h2 class="${titleabout}">ABOUT US</h2>
          <p class="${textabout}">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
          </p>
        </div>
      </div>
      <div class="${servicessection}">
        <h2 class ="${servicessectiontitle}">SERVICES</h2>
        <div class="${videocontainer}">
          <video autoplay muted loop class="${backgroundvideo}">
            <source src="${myvideo}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class ="${team}">
        <div class="${containerteam}">
        <div class="${card}">
        <h3 class="${title}">KEVIN RODAS</h3>
        <h3 id="${title2}">DEVELOPER FS</h3>
        <div class="${imgcontainercard}">
          <img src="${imagekevin}" alt="About Us">
        </div>
        <div class="${bar}">
          <div class="${emptybar}"></div>
          <div class="${filledbar}"></div>
        </div>
  
        <div class="${circle}">
          <circle class="stroke" cx="60" cy="60" r="50"/>
        </div>
  
      </div>
        <div class="${card}">
          <h3 class="${title}">KEVIN RODAS</h3>
          <h3 id="${title2}">DEVELOPER FS</h3>
          <div class="${imgcontainercard}">
            <img src="${imagekevin}" alt="About Us">
          </div>
          <div class="${bar}">
            <div class="${emptybar}"></div>
            <div class="${filledbar}"></div>
          </div>
  
          <div class="${circle}">
            <circle class="stroke" cx="60" cy="60" r="50"/>
          </div>
  
        </div>
        <div class="${card}">
        <h3 class="${title}">JHONIER</h3>
        <h3 id="${title2}">DEVELOPER FS</h3>
        <div class="${imgcontainercard}">
          <img src="${imageJhonier}" alt="About Us">
        </div>
        <div class="${bar}">
          <div class="${emptybar}"></div>
          <div class="${filledbar}"></div>
        </div>
  
        <div class="${circle}">
          <circle class="stroke" cx="60" cy="60" r="50"/>
        </div>
  
      </div>
      <div class="${card}">
        <h3 class="${title}">FELIPE</h3>
        <h3 id="${title2}">DEVELOPER FS</h3>
        <div class="${imgcontainercard}">
          <img src="${imageFelipe}" alt="About Us">
        </div>
        <div class="${bar}">
        <div class="${emptybar}"></div>
        <div class="${filledbar}"></div>
      </div>
  
      <div class="${circle}">
        <circle class="stroke" cx="60" cy="60" r="50"/>
      </div>
  
    </div>
  <div class="${card}">
      <h3 class="${title}">KEVIN RODAS</h3>
      <h3 id="${title2}">DEVELOPER FS</h3>
      <div class="${imgcontainercard}">
        <img src="${imagekevin}" alt="About Us">
      </div>
      <div class="${bar}">
        <div class="${emptybar}"></div>
        <div class="${filledbar}"></div>
      </div>
      <div class="${circle}">
        <circle class="stroke" cx="60" cy="60" r="50"/>
      </div>
  </div>
  
  <div class="${card}">
  <h3 class="${title}">KEVIN RODAS</h3>
  <h3 id="${title2}">DEVELOPER FS</h3>
  <div class="${imgcontainercard}">
  <img src="${imagekevin}" alt="About Us">
  </div>
  <div class="${bar}">
    <div class="${emptybar}"></div>
    <div class="${filledbar}"></div>
  </div>
  
  <div class="${circle}">
    <circle class="stroke" cx="60" cy="60" r="50"/>
  </div>
  
  
  </div>
      </div>  
    </div>
  </main>
    `;

  $renderPage.innerHTML = `
    ${sceneHome}
    `;

  const $loginBtn = document.getElementById("logInBtn");
  $loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo("/loginEmail");
  });

  const $signUpBtn = document.getElementById("signUpBtn")
  $signUpBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  navigateTo('/register');
});

  const $sendBtn = document.getElementById("sendBtn")
  $sendBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  navigateTo('/register');
});

const $sendNews = document.getElementById("sendNews")
  $sendNews.addEventListener('click',(e)=>{
  e.preventDefault();
  navigateTo('/news');
});


}
