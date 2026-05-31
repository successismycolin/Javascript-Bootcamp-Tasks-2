// <input type=text>
const nameInput = document.getElementById("studentNameText");

// <input type=number>
const markInput = document.getElementById("studentMarkText");

// <input type="button">
const submitBtn = document.getElementById("submitBtn");

// <div>
const result = document.getElementById("studentResultSection");

// <div>
const submittedStudents = document.getElementById("studentsListSection");

let students = [];

function addStudent() {
    const name = nameInput.value.trim();
    let mark = markInput.value.trim();

    if (!name || !mark) {
        alert("Please make sure your text fields contain valid input.");
        return;
    }
    
    mark = Number.parseInt(mark);
    
    if (mark < 0 || mark > 100 || !Number.isInteger(mark)) {
        alert("Please make sure your Student Mark is an integer value between 0 and 100.")
        return;
    }

    let student = {
        name: name,
        mark: mark
    };

    result.replaceChildren();

    students.push(student);

    displayResult(student.mark);
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
            studentResult.innerHTML = "";
            result.appendChild(studentResult);
            break;
    }
}

submitBtn.addEventListener("click", addStudent);

// function displayStudents() {}
