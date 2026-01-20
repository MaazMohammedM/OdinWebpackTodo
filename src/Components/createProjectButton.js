
import { createProject, getProject } from '../Stores/projectStore';
import '../Styles/project.css'
import { projectGrid } from './projectGrid';


export const createProjectDialog = (parent) => {


        const dialogElem = document.createElement('dialog');
        const dialogDiv = document.createElement('div');
        dialogDiv.classList.add('dialogDiv')

        const dialogDivHeader = document.createElement('div');
         dialogDivHeader.classList.add('dialogDivHeader')

        const paragraph = document.createElement('h2');
        paragraph.textContent = 'Create Project';
        const closeButton = document.createElement('button');
        closeButton.textContent = '❌';

        //Form

        const form = document.createElement('form');
        const label = document.createElement('label');
        label.textContent = "Project Name";
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        const createProjectBtn = document.createElement('button');
        createProjectBtn.textContent = "Create Project"

        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            if(nameInput.value === ''){
                alert('Enter Project Name');
                return
            }else{
                createProject(nameInput.value);
                projectGrid();
                dialogElem.close();
                nameInput.value = '';
            }
        })

        
        parent.append(dialogElem);

        dialogElem.append(dialogDiv);
        dialogDiv.append(dialogDivHeader);
        dialogElem.append(form);
        dialogDivHeader.appendChild(paragraph);
        dialogDivHeader.appendChild(closeButton);
        form.appendChild(label);
        form.appendChild(nameInput);
        form.appendChild(createProjectBtn);

        dialogElem.addEventListener('click', (e) => {
            if (e.target === dialogElem) {
                dialogElem.close()
            }
        })

        closeButton.addEventListener('click', () => {
            dialogElem.close();
            nameInput.value = '';
        })

      

    



    const button = document.createElement('button');
    button.classList.add('createProjectButton');
    button.innerText = "Create Empty Project"
    button.addEventListener('click', () => {
        dialogElem.showModal();
    })
    parent.append(button);
}