

//BASEURL = 'http://65.1.65.90:4000';
BASEURL = 'http://localhost:4000';
async function addnotes() {

    console.log(document.getElementById('title').value)
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var link = document.getElementById('link').value;
    console.log(link);
    if (title != '' && description != '' && link != '') {
        console.log('hii');
        await fetch(BASEURL + "/addnote", {
            method: "POST",
            body: JSON.stringify({
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                link: document.getElementById('link').value,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }
    if (title != '' && description != '' && link != '') {
        window.location.href = "./staff-note.html";

    }
}