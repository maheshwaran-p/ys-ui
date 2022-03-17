


async function addcourse() {



    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var link = document.getElementById('link').value;


    if (title != '' && description != '' && link != '') {

        console.log('hii');

        console.log(document.getElementById('firstName').value);

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
        console.log(firstName);

    }







}