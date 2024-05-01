export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const st1: Student = {
  firstName: 'john',
  age: 20,
  lastName: 'marly',
  location: 'alex'
};

const st2: Student = {
  firstName: 'harry',
  age: 22,
  lastName: 'potter',
  location: 'usa'
};

const studentsList: Array<Student> = [st1, st2];

const myTable = document.createElement('table');
const header = myTable.insertRow();
const firstNHeader = header.insertCell();
const locHeader = header.insertCell();
firstNHeader.textContent = 'First Name';
locHeader.textContent = 'Location';

studentsList.forEach((student) => {
  const element = myTable.insertRow();
  const fnCell = element.insertCell();
  const lCell = element.insertCell();
  fnCell.textContent = student.firstName;
  lCell.textContent = student.location;
})

document.body.appendChild(myTable);
