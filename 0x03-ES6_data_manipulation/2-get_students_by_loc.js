export default function getStudentsByLocation(students, city) {
  const stList = students.filter((students) => students.location === city);

  return stList;
}
