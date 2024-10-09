// task_3/js/interface.ts

// Create a type RowID and set it equal to number
export type RowID = number;

// Create an interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // age is optional
}
