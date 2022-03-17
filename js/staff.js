


async function addcourse() {



    console.log(document.getElementById('title').value)


    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var link = document.getElementById('link').value;

    console.log(link);
    if (title != '' && description != '' && link != '') {

        console.log('hii');

        await fetch("http://localhost:4000/addcourse", {
            method: "POST",
            body: JSON.stringify({
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                course: document.getElementById('link').value,

            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));


    }







}