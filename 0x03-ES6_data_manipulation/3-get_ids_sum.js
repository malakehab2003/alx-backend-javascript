export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, cur) => acc + cur.id, 0);

  return sum;
}
