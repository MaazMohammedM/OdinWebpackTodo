import '../Styles/project.css'
import { createProjectDialog } from '../Components/createProjectButton';
import { projectGrid } from '../Components/projectGrid';
export const projectPage = (parent)=>{
    const projectSection = document.createElement('section');
    const projectSecHeader = document.createElement('div');
    const projectBody = document.createElement('div');
    projectBody.id = 'projectBody'
    projectSection.classList.add('projectBody');
    projectSecHeader.classList.add('projectHeader');
    const projectLabel = document.createElement('h1');
    projectLabel.innerText = 'My Projects'
    projectSecHeader.append(projectLabel);
    createProjectDialog(projectSecHeader)
    projectSection.append(projectSecHeader);
    projectSection.append(projectBody);
    parent.append(projectSection);
    projectGrid();
}