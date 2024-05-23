import { navigateTo } from "../../Router";
import { menu, navbar } from "./dashboard_layout.css";
import { navigationBar } from "../navigation-bar/navigationBar";



export function DashboardLayout(pageContent, logic, navbarData){
    const app = document.getElementById('app');

    pathLinks =[
        {href: '/dashboard', name: 'Home'},
        {href: '/dashboard/register', name: 'Register'},
        {href: '/dashboard/signUp', name: 'Sign Up'},
        {href: '/dashboard/news', name: 'News'},
        {href: '/dashboard/createTournament', name: 'Create Tournament'}
    ]

    navbarData = {
        matches: './dasboard',
        tournaments: './dasboard',
        news: '/dashboard/news',
        aboutUs: './dasboard'

    }

    app.innerHTML = `
    <nav class="${navbar}">
      <div class="${menu}">
        ${navigationBar(navbarData)}
      </div>
      <div>
        ${pageContent}
      </div>
    </nav>
    `;
    logic();

    pathLinks.forEach(({href})=>{
        document.getElementById(href).addEventListener('click', ()=>{
            navigateTo(href);
        });
    });

}