/**const notescontainer=document.querySelector(".notes-container");
const createbtn=document.querySelctor(".btn");
let notes=document.querySelectorAll(".input-box");

createbtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="bin.png"
    notescontainer.appendChild(inputbox).appendChild(img);
})
**/

const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");

createBtn.addEventListener("click", () => {
    const note = document.createElement("p");
    note.className = "input-box";
    note.setAttribute("contenteditable", "true");
    note.innerHTML = '<img src="bin.png" alt="Delete">';
    notesContainer.appendChild(note);
});

notesContainer.addEventListener("click",function(event){
   
        if (event.target.tagName === "IMG" && event.target.src.includes("bin.png")) {
            event.target.parentElement.remove(); 
        }
    
});