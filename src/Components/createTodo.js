import { createTodoFunc, getProjecTodoById } from "../Stores/projectStore";
import { todoGrid, todoGridFunc } from "./todoGrid";

export const createTodo = (parent,id) => {
    
    const createRadio = () => {
        const priorityArray = ['low', "medium", "high"];
        const container = document.createElement('div');
        container.classList.add('radioContainer')
        const optionsHolder = document.createElement('div');
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Select Priority"

        priorityArray.forEach(pirority => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'priorityOption';
            input.value = pirority;
            input.id = pirority.toLowerCase().replace(' ', '-');


            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = pirority;
            optionsHolder.append(label, input);
            container.append(priorityLabel,optionsHolder);
        })

        return container;
    }

    function getCheckedRadioButtonValue() {
    const radioButtons = document.querySelectorAll('input[name="priorityOption"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return radioButton.value;
        }
    }
    return null; // Return null if nothing is selected
}
    const dialogElem = document.createElement('dialog');
    const dialogDiv = document.createElement('div');
    dialogDiv.classList.add('dialogDiv')

    const dialogDivHeader = document.createElement('div');
    dialogDivHeader.classList.add('dialogDivHeader')

    const paragraph = document.createElement('h2');
    paragraph.textContent = 'Create Todo';
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';

    //Form

    const form = document.createElement('form');
    //title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Title";
    titleLabel.htmlFor = 'title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';

    //description
    const description = document.createElement('label');
    description.textContent = "Description";
    description.htmlFor = 'description';
    const descInput = document.createElement('textarea');
    descInput.id = 'description'
    descInput.classList.add('todoDesc')


    //dueDate
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.htmlFor = 'dueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'dueDate';






    //submit Button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Create Todo';


    parent.append(dialogElem);

    dialogElem.append(dialogDiv);
    dialogDiv.append(dialogDivHeader);
    dialogElem.append(form);
    dialogDivHeader.appendChild(paragraph);
    dialogDivHeader.appendChild(closeButton);
    form.append(titleLabel, titleInput, description, descInput, dueDateLabel, dueDateInput, createRadio(), submitBtn);

        form.addEventListener("submit",(e)=>{
                e.preventDefault();
                if(titleInput.value === ''){
                    alert('Title is required');
                    return
                }else if (descInput.value === ''){
                     alert('Description is required');
                    return
                }else if(dueDateInput.value === ''){
                     alert('Due date is required');
                    return
                }else if(getCheckedRadioButtonValue() === ''){
                     alert('Priority is required');
                    return
                }
                
                else{
                    createTodoFunc(titleInput.value,descInput.value,dueDateInput.value,getCheckedRadioButtonValue(),id);
                    console.log( getProjecTodoById(id))
                    dialogElem.close();
                    todoGridFunc(id);
                    titleInput.value = '';
                    descInput.value='';
                    dueDateInput.value='';
                }
            })



    dialogElem.addEventListener('click', (e) => {
        if (e.target === dialogElem) {
            dialogElem.close()
        }
    })

    closeButton.addEventListener('click', () => {
        dialogElem.close();
    })



    const button = document.createElement('button');
    button.innerText = "Create Todo";
    button.classList.add('todoSubmit')
    button.addEventListener('click', () => {
        dialogElem.showModal();
    })
    parent.append(button);
}