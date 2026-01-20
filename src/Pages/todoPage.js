import { createTodo } from "../Components/createTodo";
import {  todoGridFunc } from "../Components/todoGrid";
import { getProjectById } from "../Stores/projectStore";
import {format} from 'date-fns'

export const todoPage =(parent,id)=>{
    let projectDetails = getProjectById(id);
    console.log(projectDetails);
    const todoBody = document.createElement('section');
    const todoHeader = document.createElement('header');
    todoHeader.classList.add('todoHeader');
    let grid = document.createElement('div');
    grid.id = 'todoGrid'
    const heading = document.createElement('h1');
    const createdOn = document.createElement('p');
    heading.textContent = projectDetails.name;
    createdOn.textContent = format(projectDetails.createdAt, 'MMMM do, yyyy');
    todoHeader.append(createdOn,heading);
    todoBody.append(todoHeader,grid);
    parent.append(todoBody);
    createTodo(todoHeader,id);
    todoGridFunc(id);
}