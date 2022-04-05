

BASEURL = 'http://13.234.213.95:4000';
//BASEURL = 'http://localhost:4000';
async function postMarks(courseId, jsonArray) {


    // var Cid = localStorage['CourseId'];




    await fetch(BASEURL + "/marks", {
        method: "POST",
        body: JSON.stringify({
            addcourseId: courseId,
            studentMark: jsonArray

        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)

            var x = document.getElementById("alreadytaken");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            // window.location.href = "./marks.html";
            location.reload(true);

        });


    console.log('cid:' + courseId + "total" + total);



    await fetch(BASEURL + "/addcourse/total/" + courseId, {
        method: "POST",
        body: JSON.stringify({

            total: document.getElementById('total').value,


        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    // .then(response => response.json())
    // .then(json => console.log(json));


}