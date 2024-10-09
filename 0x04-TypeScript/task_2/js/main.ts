// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Example usage
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director

// Type predicate to check if the employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).numberOfReports !== undefined;
}

// Function to execute work based on the type of employee
function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));  // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"

// Define a String literal type named Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the todayClass argument
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This return is unreachable due to the Subjects type
  return '';
}

// Example usage
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History


