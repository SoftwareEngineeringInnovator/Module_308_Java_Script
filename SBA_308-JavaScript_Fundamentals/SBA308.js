// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 4,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// FUNCTION TO VALIDATE COURSE.ID comparing GROUP.ID

function validateCourse(course, group) {

  if (course.id !== group.course_id) {
    throw new Error("Invalid Course ID.");
  }

}

// TESTING THE VALIDATION FUNCTION

console.log("Validating COURSE and GROUP ID");
try {

  validateCourse(CourseInfo, AssignmentGroup);


  console.log("Course is valid.");
  // Result by using proper course_id 451
  // id: 12345,
  // name: "Fundamentals of JavaScript",
  // course_id: 451,
  // group_weight: 25,
  // assignments: [
  // Result: Course is valid.

} catch (error) {

  console.error(`Course: "${error.message}"`);
  // Result by updating course_id from 451 to  452
  // id: 12345,
  // name: "Fundamentals of JavaScript",
  // course_id: 452,
  // group_weight: 25,
  // assignments: [
  // Result: Course: "Invalid Course ID."
}

// FUNCTION TO FIND ASSIGNMENT

function findAssignment(assignments, assignmentID) {

  // Loop through assignment object list
  for (const assignment of assignments) {

    // Check assignment's IDs
    if (assignment.id === assignmentID) {
      console.log("Assignment Found, name: ", assignment.name);
      return;
      //  Results with CORRECT assigmentID 
      //  Assignment Validation:
      //  Assignment Write a Function Found assignment.
    }
  }
  console.log("Assignment Not Found with ID:", assignmentID);
  //  Results with INCORRECT assigmentID 99
  // Assignment Validation:
  // Assignment Write a Function Found assignment.
}


// FUNCTION TO CHECK VALID DATA - number or string

function validData(score, pointsPossible) {

  // Use typeof() and OR to evaluate if the score is not a number, OR points is not a number OR points equals 0
  if (typeof score !== "number" || typeof pointsPossible !== "number" || pointsPossible === 0) {
    return false;
  }

  return true;
}

// TESTING THE VALIDATION FUNCTION

// console.log("DATA VALIDATION TESTS:");
// DATA VALIDATION TESTS:

// Case 1: proper data -True
// console.log("Numbers:", validData(85, 100));
// Result - Numbers: true

// Case 2: one of the score is a string - False
// console.log("String:", validData("85", 100));
// Result - String: false

// console.log("String:", validData(85, "100"));
// Result - String: false

// Case 3: Zero points possible- False
// console.log("0 Points Possible:", validData(85, 0));
// Result - 0 Points Possible: false

// Case 4: Score 0 - True
// console.log("Score 0", validData(0, 100));
// Result - Score 0 true