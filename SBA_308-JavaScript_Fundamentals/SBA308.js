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
      id: 1,
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
  // Create a tracking variable to see if we ever found a match
  let found = false;

  for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].id === assignmentID) {
      console.log("✅ Success! Found assignment:", assignments[i].name);
      found = true; 
      break; // Stop the loop immediately because we found what we wanted
    }
  }

  // If the loop finished completely and 'found' is still false...
  if (found === false) {
    console.log("❌ Result: No assignment found with ID:", assignmentID);
  }
}

// 3. Simple Shorter Validation
console.log("--- RUNNING QUICK VALIDATION ---");

// Test Case A: Look for an ID that exists
findAssignment(AssignmentGroup, 2);

// Test Case B: Look for an ID that does not exist
findAssignment(AssignmentGroup, 99);