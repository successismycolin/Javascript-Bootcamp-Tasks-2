// <input type=text>
const nameInput = document.getElementById("studentNameText");

// <input type=number>
const markInput = document.getElementById("studentMarkText");

// <input type="button">
const submitBtn = document.getElementById("submitBtn");

// <div>
const result = document.getElementById("studentResultSection");

// <ul>
const submittedStudents = document.getElementById("studentsList");

let students = [];

function addStudent() {
    let name = nameInput.value.trim();
    let mark = markInput.value.trim();

    let student = {
        name: name,
        mark: mark
    };

    students.push(student);
}


// function displayStudent() {}
