

async function postMarks(courseId, jsonArray) {


    // var Cid = localStorage['CourseId'];




    await fetch("http://localhost:4000/marks", {
        method: "POST",
        body: JSON.stringify({
            addcourseId: courseId,
            total: document.getElementById('total').value,
            studentMark: jsonArray

        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));


    console.log('cid:' + courseId + "total" + total);


}