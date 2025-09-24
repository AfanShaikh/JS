let input = document.getElementById("myInput");
let btn = document.getElementById("btn");
let div_LS = document.getElementsByTagName("div")[0];

btn.addEventListener("click", function(){
    localStorage.setItem("name", input.value);
    render_UI();
});

function render_UI(){
    let LS_Value = localStorage.getItem("name") || "";
    div_LS.innerHTML = `<p>${LS_Value}</p>`;
}
