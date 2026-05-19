// # SBA 308 - Learner Data Processing Project
// ==========================================
// COURSE INFORMATION
// ==========================================

const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// ==========================================
// ASSIGNMENT GROUP INFORMATION
// ==========================================

const AssignmentGroup = {
  id: 12345,
  name: "JavaScript Fundamentals",
  course_id: 451,
  group_weight: 25,

  assignments: [
    {
      id: 1,
      name: "Variables",
      due_at: "2023-01-25",
      points_possible: 50
    },

    {
      id: 2,
      name: "Functions",
      due_at: "2023-02-27",
      points_possible: 100
    },

    {
      id: 3,
      name: "Loops",
      due_at: "2099-12-31",
      points_possible: 150
    }
  ]
};

// ==========================================
// LEARNER SUBMISSIONS
// ==========================================

const LearnerSubmissions = [

  {
    learner_id: 101,
    assignment_id: 1,

    submission: {
      submitted_at: "2023-01-24",
      score: 45
    }
  },

  {
    learner_id: 101,
    assignment_id: 2,

    submission: {
      submitted_at: "2023-02-28",
      score: 90
    }
  },

  {
    learner_id: 102,
    assignment_id: 1,

    submission: {
      submitted_at: "2023-01-25",
      score: 40
    }
  },

  {
    learner_id: 102,
    assignment_id: 2,

    submission: {
      submitted_at: "2023-02-20",
      score: 80
    }
  }
];

// ==========================================
// FUNCTION TO VALIDATE COURSE
// ==========================================

function validateCourse(course, group) {

  if (course.id !== group.course_id) {
    throw new Error("Assignment Group does not belong to this course.");
  }

}

// ==========================================
// FUNCTION TO FIND ASSIGNMENT
// ==========================================

function findAssignment(assignments, assignmentID) {

  for (let i = 0; i < assignments.length; i++) {

    if (assignments[i].id === assignmentID) {
      return assignments[i];
    }

  }

  return null;
}

// ==========================================
// FUNCTION TO CHECK VALID SCORE
// ==========================================

function isValidScore(score, pointsPossible) {

  if (typeof score !== "number") {
    return false;
  }

  if (typeof pointsPossible !== "number") {
    return false;
  }

  if (pointsPossible === 0) {
    return false;
  }

  return true;
}

// ==========================================
// MAIN FUNCTION
// ==========================================

function getLearnerData(course, group, submissions) {

  try {

    // Validate course and assignment group
    validateCourse(course, group);

    // Store learner results
    let learners = {};

    // Current date
    let currentDate = new Date();

    // Loop through submissions
    for (let i = 0; i < submissions.length; i++) {

      let submissionData = submissions[i];

      let learnerID = submissionData.learner_id;

      let assignmentID = submissionData.assignment_id;

      let score = submissionData.submission.score;

      let submittedDate = new Date(submissionData.submission.submitted_at);

      // Find assignment information
      let assignment = findAssignment(group.assignments, assignmentID);

      // Skip if assignment does not exist
      if (assignment === null) {
        continue;
      }

      // Skip if assignment is not due yet
      let dueDate = new Date(assignment.due_at);

      if (dueDate > currentDate) {
        continue;
      }

      // Validate score
      if (!isValidScore(score, assignment.points_possible)) {
        continue;
      }

      // Apply late penalty
      if (submittedDate > dueDate) {

        let penalty = assignment.points_possible * 0.10;

        score = score - penalty;

        // Prevent negative score
        if (score < 0) {
          score = 0;
        }
      }

      // Create learner object if missing
      if (!learners[learnerID]) {

        learners[learnerID] = {
          id: learnerID,
          totalScore: 0,
          totalPoints: 0
        };

      }

      // Calculate percentage
      let percentage = score / assignment.points_possible;

      // Store assignment percentage
      learners[learnerID][assignmentID] = percentage;

      // Add totals
      learners[learnerID].totalScore =
        learners[learnerID].totalScore + score;

      learners[learnerID].totalPoints =
        learners[learnerID].totalPoints + assignment.points_possible;
    }

    // Final array
    let results = [];

    // Loop through learners object
    for (let id in learners) {

      let learner = learners[id];

      // Calculate weighted average
      let average =
        learner.totalScore / learner.totalPoints;

      // Add average
      learner.avg = average;

      // Remove helper properties
      delete learner.totalScore;
      delete learner.totalPoints;

      // Add learner to results array
      results.push(learner);
    }

    return results;

  } catch (error) {

    console.log("ERROR: " + error.message);

  }

}

// ==========================================
// RUN PROGRAM
// ==========================================

const result = getLearnerData(
  CourseInfo,
  AssignmentGroup,
  LearnerSubmissions
);

// Display results
console.log(result);
