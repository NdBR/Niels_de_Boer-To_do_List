console.log("test: Working file JS")
const resultToDoList = document.querySelector(".toDoList > ul")

// html li maken
function generateToDoHTML(todo) {
    // li
    const newLi = document.createElement("li");
    newLi.id = todo._id
    newLi.classList.add("liStyle")
        // checkbox
    let checkbox = document.createElement("input")
    checkbox.type = ("checkbox")
    if (todo.done == true) { checkbox.checked = true }
    newLi.appendChild(checkbox)
        //do when checkbox is changed    
    checkbox.addEventListener("change", (e) => doWhenCheckboxChange(e))
        // span 
    const span = document.createElement("span")
    span.innerText = todo.toDo;
    if (todo.done == true) { span.style.textDecoration = "line-through"; }
    newLi.appendChild(span)
        // remove btn
    const removeBTN = document.createElement("button")
    const img = document.createElement("img")
    removeBTN.appendChild(img).src = "images/trash-can.jpg"
    removeBTN.addEventListener("click", (e) => doRemoveToDo(e))
    newLi.appendChild(removeBTN)

    return newLi;
};

// functie object in dom to voegen
const addToResultListDOM = (li) => resultToDoList.appendChild(li);

// array van todo uit db halen
async function getTodoArrayFromDb() { return (await getRequestToDo()) };

// bestaande todo ophalen en in dom zetten
async function GetExistingToDoInDom() {
    const arrayTodo = await getTodoArrayFromDb()
    arrayTodo
        .map(generateToDoHTML)
        .forEach(addToResultListDOM)
}
GetExistingToDoInDom()