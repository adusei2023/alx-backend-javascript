export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Harry",
  lastName: "Yoon",
  age: 22,
  location: "Seoul, South Korea",
};

const studentB: Student = {
  firstName: "Anjali",
  lastName: "Prajapati",
  age: 22,
  location: "Lodz, Poland",
};

const studentsList: Array<Student> = [studentA, studentB];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Creates and returns the table header row element.
 * @returns {HTMLTableSectionElement} The table header row.
 */
const createTableHeader = (): HTMLTableSectionElement => {
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.appendChild(headRow);
  return tableHead;
};

/**
 * Creates and returns the table body based on student data.
 * @param {Array<Student>} students The list of students.
 * @returns {HTMLTableSectionElement} The table body.
 */
const createTableBody = (students: Array<Student>): HTMLTableSectionElement => {
  const tableBody = document.createElement('tbody');
  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.appendChild(bodyRow);
  }
  return tableBody;
};

/**
 * Displays a table with student information on the webpage.
 * @param {Array<Student>} students The list of students to display.
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  table.appendChild(createTableHeader());
  table.appendChild(createTableBody(students));
  document.body.appendChild(table);
};

// Inject the CSS styles into the document head
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);

// Set the document title
document.title = 'Task 0';

// Call function to display students
displayStudents(studentsList);

