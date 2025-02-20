function sortStudentsByScore(students) {
    return students.slice().sort((a, b) => b.score - a.score);
  }
  let stud=[
    {studentName:"murisa" ,score:80},
    {studentName:"john" ,score:98},
    {studentName:"mugabo" ,score:70},
    {studentName:"ratifa" ,score:50},

];
console.log(sortStudentsByScore(stud));

