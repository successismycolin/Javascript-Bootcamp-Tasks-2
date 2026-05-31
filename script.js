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

function displayResult(mark) {
    result.value = "";
    mark = Number(mark);

    const studentResult = document.createElement("p");

    switch (true) {
        case (mark <= 49): 
            studentResult.innerHTML = "Failed";
            result.appendChild(studentResult);
            break;
        case (mark <= 64):
            studentResult.innerHTML = "Passed";
            result.appendChild(studentResult);
            break;
        case (mark <= 74):
            studentResult.innerHTML = "Passed with Merit";
            result.appendChild(studentResult);
            break;
        case (mark <= 100):
            studentResult.innerHTML = "Passed with Distinction";
            result.appendChild(studentResult);
            break;
        default:
            studentResult.innerHTML("");
            result.appendChild(studentResult);
            break;
    }
}

submitBtn.addEventListener("click", displayResult("80"));

// function displayStudent() {}
