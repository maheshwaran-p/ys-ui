


async function getCourse(id) {
    console.log("ID")
    console.log(id)

    if (id !== "") {

        window.location.href = "./marks.html";
        id = parseInt(id)

        console.log(id + 50)


        await fetch("http://localhost:4000/addcourse/validate/" + id, {
            method: "GET",
            // body: JSON.stringify({
            //     title: document.getElementById('title').value,
            //     description: document.getElementById('description').value,
            //     course: document.getElementById('link').value,
            //     stafflink: document.getElementById('stafflink').value,
            // }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }
}




async function deleteCourse(id) {
    console.log("ID")
    console.log(id)

    if (id !== "") {

        id = parseInt(id)

        console.log(id + 50)


        await fetch("http://localhost:4000/addcourse/delete/" + id, {
            method: "GET",
            // body: JSON.stringify({
            //     title: document.getElementById('title').value,
            //     description: document.getElementById('description').value,
            //     course: document.getElementById('link').value,
            //     stafflink: document.getElementById('stafflink').value,
            // }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }
}




async function addcourse() {



    console.log(document.getElementById('title').value)


    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var link = document.getElementById('link').value;
    var link = document.getElementById('stafflink').value;



    console.log(link);
    if (title != '' && description != '' && link != '' && stafflink != '') {

        console.log('hii');

        await fetch("http://localhost:4000/addcourse", {
            method: "POST",
            body: JSON.stringify({
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                course: document.getElementById('link').value,
                stafflink: document.getElementById('stafflink').value,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));


    }
    if (title != '' && description != '' && link != '' && stafflink != '') {
        window.location.href = "./staff-base.html";

    }
}









function form() {

    window.location.href = "https://docs.google.com/forms/u/0/";

}

