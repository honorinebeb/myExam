
function findTopScorers(students, threshold) {
  return students.filter(student => student.score > threshold).map(student => student.name);
}
let students=[
    {studentName:"murisa" ,score:80},
    {studentName:"john" ,score:98},
    {studentName:"mugabo" ,score:70},
    {studentName:"ratifa" ,score:50},

];
console.log(findTopScorers(students));




 












 