async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (response.ok) {
            const todos = await response.json()
            console.log(todos.slice(0, 5))
        } else
            console.log('no data found');

    } catch (error) {
        console.log(error.message);
    }
}

fetchPosts()

/*
function fetchPosts() {
    const p = fetch('https://jsonplaceholder.typicode.com/todos')        
    return p
}

fetchPosts()
    .then(
        (response) => {
            if (response.ok) {
                const x = response.json()
                x.then(
                    (data) => {
                        console.log(data.slice(0, 5));
                    }
                ).catch((e) => console.log(e.message))
            }
        }
    )
    .catch(
        (error) => console.log(error.message)
    )
    */