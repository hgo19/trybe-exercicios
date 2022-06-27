const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const obj = students.map((student, index) => ({
    name: student,
    grade: grades[index].reduce((acc, curr) => acc += curr, 0) / grades[index].length
  }))

  return obj;
}

console.log(studentAverage());