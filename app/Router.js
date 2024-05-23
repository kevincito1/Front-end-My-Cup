import {routes} from "./helpers/routes";

const API_URL = 'http://localhost:3000/api/login'

async function verifyToken(token){
try{
    const repsonse = await fetch(API_URL,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if(!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    const data = await response.json();
    return [data.valid, data];
} catch(error){
    console.error('Token verification failed:', error);
    return [false, {message: error.message}];
}
}

export function navigateTo(path){
    window.history.pushState({}, '',window.location.origin + path);
    Router()
}

async function checkAuth(path,params){
    const token = localStorage.getItem('token');
}

if(token){
    const [isValid] = await verifyToken(token);
    if(isValid){
        if(path==='/login' || path==='/'){
            navigateTo('/dasboard');
            return;
        }
        const privateRoute = routes.private.find((r)=> r.path===path);
        if(privateRoute){
            const {pageContent, logic} = privateRoute.component(params);
            DashboardLayout(pageContent, logic)
            return;
        }else{
            navigateTo('/dashboard');
        }

    }else{
        navigateTo('/login');
    }
   
}else{
    navigateTo('/login');
}

export async function Router(){
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);

    if(path==='/login'){
        const token = localStorage.getItem('token');
        if(token){
            const [isValid] = await verifyToken(token);
            if(isValid){
                navigateTo('/dashboard');
                return;
            }
        }
    }

    const publicRoute = routes.public.find((r) => r.path === path);
const privateRoute = routes.private.find((r) => r.path ===path);

if(publicRoute){
    publicRoute.component(params);
}else if(privateRoute){
checkAuth(path, params);
}else{
    console.warn('Ruta no encontrada:', path);
    navigateTo('/login');
}
}

window.onpopstate = Router;
