

BASEURL = 'http://65.0.119.56:4000';
// BASEURL = 'https://localhost:4000';

async function updateTotal(courseId) {


    await fetch(BASEURL + "/addcourse/total/" + courseId, {
        method: "POST",
        body: JSON.stringify({

            total: document.getElementById('total').value,
            addcourseId: courseId


        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json)

            var x = document.getElementById("totaltoast");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            // window.location.href = "./marks.html";

        });
}
async function postMarks(courseId, jsonArrays) {


    // var Cid = localStorage['CourseId'];




    await fetch(BASEURL + "/marks", {
        method: "POST",
        body: JSON.stringify({
            addcourseId: courseId,
            studentMark: jsonArrays

        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            // console.log(json)

            var x = document.getElementById("alreadytaken");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            // window.location.href = "./marks.html";
            location.reload(true);

        });


    console.log('cid:' + courseId);




    // .then(response => response.json())
    // .then(json => console.log(json));


}