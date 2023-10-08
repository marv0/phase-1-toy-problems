//Create gradeGenerator Function
function gradeGenerator(marks){

// Check if the marks are within the range of 0 - 100 with if else statement block
if (marks < 0 || marks > 100) {
    //Return feedback if marks are not within range
    console.log("Student marks must be between 0 and 100.");
    } else {
    // define grade variable
    let grade;

    // Determine the grade based on the marks and assign the grade to grade variable
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