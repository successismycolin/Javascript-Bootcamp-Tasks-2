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

/**
 * Adds a student's result, name and mark to the HTML document.
 * @returns 
 * 
 */
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

    displayAllStudents();
}

/**
 * Displays the result corresponding with a student's mark.
 * - 0 - 49 => Fail 
 * - 50 - 64 => Pass
 * - 65 - 74 => Pass with Merit
 * - 75 - 100 => Pass with Distinction
 * @param {Number} mark 
 */
function displayResult(mark) {
    result.value = "";
    
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

/** 
 * Displays all the items currently present in the students list defined as a global variable. 
 * @param none
* */
function displayAllStudents() {
    // submittedStudents = outermost display element - <div>
    submittedStudents.value = "";
    // Creating a <ul> element inside submittedStudents <div>
    const studentsList = document.createElement("ul");
    
    students.forEach((student) => {
        studentsList.innerHTML = `<li>${student.name} - ${student.mark}</li>`;
        // studentsList now contains a list item <li> representing each student's name and mark
        // appending the <ul> element inside the <div> element
        submittedStudents.appendChild(studentsList);
    });
}

submitBtn.addEventListener("click", addStudent);