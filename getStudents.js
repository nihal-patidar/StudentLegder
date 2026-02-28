function setAllStudent() {
  students = getStudents();

  const rows = document.querySelectorAll(".student-strip-portrait");

  if (rows) {
    rows.forEach((row) => row.remove());
  }

  if (!students) return;
  students.map((student) => {
    createStudentElement(student);
  });

  
}

setAllStudent();
