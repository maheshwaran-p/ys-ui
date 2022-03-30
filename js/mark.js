


BASEURL = 'http://3.108.62.191:4000';
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
        .then(json => console.log(json));


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