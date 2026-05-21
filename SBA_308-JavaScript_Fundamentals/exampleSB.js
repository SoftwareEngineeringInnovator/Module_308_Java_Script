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

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;
// }

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log("All Student Result", result);

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  let studentResult = [];

  try {
    // let learnerReport = {};
    if (CourseInfo.id !== AssignmentGroup.course_id) { // 1. CourseIn compare IDs
      throw new error ("Course ID Is Invalid!");
    }

    // loop assigments
    //submit assisgment id
    // Function to loop throught assigment groups
    // To get the latennes 10% deduct from submission score

    let assigmentScores = 0;
    let possiblePoints = 0;
    let newID = 0;
    let learnerReport = {};

    // let totalAvg = assigmentScores / possiblePoints
    for (let i = 0; i < LearnerSubmissions.length; i++) {
      // break

      let aveAssigment = 0;

      // calling function to get specific assigment information for Posible Points
      let assigmentInfo = getAssigmentInfo(AssignmentGroup.assignments, LearnerSubmissions[i].assignment_id);
      // console.log("assigmentInfo", assigmentInfo);
      // console.log(LearnerSubmissions[i].assignment_id);
      // break;

      // Validate if assigment is due in the future
      if (new Date(assigmentInfo.due_at) > new Date() || assigmentInfo.points_possible == 0) {
        continue;
      }

      if (assigmentInfo.points_possible == 0) {
        continue;
      }

      // console.log("Submission.score:", LearnerSubmissions[0].submission.score);
      // if (AssignmentGroup.assignment[0].id == LearnerSubmissions[i].assignment_id) { 

      // }

      //Calculate whole assigmentaverage


      if (newID != LearnerSubmissions[i].learner_id) {
        if (i == 0) {
          //first time learnerReports is empty then do nothing
        } else {
          studentResult.splice(1, 0, learnerReport)
          learnerReport = {};
        }
        newID = LearnerSubmissions[i].learner_id;
        learnerReport["id"] = newID;
        learnerReport["avg"] = 0;
        assigmentScores = 0;
        possiblePoints = 0;
      }

      //Finding if submitted late -> submitted date > assigment due date
      let lateness = false;
      if (new Date(LearnerSubmissions[i].submission.submitted_at) > new Date(assigmentInfo.due_at)) {
        lateness = true;
      }

      //Calculate single assigmentaverage / max points and subtract lateness
      let singleAssigmentScore = 0;

      if (lateness) {
        singleAssigmentScore = (LearnerSubmissions[i].submission.score - (assigmentInfo.points_possible * 0.1));

        // averageAssigment = (LearnerSubmissions[i].submission.score - (assigmentInfo.points_possible * 0.1)) / assigmentInfo.points_possible;
        //ID 1: averageAssigment
      } else {
        singleAssigmentScore = LearnerSubmissions[i].submission.score;

        // averageAssigment = LearnerSubmissions[i].submission.score / assigmentInfo.points_possible;
        //ID 1: averageAssigment
      }

      averageAssigment = singleAssigmentScore / assigmentInfo.points_possible;
      const assigmentID = assigmentInfo.id;
      learnerReport[assigmentID] = averageAssigment.toFixed(2);

      // console.log("Single Resultt", learnerReport);

      // caldulate whole total assigment average
      assigmentScores += singleAssigmentScore;
      possiblePoints += assigmentInfo.points_possible;
      let totalAvg = assigmentScores / possiblePoints

      // learrnerReport.avg = totalAvg;
      // To remove decimal points
      learnerReport.avg = totalAvg.toFixed(2);


      // Create Variable
      //collect all students reports
      // studentResult.push(learnerReport);
      // learnerReport = {};
      if ((i + 1) == LearnerSubmissions.length) {
        studentResult.splice(1, 0, learnerReport);
      }
    }


    return studentResult;
  } catch (err) {
    console.log("Error Encountered:", err.message);
  }
}

// Get single assigment information - Possible Points
function getAssigmentInfo(assigmentInformation, submitID) {
  let assigment = {}
  for (let idx in assigmentInformation) { // for (let idx = 0; i < assigmentInformation.length; i++)
    // console.log("aInfor" , assigmentInformation);
    if (assigmentInformation[idx].id == submitID) {
      assigment = assigmentInformation[idx];
      break;
      // retrun assigmentInformation[idx];
    }
  }
  return assigment;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log("All Student Result:", result);