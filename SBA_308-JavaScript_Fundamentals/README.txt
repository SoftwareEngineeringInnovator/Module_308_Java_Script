# Skill-Based Assessment for Module 308

## Purpose
SBA-308 demonstrates my understanding of JavaScript fundamentals by showcasing the following:
* Employ basic JavaScript syntax accurately.
* Implement control flow structures such as conditionals and loops effectively.
* Use arrays and objects to organize and manage data.
* Develop functions to create reusable code.
* Utilize loops and iteration to navigate through data collections.
* Implement error handling to manage potential code failures gracefully.

## Installation/Access
1. Download the SBA-308 project files.
2. Open index.html in your web browser.
3. Right-click on the page and select 'Inspect', then 'Console' to open the JS console and view results.

## Resource Links
* Starter Code from CodeSandbox.io: https://codesandbox.io/p/sandbox/sba-308-example-26sg4j

## Functions: Definitions & Usage
All functions are located inside SBA308.js.

### 1. getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)
Returns an array of objects containing each learner's ID, average, and assignment scores.

* Calls `getAssigmentInfo` to match each student submission with its corresponding assignment data from the assignment group, tracking maximum possible points.
* Validates if assignments are due in the future compared to the current system date or if `points_possible` equals 0, skipping them if necessary.
* Groups processed submission grades dynamically by learner ID, calculating individual ratios and accumulating totals to compile a comprehensive, weighted final score.
* Returns an array containing objects for all evaluated learners and their relevant calculated data.

### 2. getAssigmentInfo(assigmentInformation, submitID)
Given an array of assignment objects and a target submission assignment ID, this helper function loops through the group to find the specific assignment details.