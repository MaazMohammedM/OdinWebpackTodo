import './Styles/index.css'
import { projectPage } from './Pages/projectPage';
import { todoPage } from './Pages/todoPage';
import { loadStorage } from './Stores/projectStore';


export function handleRoute(){
const path = window.location.pathname;
root.innerHTML = '';
if(path === '/'){
    projectPage(root);
} else if(path.startsWith('/projects/')){
    const id = path.split('/')[2]
    todoPage(root,id);
}
}

loadStorage();
handleRoute();

window.addEventListener('popstate',handleRoute)





