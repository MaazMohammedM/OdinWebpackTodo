
import { handleRoute } from "..";
import { delteProjectById, getProject } from "../Stores/projectStore";
import '../Styles/project.css'

export const projectGrid =()=>{
    let grid = document.getElementById('projectBody');
    grid.innerHTML = '';

    if(getProject().length === 0){
        grid.innerHTML = '';
        grid.style.display = 'flex';
        let container = document.createElement('div');
        container.classList.add('emptyContaier')
        let p = document.createElement('p');
        container.append(p);
        p.textContent = "Empty Projects";
        grid.append(container);
    }
    getProject().map((data)=>{
        let projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        let projectContainer = document.createElement('div');
        let projectName = document.createElement('h1');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Project';
        deleteBtn.addEventListener('click',()=>{
            delteProjectById(data.id)
            projectGrid()
        })
        let routeBtn = document.createElement('button');
        routeBtn.textContent = 'View Project'
        projectContainer.append(routeBtn,deleteBtn)
        projectCard.append(projectName,projectContainer);
        projectName.innerText = data.name;
        grid.append(projectCard);
        routeBtn.addEventListener('click',()=>{
            history.pushState(data,'',`/projects/${data.id}`)
            handleRoute();
        })
    })
}