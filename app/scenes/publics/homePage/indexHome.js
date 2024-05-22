import {button, myCup, navbar, menu, main, title, text, arrow, create, tournaments, logoCup, tables, currentTournamentsTable, trophy, events, aboutUs, contact, features, logoAboutUs, logoAbout, titles, red, add, redes, questions} from "./styleHomePage.css"
//import homePage from "./assets/images/mockup_home_page.jpg"
import logo from "./assetsHomePage/logo.png"
import trophy1 from "./assetsHomePage/trophy7.png"
import trophy2 from "./assetsHomePage/trophy.png"
import wpp from "./assetsHomePage/wpp.png"
import fb from "./assetsHomePage/fb.png"
import email from "./assetsHomePage/email.png"
import x from "./assetsHomePage/x.png"
//import loader from "./assets/images/loader.svg"




export const showLandingPage =`
<body>
<header>
      <div>
        <img id="logo" src="${logo}" alt="logoMyCup" />
        <h2 class="${myCup}">My Cup</h2>
      </div>
      <div>
        <button class="${button}">SignUp→</button>
        <button class="${button}">Register→</button>
      </div>
    </header>

    <nav class="${navbar}">
      <div class="${menu}">
        <a href="#matches">Matches</a>
        <a href="#tournaments">Tournaments</a>
        <a href="#stats">Stats</a>
        <a href="#news">News</a>
        <a href="">FAQ</a>
        <a href="#aboutUs">About Us</a>
      </div>
    </nav>

    <main>
      <div class="${main}">
        <h1 id="${title}">
          Create you own team. <br />
          Play every game.
        </h1>
        <p id="${text}">
          Get to play and live a memorable experience with your team. What are
          you waiting for this great adventure and winning rewards and bonuses.
        </p>
        <button id="${arrow}">→</button>
        <button id="${create}">Create you tournament now</button>
      </div>
      <aside class="${add}">
        <div>
          
        </div>
      </aside>
    </main>

    <div id="">
      <!-- Partidos -->
    </div>

    <div id="${tournaments}">
      <table class="${tournaments}">
        <tr>
          <td><img class="${logoCup}" src="${logo}" alt="" /><br />My Cup</td>
          <td>Current Tournaments</td>
          <td>Upcoming Events</td>
        </tr>
      </table>
    </div>

    <div class="${tables}">
      <table class="${currentTournamentsTable}">
        <tr>
          <td>Logo</td>
          <td>Tournament Name</td>
          <td>Creator</td>
          <td># Teams</td>
        </tr>
        <tr>
          <td><img class="${trophy}" src="${trophy1}" alt="Trophy" /></td>
          <td>Leagues Cup</td>
          <td>Jhon Doe</td>
          <td>8</td>
        </tr>
        <tr>
          <td><img class="${trophy}" src="${trophy2}" alt="" /></td>
          <td>Champions Medellin</td>
          <td>Carl Jhonson</td>
          <td>16</td>
        </tr>
      </table>
      <table class="${events}">
        <tr>
          <td>Tournament Name</td>
          <td>Match Hour</td>
        </tr>
        <tr>
          <td>Champions Medellin</td>
          <td>18:00</td>
        </tr>
        <tr>
          <td>Champions Medellin</td>
          <td>19:00</td>
        </tr>
        <tr>
          <td>Leagues Cup</td>
          <td>21:00</td>
        </tr>
      </table>
    </div>

    <div id="${aboutUs}">
      <h2>About Us:</h2>
      <p>
        We are driven by a passion for sports and a mission to elevate the
        management of sports tournaments to new heights. Our robust and
        user-friendly platform provides comprehensive solutions for organizing
        competitions, real-time score tracking, and detailed statistical
        analysis from small local torunaments to large international events.
      </p>
      <div class="${contact}">
        <ul class="${features}">
          <h2>Features:</h2>
          <li>Calendar Management.</li>
          <br />
          <li>Real-time Results Updates.</li>
          <br />
          <li>Statistical Analysis.</li>
          <br />
          <li>Effective Communication.</li>
          <br />
          <li>Customization.</li>
          <br />
          <li>Friendly Platform.</li>
          <br />
        </ul>
        <div>
          <div class="${questions}">
            <div id="${logoAboutUs}">
              <img id="${logoAbout}" src="${logo}" alt="" />
              <h2 class="${myCup}">My Cup</h2>
            </div>
            <div class="${titles}">
              <h2 class="${titles}">Questions?</h2>
              <h2 class="${titles}">Contact Us:</h2>
              <div class="${redes}">
                <img class="${red}" src="${wpp}" alt="" />
                <img class="${red}" src="${email}" alt="" />
                <img class="${red}" src="${fb}" alt="" />
                <img class="r${red}" src="${x}" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
`

