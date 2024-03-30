// Create a class named CodeScriptMentor
class CodeScriptMentor {
    constructor() {
        this.students = [];
    }

    // Method: enroll a new student
    enrollStudent(student) {
        this.students.push(student);
        console.log(`Enrolled ${student} as a new student.`);
    }

    // Method: dismiss a student
    dismissStudent(student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
            console.log(`Dismissed ${student} from the class.`);
        } else {
            console.log(`${student} is not found among the enrolled students.`);
        }
    }

    // Method: list all enrolled students
    listStudents() {
        console.log("Enrolled students:");
        this.students.forEach(student => {
            console.log(student);
        });
    }
}

// Create an instance of CodeScriptMentor named myCodeScriptMentor
const myCodeScriptMentor = new CodeScriptMentor();

// Enroll students
myCodeScriptMentor.enrollStudent("Alice");
myCodeScriptMentor.enrollStudent("Bob");
myCodeScriptMentor.enrollStudent("Charlie");

// List all enrolled students
myCodeScriptMentor.listStudents();

// Dismiss a student
myCodeScriptMentor.dismissStudent("Bob");

// List all enrolled students after dismissal
myCodeScriptMentor.listStudents();
