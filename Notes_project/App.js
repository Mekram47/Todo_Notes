const addbtn = document.querySelector("#addbtn")
const main= document.querySelector("#main")

addbtn.addEventListener("click",function(){
    addNote()
})

const saveNotes =()=>{
    const notes = document.querySelectorAll(".notes textarea");
    const data=[];
    notes.forEach(
        (notes)=>{
            data.push(notes.value)
        }
    )
    if(data.length===0){
        localStorage.removeItem("notes")
    } 
    else{
    localStorage.setItem("notes",JSON.stringify(data))
    }

}

const addNote=(text= "")=>{
    const notes = document.createElement("div");
    notes.classList.add("notes")
    notes.innerHTML=`<div class="tool">
    <i class="save">📁</i>
    <i class="delete">🗑️</i>
</div>
<textarea>${text}</textarea>`;
notes.querySelector(".delete").addEventListener("click",
function(){
    notes.remove()
    saveNotes()
})
notes.querySelector(".save").addEventListener("click",function()
{
    saveNotes()
})
notes.querySelector("textarea").addEventListener("focusout",
function(){
    saveNotes()
})
main.appendChild(notes);
saveNotes()

}
(
    function(){
        const Lsnotes =JSON.parse(localStorage.getItem("notes"))
        if(Lsnotes===null){
            addNote()
        } else{
            Lsnotes.forEach(
                (Lsnotes)=>{
                    addNote(Lsnotes)
                }
            )
        }
        
       

    }
)()
