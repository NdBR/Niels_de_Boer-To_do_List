console.log("test: delete file JS")

// get index of 
const getIndexOfRemoveBTN = (e) =>
    (Array.from(document.getElementById("ul_todo").getElementsByTagName("img"))).indexOf(e.target);

// remove in Dom
const removeToDoInDom = (i) => {
    let listul = document.getElementById("ul_todo")
    listul.removeChild(listul.childNodes[i + 1])
}

// remove in DB
const removeToDoInDB = (i) => deleteRequestToDo(document.getElementById("ul_todo").childNodes[i + 1].id)

// verwijderen van ToDo
const doRemoveToDo = (e) => {
    let i = getIndexOfRemoveBTN(e)
    removeToDoInDB(i)
    removeToDoInDom(i)
}