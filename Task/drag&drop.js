let drag = document.getElementById("dragme");
let drop = document.getElementById("dropzone");

drag.ondragstart = (e) =>{
    if(drag.getAttribute("draggable") === "false"){
        e.preventDefault();
        return false;
    }
    e.dataTransfer.setData("text", e.target.id);
};

drop.ondragover = (e) => e.preventDefault();

drop.ondrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let value = document.getElementById(data);
    drop.appendChild(value);
};