

BASEURL = 'http://3.108.62.191:4000';
async function getCourse(id) {
    console.log("ID")
    console.log(id)

    if (id !== "") {
        id = parseInt(id);
        cid = id;

        window.location.href = "./marks.html?cid=" + id;

        console.log(id + 50);

        if (typeof (Storage) !== "undefined") {
            localStorage.setItem('CourseId', id);
            // Store
            // localStorage.setItem("CourseId", id);
            // Retrieve
            // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
        } else {
            // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }


        window.localStorage.setItem('CourseId', id);

        console.log("id from local storage :" + localStorage.getItem("CourseId"));
        console.log("id from window local storage :" + window.localStorage.getItem('CourseId'));



        await fetch(BASEURL + "/addcourse/validate/" + id, {
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


        await fetch(BASEURL + "/addcourse/delete/" + id, {
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

        await fetch(BASEURL + "/addcourse", {
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

