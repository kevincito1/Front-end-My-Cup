import {Router} from './Router'

export function App () {
    const app = document.getElementById('app')
    if(!app){
        throw new Error('Page no Loader')
    }
    Router();
}