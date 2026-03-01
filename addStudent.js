const addStudent = function () { // It creates New student 
  // getting the value from the input field of create student form.
  let name = document.getElementById("student_name").value;
  let id = document.getElementById("student_id").value;
  let email = document.getElementById("student_email").value;
  let mobile = document.getElementById("student_mobile").value;


  // Name , Id , Email , Mobile Number validations.
  if(name == ""){
    alert("Please Enter Name of Student");
    document.getElementById("student_name").focus();  // for focus on invalid field
    return ;
  }

  if(id == ""){
      alert("Please Enter Student Id");
      document.getElementById("student_id").focus();
      return;
    }


    getStudents();
    let found = students.some(student => student.id == id);  // return true when id matched.


  if(found){
      alert("Duplicate Student Id Found ");
      document.getElementById("student_id").focus();
      return;
    }

  if(  !(email.includes('@') && email.includes('.com')) ){
    alert("Please Enter valid Email ")
    document.getElementById("student_email").focus();
    return ;
  }

  if(mobile.length != 10){
    alert("Please Enter valid Mobile Number");
    document.getElementById("student_mobile").focus();
    return ;
  }

  let newStudent = {
    name: name,
    id: id,
    email: email,
    mobile: mobile,
  };

  let ans = confirm("Confirm to add Student")
  if(!ans) return ;
  createStudentElement(newStudent);
  students.push(newStudent);
  setStudents(students);

  document.getElementById("student_name").value = null
  document.getElementById("student_id").value = null
  document.getElementById("student_email").value = null
  document.getElementById("student_mobile").value = null
  

};

const add_student_btn = document.getElementById("add_student_btn");

add_student_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log("button clicked")
    addStudent();
})

