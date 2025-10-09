const btn_Add = document.querySelector(".add_btn");
let store = JSON.parse(localStorage.getItem("todos")) || [];

btn_Add.addEventListener("click", () =>{
    const value_todo = document.querySelector("#todoVal").value;

    const dataObj ={
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted: false
    }
    store.push(dataObj);

    //Local Storage
    localStorage.setItem("todos",JSON.stringify(store));
    document.querySelector("#todoVal").value = "";
    read_Todo()
});

const read_Todo = () => {
    const mainDiv = document.querySelector("#todo_list");

    mainDiv.innerHTML = "";
    store.forEach((els) => {
        const todoDiv = document.createElement("div");
        const textTodo = document.createElement("h4");
        const input_is_completes = document.createElement("input");
        const btn_edits = document.createElement("button");
        const btn_delete = document.createElement("button");

        textTodo.innerText = els.todo;

        input_is_completes.type = "checkbox";

        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";
        // Delete Functionality
        btn_delete.addEventListener("click",() =>{
            deleteFunction(els.id);
        });

        btn_edits.innerText = "edit";
        btn_edits.className = "btn_isEdit";
        

        todoDiv.append(input_is_completes,textTodo,btn_edits,btn_delete);
        mainDiv.append(todoDiv);
    });
}

const deleteFunction = (id) =>{
    const Del = store.filter((els) => els.id !== id);

    store = Del;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();

    console.log('🚀 ~ Del:', Del);
}


window.onload = () =>{
    read_Todo();
}