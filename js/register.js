

//BASEURL = 'http://65.1.65.90:4000';
BASEURL = 'http://localhost:4000';

function login() {

    window.location.href = "./index.html";
}

async function createstudent() {

    console.log('hii');

    console.log(document.getElementById('firstName').value);

    await fetch(BASEURL + "/student", {
        method: "POST",
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);

            console.log(json.firstName);
            console.log(json.user);
            if (json.user != null) {
                window.location.href = "./student.html";

            }
            else {

                var x = document.getElementById("alreadytaken");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

            }
        });
}



async function createstaff() {

    console.log('hii');

    console.log(document.getElementById('firstName').value);

    await fetch(BASEURL + "/staff", {
        method: "POST",
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            console.log(json.firstName);
            console.log(json.user);
            if (json.user != null) {
                window.location.href = "./staff-base.html";

            }
            else {

                var x = document.getElementById("alreadytaken");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

            }


        });
    console.log(firstName);

}

// async function create2() {
//     url = 'http://localhost:4000/student';

//     const data = new Object()
//     data.firstName = document.getElementById('firstName')
//     data.lastName = document.getElementById('lastName')
//     data.username = document.getElementById('username')
//     data.email = document.getElementById('email')
//     data.password = document.getElementById('password')

//     await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': '*/*'
//         },
//         body: JSON.stringify(data)
//     }).then(response => response.json())
//         .then(data => {
//             console.log("set Interval")
//             console.log(data.total);
//         });
// }