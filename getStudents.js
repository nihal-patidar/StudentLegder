function setAllStudent() {
  students = getStudents();  //It gets students array from LocalStorage.

  const rows = document.querySelectorAll(".student-strip-portrait");

  if (rows) {
    rows.forEach((row) => row.remove()); // removes old student list to update the UI 
  }

  if (!students) return;
  students.map((student) => {
    createStudentElement(student); // Creates new student Strip Element.
  });

  
}

setAllStudent();  // It removes the old students element and then again renders the complete student list
