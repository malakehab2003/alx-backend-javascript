export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('students must be array');
    }
  }

  // create getter to the name
  get name() {
    return this._name;
  }

  // create setter to the name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
  }

  // create getter to the length
  get length() {
    return this._length;
  }

  // create setter to the length
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  // create getter to the students
  get students() {
    return this._students;
  }

  // create setter to the students
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('students must be array');
    }
  }
}
