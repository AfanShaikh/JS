const btn_Add = document.querySelector(".add_btn");
let store = JSON.parse(localStorage.getItem("todos")) || [];

btn_Add.addEventListener("click", () =>{
    const value_todo = document.querySelector("#todoVal").value;

    const dataObj = {
        id: Date.now(),
        todo: value_todo,
        isEdits: false,
        isCompleted: false
    }
    store.push(dataObj);

    //Local Storage
    localStorage.setItem("todos", JSON.stringify(store));
    document.querySelector("#todoVal").value = "";
    read_Todo();
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

        // Edit section
        const inputEdit = document.createElement("input");
        const btn_cancel = document.createElement("button");
        const btn_confirm = document.createElement("button");

        inputEdit.value = els.todo;
        inputEdit.name = "change_edit_input";

        btn_cancel.innerText = "cancel";
        btn_confirm.innerText = "confirm";

        textTodo.innerText = els.todo;
        input_is_completes.type = "checkbox";
        todoDiv.className = "todo_divs";

        btn_delete.innerText = "delete";
        btn_delete.className = "btn_isDelete";

        // Delete Functionality
        btn_delete.addEventListener("click", () => {
            deleteFunction(els.id);
        });

        btn_edits.innerText = "edit";
        btn_edits.className = "btn_isEdit";

        btn_cancel.addEventListener("click", () => {
            cancelHandle(els.id);
        });

        //  Confirm Button Functionality
        btn_confirm.addEventListener("click", () => {
            confirmHandle(els.id, inputEdit.value);
        });

        // Logic to hide and show
        textTodo.className = els.isEdits ? "hideData" : "showData";
        inputEdit.className = els.isEdits ? "showData" : "hideData";

        btn_edits.className = els.isEdits ? "hideData" : "showData btn_isEdit";
        btn_cancel.className = els.isEdits ? "showData btn_isDelete" : "hideData";
        btn_delete.className = els.isEdits ? "hideData" : "showData btn_isDelete";
        btn_confirm.className = els.isEdits ? "showData btn_isEdit" : "hideData";

        btn_edits.addEventListener("click", () => {
            editFunction(els.id);
        });

        todoDiv.append(input_is_completes, textTodo, inputEdit, btn_edits, btn_delete, btn_cancel, btn_confirm);
        mainDiv.append(todoDiv);
    });
};

const cancelHandle = (id) => {
    const editData = store.map((els) => {
        return els.id === id ? { ...els, isEdits: false } : els;
    });
    store = editData;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();
};

const editFunction = (id) => {
    const editData = store.map((els) => {
        return els.id === id ? { ...els, isEdits: true } : els;
    });
    store = editData;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();
};

//  Confirm Function — updates edited todo text
const confirmHandle = (id, newValue) => {
    const editData = store.map((els) => {
        return els.id === id ? { ...els, todo: newValue, isEdits: false } : els;
    });
    store = editData;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();
}


const deleteFunction = (id) => {
    const Del = store.filter((els) => els.id !== id);
    store = Del;
    localStorage.setItem("todos", JSON.stringify(store));
    read_Todo();
};

window.onload = () => {
    read_Todo();
};