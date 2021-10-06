console.log("test: add file JS")

const BTNAddToDo = document.querySelector("#BTNAddToDoItem")
const textFieldAdd = document.querySelector(".todoInput > input")

// textfield leeg wanneer erop geclicked wordt om te typen
textFieldAdd.addEventListener("click", () => { document.querySelector(".todoInput > input").value = "" })

// Event toevoegen wanneer er op enter geclickt wordt
textFieldAdd.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        doWhenClickedOnBtnAdd()
        document.querySelector(".todoInput > input").value = ""
    }
})

// Event toevoegen wanneer er op BTN Add geclickt wordt
BTNAddToDo.addEventListener("click", () => {
    doWhenClickedOnBtnAdd(),
        document.querySelector(".todoInput > input").value = ""
})

// get value todo
getTodoFromTextField = () => document.querySelector(".todoInput > input").value

// toevoegen van todo vanuit inputfield
async function doWhenClickedOnBtnAdd() {
    const todo = getTodoFromTextField()
    const toDoObject = await postRequestNewToDo(todo)
    const toDoInHTML = generateToDoHTML(toDoObject)
    addToResultListDOM(toDoInHTML)
}