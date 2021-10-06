console.log("test: api file JS")

const apiUrl = `http://localhost:3000`;

// getRequestToDo()
async function getRequestToDo() {
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        console.log("response recieved get Request")
        const response = await res.json();
        return response
    } catch (err) {
        console.log(err)
    }
}

// post
async function postRequestNewToDo(toDo) {
    try {
        const res = await fetch((apiUrl), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ toDo, "done": false })
        })
        console.log("response recieved post request")
        const response = await res.json();
        return response
    } catch (err) {
        console.log(err)
    }
}

// put
async function putRequestToDo(id, done) {
    try {
        const res = await fetch((apiUrl + "/" + id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ done })
        })
        console.log("response recieved put request")
        const response = await res.json();
        return response
    } catch (err) {
        console.log(err)
    }
}

// delete
async function deleteRequestToDo(id) {
    try {
        const res = await fetch((apiUrl + "/" + id), {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        console.log("response recieved Delete request")
        const response = await res
        return response
    } catch (err) {
        console.log(err)
    }
}