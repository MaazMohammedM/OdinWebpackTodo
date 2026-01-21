import './Styles/index.css'
import { projectPage } from './Pages/projectPage';
import { todoPage } from './Pages/todoPage';
import { loadStorage } from './Stores/projectStore';


const root = document.getElementById('root');

const isProduction = process.env.NODE_ENV === 'production';

function getCurrentPath() {
  if (isProduction) {
    return window.location.hash.replace('#', '') || '/';
  }
  return window.location.pathname;
}

export function handleRoute() {
  const path = getCurrentPath();
  root.innerHTML = '';

  if (path === '/') {
    projectPage(root);
  } else if (path.startsWith('/projects/')) {
    const id = path.split('/')[2];
    todoPage(root, id);
  }
}

loadStorage();
handleRoute();

window.addEventListener('load', handleRoute);

if (process.env.NODE_ENV === 'production') {
  window.addEventListener('hashchange', handleRoute);
} else {
  window.addEventListener('popstate', handleRoute);
}





