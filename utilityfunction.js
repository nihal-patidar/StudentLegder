let students = getStudents();

if(!students){
    students = [];
    setStudents(students);
}

// this is utility function to avoid rewriting the same code and avoid same error facing.
function getStudents() {
    return JSON.parse(localStorage.getItem("students"));
}

// this is utility function to setStudents 
function setStudents(data){
    return localStorage.setItem("students",JSON.stringify(data));
}



function createStudentElement(student){

    let newStudent = `
        <div class="student-strip-portrait" id="st-${student.id}">
            <div class="std-name st-item">
              <span class="label">Name : </span>
              <span class="col-style">${student.name}</span>
            </div>
            <div class="std-id st-item">
              <span class="label">Std Id  : </span>
              <span class="col-style">${student.id}</span>
            </div>
            <div class="std-mail st-item">
              <span class="label">Email : </span>
              <span class="col-style">${student.email}</span>
            </div>
            <div class="std-mobile st-item">
              <span class="label">Mobile : </span>
              <span class="col-style">${student.mobile}</span>
            </div>
            <span class="btns">
              <button class="btn1 edit_student" data-id="${student.id}">
                 <i class="fa-solid fa-pen-to-square"></i>
              </button>

              <button class="btn1 delete_student" data-id="${student.id}"><i class="fa-solid fa-x"></i></button>
            </span>
          </div>
        `


    let studentList = document.getElementById("studentList");

    studentList.insertAdjacentHTML("beforeend",newStudent);
}

