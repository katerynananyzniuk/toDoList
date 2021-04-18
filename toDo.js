let toDoItems = document.querySelectorAll(".toDo-element");
let toDoItem = document.querySelector(".toDo-element");
toDoItem = toDoItem.innerHTML;

let btnAdd = document.querySelector('.button-add');

let btnDel = document.querySelector('.button-del');

let btnClear = document.querySelector('.button-clear');


add.addEventListener("click", function(event){
    let newElement = document.createElement("div");
    newElement.className = "toDo-element";
    newElement.insertAdjacentHTML("afterbegin", toDoItem);
    newElement.lastElementChild.innerHTML = "To-do";

    list.append(newElement);
});

del.addEventListener("click", function(event){
    let lastElement = list.lastElementChild;
    lastElement.remove();
});

clear.addEventListener("click", function(event){
    list.innerHTML = "";
});



    list.addEventListener("click", function(event){
       if(event.target.classList.contains("toDo-element")){
        event.target.firstElementChild.classList.toggle("checked");
       }
       else if(event.target.classList.contains("toDo-mark")){
        event.target.classList.toggle("checked");
       }
       else if(event.target.classList.contains("toDo-text")){
            let text = event.target.innerHTML;
            event.target.innerHTML = "";
            let input = document.createElement("input");
            input.value = text;
            input.autofocus=true;
            event.target.append(input);
       }
    });