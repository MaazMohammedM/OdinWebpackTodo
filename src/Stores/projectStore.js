import { Project } from "../Modals/projectModal";
import { Todo } from "../Modals/todoModal";


    const projects = [];
    
    function saveToLocal(){
        localStorage.setItem('todo_Projects',JSON.stringify(projects));
    }

   export function loadStorage(){
        let data = JSON.parse(localStorage.getItem('todo_Projects'));
        if(!data) return;
        projects.length = 0;
        data.forEach(p => {
            const project = Object.assign(new Project(),p);
            project.todo = p.todo.map(t=>
               Object.assign(new Todo(),t)
            )
            projects.push(project)
        });
    }

    export const createProject =(name)=>{
        const project = new Project(name);
        projects.push(project);
        console.log(project)
        console.log(projects)
        saveToLocal();
        return project
    }

   export const getProject =()=>{
        return projects
    }

    export const getProjectById = (id)=>{
        return projects.find(p=>p.id === id)
    }
    export const delteProjectById = (id)=>{
        const index =  projects.findIndex(p=>p.id === id);
        if(index === -1) return;
        projects.splice(index,1);
        saveToLocal();
    }



    export const createTodoFunc =(title,description,dueDate,priority,id)=>{
        let todoArr = getProjectById(id).todo;
        const todo = new Todo(title,description,dueDate,priority)
        todoArr.push(todo);
        saveToLocal();
    }

    export const getProjecTodoById = (id)=>{
        return projects.find(p=>p.id === id).todo;
    }


    export const delteTodotById = (projectId, todoId)=>{
        const project = getProjectById(projectId);
        if(!project){
            return
        }
        const index =  project.todo.findIndex(t=>t.id === todoId);
        if(index === -1) return;
        project.todo.splice(index,1);
        saveToLocal();
    }


  
    


