console.log("test: checkbox js ")
    // let targetCheckbox = document.querySelectorAll("checkbox")
    // console.log(targetCheckbox)

const doWhenCheckboxChange = (e) => {
    let i = getIndexOfCheckedBTN(e)
    console.log(i)
    changeCheckboxInDB(i)
    changeSpanInDom(i)
}

// get idex of Checkbox
const getIndexOfCheckedBTN = (e) =>
    (Array.from(document.getElementById("ul_todo").getElementsByTagName("input"))).indexOf(e.target);

// get status
const getStatusCheckbox = (i) => document.getElementById("ul_todo").getElementsByTagName("input")[i].checked

const changeCheckboxInDB = (i) => {
    // get id to change 
    let idToChange = document.getElementById("ul_todo").childNodes[i + 1].id

    // make Change in db
    if (getStatusCheckbox(i) === true) { putRequestToDo(idToChange, (true)) }
    if (getStatusCheckbox(i) === false) { putRequestToDo(idToChange, (false)) }
}

const changeSpanInDom = (i) => {
    // get id to target li span
    let idToChange = document.getElementById("ul_todo").childNodes[i + 1].id
    const targetSpan = document.getElementById(idToChange).getElementsByTagName("span")[0]

    //make change text
    if (getStatusCheckbox(i) === true) { targetSpan.style.textDecoration = "line-through"; }
    if (getStatusCheckbox(i) === false) { targetSpan.style.textDecoration = "" }

}