export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any,
};

export interface Directors extends Teacher {
  numberOfReports: number,
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

export function printTeacher(firstName: string, lastName: string): string{
  return `${firstName.charAt(0)}. ${lastName}`;
};

export interface studentConstructor {
  firstName: string;
  lastName: string;
};

export interface studentCls {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements studentCls {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
      return 'Currently working';
  }

  displayName(): string {
      return this._firstName;
  }
}
