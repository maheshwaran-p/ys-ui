function login() {

    window.location.href = "./login.html";

}

function create() {



    var first = document.getElementById('firstName').value;
    var last = document.getElementById('lastName').value;
    var user = document.getElementById('username').value;
    var mail = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (first != '' && last != '' && user != '' && mail != '' && password != '') {

        console.log('hii');

        console.log(document.getElementById('firstName').value);

        fetch("http://localhost:4000/student", {
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
            .then(json => console.log(json));
        console.log(firstName);

    }



    if (first != '' && last != '' && user != '' && mail != '' && password != '') {

        window.location.href = "./student.html";
    }




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