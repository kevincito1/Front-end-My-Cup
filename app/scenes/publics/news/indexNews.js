import {
  mainNews,
  mainNewsText,
  additionalImages,
  otherNews,
  otherNewsItem,
  mainContent,
  publishDespegar,
  publishTrivago,
  publishDunkin,
  publishWendys
} from "./styleNews.css";

import globalStyles from "../../../styles/globalStyles.css";

import kobe from "./assetsNews/SPORT.png";
import publish1 from "./assetsNews/despegar-2.png";
import publish2 from "./assetsNews/trivago.png";
import publish3 from "./assetsNews/dunking.jpg";
import publish4 from "./assetsNews/Wendys-Adds-Swiss-Jr-Bacon-Cheeseburger-to-4-for-4-Meal.jpg";
import canelo from "./assetsNews/canelomelo.jpeg";
import linda from "./assetsNews/linda.caicedo.jpeg";
import real from "./assetsNews/realmadrid.jpeg";
import luis from "./assetsNews/luisenrique.jpeg";

export const newsPage = `
    <div class="container">
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Matches</a></li>
                    <li><a href="#">States</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section class="${mainNews}">
                    <div class="${mainContent}">
                        <img src="${kobe}" alt="Kobe Bryant" class="main-image">
                        <div class="${mainNewsText}">
                            <h2>NBA</h2>
                            <h3>Aniversario del fallecimiento de Kobe, sus fans lo recuerdan</h3>
                            <p>Bryant es el cuarto máximo anotador de la historia de la NBA, competición que ganó en cinco ocasiones. En su palmarés también cuenta con dos oros olímpicos, además de incontables reconocimientos y récords.</p>
                        </div>
                    </div>                    
                    <div class="${additionalImages}">
                        <img src="${publish1}" class="${publishDespegar} "alt="Additional Image 1">
                        <img src="${publish2}" class="${publishTrivago} "alt="Additional Image 2">
                        <img src="${publish3}" class="${publishDunkin} "alt="Additional Image 3">
                        <img src="${publish4}" class="${publishWendys} "alt="Additional Image 4">
                    </div>                
            </section>
            <section class="${otherNews}">
                <div class="${otherNewsItem}">
                    <img src="${canelo}" alt="Boxing">
                    <h3>BOX</h3>
                    <p>Canelo duerme a su oponente</p>
                </div>
                <div class="${otherNewsItem}">
                    <img src="${linda}" alt="Soccer Goal">
                    <h3>FUTBOL</h3>
                    <p>Gol imposible</p>
                </div>
                <div class="${otherNewsItem}">
                    <img src="${real}" alt="Real Madrid">
                    <h3>FUTBOL</h3>
                    <p>El Madrid dominante</p>
                </div>
                <div class="${otherNewsItem}">
                    <img src="${luis}" alt="Soccer Coach">
                    <h3>FUTBOL</h3>
                    <p>El mejor DT de Europa</p>
                </div>
            </section>
        </main>
    </div>
`;
