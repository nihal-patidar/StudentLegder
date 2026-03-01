

// It add an EventListener "click" on studentList and capture the closest element match element
// to perform Edit function on selected student 


document.getElementById("studentList").addEventListener("click", (e) => {
  // console.log(e.target);
  const editBtn = e.target.closest(".edit_student");

  if (!editBtn) return;


  // as user click on Edit icon, the Update Opens and create form closes
  document.querySelector(".update_form_sec").classList.remove("hidden")
  document.querySelector(".create_form_sec").classList.add("hidden")

  students = getStudents();
  student = students.find((student) => student.id == editBtn.dataset.id);

  // filling the old values to the form.
  document.getElementById("update_student_name").value = student.name;
  document.getElementById("update_student_id").value = student.id;
  document.getElementById("update_student_email").value = student.email;
  document.getElementById("update_student_mobile").value = student.mobile;
});


// this function is call when click on update student button.
function updateStudent() {
  let name = document.getElementById("update_student_name").value;
  let id = document.getElementById("update_student_id").value;
  let email = document.getElementById("update_student_email").value;
  let mobile = document.getElementById("update_student_mobile").value;


  // Student Details Validation before storing the values.


  if (name == "") {   // For Name Validation 
    alert("Please Enter Name of Student");  
    document.getElementById("update_student_name").focus(); // for focus on invalid field
    return;
  }

  if (id == "") { // Empty Id validation. we can use regex for strong Validation.
    alert("Please Enter Student Id");
    document.getElementById("update_student_id").focus();
    return;
  }

  // return true when id matched.

  if (!(email.includes("@") && email.includes(".com"))) { // Email Address Validation
    alert("Please Enter valid Email ");
    document.getElementById("update_student_email").focus();
    return;
  }

  if (mobile.length >= 10) { // Mobile Number should contain at least 10 digit as per asked.
    alert("Please Enter valid Mobile Number");
    document.getElementById("update_student_mobile").focus();
    return;
  }

  let newStudent = {
    name: name,
    id: id,
    email: email,
    mobile: mobile,
  };

  let ans = confirm("Confirm to Update Student");
  if (!ans) return;

  if(students){  // Getting the old student index and then Update that student.

    const index = students.findIndex(student => student.id == newStudent.id);

    if(index !== -1) students[index] = newStudent ;

  }
  setStudents(students);
  setAllStudent();

  document.getElementById("update_student_name").value = null;
  document.getElementById("update_student_id").value = null;
  document.getElementById("update_student_email").value = null;
  document.getElementById("update_student_mobile").value = null;
}

// Below code is for Deleting the selected Student

document.getElementById("studentList").addEventListener("click", (e) => {
  const delete_btn = e.target.closest(".delete_student");

  if (!delete_btn) return;

  const confirmRequest = confirm("Do you really wanna remove the student");

  // confirm to avoid accidental clicks.

  if (confirmRequest) {
    students = getStudents();
    students = students.filter(
      (student) => student.id != delete_btn.dataset.id,
    );
    setStudents(students);
    setAllStudent();
  }
});

// Adding the click event to update student on update button
document.getElementById("update_student_btn").addEventListener("click",(e)=>{
    e.preventDefault();
    updateStudent();
})
