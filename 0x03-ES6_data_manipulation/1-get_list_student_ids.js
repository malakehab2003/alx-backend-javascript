import getListStudents from './0-get_list_students';

export default function getListStudentIds(myList) {
  const idList = [];
  if (myList instanceof Array) {
    for (const i of myList) {
      idList.push(i.id);
    }
  }

  return idList;
}
