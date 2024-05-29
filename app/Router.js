
import {routes} from './routes';

export function Router (){
    const path = window.location.pathname;

    const publicRoute = routes.public.find(routes => routes.path === path);
    const privateRoute = routes.private.find(routes => routes.path === path);

    if(publicRoute){
        publicRoute.page();
        return
    }

    if(privateRoute){
        privateRoute.page();
        return
    }
    navigateTo('/notFound')

}

export function navigateTo(path){
    window.history.pushState({},"", window.location.origin + path);
    Router();
}