import { delteTodotById, getProjectById, getProjecTodoById } from "../Stores/projectStore";
import {format} from 'date-fns'

export const todoGridFunc = (id) => {
    let project = getProjectById(id);
    let todoGrid = document.getElementById('todoGrid');
    todoGrid.innerHTML = '';

    if (getProjecTodoById(id).length === 0) {
        todoGrid.innerHTML = '';
        let p = document.createElement('p');
        p.textContent = "Empty Todos";
        todoGrid.append(p);
    } else {
        getProjecTodoById(id).map((data) => {
            let todoBody = document.createElement('div');
            todoBody.classList.add('todoCard');
            todoGrid.append(todoBody);
            let title = document.createElement('p');
            title.textContent = data.title;
            let description = document.createElement('p');
            description.textContent = data.description;
            let createdOn = document.createElement('p');
            createdOn.textContent =  format(data.createdAt, 'MMMM do, yyyy')
            let dueDate = document.createElement('p');
            dueDate.textContent =  format(data.dueDate, 'MMMM do, yyyy')
            let priority = document.createElement('p');
            priority.textContent = data.priority;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete Project';
            deleteBtn.addEventListener('click', () => {
                delteTodotById(project.id,data.id)
                todoGridFunc(id)
            })
            todoBody.append(title, description, createdOn,dueDate, priority,deleteBtn);
            console.log(data);
        })
    }

}