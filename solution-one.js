//Challenge 1: Student Grade Generator (Toy Problem)

function gradeGenerator(marks){

// Check if the input is within the range [0, 100]
if (marks < 0 || marks > 100) {
    console.log("Student marks must be between 0 and 100.");
    } else {
    let grade;

    // Determine the grade based on the marks
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Display the calculated grade
    console.log(`Student's Grade: ${grade}`);
    }
}

// Call the function to start the grading process
gradeGenerator(50);