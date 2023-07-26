function skillsMember() {
    var skills = document.getElementById('skills').value;
    var skillsError = document.getElementById('skillsError');
    var skillsRegex = /^[a-zA-Z\s]+$/;
    if (skills == "") {
        skillsError.innerHTML = "Skills is required";
        return false;
    } else if (!skillsRegex.test(skills)) {
        skillsError.innerHTML = "Only characters are allowed";
        return false;
    } else {
        skillsError.innerHTML = "";
        return true;
    }
}