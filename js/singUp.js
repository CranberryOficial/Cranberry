const url = "https://parseapi.back4app.com/classes/singUp";
const headers = {
    "X-Parse-Application-Id": "XrmKhHlwmz2nN4AVNTyVfshxz83n1yOmrzRvIp9r",
    "X-Parse-REST-API-Key": "UvTV9haf6SUHoa9QGijr8RgbSuF0x5TKrzPbVN6o",
    "Content-Type": "application/json"
};


document.getElementById('singUpButton').onclick = async () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if (!firstName || !lastName || !email || !password || !password2) {
        document.getElementById("error").style.display = "block";
    } else {
        console.log("foi")

        await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "password2": password2,
            })
        })

        window.location = "https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/"

    }
}