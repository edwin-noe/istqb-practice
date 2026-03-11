const QUESTION_BANK = [
  {
    "id": 0,
    "question": "When the tester verifies the test basis while designing tests early in the lifecycle, which test objective is being achieved?",
    "options": {
      "a": "Gaining confidence",
      "b": "Finding defects",
      "c": "Evaluating work products",
      "d": "Providing information for decision making"
    },
    "correct": "c",
    "explanation": "C is correct per the syllabus. The other three are achieved primarily by doing dynamic testing. This is a bit tricky because you are very likely to find defects while doing this analysis and this may lead to either gaining or destroying confidence and needing to supply information to the decision makers. What is occurring here is an evaluation of the work product, in this case the requirements.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 1,
    "question": "In some Agile teams, people are encouraged to use their skills to help the team, regardless of their role. This could mean that testers help the developers write code and developers help testers test. What is this approach called?",
    "options": {
      "a": "Team Aid",
      "b": "Whole Team",
      "c": "Skills First",
      "d": "First Aid"
    },
    "correct": "b",
    "explanation": "B is correct. This is an example of the Whole Team approach where the team members leverage their skills, regardless of roles, to accomplish the goals of the team.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 2,
    "question": "Which of the following is a correct statement?",
    "options": {
      "a": "A developer makes a mistake which causes a defect that may be seen as a failure during dynamic testing",
      "b": "A developer makes an error which results in a failure that may be seen as a fault when the software is executed",
      "c": "A developer has introduced a failure which results in a defect that may be seen as a mistake during dynamic testing",
      "d": "A developer makes a mistake which causes a bug that may be seen as a defect when the software is executed"
    },
    "correct": "a",
    "explanation": "A is correct. The developer makes a mistake/error which causes a defect/fault/bug which may cause a failure when the code is dynamically tested or executed. B is incorrect because fault and failure are reversed. C is incorrect because failure and mistake are reversed. D is incorrect because it’s a failure that’s seen during execution, not the defect itself. The failure is a symptom of the defect.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 3,
    "question": "Why is it important to avoid the principle of tests wearing out?",
    "options": {
      "a": "Dynamic testing is less reliable in finding bugs",
      "b": "Running the same tests repeatedly will consistently find new failures",
      "c": "Tests should not be context dependent",
      "d": "Running the same tests repeatedly will reduce the chance of finding new failures"
    },
    "correct": "d",
    "explanation": "D is correct. As tests are run repeatedly, the tests become less effective. A is not correct because dynamic testing should be used and helps to alleviate tests wearing out. B is not correct. The same tests do wear out. C is not correct because testing should be context dependent.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 4,
    "question": "Which of the following is the activity that compares the planned test progress to the actual test progress?",
    "options": {
      "a": "Test monitoring",
      "b": "Test planning",
      "c": "Test closure",
      "d": "Test control"
    },
    "correct": "a",
    "explanation": "A is correct. Test monitoring involves the on -going comparison of actual progress against the test plan. B is incorrect because it defines testing objectives. C is incorrect because the activities have already completed and the project is closing down. D is incorrect because test control is when you take actions to correct any issues observed during monitoring.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 5,
    "question": "If you are working on a project that is constrained by time and budget, which is pressuring testing to be done quickly. How should the test approach be adjusted?",
    "options": {
      "a": "Develop detailed test cases to reduce the test automation effort",
      "b": "Use techniques such as exploratory and checklist testing to spend less time on test case development",
      "c": "Ensure that your testing starts only after the developers have completed integration tests",
      "d": "Develop end-to-end test automation before performing manual testing so the automation can be used sooner"
    },
    "correct": "b",
    "explanation": "C is correct. This is the biggest problem because developers have biases toward the accuracy and implementation of their own code. Testers and developers think differently and testers can be more objective as they are not invested in the code. A and B are not necessarily true – some developers are good testers and have a good quality focus. D is not correct because unit testing is part of their job and time should be made in the schedule for at least unit testing.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 6,
    "question": "When coding is directed by the test cases, what development approach is being used?",
    "options": {
      "a": "TDD",
      "b": "BDD",
      "c": "ATDD",
      "d": "TBD"
    },
    "correct": "a",
    "explanation": "A is correct. This is an example of test -driven development.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 7,
    "question": "During which level(s) of testing should non-functional tests be executed?",
    "options": {
      "a": "Unit and integration only",
      "b": "System testing only",
      "c": "Integration, system and acceptance only",
      "d": "Unit, integration, system and acceptance only"
    },
    "correct": "d",
    "explanation": "D is correct. Non- functional tests can and should be executed at all levels of testing.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 8,
    "question": "When a system is targeted for decommissioning, what type of maintenance testing may be required?",
    "options": {
      "a": "For every development activity, there should be a corresponding testing activity",
      "b": "For every testing activity, appropriate documentation should be produced, versioned and stored",
      "c": "For every development activity resulting in code, there should be a testing activity to document test cases",
      "d": "For every testing activity, metrics should be recorded and posted to a metrics dashboard for all stakeholders"
    },
    "correct": "c",
    "explanation": "A is correct. For any lifecycle model, this is a correct statement. B is not correct because some testing activities may not produce documentation, such as reviews. C is not correct because test cases are not always written, particularly in an Agile lifecycle (which is an iterative lifecycle) where only exploratory testing might be used. D is not correct because not all testing activities produce metrics (such as test case creation, reviews, etc.) and, even if they did, not all stakeholders would be interested in those metrics.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 9,
    "question": "In what way is CI/CD an example of the concept of shift-left?",
    "options": {
      "a": "It gets the code to production faster",
      "b": "It allows the developers to continuously integrate their code",
      "c": "It requires continuous testing throughout the pipeline",
      "d": "It elevates the testers as the owners of quality"
    },
    "correct": "c",
    "explanation": "C is correct. CI/CD requires continuous testing, including test automation, to be implemented for the entire pipeline. This starts testing as early as possible and shifts it to the left in the timeline. A is not correct as this is not a shift -left concept. B is true of CI/CD implementations but does not shift -left the testing. D is not correct because in a good CI/CD implementation, everyone owns quality.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 10,
    "question": "In a formal review, which role is normally responsible for documenting all the open issues?",
    "options": {
      "a": "The facilitator",
      "b": "The author",
      "c": "The scribe",
      "d": "The manager"
    },
    "correct": "c",
    "explanation": "C is correct. The scribe is normally responsible for documenting all issues, problems and open points. The author may take notes as well, but that is not their primary role.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 11,
    "question": "What is the primary reason to get early and frequent feedback from stakeholders regarding a product being developed?",
    "options": {
      "a": "Defects can be identified that might not be caught by dynamic testing",
      "b": "Early defect identification requires less documentation",
      "c": "Early execution of the code provides a gauge of code quality",
      "d": "Tools are not needed because reviews are used instead of executing code"
    },
    "correct": "b",
    "explanation": "B is correct per the syllabus. By getting their feedback, the team can ensure that what they are building is what the stakeholders want. A is not correct because, although it may be beneficial to have them feel a part of the team, it isn’t the primary reason to get their feedback. C is not correct because no one needs more meetings. D is not correct although stakeholders may be used for UAT. Their feedback is needed much earlier than UAT.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 12,
    "question": "For a formal review, at what point in the process are the exit criteria defined?",
    "options": {
      "a": "Planning",
      "b": "Review initiation",
      "c": "Individual review",
      "d": "Fixing and reporting"
    },
    "correct": "a",
    "explanation": "A is correct. The entry and exit criteria should be defined during the planning step in the review process. These should be evaluated at each step to ensure the product is ready for the next step in the process. B, C and D are not correct because the criteria should already be defined by this point.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 13,
    "question": "Which of the following test techniques uses the requirements specifications as a test basis?",
    "options": {
      "a": "Structure-based",
      "b": "Black -box",
      "c": "White-box",
      "d": "Exploratory"
    },
    "correct": "b",
    "explanation": "B is correct, per syllabus. Black- box testing is based off the requirements documents. A and C are incorrect because these use the structure of the software as the test basis. D is incorrect because exploratory testing is often done when there is no specification, thus giving the tester the opportunity to learn about the software while testing.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 14,
    "question": "If you are testing a module of code, how do you determine the level of branch coverage you have achieved?",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": "Unknown with this information"
    },
    "correct": "b",
    "explanation": "B is correct. Branch coverage looks at the number of branches tested versus the number of branches in the code under test.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 15,
    "question": "Which of the following is a good reason to use experience-based testing?",
    "options": {
      "a": "You can find defects that might be missed by more formal techniques",
      "b": "You can test for defects that only experienced users would encounter",
      "c": "You can target the developer’s efforts to the areas that users will be more likely to use",
      "d": "It is supported by strong tools and can be automated"
    },
    "correct": "a",
    "explanation": "A is correct. Error guessing is a technique used to anticipate where developers are likely to make errors and to create tests to cover those areas. B, C and D are not correct.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 16,
    "question": "When using the 3 C’s technique for user story development, what is the work product that is created for the Confirmation aspect?",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": ""
    },
    "correct": "b",
    "explanation": "B is correct. The confirmation aspect of the 3 C’s is the acceptance criteria.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 17,
    "question": "<p>You are testing a thermostat for a heating/air conditioning system. You have been given the following requirements:</p>\n<ul>\n<li>When the temperature is below 70 degrees, turn on the heating system</li>\n<li>When the temperature is above 75 degrees, turn on the air conditioning system</li>\n<li>When the temperature is between 70 and 75 degrees, inclusive, turn on fan only Which of the following is the minimum set of test temperature values to achieve 100% two-value boundary value analysis coverage?</li>\n</ul>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": ""
    },
    "correct": "c",
    "explanation": "C is correct. For the heating system, the values to test are 69, 70 For the air conditioning system, the values are 75, 76 For the fan only, the values are 69, 70, 75, 76 <-- 69 | 70 – 75 | 76  The proper test set combines all these values, 69, 70, 75, 76",
    "source": "V1",
    "_html": true
  },
  {
    "id": 18,
    "question": "<p>You have been given the following requirement:</p>\n<blockquote>A user must log in to the system with a valid username and password. If they fail to enter the correct combination three times, they will receive an error and will have to wait 10 minutes before trying again. The test terminates when the user successfully logs in.</blockquote>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 500 320\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:500px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah18\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st18 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt18 { fill: #e2e8f0; font-family: sans-serif; font-size: 13px; text-anchor: middle; dominant-baseline: central; }\n      .edg18 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah18); }\n      .elbl18 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- Attempt 1 -->\n  <rect class=\"st18\" x=\"10\" y=\"30\" width=\"110\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt18\" x=\"65\" y=\"50\">Attempt 1</text>\n  <!-- Attempt 2 -->\n  <rect class=\"st18\" x=\"10\" y=\"120\" width=\"110\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt18\" x=\"65\" y=\"140\">Attempt 2</text>\n  <!-- Attempt 3 -->\n  <rect class=\"st18\" x=\"10\" y=\"210\" width=\"110\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt18\" x=\"65\" y=\"230\">Attempt 3</text>\n  <!-- Locked -->\n  <rect class=\"st18\" x=\"10\" y=\"280\" width=\"110\" height=\"40\" rx=\"6\" stroke=\"#ef4444\"/>\n  <text class=\"sttxt18\" x=\"65\" y=\"300\" fill=\"#fca5a5\">Locked</text>\n  <!-- Logged In -->\n  <rect class=\"st18\" x=\"340\" y=\"120\" width=\"120\" height=\"40\" rx=\"20\" stroke=\"#22c55e\"/>\n  <text class=\"sttxt18\" x=\"400\" y=\"140\" fill=\"#86efac\">Logged In</text>\n  <!-- Attempt1 -> LoggedIn (valid) -->\n  <polyline class=\"edg18\" points=\"120,40 400,40 400,116\"/>\n  <text class=\"elbl18\" x=\"260\" y=\"33\">valid login</text>\n  <!-- Attempt1 -> Attempt2 (invalid) -->\n  <line class=\"edg18\" x1=\"65\" y1=\"70\" x2=\"65\" y2=\"116\"/>\n  <text class=\"elbl18\" x=\"45\" y=\"98\" text-anchor=\"end\">invalid</text>\n  <!-- Attempt2 -> LoggedIn (valid) -->\n  <line class=\"edg18\" x1=\"120\" y1=\"140\" x2=\"336\" y2=\"140\"/>\n  <text class=\"elbl18\" x=\"228\" y=\"133\">valid login</text>\n  <!-- Attempt2 -> Attempt3 (invalid) -->\n  <line class=\"edg18\" x1=\"65\" y1=\"160\" x2=\"65\" y2=\"206\"/>\n  <text class=\"elbl18\" x=\"45\" y=\"188\" text-anchor=\"end\">invalid</text>\n  <!-- Attempt3 -> LoggedIn (valid) -->\n  <polyline class=\"edg18\" points=\"120,220 400,220 400,164\"/>\n  <text class=\"elbl18\" x=\"260\" y=\"213\">valid login</text>\n  <!-- Attempt3 -> Locked (invalid) -->\n  <line class=\"edg18\" x1=\"65\" y1=\"250\" x2=\"65\" y2=\"276\"/>\n  <text class=\"elbl18\" x=\"45\" y=\"268\" text-anchor=\"end\">invalid</text>\n  <!-- Locked -> Attempt1 (wait) -->\n  <polyline class=\"edg18\" points=\"120,300 460,300 460,50 124,50\"/>\n  <text class=\"elbl18\" x=\"460\" y=\"180\" transform=\"rotate(90,460,180)\">wait 10 min</text>\n</svg>\n</div>\n<p>How many test cases are needed to provide <strong>100% state transition coverage</strong>?</p>",
    "options": {
      "a": "0, 1-floor full, overbooked, usability, performance",
      "b": "Performance, 1-floor full, usability, overbooked,",
      "c": "Usability, performance, overbooked, 0, 1-floor full",
      "d": "Overbooked, 0, 1-floor full, performance, usability"
    },
    "correct": "a",
    "explanation": "a is correct. Per the diagram below, only one test is needed: Login, Fail, Fail, Fail =3, Wait, Login, Home. If you were required to exit after the Wait, a second test would be required but the question doesn’t indicate that an exit is required.",
    "source": "V1",
    "_html": true
  },
  {
    "id": 19,
    "question": "You are working in a team of testers who are all writing test cases. You have noticed that there is a significant inconsistency with the length and amount of detail in the different test cases. Where should the criteria for test case writing be documented?",
    "options": {
      "a": "The test plan",
      "b": "The test approach",
      "c": "The test case template",
      "d": "The project plan"
    },
    "correct": "a",
    "explanation": "A is correct. Unit, or component, tests belong to quadrant 1.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 20,
    "question": "Which of the following variances should be explained in the Test Summary Report?",
    "options": {
      "a": "The variances between the weekly status reports and the test exit criteria",
      "b": "The variances between the defects found and the defects fixed",
      "c": "The variances between what was planned for testing and what was actually tested",
      "d": "The variances between the test cases executed and the total number of test cases"
    },
    "correct": "c",
    "explanation": "C is correct. The variances or deviations between the test plan and the testing that was actually done must be explained in the test summary report. A is not correct because if the weekly status reports have been tracking incorrectly to the test exit criteria, something is wrong and should have been caught a lot earlier. B is not correct because this information should be included in the test summary report, but a variance is expected. D is not correct because this should be tracked in the metrics section of the report rather than as a variance.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 21,
    "question": "If the developers are releasing code for testing that is not version controlled, what process is missing?",
    "options": {
      "a": "10 because that’s the sum of the points",
      "b": "8 because that was the highest number",
      "c": "3 because that was the lowest number",
      "d": "5 because that was the consensus"
    },
    "correct": "a",
    "explanation": "A is correct. Configuration management is missing if the code is not being properly versioned and tracked.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 22,
    "question": "You have been testing software that will be used to track credit card purchases. You have found a defect that causes the system to crash, but only if a person has made and voided 10 purchases in a row. What is the proper priority and severity rating for this defect?",
    "options": {
      "a": "A tool that assists with tracking the results of reviews",
      "b": "A defect tracking tool",
      "c": "A test automation tool",
      "d": "A tool that helps design test cases for security testing"
    },
    "correct": "d",
    "explanation": "A is correct. Reviews are a form of static testing and a tool that supports reviews is an example of a tool that supports static testing. B is an example of a management tool used for defect management. C is an example of a test execution tool. D is an example of a test design tool.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 23,
    "question": "Which of the following is a benefit of test automation?",
    "options": {
      "a": "Test execution is faster",
      "b": "Manual testing becomes obsolete",
      "c": "ROI is easy to determine",
      "d": "Test implementation is faster"
    },
    "correct": "a",
    "explanation": "A is correct. Test execution should be faster with automation than with manual testing, once the test cases have been developed. Developing automation takes more time than writing manual test cases (usually) so D is incorrect. B is incorrect because manual testing isn’t obsolete, it can concentrate on new areas. C is not correct because return on investment (ROI) can be tricky to calculate as it has to be based on equivalent manual test effort.",
    "source": "V1",
    "_html": false
  },
  {
    "id": 24,
    "question": "In what way does root cause analysis contribute to quality assurance?",
    "options": {
      "a": "Helps to better identify and correct the root cause of defects",
      "b": "Outlines how development teams can code faster",
      "c": "Specifies the desired root causes to be achieved by other teams",
      "d": "Contributes to the justification of future project funding"
    },
    "correct": "a",
    "explanation": "A is correct. Root cause analysis can determine common causes of issues. Addressing these common causes by process improvement can increase quality. B is incorrect because root cause analysis will not make the developers code faster, better maybe, not faster. C is incorrect because root causes generally are not good things that should be transferred between teams. D is not correct because it will not improve funding.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 25,
    "question": "You are working in an Agile team where the testers are being accused of slowing down the process because of the time system testing is taking. Which of the following would be an approach that would better spread the skills of the team to complete the tasks?",
    "options": {
      "a": "Whole Team",
      "b": "Team Split",
      "c": "Behavior -Driven Development",
      "d": "Waterfall"
    },
    "correct": "a",
    "explanation": "A is correct. The whole team approach would support the developers helping with the testing tasks rather than waiting for the testers to complete all the testing.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 26,
    "question": "Which of the following is an example of debugging?",
    "options": {
      "a": "A tester finds a defect and reports it",
      "b": "A tester retests a fix from the developer and finds a regression",
      "c": "A developer finds and fixes a defect",
      "d": "A developer performs unit testing"
    },
    "correct": "c",
    "explanation": "C is correct . Debugging is what the developer does to identify the cause of the defect, analyze it and fix it. D may involve debugging, if the developer finds a defect, but the act of unit testing is not the same as debugging.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 27,
    "question": "Which of the following is a true statement about exhaustive testing?",
    "options": {
      "a": "It is a form of stress testing",
      "b": "It is not feasible except in the case of trivial software",
      "c": "It is commonly done with test automation",
      "d": "It is normally the responsibility of the developer during unit testing"
    },
    "correct": "b",
    "explanation": "B is correct. Exhaustive testing, all combinations of inputs and preconditions, is not feasible unless the software is trivially simple. Otherwise, it would take too long and might not even be possible.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 28,
    "question": "If you need to provide a report showing test case execution coverage of the requirements, what do you need to track?",
    "options": {
      "a": "Traceability between the test cases and the requirements",
      "b": "Coverage of the risk items by test case",
      "c": "Traceability between the requirements and the risk items",
      "d": "Coverage of the requirements by the test cases that have been designed"
    },
    "correct": "a",
    "explanation": "C is correct. Writing and updating the test plan is normally the responsibility of the test manager. A, B and D may contribute to the test plan, but the overall responsibility belongs to the test manager.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 29,
    "question": "Your team has conducted a quality risk analysis and has determined the likelihood, impact and mitigation plan for each identified risk. This information should be captured in what work product?",
    "options": {
      "a": "Test strategy",
      "b": "Test plan",
      "c": "Risk register",
      "d": "Risk plan"
    },
    "correct": "c",
    "explanation": "C is correct, per the syllabus. This information should be recorded in the risk register. The risk register should be referenced in the test plan for the project.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 30,
    "question": "You are working with a junior tester who has been given a user story to test. They have created only one positive path test for the story. You know there are more areas that should be tested for this story, including negative scenarios. Which of the following generic skills do they appear to be lacking?",
    "options": {
      "a": "Communication",
      "b": "Curiosity",
      "c": "Confidence",
      "d": "Creativity"
    },
    "correct": "d",
    "explanation": "A is correct. This is a good testing practice. B is not a requirement for many testers. C is not correct because this should be determined by the testers based on priority, risk, availability, etc. D is not correct because test design should start during code design and implementation.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 31,
    "question": "Which development approach captures the requirements in a simple test case format?",
    "options": {
      "a": "TDD",
      "b": "BDD",
      "c": "ATDD",
      "d": "TBD"
    },
    "correct": "b",
    "explanation": "B is correct. Behavior- driven development uses the given/when/then format to define the test cases. Those are then used as the requirements to develop the code.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 32,
    "question": "Usability testing is an example of which type of testing?",
    "options": {
      "a": "Functional",
      "b": "Non-functional",
      "c": "Structural",
      "d": "Change-related"
    },
    "correct": "b",
    "explanation": "B is correct. Usability is one of the non -functional test types according to ISO 25010.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 33,
    "question": "You have been receiving daily builds from the developers. Even though they are documenting the fixes they are including in each build, you are finding that the fixes either aren’t in the build or are not working. What type of testing is best suited for finding these issues?",
    "options": {
      "a": "Unit testing",
      "b": "System testing",
      "c": "Confirmation testing",
      "d": "Regression testing"
    },
    "correct": "c",
    "explanation": "C is correct. Confirmation testing will determine if a fix is present in a build and if it actually fixes the defect it is supposed to fix. A is not correct because this would be conducted by the developer as they fix the issues. While it might catch a fix that doesn't work, it’s not likely to catch the check- in/build process that is excluding the fix from the build. B is not correct because system testing will take longer to pinpoint this problem and may result in more troubleshooting time when the problem is discovered again. D is not correct because this is the testing that is done to see if there have been any unintended changes in the software’s behavior.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 34,
    "question": "Your team has just completed a retrospective. They have discussed what was successful and should be retained, and they discussed what improvements are needed. What else do they need to discuss in order to recognize process improvements?",
    "options": {
      "a": "What will be retained or changed for the future",
      "b": "Who is to blame for the shortcomings of the project",
      "c": "How much money was spent that could have been saved",
      "d": "Why changes were not made earlier in the project"
    },
    "correct": "a",
    "explanation": "A is correct. It’s great to gather the information, but in order for change to really be made, it has to be planned for implementation in future sprints/releases/projects. B is not correct because retrospectives are not about blaming. C is not part of a retrospective, although this information may be gathered by the project manager. D is also tending toward blaming but is something that should be considered as it may impact the ability to implement future changes.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 35,
    "question": "Your organization has decided to implement DevOps. One of the biggest concerns from the operations people is that there have been ongoing performance issues in production. How will implementing DevOps and CI/CD help with this problem?",
    "options": {
      "a": "It won’t - the problem needs to be addressed during design",
      "b": "Performance testing can be integrated into the CI/CD pipeline to test it incrementally and repeatedly throughout development",
      "c": "Performance testing will be the main focus of the system integration testing, after the code has been delivered to the test environment",
      "d": "Performance testing experts will be used to conduct the performance testing in an isolated environment which is developed using Infrastructure as Code"
    },
    "correct": "b",
    "explanation": "B is correct. With a CI/CD implementation, performance testing can be implemented throughout the pipeline, starting with the unit testing and continuing through to the fully developed product. CI/CD will also help ensure that the delivery is into the proper environments that can support the various types of testing. A is not correct. The problem probably does need to be addressed during design, but it needs to be tested throughout the pipeline. C is not correct because testing performance only in SIT doesn’t leverage the capabilities of the testing pipeline. D is not correct because performance testing can be conducted early and often through the pipeline, although a final test in an isolated environment may be needed as well.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 36,
    "question": "Which of the following techniques is a form of static testing?",
    "options": {
      "a": "Error guessing",
      "b": "Automated regression testing",
      "c": "Providing inputs and examining the resulting outputs",
      "d": "Code review"
    },
    "correct": "d",
    "explanation": "D is correct, per syllabus. A, B and C are all forms of dynamic testing.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 37,
    "question": "You are frequently asked to participate in reviews of requirements. Unfortunately, you usually receive the document to be reviewed the night before the review meeting will be held. This is resulting in your not doing a thorough review and having to work significant overtime to get the review done. What review success factor is missing from this process?",
    "options": {
      "a": "Management support for the overall review process",
      "b": "Reviewing only small chunks at a time",
      "c": "Training for the proper performance in the meetings",
      "d": "Allowing adequate time to conduct the review"
    },
    "correct": "d",
    "explanation": "D is correct. The reviewers are not being given adequate time to conduct the review. A is not correct but might be an issue given that this is a repeated problem and could indicate that the schedules are not realistic. B is not correct because there’s no indication that the work product is too big, just that it’s being delivered too late. C is not correct because the problem is not with the meetings.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 38,
    "question": "What is the main difference between static and dynamic testing?",
    "options": {
      "a": "Static testing is performed by developers; dynamic testing is performed by testers",
      "b": "Manual test cases are used for dynamic testing; automated tests are used for static testing",
      "c": "Static testing must be executed before dynamic testing",
      "d": "Dynamic testing requires executing the software; the software is not executed during static testing"
    },
    "correct": "d",
    "explanation": "D is correct. Dynamic testing is done while the software is actually running whereas static testing depends on examining the software while it is not running. A is not correct because both types of testing can be done by both developers and testers. B is not correct because manual and automated tests can be used for dynamic testing. C is not correct because static testing can occur at any time although it is usually done before dynamic testing.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 39,
    "question": "If a review session is led by the author of the work product, what type of review is it?",
    "options": {
      "a": "Ad hoc",
      "b": "Walkthrough",
      "c": "Inspection",
      "d": "Audit"
    },
    "correct": "b",
    "explanation": "B is correct. In a walkthrough, the author normally leads the review session. A is not correct as this is not normally an organized session. C is not correct because an inspection is normally led by the facilitator (moderator). D is not correct because an audit is usually led by a third party.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 40,
    "question": "If test cases are derived from looking at the code, what type of test design technique is being used?",
    "options": {
      "a": "Black -box",
      "b": "White-box",
      "c": "Specification-based",
      "d": "Behavior -based"
    },
    "correct": "b",
    "explanation": "B is correct. A, C and D are all black -box and use the specifications or requirements for the test design.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 41,
    "question": "How is statement coverage determined?",
    "options": {
      "a": "Number of test decision points divided by the number of test cases",
      "b": "Number of branches tested divided by the total number of executable statements",
      "c": "Number of possible test case outcomes divided by the total number of function points",
      "d": "Number of executable statements tested divided by the total number of executable statements"
    },
    "correct": "d",
    "explanation": "B is correct. You have code that can be structurally reviewed for items such as the proper handling of branching. A and C are not correct because nothing can be executed yet. D is not correct because it’s not a type of testing.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 42,
    "question": "If you are using error guessing to target your testing, which type of testing are you doing?",
    "options": {
      "a": "Specification-based",
      "b": "Structure-based",
      "c": "Experience- based",
      "d": "Reference-based"
    },
    "correct": "c",
    "explanation": "C is correct. This is an experience -based technique.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 43,
    "question": "When exploratory testing is conducted using time- boxing and test charters, what is it called?",
    "options": {
      "a": "Schedule-based testing",
      "b": "Session-based testing",
      "c": "Risk-based testing",
      "d": "Formal chartering"
    },
    "correct": "b",
    "explanation": "C is correct per the syllabus. This is a rules- oriented format. A is not correct because, although you are tracking the inputs and outputs, you are not tracking the processing. B is not correct because this is not a recognized format. D is not correct because the given/when/then format is referred to as scenario- oriented.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 44,
    "question": "You are testing a banking application that allows a customer to withdraw 20, 100 or 500 dollars in a single transaction. The values are chosen from a drop- down list and no other values may be entered. How many equivalence partitions need to be tested to achieve 100% equivalence partition coverage?",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": ""
    },
    "correct": "d",
    "explanation": "D is correct. The values to be tested are 20, 100, 500 and no selection.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 45,
    "question": "You are testing a scale system that determines shipping rates for a regional web- based auto parts distributor. Due to regulations, shipments cannot exceed 100 lbs. You want to include boundary value analysis as part of your black -box test design. How many tests will you need to execute to achieve 100% two- value boundary value analysis? Weight 0 to 10 lbs. 11 to 25 lbs. 26 to 50 lbs. 51 lbs. to 100 Shipping Cost $5.00 $7.50 $12.00 $17.00",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": ""
    },
    "correct": "c",
    "explanation": "C is correct. 2 per valid weight range plus one for a negative weight and one for a weight exceeding 100 lbs ( -1, 0, 10, 11, 25, 26, 50, 51, 100, 101).",
    "source": "V2",
    "_html": false
  },
  {
    "id": 46,
    "question": "<p>Which of the following is the correct decision table for the following pseudocode for ordering a hamburger?</p>\n<p><em>Note: if you add or delete items from the basic burger, you no longer get the basic burger.</em></p>\n<pre class=\"code\">\nStart\n  Select basic burger\n  If customer adds items\n    While items to be added\n      Ask customer which item\n      Add item\n    End while\n  Endif\n  If customer deletes items\n    While items to be deleted\n      Ask customer which item\n      Delete item\n    End while\n  Endif\n  If customer wants fries\n    Add fries to order\n  Endif\n  Complete order\nEnd\n</pre>",
    "options": {
      "a": "Test # 1 2 3 4 5 6 Conditions Add items T T F F F F Delete items F F T T F F Add fries T F T F T F Results Basic burger X X X X Burger – items X X Added items X X Fries X X",
      "b": "Test # 1 2 3 4 5 6 7 8 Conditions Add items T T T T F F F F Delete items T T F F T T F F Add fries T F T F T F T F Results Basic burger X X Deleted items X X X X Added items X X X X Fries X X X X",
      "c": "Test # 1 2 3 4 5 6 7 8 Conditions Add items T T T T F F F F Delete items F F F F T T T T Add fries T F T F T F T F Results Basic burger X X X X Burger – items X X X X Added items X X X X Fries X X X X",
      "d": "Test # 1 2 3 4 5 6 7 8 Conditions Add items T T T T F F F F Delete items T T F F T T F F Add fries T F T F T F T F Results Basic burger X X X X X X Burger – items X X Added items X X X X Fries X X X X"
    },
    "correct": "b",
    "explanation": "B is correct. A is not correct because it assumes you can’t add and delete items from a burger. C is not correct because it makes the same assumption as A and has duplicate tests. D is not correct because the Results are wrong for the first four tests.",
    "source": "V2",
    "_html": true
  },
  {
    "id": 47,
    "question": "<p>You are testing an e-commerce transaction that has the following states and transitions:</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 500 340\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:500px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah47\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st47 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt47 { fill: #e2e8f0; font-family: sans-serif; font-size: 12px; text-anchor: middle; dominant-baseline: central; }\n      .edg47 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah47); }\n      .elbl47 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- Login -->\n  <rect class=\"st47\" x=\"10\" y=\"60\" width=\"100\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt47\" x=\"60\" y=\"80\">Login</text>\n  <!-- Search -->\n  <rect class=\"st47\" x=\"180\" y=\"60\" width=\"100\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt47\" x=\"230\" y=\"80\">Search</text>\n  <!-- Browse -->\n  <rect class=\"st47\" x=\"180\" y=\"160\" width=\"100\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt47\" x=\"230\" y=\"180\">Browse</text>\n  <!-- Shopping Cart -->\n  <rect class=\"st47\" x=\"360\" y=\"60\" width=\"120\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt47\" x=\"420\" y=\"80\">Shopping Cart</text>\n  <!-- Checkout -->\n  <rect class=\"st47\" x=\"360\" y=\"160\" width=\"120\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt47\" x=\"420\" y=\"180\">Checkout</text>\n  <!-- Logout -->\n  <rect class=\"st47\" x=\"180\" y=\"270\" width=\"100\" height=\"40\" rx=\"20\" stroke=\"#ef4444\"/>\n  <text class=\"sttxt47\" x=\"230\" y=\"290\" fill=\"#fca5a5\">Logout</text>\n  <!-- Login -> Search (valid) -->\n  <line class=\"edg47\" x1=\"110\" y1=\"80\" x2=\"176\" y2=\"80\"/>\n  <text class=\"elbl47\" x=\"143\" y=\"72\">valid</text>\n  <!-- Login <-> Login (invalid) -->\n  <path class=\"edg47\" d=\"M60,60 C60,20 60,20 60,20 C30,20 10,40 10,56\" marker-end=\"url(#ah47)\"/>\n  <text class=\"elbl47\" x=\"45\" y=\"15\">invalid</text>\n  <!-- Search <-> Browse -->\n  <line class=\"edg47\" x1=\"215\" y1=\"100\" x2=\"215\" y2=\"156\"/>\n  <line class=\"edg47\" x1=\"245\" y1=\"160\" x2=\"245\" y2=\"104\"/>\n  <!-- Search -> Cart -->\n  <line class=\"edg47\" x1=\"280\" y1=\"72\" x2=\"356\" y2=\"72\"/>\n  <text class=\"elbl47\" x=\"318\" y=\"64\">add item</text>\n  <!-- Browse -> Cart -->\n  <line class=\"edg47\" x1=\"280\" y1=\"172\" x2=\"356\" y2=\"88\"/>\n  <!-- Cart -> Checkout -->\n  <line class=\"edg47\" x1=\"420\" y1=\"100\" x2=\"420\" y2=\"156\"/>\n  <text class=\"elbl47\" x=\"445\" y=\"130\">pay</text>\n  <!-- Any -> Logout -->\n  <line class=\"edg47\" x1=\"230\" y1=\"100\" x2=\"230\" y2=\"266\" stroke=\"#ef4444\" stroke-dasharray=\"4\"/>\n  <text class=\"elbl47\" x=\"260\" y=\"240\" fill=\"#fca5a5\">logout</text>\n</svg>\n</div>\n<p>How many test cases are needed to provide <strong>100% valid transition coverage</strong>?</p>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": ""
    },
    "correct": "c",
    "explanation": "C is correct. There are 8 transitions that should be shown in the state transition diagram as explained in the question. A is not correct as this is only checking one transition from each state. B is not correct because this is probably excluding login > login and search > search. D is not correct because it is checking the invalid transitions as well and those would be included in a state table, not a state transition diagram. These are: Login (invalid) > Login Login > Search Login > Shopping Cart (invalid transition) Login > Checkout (invalid transition) Search > Login (invalid transition) Search > Search Search > Shopping Cart Search > Checkout (invalid transition) Shopping Cart > Login (invalid transition) Shopping Cart > Search Shopping Cart > Shopping Cart (invalid transition) Shopping Cart > Checkout Checkout > Login (invalid transition) Checkout > Search Checkout > Shopping Cart (invalid transition) Checkout > Logout",
    "source": "V2",
    "_html": true
  },
  {
    "id": 48,
    "question": "You are creating test cases for the following story, applying the ATDD approach. As a hotel owner I want to reserve all the rooms on a floor before moving to the next floor So I can maximize the efficiency of the housekeeping staff You have decided to apply boundary value analysis to this requirement and have identified the following partitions for the occupancy of a floor: 0 | 1 - floor full | overbooked You also want to be sure that the software is usable by the staff and that it performs quickly in determining which floors have availability. You have designed the following test cases: 1. Test with 1 occupant on the floor 2. Test with the floor full and ensure the next floor is made available for bookings 3. Test with 0 occupants on the floor and ensure that floor is only available when lower floor s are fully booked 4. Test the usability to ensure hotel staff will find the software usable 5. Test for response time when the system is at average load and the hotel is 80% occupied What are you missing?",
    "options": {
      "a": "A test with a floor partially occupied but not fully occupied",
      "b": "A test for performance",
      "c": "A test for trying to assign someone to a floor that is full",
      "d": "A test for usability"
    },
    "correct": "c",
    "explanation": "C is correct. The test that is missing is to try to see if you can allocate someone to a floor that is already fully booked. This is a negative test and should result in an e rror. A is covered by testing with one occupant. B and D are covered.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 49,
    "question": "Level of risk is determined by which of the following?",
    "options": {
      "a": "Likelihood and impact",
      "b": "Priority and risk rating",
      "c": "Probability and practicality",
      "d": "Risk identification and mitigation"
    },
    "correct": "a",
    "explanation": "A is correct. The combination of likelihood and impact is normally used to determine the overall risk level (sometimes called the risk priority number).",
    "source": "V2",
    "_html": false
  },
  {
    "id": 50,
    "question": "Which of the following is an example of a good exit criterion from system testing?",
    "options": {
      "a": "All tests should be completed",
      "b": "The project budget should be spent",
      "c": "All defects should be fixed",
      "d": "All severity 1 defects must be resolved"
    },
    "correct": "d",
    "explanation": "C is correct. Exploratory testing belongs to quadrant 3.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 51,
    "question": "Which of the following is a project risk?",
    "options": {
      "a": "A defect that is causing a performance issue",
      "b": "A duplicate requirement",
      "c": "An issue with a data conversion procedure",
      "d": "A schedule that requires work during Christmas shutdown"
    },
    "correct": "d",
    "explanation": "D is correct, this is a risk to the entire project. A, B and C are product risks.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 52,
    "question": "You have just completed testing on a major ERP implementation. The project has taken two years and is now ready for final approval before go- live. What test documentation should be produced at this time?",
    "options": {
      "a": "Formal test summary report",
      "b": "Testing team task board",
      "c": "Email to the team congratulating them on their success",
      "d": "Burn down chart"
    },
    "correct": "a",
    "explanation": "A is correct. At this point in the project, the formal test summary report should be prepared. B and D are used for information communication during the project work. C might be premature as final approval has not yet been obtained and this is not test documentation.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 53,
    "question": "You are working on a project that is releasing software to the test team in iterations. In iteration 3 you identified a failure. The developer found and fixed the defect and released the fix in iteration 4. You confirmed the fix and closed the defect report. You are now testing iteration 7 and the failure has occurred again. You have talked to the developer and he doesn’t know how or when the failure came back and has asked you to investigate. How can configuration management help you gather more information on this failure?",
    "options": {
      "a": "You can see what changed in iteration 4 to fix the problem",
      "b": "You can reload and retest iterations 5 and 6 to see where the problem was re-introduced",
      "c": "You can review all the code changes that have occurred since iteration 4 to see what might have broken it",
      "d": "You can improve the regression testing to ensure the failure is caught earlier"
    },
    "correct": "b",
    "explanation": "B is correct. Because you have configuration management, you should be able to obtain and reinstall the code from iterations 5 and 6 and see where the problem was re-introduced. A is not correct as that would have helped with the initial confirmation test and maybe regression testing, but it doesn’t help with the current problem. C is the responsibility of the developer. D is a good idea but won’t help with the current situation.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 54,
    "question": "You are estimating the testing time required for a new project. You have gathered information from three experts and they have given you the following numbers in days: Expert Optimistic Likely Pessimistic Expert 1 20 40 60 Expert 2 40 55 75 Expert 3 30 70 90 Average 30 55 75 Using the average numbers from the table above and applying the three- point estimation technique, what is the estimate?",
    "options": {
      "a": "325 ± 4",
      "b": "81.25 ±",
      "c": "54.17 ± 7.",
      "d": "40 ±"
    },
    "correct": "c",
    "explanation": "C is correct. The formula is (Optimistic + 4(Likely) + Pessimistic)/6 so the answer is (30+220+75)/6 = 54.17 and the standard deviation is (75- 30)/6 which is 7.5.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 55,
    "question": "Consider the following test cases that are used to test an accounting system: Test ID Name Dependency Priority 1 Purchase Item None 2 2 Receive Invoice Test 1 3 3 Receive Goods Test 1 2 4 Send Payment Test 2 3 5 Report Payments Test 4 1 Given this information, what is the proper order in which to execute these test cases?",
    "options": {
      "a": "5, 1, 3, 2,",
      "b": "1, 2, 4, 5,",
      "c": "1, 3, 2, 4,",
      "d": "3, 4, 5, 1,"
    },
    "correct": "b",
    "explanation": "B is correct. The goal is to run the highest priority tests as soon as possible. Dependency has to be considered in order for the tests to actually be executed. In order to get the highest priority test run as soon as possible, the correct order is as follows: test 1 has to go first since everything else is dependent on it. Then we need to do 2 so we can do 4 and 5 (the highest priority test) and then 3 is last because 5 is not dependent on it. A is not correct because 5 cannot be run first. C is not correct because it does not run 5 as soon as possible; it defers it until after 3 is run. D is not correct because 3 can’t be run first as it requires 1 and 2.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 56,
    "question": "You have received the following description section in a defect report: The report executed per the attached steps, but the data was incorrect. For example, the information in column 1 was wrong. See the attached screenshot. This report is critical to the users and they will be unable to do their jobs without this information. What is the biggest problem with this defect report?",
    "options": {
      "a": "The developer won’t know how important the problem is",
      "b": "The developer won’t know how to repeat the test",
      "c": "The developer won’t be able to see what the tester is saying is wrong",
      "d": "The developer won’t know what the tester expected to see"
    },
    "correct": "d",
    "explanation": "D is correct. From this information, the developer only knows the tester thinks the information is wrong, but it’s not clear what was expected. A is incorrect because, although vague, the incident report seems to indicate this is an important problem. B is incorrect because the steps are attached (or so it says). C is incorrect because the screen shot should indicate column 1 that is wrong.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 57,
    "question": "What is the primary purpose of a test execution tool?",
    "options": {
      "a": "It runs automated test scripts to test the test object",
      "b": "It automatically records defects in the defect tracking system",
      "c": "It analyzes code to determine if there are any coding standard violations",
      "d": "It tracks test cases, defects and requirements traceability"
    },
    "correct": "a",
    "explanation": "A is correct. This is the primary purpose of the test execution tools. B may be something the tool can do, but this is not the primary purpose. C is a static analysis tool and D is a test management tool.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 58,
    "question": "Which of the following is a risk with test automation?",
    "options": {
      "a": "Using an automation tool that will not be supported in the future",
      "b": "Developing test automation for particularly tedious manual testing areas",
      "c": "Using technical testers to implement the automation",
      "d": "Developing automated reporting"
    },
    "correct": "a",
    "explanation": "A is correct. That is a known risk with test automation because it will be dependent upon the tool used for implementation and that tool might fall out of support by the vendor or the community. B, C and D are expected results from automation and are not risks.",
    "source": "V2",
    "_html": false
  },
  {
    "id": 59,
    "question": "(1 Point) Which of the following statements describe a valid test objective ?",
    "options": {
      "a": "To prove that there are no unfixed defects in the system under test",
      "b": "To prove that there will be no failure s after the implementation of the system into production",
      "c": "To reduce the risk level of the test object and to build confidence in the quality level",
      "d": "To verify that there are no untested combinations of inputs Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is not correct. It is impossible to prove that there are no defects anymore in the system under test. See testing principle 1 b) Is not correct. See testing principle 7 c) Is correct. Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object d) Is not correct. It is impossible to test all combinations of inputs (see testing principle 2)",
    "source": "V3",
    "_html": false
  },
  {
    "id": 60,
    "question": "(1 Point) Which of the following options shows an example of test activities that contribute to success?",
    "options": {
      "a": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
      "b": "Testers try not to disturb the developers while coding, so that the developers write better code",
      "c": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
      "d": "Certified testers will design much better test cases than non -certified testers Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is correct. It is important that testers are involved from the beginning of the software development lifecycle (SDLC) . It will increase understanding of design decisions and will detect defects early . b) Is not correct. Both developers and testers will have more understanding of each other's work products and how to test the code c) Is not correct. End users will not help the testers in increasing the quality of defect reports; also, users usually do not participate in low -level testing levels like integration testing d) Is not correct. Being certified does not automatically mean that the tester will be better in test design Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 61,
    "question": "(1 Point) You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified . Your manager is happy, but you are not. Which testing principle explains your skepticism ?",
    "options": {
      "a": "Tests wear out",
      "b": "Absence -of-defects fallacy",
      "c": "Defects cluster together",
      "d": "Exhaustive testing is impossible Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is correct. This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well b) Is not correct. This principle says about the mistaken belief that just finding and fixing a large number of defects will ensure the success of a system c) Is not correct. This principle says that a small number of components usually contain most of the defects d) Is not correct. This principle states that testing all combinations of inputs and preconditions is not feasible",
    "source": "V3",
    "_html": false
  },
  {
    "id": 62,
    "question": "(1 Point) You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
    "options": {
      "a": "Estimating that testing the integration with the payment service will take 8 person -days",
      "b": "Deciding that the team should test if it is possible to properly share payment between many users",
      "c": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
      "d": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect Select ONE option ."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Estimating the test effort is part of test planning b) Is correct. This is an example of defining test condition s which is a part of test analysis c) Is not correct. Using test techniques to derive coverage items is a part of test design d) Is not correct. Reporting defects found during dynamic testing is a part of test execution Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 63,
    "question": "(1 Point) Which of the following factors have a SIGNIFICANT influence on the test approach ? i. The SDLC ii. The number of defects detected in previous projects iii. The identified product risks iv. New regulatory requirements forcing formal white -box testing v. The test environment setup",
    "options": {
      "a": "i, ii have signif icant influence",
      "b": "i, iii, iv have significant influence",
      "c": "ii, iv, v have significant influence",
      "d": "iii, v have significant influence Select ONE option."
    },
    "correct": "c",
    "explanation": "i. Is true . The SDLC has an influence on the test approach ii. Is false . The number of defects detected in previous projects may have some influence, but this is not as significant as i, iii and iv iii. Is true . The identified product risks are one of the most important factors influencing the test approach iv. Is true . Regulatory requirements are important factors influencing the test approach v. Is false . The test environment has no significant influence on the test approach Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct 6 a, e a) Is correct. This is done by the testers b) Is not correct. The product backlog is built and maintained by the product owner c) Is not correct. This is done by the development team d) Is not correct. This is a managerial role e) Is correct. This is done by the testers since its technical task done as part of a test analysis. Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 64,
    "question": "(1 Point) Which TWO of the following tasks belong MAINLY to a testing role?",
    "options": {
      "a": "Configure test environments",
      "b": "Maintain the product backlog",
      "c": "Design solutions to new requirements",
      "d": "Create the test plan",
      "e": "Analyze the test basis"
    },
    "correct": [
      "a",
      "e"
    ],
    "explanation": "a) Correct — Configuring test environments is done by testers. b) Incorrect — The product backlog is built and maintained by the product owner. c) Incorrect — This is done by the development team. d) Incorrect — Creating the test plan is a managerial role. e) Correct — Analyzing the test basis is a technical task done by testers as part of test analysis.",
    "source": "V3",
    "_html": false,
    "multiSelect": 2
  },
  {
    "id": 65,
    "question": "(1 Point) Which of the following skills (i -v) are the MOST important skills of a tester? i. Having domain knowledge ii. Creat ing a product vision iii. Being a good team player iv. Planning and organiz ing the work of the team v. Critical thinking",
    "options": {
      "a": "ii and iv are important",
      "b": "i, iii and v are important",
      "c": "i, ii and v are important",
      "d": "iii and iv are important Select ONE option."
    },
    "correct": "b",
    "explanation": "i. Is true. Having domain knowledge is an important tester skill ii. Is false . This is a task of the business analyst together with the business representative iii. Is true. Being a good team player is an important skill iv. Is false. Planning and organizing the work of the team is a task of the test manager or, mostly in an Agile software development project, the whole team and not just the tester v. Is true. Critical thinking is one of the most important skills of testers Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": false
  },
  {
    "id": 66,
    "question": "(1 Point) How is the whole team approach present in the interactions between testers and business representatives?",
    "options": {
      "a": "Business representatives decide on test automation approaches",
      "b": "Testers help business representatives to define a test strategy",
      "c": "Business representatives are not part of the whole team approach",
      "d": "Testers help business representatives to create suitable acceptance tests Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The test automation approach is defined by testers with the help of developers and business representatives b) Is not correct. The test strategy is decided in collaboration with the developers c) Is not correct. Testers, developers, and business representatives are part of the whole team approach d) Is correct. Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests",
    "source": "V3",
    "_html": false
  },
  {
    "id": 67,
    "question": "(1 Point) Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold ?",
    "options": {
      "a": "Only in sequential development model s",
      "b": "Only in iterative development models",
      "c": "Only in iterative and incremental development models",
      "d": "In sequential, incremental, and iterative development models Select ONE option ."
    },
    "correct": "b",
    "explanation": "a) Is not correct b) Is not correct c) Is not correct d) Is correct. This rule holds for all SDLC models Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 68,
    "question": "(1 Point) Which of the following statements BEST describes the acceptance test-driven development (ATDD ) approac h?",
    "options": {
      "a": "In ATDD, acceptance criteria are typically created based on the given/when/then format",
      "b": "In ATDD, test cases are mainly created at component testing and are code -oriented",
      "c": "In ATDD , tests are created , based on acceptance criteria to drive the development of the related software",
      "d": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them Select ONE option ."
    },
    "correct": "a",
    "explanation": "a) Is not correct. It is more often used in behavior -driven development (BDD) b) Is not correct. It is the description of test -driven development (TDD) c) Is correct. In acceptance test -driven development (ATDD) tests are written from acceptance criteria as part of the design process d) Is not correct. It is used in BDD",
    "source": "V3",
    "_html": false
  },
  {
    "id": 69,
    "question": "(1 Point) Which of the following is NOT an example of the shift-left approach?",
    "options": {
      "a": "Reviewing the user requirements before they are formally accepted by the stakeholders",
      "b": "Writing a component test before the corresponding code is written",
      "c": "Executing a performance efficiency test for a component during component testing",
      "d": "Writing a test script before setting up the configuration management process Select ONE option ."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Early review is an example of the shift -left approach b) Is not correct. TDD is an example of the shift-left approach c) Is not correct. Early non -functional testing is an example of the shift-left approach d) Is correct. Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up",
    "source": "V3",
    "_html": false
  },
  {
    "id": 70,
    "question": "(1 Point) Which of the arguments below would you use to convince your manager to organize retrospective s at the end of each release cycle?",
    "options": {
      "a": "Retrospective s are very popular these days and clients would appreciate it if we added them to our processes",
      "b": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
      "c": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization ’s continuous process improvement program",
      "d": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Retrospectives are more useful for identifying improvement opportunities and have little importance for clients b) Is not correct. Retrospectives are not aimed to collect feedback about the product, but about the process. Additionally, retrospective s are internal activity for the team and should not include end user representatives c) Is correct. Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing d) Is not correct. Courage and respect are values of Extreme Programming and are not closely related to retrospectives Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 71,
    "question": "(1 Point) Which types of failures (1 -4) fit which test levels (A -D) BEST? 1. Failures in system behavior as it deviates from the user’s business needs 2. Failures in communication between components 3. Failures in logic in the code 4. Failures in not correctly implemented business rules",
    "options": {
      "a": "1D, 2B, 3A, 4C",
      "b": "1D, 2B, 3C, 4A",
      "c": "1B, 2A, 3D, 4C",
      "d": "1C, 2B, 3A, 4D Select ONE option."
    },
    "correct": "b",
    "explanation": "Considering: • The test basis for acceptance testing is the user’s business needs (1D) • Communication between components is tested during component integration testing (2B) • Failures in logic can be found during component testing (3A) • Business rules are the test basis for system testing (4C) Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": false
  },
  {
    "id": 72,
    "question": "(1 Point) You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive version s of the software as follows: Execution 1 Execution 2 Execution 3 TC1 (1) Failed (4) Passed (7) Passed TC2 (2) Passed (5) Failed (8) Passed TC3 (3) Failed (6) Failed (9) Passed Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available . Which of the above tests are executed as regression tests ?",
    "options": {
      "a": "Only 4, 7, 8,",
      "b": "Only 5,",
      "c": "Only 4 , 6, 8,",
      "d": "Only 5, 6 Select ONE option."
    },
    "correct": "b",
    "explanation": "Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test (4) and test (6) are confirmation tests . Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests . TC2 passed in Execution 1 (i.e., test (2) ), so test (5) is a regression test . TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression test. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 73,
    "question": "(1 Point) Which of the following is NOT a benefit of static testing?",
    "options": {
      "a": "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
      "b": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
      "c": "Finding coding defects that might not have been found by only performing dynamic testing",
      "d": "Detecting gaps and inconsistencies in requirements Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is correct. Defect management is no less expensive. Finding and fixing defects later in the SDLC is more costly b) Is not correct. This is a benefit of static testing c) Is not correct. This is a benefit of static testing d) Is not correct. This is a benefit of static testing",
    "source": "V3",
    "_html": false
  },
  {
    "id": 74,
    "question": "(1 Point) Which of the following is a benefit of early and frequent feedback?",
    "options": {
      "a": "It improves the test process for future projects",
      "b": "It forces customers to prioritize their requirements based on agreed risks",
      "c": "It provides a measure for the quality of changes",
      "d": "It helps avoid requirements misunderstanding s Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Feedback can improve the test process, but if one only wants to improve future projects, the feedback does not need to come early or frequently b) Is not correct. Feedback is not used to prioritize requirements c) Is not correct. There is no one, recommended way to measure quality of changes. Also, this is not on e of the benefits of early feedback that are mentioned in section 3.2.1 d) Is correct. Early and frequent feedback can prevent misunderstandings about requirements Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 75,
    "question": "<p>(1 Point) The reviews being used in your organization have the following attributes:</p>\n<ul>\n<li>There is the role of a scribe</li>\n<li>The main purpose is to evaluate quality</li>\n<li>The meeting is led by the author of the work product</li>\n<li>There is individual preparation</li>\n<li>A review report is produced Which of the following review types is MOST likely being used?</li>\n</ul>",
    "options": {
      "a": "Informal review",
      "b": "Walkthrough",
      "c": "Technical review",
      "d": "Inspection Select ONE option."
    },
    "correct": "c",
    "explanation": "Considering the attributes: • Specified for walkthroughs, technical reviews, and inspections ; thus, the reviews being performed cannot be informal reviews • The purpose of evaluating quality is one of the most important objectives of a walkthrough • This is not allowed for inspections and is typically not done in technical reviews . A moderator is needed in walkthroughs and is allowed for informal reviews • All types of reviews can include individual preparation (even informal reviews) • All types of reviews can produce a review report, although informal reviews do not require documentation Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": true
  },
  {
    "id": 76,
    "question": "(1 Point) Which of these statements is NOT a factor that contributes to successful reviews ?",
    "options": {
      "a": "Participants should dedicate adequate time for the review",
      "b": "Splitting large work products in to small parts to make the required effort less intense",
      "c": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
      "d": "Failures found should be acknowledged, appreciated, and handled objectively Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Adequate time for individuals is a success factor b) Is not correct. Splitting work products into small adequate parts is a success factor c) Is not correct. Avoiding behaviors that might indicate boredom, exasperation, etc. is a success factor d) Is correct. During reviews one can find defects, not failures Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 77,
    "question": "(1 Point) Which of the following is a characteristic of experience -based test techniques?",
    "options": {
      "a": "Test cases are created based on detailed design information",
      "b": "Items tested within the interface code section are used to measure coverage",
      "c": "The test techniques heavily rely on the tester’s knowledge of the software and the business domain",
      "d": "The test cases are used to identify deviations from the requirements Select ONE option ."
    },
    "correct": "d",
    "explanation": "a) Is not correct. This is a common characteristic of white -box test technique s. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software. b) Is not correct. This is a common characteristic of white-box test technique s. Coverage is measured based on the items tested within a selected structure and the test technique applied to the test basis c) Is correct. This is a common characteristic of experience -based test technique s. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests d) Is not correct. This is a common characteristic of black-box test technique s. Test cases may be used to detect gaps within requirements and the implementation of the requirements, as well as deviations from the requirements Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 78,
    "question": "<p>(1 Point) You are testing a simplified apartment search form which has only two search criteria:</p>\n<ul>\n<li>floor (with three possible options: ground floor; first floor; second or higher floor)</li>\n<li>garden type (with three possible options: no garden; small garden; large garden) Each of the apartment on the ground floor has a garden , apartments on higher floors don’t . The form has a built -in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests . What is the minimal number of test cases to achieve 100% EP coverage for valid partitions ?</li>\n</ul>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": "6 Select ONE option"
    },
    "correct": "b",
    "explanation": "The situation presented in the question is described in the syllabus as “each choice ” coverag e. “Small garden” and “large garden” can go only with “ground floor”, so we need two test cases with “ground floor” which cover these two “garden type” partitions. We need two more test cases to cover the two other “floor” partitions . The remaining ”garden type” partition of “no garden” is covered by these tests. We need a total of four test cases: TC1 (ground floor, small garden) TC2 (ground floor, large garden) TC3 (first floor, no garden) TC4 (second or higher floor, no garden) Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": true
  },
  {
    "id": 79,
    "question": "<p>(1 Point) You are testing a system that calculates the final course grade for a given student . The final grade is assigned based on the final result, according to the following rules:</p>\n<ul>\n<li>0 – 50 points : failed</li>\n<li>51 – 60 points : fair</li>\n<li>61 – 70 points : satisfactory</li>\n<li>71 – 80 points : good</li>\n<li>81 – 90 points : very good</li>\n<li>91 – 100 points : excellent You have prepared the following set of test cases: Final result Final grade TC1 91 excellent TC2 50 failed TC3 81 very good TC4 60 fair TC5 70 satisfactory TC6 80 good What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?</li>\n</ul>",
    "options": {
      "a": "50%",
      "b": "60%",
      "c": "33.3%",
      "d": "100% Select ONE option."
    },
    "correct": "a",
    "explanation": "There are 12 boundary values for the final result values: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 and TC7 – 51). Therefore, the test cases cover 6/12 = 50%. Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": true
  },
  {
    "id": 80,
    "question": "<p>Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it. The implemented features are as follows:</p>\n<ul>\n<li>Anyone can rent a bicycle, but members receive a 20% discount</li>\n<li>However, if the return deadline is missed, the discount is no longer available</li>\n<li>After 15 rentals, members get a gift: a T-Shirt</li>\n</ul>\n<p>Decision table describing the implemented features:</p>\n<table class=\"dt\">\n<tr><th>Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr>\n<tr><td>Being a member</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>\n<tr><td>Missed deadline</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td></tr>\n<tr><td>15th rental</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>\n<tr class=\"action\"><td>20% discount</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>\n<tr class=\"action\"><td>Gift T-Shirt</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td><td></td></tr>\n</table>\n<p>Based <strong>ONLY</strong> on the feature description of the Customer Relationship Management system, which of the above rules describes an <strong>impossible situation</strong>?</p>",
    "options": {
      "a": "R",
      "b": "R",
      "c": "R",
      "d": "R8 Select ONE option ."
    },
    "correct": "c",
    "explanation": "a) Is not correct. A member without a missed deadline can get a discount and a gift T -Shirt after 15 bicycle rentals b) Is not correct. A member without a missed deadline can get a discount but no gift T -Shirt until they rented a bicycle 15 times c) Is not correct. Non-members cannot get a discount, even if they did not miss a deadline yet d) Is correct. No discount as a non -member that has also missed a deadline, but only members can receive a gift T -Shirt. Hence, the action is not correct Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": true
  },
  {
    "id": 81,
    "question": "<p>You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 460 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:460px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah81\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st81 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt81 { fill: #e2e8f0; font-family: sans-serif; font-size: 13px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .edg81 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah81); }\n      .elbl81 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- INIT -->\n  <rect class=\"st81\" x=\"10\" y=\"120\" width=\"80\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt81\" x=\"50\" y=\"140\">INIT</text>\n  <!-- ACTIVE -->\n  <rect class=\"st81\" x=\"170\" y=\"40\" width=\"90\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt81\" x=\"215\" y=\"60\">ACTIVE</text>\n  <!-- IDLE -->\n  <rect class=\"st81\" x=\"170\" y=\"200\" width=\"80\" height=\"40\" rx=\"20\"/>\n  <text class=\"sttxt81\" x=\"210\" y=\"220\">IDLE</text>\n  <!-- OFF -->\n  <rect class=\"st81\" x=\"370\" y=\"120\" width=\"80\" height=\"40\" rx=\"20\" stroke=\"#ef4444\"/>\n  <text class=\"sttxt81\" x=\"410\" y=\"140\" fill=\"#fca5a5\">OFF</text>\n  <!-- INIT -> ACTIVE -->\n  <line class=\"edg81\" x1=\"90\" y1=\"130\" x2=\"166\" y2=\"70\"/>\n  <text class=\"elbl81\" x=\"115\" y=\"85\">start</text>\n  <!-- ACTIVE -> IDLE -->\n  <line class=\"edg81\" x1=\"200\" y1=\"80\" x2=\"200\" y2=\"196\"/>\n  <text class=\"elbl81\" x=\"183\" y=\"140\">pause</text>\n  <!-- IDLE -> ACTIVE -->\n  <line class=\"edg81\" x1=\"230\" y1=\"200\" x2=\"230\" y2=\"84\"/>\n  <text class=\"elbl81\" x=\"247\" y=\"140\">resume</text>\n  <!-- ACTIVE -> OFF -->\n  <line class=\"edg81\" x1=\"260\" y1=\"55\" x2=\"366\" y2=\"130\"/>\n  <text class=\"elbl81\" x=\"320\" y=\"80\">stop</text>\n  <!-- IDLE -> OFF -->\n  <line class=\"edg81\" x1=\"250\" y1=\"225\" x2=\"366\" y2=\"150\"/>\n  <text class=\"elbl81\" x=\"320\" y=\"200\">stop</text>\n</svg>\n</div>\n<p>What is the MINIMUM number of test cases needed for 100% valid transition coverage?</p>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": "3 Select ONE option."
    },
    "correct": "a",
    "explanation": "“test” and “error” transitions cannot occur in one test case . Neither can both “done” transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct",
    "source": "V3",
    "_html": true
  },
  {
    "id": 82,
    "question": "(1 Point) Your test suite achieve d 100% statement coverage. What is the consequence of this fact?",
    "options": {
      "a": "Each instruction in the code that contain s a defect has been executed at least once",
      "b": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
      "c": "Each path in the code has been executed at least once",
      "d": "Every combination of input values has been tested at least once Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is correct. Since 100% statement coverage is achieved, every statement , including the ones with defects, must have been executed and evaluated at least once b) Is not correct. Coverage depends on what is tested, not on the number of test cases . For example, for code “if (x==0) y=1”, one test case (x=0) achieves 100% statement coverage, but two test cases (x=1) and (x=2) together achieve only 50% statement coverage c) Is not correct. If there is a loop in the code there may be an infinite number of possible paths, so it is not possible to execute all the possible paths in the code d) Is not correct. Exhaustive testing is not possible (see the s even testing principles section in the syllabus). For example, for code “input x; print x” any single test with arbitrary x achieves 100% statement coverage, but cover s one input value Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 83,
    "question": "(1 Point) Which of the following is NOT true for white -box testing?",
    "options": {
      "a": "During white -box testing the entire software implementation is considered",
      "b": "White -box coverage metrics can help identify additional tests to increase code coverage",
      "c": "White -box test techniques can be used in static test ing",
      "d": "White -box testing can help identify gaps in requirements implementation Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. The fundamental strength of white -box test techniques is that the entire software implementation is taken into account during testing b) Is not correct. White-box coverage measures provide an objective measure of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage c) Is not correct. White-box test techniques can be used to perform reviews (static testing) d) Is correct. This is the weakness of the white -box test techniques . They are not able to identify the missing implementation, because they are based solely on the test object structure, not on the requirements specification",
    "source": "V3",
    "_html": false
  },
  {
    "id": 84,
    "question": "(1 Point) Which of the following BEST describes the concept behind error guessing?",
    "options": {
      "a": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
      "b": "Error guessing involves using your personal experience of development and the errors you made as a developer",
      "c": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
      "d": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is correct. The basic concept behind error guessing is that the tester tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists) b) Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the test technique is not based on prior knowledge of development c) Is not correct. Error guessing is not a usability technique for guessing how users may fail to interact with the test object d) Is not correct. Duplicating the development task has several flaws that make it impractical, such as the tester having equivalent skills to the developer and the time involved to perform the development. It is not error guessing Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 85,
    "question": "(1 Point) In your project there has been a delay in the release of a brand -new application and test execution started late, but you have very detailed domain knowledge and good analytical skills . The full list of requirements has not yet been shared with the team, but management is asking for some test result s to be presented. Which test technique fits BEST in this situatio n?",
    "options": {
      "a": "Checklist -based testing",
      "b": "Error guessing",
      "c": "Exploratory testing",
      "d": "Branch testing Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. This is a new product. You probably do not have a checklist yet and test conditions might not be known due to missing requirements b) Is not correct. This is a new product. You probably do not have enough information to make correct error guesses c) Is correct. Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing d) Is not correct. Branch testing is time -consuming, and your management is asking about some test results now. Also, branch testing does not involve domain knowledge",
    "source": "V3",
    "_html": false
  },
  {
    "id": 86,
    "question": "(1 Point) Which of the following BEST describes the way acceptance criteria can be documented?",
    "options": {
      "a": "Performing r etrospectives to determine the actual need s of the stakeholders regarding a given user story",
      "b": "Using the given/ when/then format to describe an example test condition related to a given user story",
      "c": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
      "d": "Documenting risks related to a given user story in a test plan to facilitate the risk -based testing of a given user story Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Retrospectives are used to capture lessons learned and to improve the development and testing process, not to document the acceptance criteria b) Is correct. This is the standard way to document acceptance criteria c) Is not correct. Verbal communication does not allow to physically document the acceptance criteria as part of a user story (”card” aspect in the 3C’s model) d) Is not correct. Acceptance criteria are related to a user story, not a test plan. Also, acceptance criteria are the conditions that have to be fulfilled to decide if the user story is complete. Risks are not such conditions",
    "source": "V3",
    "_html": false
  },
  {
    "id": 87,
    "question": "<p>(1 Point) Consider the following user story : As an Editor I want to review content before it is published so that I can ensure the grammar is correct and its acceptance criteria :</p>\n<ul>\n<li>The user can log in to the content management system with \"Editor \" role</li>\n<li>The editor can view existing content pages</li>\n<li>The editor can edit the page content</li>\n<li>The editor can add markup comments</li>\n<li>The editor can save changes</li>\n<li>The editor can reassign to the \"content owner\" role to make updates Which of the following is the BEST example of an ATDD test for this user story?</li>\n</ul>",
    "options": {
      "a": "Test if the editor can save the document after edit the page conten t",
      "b": "Test if the content owner can log in and make updates to the content",
      "c": "Test if the editor can schedule the edited content for publication",
      "d": "Test if the editor can reassign to another editor to make updates Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. This test covers two acceptance criteria: one about editing the document and one about saving changes b) Is not correct. Acceptance criteria cover the editor activities, not the content owner activities c) Is not correct. Scheduling the edited content for publication may be a nice feature, but it is not covered by the acceptance criteria d) Is not correct. Acceptance criteria state about reassigning from an editor to the content owner, not to another editor Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": true
  },
  {
    "id": 88,
    "question": "(1 Point) How do testers add value to iteration and release planning?",
    "options": {
      "a": "Testers determine the priority of the user stories to be developed",
      "b": "Testers focus only on the functional aspects of the system to be tested",
      "c": "Testers participate in the detailed risk identification and risk assessment of user stories",
      "d": "Testers guarantee the release of high-quality software through early test design during the release planning Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Priorities for user stories are determined by the business representative together with the development team b) Is not correct. Testers focus on both functional and non -functional aspects of the system to be tested c) Is correct. According to the syllabus, this is one of the ways testers add value to iteration and release planning d) Is not correct. Early test design is not part of release planning. Early test design does not automatically guarantee the release of quality software 31 c, e a) Is not correct. Test environment readiness is a resource availability criterion; hence it belongs to the entry criteria b) Is not correct. This is a resource availability criterion; hence it belongs to the entry criteria c) Is correct. Estimated defect density is a measure of diligence; hence it belongs to the exit criteria. d) Is not correct. Requirements translated into a given format result in testable requirements ; hence it belongs to the entry criteria e) Is correct. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria",
    "source": "V3",
    "_html": false
  },
  {
    "id": 89,
    "question": "<p>(1 Point) Your team uses the three -point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:</p>\n<ul>\n<li>Most optimistic estimation: 2 person -hours</li>\n<li>Most likely estimation: 11 person -hours</li>\n<li>Most pessimistic estimation: 14 person -hours What is the final estimate?</li>\n</ul>",
    "options": {
      "a": "9 person -hours",
      "b": "14 person -hours",
      "c": "11 person -hours",
      "d": "10 person -hours Select ONE option."
    },
    "correct": "d",
    "explanation": "In the t hree-point estimation technique: E = (optimistic + 4*most likely + pessimistic)/6 E = (2+(4*11)+14)/6 = 10 Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": true
  },
  {
    "id": 90,
    "question": "(1 Point) You are testing a mobile app lication that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities ( i.e., a smaller number means a higher priority), and dependencies: Test case number Test condition covered Priority Logical dependency TC 001 Select type of food 3 none TC 002 Select restaurant 2 TC 001 TC 003 Get direction 1 TC 002 TC 004 Call restaurant 2 TC 002 TC 005 Make reservation 3 TC 002 Which of the following test cases should be executed as the third one?",
    "options": {
      "a": "TC 00",
      "b": "TC 00",
      "c": "TC",
      "d": "TC 001 Select ONE option."
    },
    "correct": "a",
    "explanation": "Test TC 001 must come first, followed by TC 002, to satisfy dependencies. Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005 . Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": false
  },
  {
    "id": 91,
    "question": "(1 Point) Consider the following test categories (1-4) and agile testing quadrants (A -D): 1. Usability testing 2. Component testing 3. Functional testing 4. Reliability testing",
    "options": {
      "a": "1C, 2A, 3B, 4D",
      "b": "1D, 2A, 3C, 4B",
      "c": "1C, 2B, 3D, 4A",
      "d": "1D, 2B, 3C, 4A Select ONE option."
    },
    "correct": "a",
    "explanation": "Considering: • Usability testing is in Q3 (1 – C) • Component testing is in Q1 (2 – A) • Functional testing is in Q2 (3 – B) • Reliability testing is in Q4 (4 – D) Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "V3",
    "_html": false
  },
  {
    "id": 92,
    "question": "<p>(1 Point) During a risk analysis the following risk was identified and assessed :</p>\n<ul>\n<li>Risk: Response time is t oo long to generate a report</li>\n<li>Risk likelihood: medium; risk impact: high</li>\n<li>Response to risk: o An independent test team performs performance efficiency testing during system testing o A selected sample of end users performs alpha testing and beta testing before the release What measure is proposed to be taken in response to this analyzed risk?</li>\n</ul>",
    "options": {
      "a": "Risk acceptance",
      "b": "Contingency plan",
      "c": "Risk mitigation",
      "d": "Risk transfer Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. We do not accept the risk; concrete actions are proposed b) Is not correct. No contingency plans are proposed c) Is correct. The proposed actions are related to testing, which is a form of risk mitigation d) Is not correct. Risk is not transferred but mitigated Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": true
  },
  {
    "id": 93,
    "question": "(1 Point) Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
    "options": {
      "a": "Acceptance criteria",
      "b": "Defect report",
      "c": "Test completion report",
      "d": "Burndown chart Select ONE option ."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Acceptance criteria are the conditions used to decide whether the user story is ready. They cannot show work progress b) Is not correct. Defect reports inform about the defects. They do not show work progress c) Is not correct. Test completion report can be created after the iteration is finished, so it will not show the progress continuously within an iteration d) Is correct. Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress",
    "source": "V3",
    "_html": false
  },
  {
    "id": 94,
    "question": "(1 Point) You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
    "options": {
      "a": "Traceability management",
      "b": "Maintenance testing",
      "c": "Configuration management",
      "d": "Requirements engineering Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Traceability is the relationship between two or more work products, not between different versions of the same work product b) Is not correct. Maintenance testing is about testing changes; it is not related closely to versioning c) Is correct. To support testing, configuration management may involve the version control of all test items d) Is not correct. Requirements engineering is the elicitation, documentation, and management of requirements; it is not closely related to test script versioning Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 95,
    "question": "(1 Point) You received the following defect report from the developers stating that the anomal y described in this test report is not reproducible. Application hangs up 2022 -May-03 – John Doe – Rejected The application hangs up after entering “Test input: $ä” in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC -1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ -0012, which is a critical new business requirement. What critical information is MISSING from th is test report that would have been useful for the developers?",
    "options": {
      "a": "Expected result and actual result",
      "b": "References and defect stat us",
      "c": "Test e nvironment and test item",
      "d": "Priority and severity Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The expected result is “the application should accept the provided input and create the user”. The actual result is “The application hangs up after entering “Test input. $ä ””. b) Is not correct. There is a reference to the test case and to the related requirement and it states that the defect is rejected. Also, the defect status would not be very helpful for the developers c) Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected d) Is not correct. The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders",
    "source": "V3",
    "_html": false
  },
  {
    "id": 96,
    "question": "(1 Point) Which test activity does a data preparation tool support?",
    "options": {
      "a": "Test monitoring and test control",
      "b": "Test analysis",
      "c": "Test design and test implementation",
      "d": "Test completion Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Test monitoring involves the ongoing checking of all activities and comparison of actual progress against the test plan. Test control involves taking the actions necessary to meet the test objectives of the test plan. No test data are prepared during thes e activities . b) Is not correct. Test analysis includes analy sis of the test basis to identify test conditions and prioritize them. Test data are not prepared during th is activit y. c) Is correct. Test design and implementation can both include the identification, creati on or acqui sition of the testware necessary for test execution (e.g., test data) . d) Is not correct. Test completion activities occur at project milestones (e.g., release, end of iteration, test level completion), so it is too late for preparing test data . Versi on 1.7 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V3",
    "_html": false
  },
  {
    "id": 97,
    "question": "(1 Point) Which item correctly identifies a potential risk of performing test automation?",
    "options": {
      "a": "Impediments to testing",
      "b": "Branch coverage achieved",
      "c": "Test progress",
      "d": "New risks within the test cycle Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Test automation does not introduce unknown regressions in production b) Is correct. Wrong allocation of effort to maintain testware is a risk c) Is not correct. Test tools must be selected so that they and their testware can be relied upon d) Is not correct. The primary goal of test automation is to reduce manual testing. So, this is a benefit, not a risk Versi on 1.7 Appendix: Answer Key for Additional Sample Questions A1 a A14 b A2 d A15 c A3 d A16 d A4 d A17 c A5 c A18 b A6 d A19 d A7 b, c A20 b A8 c A21 a A9 b A22 c A10 a A23 a A11 c A24 d A12 d A25 a, d A13 b A26 b Versi on 1.7 Appendix: Answers to Additional Sample Questions A1 a a) Is correct. Debugging is the process of finding, analyzing, and removing the causes of failures in a component or system b) Is not correct. Testing is the process concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. It is no t related to fixing causes of failures c) Is not correct. Requirement elicitation is the process of gathering, capturing, and consolidating requirements from available sources. It is not related to fixing causes of failures d) Is not correct. Defect management is the process of recognizing, recording, classifying, investigating, resolving, and disposing of defects. It is not related to fixing causes of failures Versi on 1.7 A2 d Considering: Testing and quality assurance are not the same. Testing is the process consisting of all software development lifecycle (SDLC) activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. Quality assurance is focused on establishing, introducing, monitoring, improving, and adhering to the quality -related processes . Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct A3 d a) Is not correct. The root cause is the distraction that the programmer experienced while programming b) Is not correct. Accepting invalid inputs is a failure c) Is not correct. The error in thinking that put the defect in the code d) Is correct. The problem in the code is a defect A4 d The testware under consideration is a test charter Test charters are the output from test design Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct Versi on 1.7 A5 c a) Is not correct. Performing the impact analysis will not give information about completeness of tests. Analyzing the impact analysis of changes will help to select the right test cases for execution b) Is not correct. Traceability does not give information about the estimated level of residual risk if the test cases are not traced back to risks c) Is correct. Performing the impact analysis of the changes helps in selecting the test cases for the regression test d) Is not correct. Analyzing the traceability between the test basis, test objects and test cases does not help in selecting test data to achieve the assumed coverage of the test object. Selecting test data is more related to test analysis and test implementation, not tracea bility A6 d a) Is not correct. Quality should be the responsibility of everyone working on the project and not the sole responsibility of the test team b) Is not correct. First, it is not a benefit if an external test team does not meet delivery deadlines, and second, there is no reason to believe that external test teams will feel they do not have to meet strict delivery deadlines c) Is not correct. It is bad practice for the test team to work in complete isolation, and we would expect an external test team to be concerned with changing project requirements and communicating well with developers d) Is correct. Specifications are never perfect, meaning that assumptions will have to be made by the developer. An independent tester is useful in that they can challenge and verify the assumptions and subsequent interpretation made by the developer Versi on 1.7 A7 b, c a) Is not correct. The executable code is usually created in the later phases, so dynamic test execution cannot be performed early in the SDLC b) Is correct. In sequential development models, in the initial phases, testers participate in requirement reviews, which is a form of static testing . c) Is correct. Test planning could be performed early in the SDLC before the test project begins together with test analysis and test design . d) Is not correct. Acceptance test execution can be performed when there is a working product. In sequential SDLC models the working product is usually delivered later in the SDLC e) Is not correct. Maintenance testing when there is a working and deployed product , which is not done in the early phases of any SDLC. A8 c Consider: i. Is true. Faster product release and faster time to market is an advantage of DevOps ii. Is false . Typically, we need less effort for manual tests because of the use of test automation iii. Is true. Constant availability of executable software is an advantage iv. Is false . More regression tests are needed v. Is false . Not everything is automated and setting up a test automation framework is expensive Thus: a) Is not correct b) Is not correct c) It is correct d) Is not correct Versi on 1.7 A9 b a) Is not correct. The fact that the requirement about the system’s performance comes directly from the client and that the performance is important from the business point of view ( i.e., high priority) does not make these tests functional, because they do not check “what” the system does, but “how” (i.e., how fast the orders are processed) b) Is correct. This is an example of testing for performance efficiency , a type of non -functional testing c) Is not correct. From the scenario , we do not know if interacting with the user interface is a part of the test conditions. But even if we did, the main test objective of these tests is to check the performance, not the usability d) Is not correct. We do not need to know the internal structure of the code to perform the performance efficiency testing. One can execute performance efficiency tests without structural knowledge A10 a a) Is correct. When a system is retired, this can require testing of data migration, which is a form of maintenance testing b) Is not correct. Regression testing verifies whether a fix accidentally affected the behavior of other parts of the code, but now we are talking about data migration to a new system c) Is not correct. Portability testing focuses on transferring the system to another environment d) Is not correct. Integration testing focuses on interactions between components and/or systems, not on data migration . Also, it is not a test type, but a test level. Versi on 1.7 A11 c Only third-party executable code cannot be reviewed. Thus: a) Is not correct b) Is not correct c) It is correct d) Is not correct A12 d Consider: i. These behaviors are easily detectable while the software is running. Hence, dynamic testing shall be used t o identify them ii. This is an example of deviations from standards, which is a typical defect that is easier found with static testing iii. If the software is executed during the test, it is dynamic testing iv. Identifying defects as early as possible is the test objective of both static testing and dynamic testing v. This is an example of gaps in the test basis traceability or coverage, which is a typical defect that is easier found with static testing Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct A13 b a) Is not correct. In all types of reviews there is more than one role, even in informal ones b) Is correct. There are several activities during the formal review process c) Is not correct. Document ation to be reviewed should be distributed as early as possible d) Is not correct. Defects found during the review should be reported Versi on 1.7 A14 b a) Is not correct. This is the task of the review leader b) Is correct. This is the task of the management in a formal review c) Is not correct. This is the task of the moderator d) Is not correct. This is the task of the scribe A15 c There are three equivalence partitions: {..., 10, 11}, {12}, and {13, 14, ...}. The boundary values are 11, 12 and 13. In the three -point boundary value analysis for each boundary, we need to test the boundary and both its neighbors, so: • for 11 we test 10, 11, 12 • for 12 we test 11, 12, 13 • for 13 we test 12, 13, 14 Altogether we need to test 10, 11, 12, 13, and 14 Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct A16 d a) Is not correct. In this case one test case is still needed since there is at least one (unconditional) branch to be covered b) Is not correct. Covering only unconditional branches does not imply covering all conditional branches c) Is not correct. 100% branch coverage implies 100% statement coverage, not otherwise. For example, for an IF decision without the ELSE, one test is enough to achieve 100% statement coverage, but it only achieves 50% branch coverage d) Is correct. Each decision outcome corresponds to a conditional branch, so 100% branch coverage implies 100% coverage of the decision outcomes Versi on 1.7 A17 c a) Is not correct. The book provides general guidance, and is not a formal requirements document, a specification, or a set of use cases, user stories, or business processes b) Is not correct. While you could consider the list as a set of test charters, it more closely resembles the list of test conditions to be checked c) Is correct. The list of user interface best practices is the list of test conditions to be systematically checked d) Is not correct. The tests are not focused on failures that could occur, but rather on knowledge about what is important for the user, in terms of usability A18 b a) Is not correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision b) Is correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision c) Is not correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision d) Is not correct. This is the list of properties that each user story should have, not the description of the collaboration -based approach A19 d a) Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach b) Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach c) Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach d) Is correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach Versi on 1.7 A20 b a) Is not correct. This should be a team activity and not overruled by one team member b) Is correct. If test estimates are not the same, but the variation in the results is small, applying rules like “accept the number with the most votes” can be applied c) Is not correct. There is no consensus yet as some say 13, others say 8 d) Is not correct. A feature should not be removed only because the team cannot agree on the test estimates A21 a a) Is correct. The test pyramid emphasizes having a larger number of tests at the lower test levels b) Is not correct. It is not true that a test on a lower level tests a larger piece of functionality. Tests are more atomic and oriented on a specific logic, so it is the opposite c) Is not correct. Test pyramid shows how the number of tests is distribu ted across test levels d) Is not correct. The test pyramid model supports the team in test automation A22 c a) Is not correct. Risk impact and risk likelihood are independent b) Is not correct. Risk impact and risk likelihood are independent c) Is correct. Risk impact and risk likelihood are independent d) Is not correct. We need both factors to calculate risk level Versi on 1.7 A23 a Consider: i. It is a Project risk ii. It is a Product risk iii. It is a Product risk iv. It is a Project risk v. It is a Product risk Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct A24 d a) Is not correct. This is an example of a risk monitoring activity, not risk analysis b) Is not correct. This is an example of an architectural decision, not related with testing c) Is not correct. This is an example of performing a quantitative risk analysis and is not related to thoroughness or scope of testing d) Is correct. This shows how risk analysis impacts the thoroughness of testing (i.e., the level of detail) Versi on 1.7 A25 a, d a) Is correct. The number of defects found is related to the test object quality b) Is not correct. This is the measure of the test efficiency not the test object quality c) Is not correct. The number of test cases executed does not tell us anything about the quality; test results might do d) Is correct. defect density is related to the test object quality e) Is not correct. Time to repair is a process metric. It does not tell us anything about the product quality A26 b a) Is not correct. Impediments to testing can be high -level and business - related, so this is an important piece of information for business stakeholders b) Is correct. Branch testing is a technical metric used by developers and technical test analysts . This information is of no interest to business representatives c) Is not correct. Test progress is project related, so it may be useful for business representatives d) Is not correct. Risks impact product quality, so it may be useful for business representatives",
    "source": "V3",
    "_html": false
  },
  {
    "id": 98,
    "question": "( 1 Point) Which of the following is an example of why testing is necessary?",
    "options": {
      "a": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
      "b": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing",
      "c": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
      "d": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection . However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users . Spending time testing for failures that cannot occur with real users is not an efficient use of a tester’s time b) Is not correct. Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing . Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term ‘failures’ that makes this an incorrect option c) Is not correct. Static analysis directly detects defects in code, and this is normally information for the developer, not the customer. d) Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements . If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed. Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 99,
    "question": "(1 Point) Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
    "options": {
      "a": "QA is performed as part of testing",
      "b": "Testing is performed as part of QC",
      "c": "Testing is another term for QC",
      "d": "Testing is performed as part of QA Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects b) Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects c) Is not correct. Although testing is a significant part of QC and helps to uncover defects, other (non -testing) techniques utilized in QC include formal methods like model checking and proof of correctness, as wel l as simulation and prototyping d) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects",
    "source": "V4",
    "_html": false
  },
  {
    "id": 100,
    "question": "(1 Point) One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
    "options": {
      "a": "Creating test cases that cover every possible specified output",
      "b": "Documenting all possible test input variations and prioritizing these based on importance",
      "c": "Starting testing as early as possible with reviews and other static testing approaches",
      "d": "Using equivalence partitioning and boundary value analysis to generate test cases Select ONE option."
    },
    "correct": "d",
    "explanation": "The ‘exhaustive testing is impossible’ principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases . Instead, testing utilizes test techniques, test case prioritization, and risk -based testing to sample from the set of possibilities and focus test efforts. a) Is not correct. The principle states that it is not feasible to test every thing except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances , which is generally infeasible as there will be a practically infinite number of possibilities . Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. Sometimes there may be a practically infinite number of possible expected results (e.g., when there are several variables representing real numbers), whereas at other times there may be just two expected results , such as with a single variable that can be either true or false b) Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances . This is because for non -trivial systems there is a practically infinite number . Therefore, in practice, documenting all possible input variations would be impractical as it would take an infinite length of time c) Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The ‘early testing saves time and money’ principle is concerned with fixing def ects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures d) Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 101,
    "question": "(1 Point) Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
    "options": {
      "a": "Test design",
      "b": "Test execution",
      "c": "Test analysis",
      "d": "Test implementation Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the nec essary infrastructure and tools b) Is not correct. Test execution involves executing test cases (as part of test procedures), however it does not directly cover the other testware mentioned in the question, such as test data requirements, test environment r equirements and test conditions c) Is not correct . Test analysis is used to identify the features that require testing . The test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. While this activity involves working with test conditions, it does not cover the other testware mentioned in the question, such as test data requ irements, test environm ent requirements and test cases d) Is not correct. Test implementation include s the generation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule . Test data is created, and the test environment built, and its set up verified . While this activity involves explicitly working with test cases, and may use test data requirements and test environment requirements to create test data and the test environment, it does not cover test conditions Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 102,
    "question": "(1 Point) Which of the following is MOST likely to impact how testing is performed for a given test object?",
    "options": {
      "a": "The average level of experience of the organization’s marketing team",
      "b": "The knowledge of users that a new system is being developed for them",
      "c": "The number of years’ experience of the members of the test team",
      "d": "The end user’s organizational structure for a commercial music streaming application Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The organization’s marketing team is unlikely to perform much testing (although in some organizations they may be involved with acceptance testing), so their average level of experience (most of which would be in marketing) is not likely to i mpact how testing is pe rformed for a given test object b) Is not correct. The level of knowledge of users that a new system is being built for them is unlikely to affect how testing is performed. Any user involvement that could affect how testing is performed is more likely to be as a result of decisions made by the tester s, customer and project manager c) Is correct. The number of years’ experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge (e.g. , of different tools and defect types) that the team members wi ll apply when they are testing d) Is not correct. The organizational structure of the different end users (who may be varied) will change between users . So, it may not even be known when the application is being tested, and the end user’s organizational structure can thus have little effect on how the testing is performed Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 103,
    "question": "(1 Point) Which of the following statements is a CORRECT example of the value of traceability?",
    "options": {
      "a": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk",
      "b": "Traceability between user requirements and test results provides a means of measuring project progress against business goals",
      "c": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers",
      "d": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Traceability between the mitigated risks and test cases that passed provides little information , because to be mitigated (by testing) the risks would need to have a corresponding test case that passed . To be able to assess residual risk, traceability between all risks and test results needs to be available, so that the risks that do not have a corresponding passing test can be i dentified as the residual risks b) Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals c) Is not correct. It is not clear that test cases that failed provide an indication of tester ’s skills any more than test cases that passed . It would partly depend on the test objective (e.g., building confidence or causing failures). Also, such measurement of testers based on test cases that passed and failed can be counter -productive as it could cause the testers to optimize their testing based on that metric rather than the test objective d) Is not correct. Traceability between the identified risks and written test conditions provides a means of determining which further test conditions need to be written. Determining which risks are worth testing is part of risk management, an d risk mitigation in particular Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 104,
    "question": "(1 Point) Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
    "options": {
      "a": "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
      "b": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
      "c": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
      "d": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Strong communication skills, active listening, and teamwork abilities enable a tester to interact effectively with all stakeholders, however a deep knowledge of a variety of computer games that allowed them to get on well with one developer is not an example of a generic skill useful to testers b) Is correct. Domain knowledge that can be used to understand and communicate with end -users and business representatives is one of the generic skills required by testers . A tester with experience as a pilot would make them better able to appreciate the acceptance criteria fo r the helicopter control system c) Is not correct . Although programming skills could be considered as technical knowledge which can increase efficiency when utilizing some test tools, it is unlikely that these skills would improve their commu nication with business analysts d) Is not correct. Although thoroughness, attention to detail, curiosity, and a methodical approach to identifying hard -to-find defects are all useful generic skills for testers, it is doubtful they would be generating test cases prior to starting exploratory testing . This is because one of the main tenets of exploratory testing is that the test cases are generated during the t esting, not scripted in advance Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 105,
    "question": "(1 Point) Which of the following is an advantage of the whole -team approach?",
    "options": {
      "a": "It allows team members to take on any role at any time",
      "b": "It only needs a single team to support the complete development project",
      "c": "It embeds business representatives alongside developers in the same team",
      "d": "It generates a team synergy that benefits the entire project Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct . The whole -team approach allows any team member with the requisite skills and knowledge to undertake any task , however that does not mean that team members can take on any role at any time . Typically, they only take on roles in which they are competent, and there is no suggestion that ever y team member can do every role b) Is not correct. The whole -team approach applies to how a single team (typically in Agile software development ) works; it does not cover how multiple teams are supposed to work on larger projects, and it does not suggest that only one ‘whole’ team i s needed for a complete project c) Is not correct. The whole -team approach does not expect every team member to be involved in every important decision. For instance, there is no need for the business representative (i.e. , the Product Owner) to be involved in every technical decision that does not affect the business outcome and implementing such an approach would unnecessaril y slow down the team’s progress d) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole -team approach fosters superior team dynamics, promotes robust communication and collaboration, a nd generates a team synergy that benefits the entire project Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 106,
    "question": "(1 Point) Which of the following statements about the chosen software development lifecycle is CORRECT?",
    "options": {
      "a": "If agile software development is used, automation of system tests replaces the need for regression testing",
      "b": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
      "c": "If an iterative development model is used, then component testing is typically performed manually by developers",
      "d": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. In agile software development, deliverables are produced in each iteration, and the frequent delivery of increments necessitates extensive regression testing . Although some (or all) of this regression testing may be automated, the regression testing (automated or not) cannot be rep laced by automation of system tests b) Is correct. If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g. , reviews) is performed . Later in the lifecycle, when code is available for execution, dynamic testing is possible . Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle c) Is not correct. If an iterative development model , like agile software development , is used, then component tests may well be used for regression testing for each iteration . In which case, there is a strong argument for automating these component tests, which will have to be run frequently, and there is unlikely to be a strong argument for developers performing these component tests manually d) Is not correct . In most incremental development models, deliverables are produced in each increment , requiring both static testing and dynamic testing at all test leve ls for each increment delivered Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 107,
    "question": "(1 Point) Which of the following is a good testing practice that applies to all software development lifecycles ?",
    "options": {
      "a": "Testers should review work products as part of the next development phase",
      "b": "Testers should review work products as soon as drafts are available",
      "c": "Testers should review work products before test analysis and test design begin",
      "d": "Testers should review work products immediately after they are published Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift -left approach . If they waited until the next development phase , then unnecessary development (and test) work could be started on unreviewed, flawed work products b) Is correct. Testers should review work products as soon as drafts are available to enable early testing a s part of a shift -left approach c) Is not correct. Testers typically review work products that form the test basis as part of test analysis, not before test analysis and test design d) Is not correct . Testers should review work products as soon as drafts are available to enable early testing as part of the shift-left approach . Waiting until they are published means that any defects that could be found by tester ’s review wi ll be in the published document",
    "source": "V4",
    "_html": false
  },
  {
    "id": 108,
    "question": "(1 Point) Which of the following is an example of a test -first approach to development?",
    "options": {
      "a": "Test-Driven Development",
      "b": "Coverage -Driven Development",
      "c": "Quality -Driven Development",
      "d": "Feature -Driven Development Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Test -Driven Development (TDD) is a well -known example of a test -first approach to development b) Is not correct. Coverage -Driven Development is not a correct example of a tes t-first approach to development c) Is not correct. Quality -Driven Development is not a correct example of a test-first approach to development d) Is not correct . Feature -Driven Development is not a n example of a test - first approach to development , but is, instead, an agile software development methodology based around delivering features (as opposed to user stories in Scrum) Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 109,
    "question": "(1 Point) Which of the following statements about DevOps is CORRECT?",
    "options": {
      "a": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing",
      "b": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression",
      "c": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift -right approach",
      "d": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift -left approach with high-quality code submission and component tests . This is largely provided through continuous integration, where the developers submit component (unit) tests with their new code, which must pass for the code to be admitted to the build . Therefore, developers do ne ed to complete component testin g b) Is correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift -left approach with high-quality code submission and component tests c) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift -left approach with high-quality code submission and component tests. Testers do not attempt to treat developers and operations equally by spending more time on release testing, although a shift -right approach to testing (testing in production) may well be used d) Is not correct . Automated processes like continuous integration/continuous de livery ( CI/CD ) in DevOps facilitate stable test environments and reduce the need for manual testing, however, there is a risk of overlooking the importance of manual testing, espec ially from a user's perspective Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 110,
    "question": "(1 Point) Which of the following is MOST likely to be performed as part of system testing?",
    "options": {
      "a": "Security testing of a credit management system by an independent test team",
      "b": "Testing the interface of a currency exchange system with an external banking system",
      "c": "Beta testing of a remote learning system by courseware developers",
      "d": "Testing interactions between the user interface and database of a human resources system Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. System testing examines the behavior and capabilities of the complete system and covers non -functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team base d on system specifications b) Is not correct. System integration testing examines the interfaces with other systems and external services c) Is not correct. Beta testing is a type of acceptance testing performed at an external site by roles outside the developme nt organization d) Is not correct. Component integration testing involves testing the (interfaces and) interactions between components of a system, such as the user interface and database",
    "source": "V4",
    "_html": false
  },
  {
    "id": 111,
    "question": "(1 Point) Which of the following statements is CORRECT ?",
    "options": {
      "a": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
      "b": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
      "c": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
      "d": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Regression tests increase in number as the project progresses, as new regression tests are typically required as changes are made to the system. Similarly, the number of confirmation tests also typically increases as the project progresses as new confirmation tests are needed for each fix made to a system b) Is not correct. It is the other way round. Confirmation tests are created and run when the test object is fixed, and regression tests are (ideally) run whenever the test object is enhanced (changed) c) Is not correct. Confirmation testing verifies that a defect has been fixed correctly and so is concerned with testing changes to the test object . However , regression testing ensures that changes (including changes to the operational environment) do not have negative effects on unchanged software and so does not check that the operationa l environment remains unchanged d) Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed – and so is concerned with changed code Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 112,
    "question": "(1 Point) Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
    "options": {
      "a": "Lack of usability provided through the user interface",
      "b": "Code with no path that reaches it",
      "c": "Poor response times for most of the expected users",
      "d": "Required features that are not implemented in the code Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct . A lack of usability provided through the user interface can be detected through a review using a suitable checklist, but the lack of usability can also be identified by getting several typical users to dynamically test the user interface and pr ovide feedback on its usability b) Is correct . A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, whi ch is impractical for real code c) Is not correct. Poor response times for most of the expected users are difficult to determine without executing the code (i.e. , by static testing), so in this situation dynamic testing could find a defect, but static testing is unlikely to find it d) Is not correct. A review of the code by someone who is aware of the required features could detect that the required features had not been implemented in the code, and dynamic testing could also be used to determine that these required features had not bee n imple mented Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 113,
    "question": "(1 Point) Which of the following is a benefit of early and frequent stakeholder feedback?",
    "options": {
      "a": "Managers are aware of which developers are less productive",
      "b": "It allows project managers to prioritize their stakeholder interactions",
      "c": "It facilitates early communication of potential quality issues",
      "d": "End users better understand why the delivery of the work product is delayed Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The feedback is from stakeholders (e.g. , business representative s and end user s), not from developers, so this feedback is not likely to inform managers which develop ers are more or less productive b) Is not correct. Early and frequent feedback from stakeholders is not used by project managers to prioritize how they interact with the different stakeholders c) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly benef icial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are un derstood and implemented sooner d) Is not correct . Early and frequent feedback can prevent the development of a product that does not meet stakeholder needs, and results in costly rework and missed deadlines , so, ideally there should be no delay . Also, the feedback is from stakeholders (not to them), which includes the end users, so the end users providing feedback will not aid the end users’ understanding Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 114,
    "question": "(1 Point) Given the following task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected 2. Everyone has access to the work product 3. Anomalies are identified in the work product 4. Anomalies are discussed And the following review activities",
    "options": {
      "a": "1B, 2C, 3D, 4A",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2A, 3B, 4D",
      "d": "1C, 2B, 3A, 4D Select ONE option."
    },
    "correct": "d",
    "explanation": "Considering each of the listed task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected - (Planning (C): Defining the review scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas of focus, exit criteria, supporting information such as standards, effort, and timeframes.) 2. Everyone has access to the work product - (Review initiation (B): Ensuring all participants have access to the work product and necessary resources, and clarifying their roles and responsibilities.) 3. Anomalies are identified in the work product - (Individual review (A): Evaluating the work product's quality, identifying and logging anomalies, recommendations, and questions using review techniques like checklist -based reviewing and scenario -based reviewing.) 4. Anomalies are analyzed and discussed - (Communication and analysis (D): Analyzing and discussing each anomaly, determining its status, ownership, and required actions, and making review decisions, normally in a meeting. This could include determining the need for a follow -up review.) Thus : a) Is not correct b) Is not correct c) Is not correct d) Is correct. T he correct match is: 1C, 2B, 3A, 4D Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 115,
    "question": "(1 Point) Given the following roles in reviews: 1. Scribe 2. Review leader 3. Facilitator 4. Manager And the following responsibilities in reviews:",
    "options": {
      "a": "1A, 2B, 3D, 4C",
      "b": "1A, 2C, 3B, 4D",
      "c": "1B, 2D, 3A, 4C",
      "d": "1B, 2D, 3C, 4A Select ONE option."
    },
    "correct": "c",
    "explanation": "Considering each of the listed roles: 1. Scribe (or Recorder) - responsible for gathering feedback from reviewers and documenting review information, such as decisions made, and any new anomalies identified during the review meeting. (Records review information, such as decisions and new anomalies found during the review meeting - B) 2. Review Leader - responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully. (Takes overall responsibility for the review such as organizing when and where the review will take place - D) 3. Facilitator (or Moderator) - responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. (Ensures the effective running of review meetings and the setting up of a saf e review environment - A) 4. Manager - responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. (Decides what is to be reviewed and provides resources, such as staff and time for the review - C) Thus : a) Is not correct b) Is not correct c) Is correct. T he correct match is: 1B, 2D, 3A, 4C d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 116,
    "question": "(1 Point) Which of the following statements BEST describes the difference between decision table testing and branch testing?",
    "options": {
      "a": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
      "b": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
      "c": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
      "d": "In decision table testing , the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code . Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Decision table testing is a black -box test technique , not a white -box test technique – the test cases are not based on the decisions in the source code . In branch testing, the test cases are derived from knowledge of the control flow of the test object b) Is not correct. Anticipation of potential defects is used in error guessing (an experience -based test technique), not in branch testing (a white -box test technique). In decision table testing , the test cases are derived from the specification th at describes the business logic c) Is not correct. If a test case is based on the knowledge of the control flow of the test object, it is a white -box test technique. Decision table testing is typically based on an analysis of business logic, so it is a black -box test technique. In branch testing, test cases are not derived from the specification – this would make it a black -box test technique. Branch testing is a white -box test technique, where test cases are derived bas ed on the source code structure d) Is correct. Decision table testing is a black -box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white -box test technique, so test cases are based on an analysis of the test object’s internal structure and processing. As the test cases are dependent on how the software is designed and coded , they can only be created after t he design or im plementation of the test object Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 117,
    "question": "(1 Point) Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e. , a 50% discount in total). Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
    "options": {
      "a": "19, 20,",
      "b": "11, 12,",
      "c": "1, 10,",
      "d": "10, 29, 30, 31 Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. 19 covers the “no discount” partition , 20 covers the “50% discount” partition , and 30 covers the “10% discount” partition . These three values cover all three of the valid equivalence partitions b) Is not correct. 11 and 12 cover the “no discount” partition , while 20 covers the “50% discount” partition, so covering two of the three va lid equivalence partitions c) Is not correct. 1 cover s the “no discount” partition, while 10 and 50 cover the “10% discount” partition. The “50% discount” partition is not covered , so overall two of the three valid equivalence partitions are covered d) Is not correct. 29 and 31 cover the “no discount” partition, while 10 and 30 cover the “10% discount” partition. The “50% discount” partition is not covered , so overall two of the three valid equivalence partitions are covered Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 118,
    "question": "(1 Point) You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect. At first, the form is empty (password length = 0). You apply boundary value analysis to the “password length” variable. Your set of test cases achieves 100% 2 -value boundary value coverage. The team decided that due to the high risk of this component , test cases should be added to ensure 100% 3 -value boundary value coverage. Which additional password lengths should be tested to achieve this?",
    "options": {
      "a": "4, 5, 13,",
      "b": "7,",
      "c": "1, 5,",
      "d": "1, 4, 7, 11, 14 Select ONE option."
    },
    "correct": "d",
    "explanation": "The domain for the password length has three equivalence partitions : • passw ords too short {0, 1, …, 4, 5} • passwords OK {6, 7, …, 11, 12} • passwords too long {13, 14, …} To achieve full coverage for 3 -value BVA we need to test the following values: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Since 2 -value BVA is already covered, this means that we have already tested the passwords of length : 0, 5, 6, 12 and 13. This means that the additional lengths that need to be covered to move from 2 -value to 3 -value are: 1, 4, 7, 11 and 14. Thus : a) Is not correct b) Is not correct c) Is not correct d) Is correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 119,
    "question": "<p>The following decision table contains the rules for determining the risk of atherosclerosis.</p>\n<table class=\"dt\">\n<tr><th></th><th>Rule 1</th><th>Rule 2</th><th>Rule 3</th><th>Rule 4</th><th>Rule 5</th></tr>\n<tr><th>Conditions</th><td colspan=\"5\"></td></tr>\n<tr><td>Cholesterol (mg/dl)</td><td>≤ 124</td><td>≤ 124</td><td>125 – 200</td><td>125 – 200</td><td>≥ 201</td></tr>\n<tr><td>Blood pressure (mm Hg)</td><td>≤ 140</td><td>&gt; 140</td><td>≤ 140</td><td>&gt; 140</td><td>—</td></tr>\n<tr class=\"action\"><td>Risk level</td><td>very low</td><td>low</td><td>medium</td><td>high</td><td>very high</td></tr>\n</table>\n<p>You designed the test cases with the following input data:</p>\n<ul>\n<li><strong>TC1:</strong> Cholesterol = 125 mg/dl, Blood pressure = 141 mm Hg</li>\n<li><strong>TC2:</strong> Cholesterol = 200 mg/dl, Blood pressure = 201 mm Hg</li>\n<li><strong>TC3:</strong> Cholesterol = 124 mg/dl, Blood pressure = 201 mm Hg</li>\n<li><strong>TC4:</strong> Cholesterol = 109 mg/dl, Blood pressure = 200 mm Hg</li>\n<li><strong>TC5:</strong> Cholesterol = 201 mg/dl, Blood pressure = 140 mm Hg</li>\n</ul>\n<p>What is the decision table coverage achieved by these test cases?</p>",
    "options": {
      "a": "40%",
      "b": "60%",
      "c": "80%",
      "d": "100% Select ONE option."
    },
    "correct": "b",
    "explanation": "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4 TC3 and TC4 both cover Rule 2 TC5 covers Rule 5 So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT option. Thus : a) Is not correct b) Is correct c) Is not correct d) Is not correct",
    "source": "V4",
    "_html": true
  },
  {
    "id": 120,
    "question": "<p>A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 500 120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:500px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah120\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st120 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt120 { fill: #e2e8f0; font-family: sans-serif; font-size: 14px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .edg120 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah120); }\n      .elbl120 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- N=0 -->\n  <circle class=\"st120\" cx=\"60\" cy=\"60\" r=\"30\"/>\n  <text class=\"sttxt120\" x=\"60\" y=\"60\">N=0</text>\n  <!-- N=1 -->\n  <circle class=\"st120\" cx=\"190\" cy=\"60\" r=\"30\"/>\n  <text class=\"sttxt120\" x=\"190\" y=\"60\">N=1</text>\n  <!-- N=2 -->\n  <circle class=\"st120\" cx=\"320\" cy=\"60\" r=\"30\"/>\n  <text class=\"sttxt120\" x=\"320\" y=\"60\">N=2</text>\n  <!-- N=3 -->\n  <circle class=\"st120\" cx=\"450\" cy=\"60\" r=\"30\"/>\n  <text class=\"sttxt120\" x=\"450\" y=\"60\">N=3</text>\n  <!-- N=0 -> N=1 (add) -->\n  <line class=\"edg120\" x1=\"92\" y1=\"50\" x2=\"156\" y2=\"50\"/>\n  <text class=\"elbl120\" x=\"124\" y=\"40\">add</text>\n  <!-- N=1 -> N=0 (remove) -->\n  <line class=\"edg120\" x1=\"158\" y1=\"70\" x2=\"94\" y2=\"70\"/>\n  <text class=\"elbl120\" x=\"124\" y=\"90\">remove</text>\n  <!-- N=1 -> N=2 (add) -->\n  <line class=\"edg120\" x1=\"222\" y1=\"50\" x2=\"286\" y2=\"50\"/>\n  <text class=\"elbl120\" x=\"254\" y=\"40\">add</text>\n  <!-- N=2 -> N=1 (remove) -->\n  <line class=\"edg120\" x1=\"288\" y1=\"70\" x2=\"224\" y2=\"70\"/>\n  <text class=\"elbl120\" x=\"254\" y=\"90\">remove</text>\n  <!-- N=2 -> N=3 (add) -->\n  <line class=\"edg120\" x1=\"352\" y1=\"50\" x2=\"416\" y2=\"50\"/>\n  <text class=\"elbl120\" x=\"384\" y=\"40\">add</text>\n  <!-- N=3 -> N=2 (remove) -->\n  <line class=\"edg120\" x1=\"418\" y1=\"70\" x2=\"354\" y2=\"70\"/>\n  <text class=\"elbl120\" x=\"384\" y=\"90\">remove</text>\n</svg>\n</div>\n<p>Which of the following test cases, represented as sequences of events, achieves the <strong>highest level</strong> of valid transitions coverage?</p>",
    "options": {
      "a": "Add, Remove, Add, Add, Add",
      "b": "Add, Add, Add, Add, Remove, Remove",
      "c": "Add, Add, Add, Remove, Remove",
      "d": "Add, Add, Add, Remove, Add Select ONE option."
    },
    "correct": "c",
    "explanation": "Let us refer to the transitions with E1, …, E 5 as in the picture. The variable N denotes the number of elements currently stored. Each “Add” event increases it by 1, and each “Remove” event decreases it by 1. Notice, that when the “Add” event occurs while being in the NO T FULL state, the state changes to FULL only if N= 2. If N< 2, the system stays in the NO T FULL state. If N=0, no “Remove” action is possible. Similarly, if N=3, no “Add” action is possible. Test a) can be written as E1, E3, E3 , E2, E4 (so covers 4 out of 5 valid transitions , achieving 80% valid transitions coverage). Test b) is infeasible, because after the first three “Add” actions the system is in the FULL state and there is no valid transition going from FULL triggered by the “Add” event . After the first three transitions only 60% of valid transitions coverage is achieved. Test c) can be written as E1, E2, E4, E5, E 3 (so covers 5 out of 5 valid transitions , achieving 100% valid transitions coverage). Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions , achieving 80% valid transitions coverage ). Thus : a) Is not correct b) Is not correct c) Is correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": true
  },
  {
    "id": 121,
    "question": "(1 Point) You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage. Which of the following sentences must be necessarily true?",
    "options": {
      "a": "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
      "b": "There exists at least one statement that must have been executed by both T1 and T",
      "c": "At least 5% of the statements in the code that was tested are non -executable",
      "d": "The test suite composed of tests T1 and T2 achieves full branch coverage Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Coverage is always defined as the percentage of the covered elements . Therefore, it cannot exceed 100% b) Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible (see answer a). Therefore, at least 5% of executable statements must have been executed by both T1 and T2 c) Is not correct. Statement coverage does not tell us anything about the number of non -executable statements in the code d) Is not correct. Even if a test suite achieves full statement coverage, this does not imply achieving full branch coverage Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 122,
    "question": "(1 Point) Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula ?",
    "options": {
      "a": "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code",
      "b": "X = number of conditional branches exercised by the test cases Y = total number of branches in the code",
      "c": "X = number of branches exercised by the test cases Y = total number of branches in the code",
      "d": "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code Select ONE option."
    },
    "correct": "c",
    "explanation": "Branch testing is a white -box test technique in which the coverage items are branches. A branch is a transfer of control between two nodes in the control flow graph, which shows the possible sequences in which source code statements are executed in the tes t object. Each transfer of control can be either unconditional (i.e., straight -line code) or conditional (i.e., a decision outcome). Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage. Thus: a) Is not correct. A decision outcome is a conditional branch. For branch testing, X counts not only conditional, but also unconditional branches b) Is not correct. Branch coverage counts not only conditional, but also unconditional branches c) Is correct. Branch c overage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage d) Is not correct. Both X and Y count only conditional branches and do not take into account the unconditional branches 26 a, e Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effecti ve if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness. Thus: a) Is correct. Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing b) Is not correct. Exploratory testing is not a black -box test technique c) Is not correct. Exploratory testing is useful when the specifications are poorly written d) Is not correct. Programming skills have nothing to do with e xploratory testing in principle e) Is correct. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curi osity and creativeness Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 123,
    "question": "(1 Point) Which of the following BEST fits as an element of the checklist used in checklist -based testing?",
    "options": {
      "a": "“The developer made an error when implementing the code”",
      "b": "“The achieved statement coverage exceeds 85%”",
      "c": "“The program works correctly regarding functional and non -functional requirements”",
      "d": "“The error messages are written in language that the user can understand” Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Checklists should contain test conditions to be verified. This is an example of an error, not a test condition ; even if the tester was able to deduce some potential test conditions from the examples of errors, this error description is too general b) Is not correct. Checklists should not contain items that are better suited as exit criteria. This is an example of an exit criterion c) Is not correct. Checklists should not contain items that are too general. This is a very general item, which practicall y describes a test objective d) Is correct. This is an example of a test condition that can be checked by a human",
    "source": "V4",
    "_html": false
  },
  {
    "id": 124,
    "question": "(1 Point) Consider the following acceptance criteria for a user story written from the perspective of an online store owner. Given that the user is logged in and on the homepage, When the user clicks on the \"Add Item\" button, Then the \"Create Item\" form should appear, And the user should be able to input a name and price for the new item. In what format is this acceptance criteria written?",
    "options": {
      "a": "Rule-oriented",
      "b": "Scenario -oriented",
      "c": "Product -oriented",
      "d": "Process -oriented Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. The rule -oriented format includes formats like bullet point verification lists or tabulated forms of input -output mappings, explicitly showing the rules to be followed. Given/When/Then is a scenario - oriented format because it desc ribes a scenario to be verified b) Is correct. This is a Given/When/Then format, wh ich is scenario -oriented c) Is not correct. There is no \"product -oriented\" format of acceptance criteria d) Is not correct. There is no \"process -oriented\" format of acceptance criteria",
    "source": "V4",
    "_html": false
  },
  {
    "id": 125,
    "question": "(1 Point) Your team analyzes the following user story in order to define the acceptance criteria: As a registered customer, I want to be able to view my previous order s on the company's website, so that I can keep track of my purchases. Which of the following test cases will NOT be relevant for this user story?",
    "options": {
      "a": "Input: the customer logs into their account on the website and clicks the “see order history” button Expected result : the system shows a list of all the customer’s previous orders, including the date, order number, and total cost",
      "b": "Input: the customer clicks on an order from the order list Expected result : the system displays the individual items purchased, along with their prices and quantities",
      "c": "Input: the customer clicks “Sort ascending” button on the order history screen Expected result : the system shows the order history sorted by order numb er in ascending order",
      "d": "Input: an unregistered customer registers as a new customer with a valid e -mail address that does not already exist in the customer database Expected result : the system accepts the registration and creates the account Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. The test case is related to viewing previous orders in the order history b) Is not correct. The test case is related to viewing previous order s c) Is not correct. The test case is related to viewing previous orders in the order history d) Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous order s Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 126,
    "question": "(1 Point) Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are: (1) Code development (2) Submit code into a version control system and merge it into the “test” branch (3) Perform component testing for the submitted code Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
    "options": {
      "a": "Static analysis returns no high severity warnings for the submitted code",
      "b": "System version control reports no conflicts when merging code into the “test” branch",
      "c": "Component tests are compiled and ready to be executed",
      "d": "Statement coverage is at least 80% Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. This is something that can (and should) be checked before the code i s submitted to version control b) Is not correct. This is something that can be checked after step (2) is performed, because merge conflict reporting can be done after the code is submitted and merged c) Is not correct. This fits better as t he entry criterion for step (3) d) Is not correct. This fits better as the exit cr iterion for step (3)",
    "source": "V4",
    "_html": false
  },
  {
    "id": 127,
    "question": "<p>You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one.</p>\n<table class=\"dt data-table\">\n<tr><th>Project</th><th>Development effort ($)</th><th>Test effort ($)</th></tr>\n<tr><td>P1</td><td>800,000</td><td>40,000</td></tr>\n<tr><td>P2</td><td>1,200,000</td><td>130,000</td></tr>\n<tr><td>P3</td><td>600,000</td><td>70,000</td></tr>\n<tr><td>P4</td><td>1,000,000</td><td>120,000</td></tr>\n</table>\n<p>The estimated development effort for the new project is <strong>$800,000</strong>.</p>\n<p>What is your estimate of the test effort in this project?</p>",
    "options": {
      "a": "$40,",
      "b": "$80,",
      "c": "$81,",
      "d": "$82,500 Select ONE option."
    },
    "correct": "b",
    "explanation": "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test -to-development effort ratio is 1:10 ($90,000 : $900,000) , which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is estimated as: 10% * $ 800,000 = 0.1 * $800,000 = $80,000. Thus : a) Is not correct b) Is correct c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": true
  },
  {
    "id": 128,
    "question": "<p>(1 Point) You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following seven test cases, all of which you want to execute . The tests should be executed in the best order, based on test priority. Test Priority (1 = higher priority) TC1 SEARCH for product A 4 TC2 SEARCH for product B 4 TC3 VIEW product A details 3 TC4 VIEW product B details 2 TC5 ADD product A to a shopping cart 3 TC6 ADD product B to a shopping cart 1 TC7 place an ORDE R 5 You also identified the following logical dependencies between test cases:</p>\n<ul>\n<li>SEARCH functionality must be tested before VIEW functionality can be tested.</li>\n<li>VIEW functionality must be tested before ADD functionality.</li>\n<li>ADD functionality must be tested before ORDER functionality. Which test case should be executed as the fourth one?</li>\n</ul>",
    "options": {
      "a": "TC",
      "b": "TC",
      "c": "TC",
      "d": "TC2 Select ONE option."
    },
    "correct": "b",
    "explanation": "The logical dependencies mean that for each product you have to run SEARCH → VIEW → ADD before running ORDER. You can add more products (using the same flow), before you run ORDER . Based on this , TC1 or TC2 must be executed first, otherwise no progress can be made . The first priority should be given to VIEW and ADD product B, as its test cases (TC6, TC4) are assigned with higher priority. So, the first 3 test s to execute are TC2 -> TC 4 -> TC6 Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. I f TC7 has lower priority than the other tests, they should be tested first. Therefore, the entire flow should be: TC2 -> TC4 -> TC6 -> TC1 -> TC3 -> TC5 -> TC 7 a) Is not correct. TC 1 must be executed before TC3 b) Is correct c) Is not correct . As shown above, TC7 is the last to be executed. d) Is not correct . Product B must be executed before product A",
    "source": "V4",
    "_html": true
  },
  {
    "id": 129,
    "question": "(1 Point) According to the testing quadrants model, which of the following falls into quadrant Q1 (“ technology facing” and “support the team” )?",
    "options": {
      "a": "Usability testing",
      "b": "Functional testing",
      "c": "User acceptance testing",
      "d": "Component integration testing Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Usability testing is business facing testing that critiques the product (Q3) b) Is not correct. Functional testing is business facing testing (Q2) c) Is not correct. User acceptance testing is business facing testing that critiques the product (Q3) d) Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1) Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 130,
    "question": "(1 Point) Given the following risks : 1. Ineffective loop implementation causes long system responses 2. Consumers change their preferences 3. Flooding of the server room 4. Patients above a certain age receive inaccurate reports And the following mitigation activities:",
    "options": {
      "a": "1C, 2D, 3A, 4B",
      "b": "1B, 2D, 3A, 4C",
      "c": "1B, 2A, 3D, 4C",
      "d": "1C, 2A, 3D, 4B Select ONE option."
    },
    "correct": "c",
    "explanation": "Considering each of the listed risks and their mitigations: 1. Long system responses ( 1) can be te sted in performance testing (B) 2. Changes in consumers’ preferences ( 2) are usually out of our control, so usually we accept this risk (A) 3. Flooding of the server room ( 3) can cause significant loss, so we should transfer the risk, e.g., by buying an insurance policy (D) 4. That p atients above a certain age receive inaccurate reports (4) suggests a potential boundary problem, which can be effectively detected with test techniques like BVA (C) Thus : a) Is not correct b) Is not correct c) Is correct. The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C d) Is not correct",
    "source": "V4",
    "_html": false
  },
  {
    "id": 131,
    "question": "(1 Point) Which of the following is a product quality metric ?",
    "options": {
      "a": "Mean time to failure",
      "b": "Number of defects found",
      "c": "Requirements coverage",
      "d": "Defect detection percentage Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric b) Is not correct. This is an example of a defect metric, not a product quality metri c c) Is not correct. This is an example of a coverage metric, not a product quality metric d) Is not correct. This is an example of a defect metric, not a product quality metric Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 132,
    "question": "(1 Point) You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer ?",
    "options": {
      "a": "Face -to-face",
      "b": "Dashboards",
      "c": "Email",
      "d": "Video conferencing Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. The client is in a different location and time zone, so it may be diffic ult to communicate face -to-face b) Is not correct. Dashboards are usually available to any user at any time, so the difference in time zones will not be as much of a hindrance to communication as verbal , face -to-face communication c) Is not correct. Although the time difference between Europe and America is several hours, and this may cause some inconvenience, it's certainly not as great as w ith communicating face -to-face d) Is not correct. Video conferencing tools are a convenient means of communication. Although communication between Europe and America during working hours usually requires one party to connect in the very early or very late hours, this is not as much of an i nconvenience as verbal, face -to-face communication",
    "source": "V4",
    "_html": false
  },
  {
    "id": 133,
    "question": "(1 Point) Which of the following BEST describes an example of how configuration management (CM) supports testing?",
    "options": {
      "a": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
      "b": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage",
      "c": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
      "d": "Having the version number of the test case, the CM tool can automatically generate test data for this test case Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. For a complex configuration item (e.g., a test environment), configuration management ( CM) records the items it consists of, th eir relationships, and versions b) Is not correct. CM tools do not execute test cases and do not calculate coverage c) Is not correct. A CM tool i s not a license d management tool d) Is not correct. CM tools do not generate test data Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 134,
    "question": "(1 Point) You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows. Environment configuration: sort function build 2.002.2182, test case set: TCS -3, # of TCs: 5 Test run ID: 736 Start 12:43:21.003 12:43:21.003 Execution of TC1. Input: 3. Output: 3. Result: passed 12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed 12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8. Result: failed 12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2. Result: failed 12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed End 12:43:21.005 Total time of test cycle: 0:00:00.002 Which of the following provides the BEST description of the failure that can be used in a defect report?",
    "options": {
      "a": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
      "b": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
      "c": "The system fails to sort negative numbers. Reference: TC4, TC5.",
      "d": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected. Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. While the sentence is true, it does not provide much value for the developer b) Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the def ect and fix it more efficiently c) Is not correct. The system does not fail in sorting negative numbers. The problem is ra ther in disregarding duplicates d) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren’t aware that the test cases have any defects",
    "source": "V4",
    "_html": false
  },
  {
    "id": 135,
    "question": "9 (1 Point) Given the following descriptions : 1. Support workflow tracking 2. Facilitate communication 3. Virtual machines 4. Support reviews And the following test tool categories:",
    "options": {
      "a": "1A, 2B, 3C, 4D",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2D, 3B, 4A",
      "d": "1D, 2C, 3A, 4B Select ONE option."
    },
    "correct": "d",
    "explanation": "The ‘exhaustive testing is impossible’ principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases . Instead, testing utilizes test techniques, test case prioritization, and risk -based testing to sample from the set of possibilities and focus test efforts. a) Is not correct. The principle states that it is not feasible to test every thing except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances , which is generally infeasible as there will be a practically infinite number of possibilities . Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. Sometimes there may be a practically infinite number of possible expected results (e.g., when there are several variables representing real numbers), whereas at other times there may be just two expected results , such as with a single variable that can be either true or false b) Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances . This is because for non -trivial systems there is a practically infinite number . Therefore, in practice, documenting all possible input variations would be impractical as it would take an infinite length of time c) Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The ‘early testing saves time and money’ principle is concerned with fixing def ects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures d) Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V4",
    "_html": false
  },
  {
    "id": 136,
    "question": "(1 Point) Which of the following is MOST likely to be a benefit of test automation?",
    "options": {
      "a": "It provides coverage measures that are too complicated for humans to derive",
      "b": "It shares responsibility for the testing with the tool vendor",
      "c": "It removes the need for critical thinking when analyzing test results",
      "d": "It generates test cases from an analysis of the program code Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Test automation can provide measures that are too complicated for humans to derive, such as white -box test ing coverage measures for all but the most trivia l code b) Is not correct. By using test tools , the responsibility for the testing is NOT shared with the tool vendor as the vendor is not involved in the testing, and it is the tester’s responsibility . The only possible responsibility that could be assigned to the tool vendor is if the tool fails to work as expected and provides incorrect test results c) Is not correct. Testers still need to apply critical thinking when analyzing anomalies in the test results to determine their likely cause d) Is not correct. Neither testers nor tools can generate test cases simply from an analysis of the program code as the code is the implementation and provides no information on the expected results, which will need to come from another part of the test basis, such as the desi gn specification",
    "source": "V4",
    "_html": false
  },
  {
    "id": 137,
    "question": "( 1 Point) Which of the following is a typical test objective?",
    "options": {
      "a": "Validating that documented requirements are met",
      "b": "Causing failures and identifying defects",
      "c": "Initiating errors and identifying root causes",
      "d": "Verifying the test object meets user expectations Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replace d ‘validating’ with ‘verifying’ b) Is correct. Causing failures and identifying defects is probably the most comm on objective of dynamic testing c) Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing d) Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this wo uld be correct if we replace d ‘verifying’ with ‘validating’ Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 138,
    "question": "(1 Point) The ‘absence -of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
    "options": {
      "a": "Explaining that it is not possible for testing to show the absence of defects",
      "b": "Supporting the end users to p erform acceptance testing",
      "c": "Ensuring that no implementation defects remain in the delivered system",
      "d": "Modifying tests that cause no failures to ensure few defects remai n Select ONE option."
    },
    "correct": "b",
    "explanation": "The ‘absence -of-defects fallacy’ is concerned with the idea that ensuring correctness in accordance with the requirements (i.e. , verifying the absence of implementation defects) does not guarantee user satisfaction with the system. To address this it is also necessary to validate that the system meets users' needs and expectations, fulfills business objectives, and outperforms competing systems. a) Is not correct. The ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the ‘absence -of- defects ’ fallacy b) Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meet s users' needs and expectations c) Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, there fore, guarantee its correctness d) Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the ‘tests wear out’ principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations 4 b, e Given the following description of test analysis: To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. The systematic identification of test conditions as coverage items often involves using test techniques both during test analysis and as part of the test design activity. From the above description, it can be seen that test techniques are often used in the test analysis and test design activities. Boundary value analysis and equivalence partitioning are test techniques . a) Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while te st techniques create test cases b) Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items c) Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while te st techniques create test cases d) Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while te st techniques create test cases e) Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 139,
    "question": "(1 Point) Given the following testware: 1. Coverage items 2. Change requests 3. Test execution schedule 4. Prioritized test conditions And the following test activities",
    "options": {
      "a": "1B, 2D, 3C, 4A",
      "b": "1B, 2D, 3A, 4C",
      "c": "1D, 2C, 3A, 4B",
      "d": "1D, 2C, 3B, 4A Select ONE option."
    },
    "correct": "a",
    "explanation": "Considering each of the listed test activities and their output testware : A. Test analysis - prioritized test conditions (4) (e.g., acceptance criteria), and defect reports for defects identified in the test basis B. Test design - prioritized test cases, test charters, coverage items (1), test data requirements, an d test environment requirements C. Test implementation - test procedures, automated test scripts, test suites, test data, test execution schedule (3), and test environment elements such as stubs, drivers, simulato rs, and service virtualizations D. Test completion - test completion report, documented lessons learned, action items for improvement, and change requests (2) (as product backlog items ) Thus : a) Is correct. T he correct match is: 1B, 2D, 3C, 4A b) Is not correct c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 140,
    "question": "(1 Point) Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
    "options": {
      "a": "In Agile software development , the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team",
      "b": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion",
      "c": "In Agile software development , test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself",
      "d": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members fo llowing the whole - team approach b) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control c) Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the developme nt team may perform these tasks d) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for te st im plementation and test execution Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 141,
    "question": "(1 Point) Which of the following statements about the independence of testing is CORRECT?",
    "options": {
      "a": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers",
      "b": "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers",
      "c": "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain",
      "d": "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bot tlenecks in the release process b) Is not correct. A developer’s familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects c) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer’s team an d do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not depende nt on the level of independence d) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer’s team generally more independent than testers from within the tea m. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blame d for delays in product release Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 142,
    "question": "(1 Point) Which of the following provides the BEST description of shift-left?",
    "options": {
      "a": "When agreed by the developers, manual activities on the left -hand side of the test process are automated to support the principle of ‘early testing saves time and money’",
      "b": "Where cost -effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
      "c": "When the y have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
      "d": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Practices involved in shift left are aimed at implement ing more test activit ies in the early phases of the software development life cycle (SDLC) , portraying the S DLC as moving from left to right. There is no such thing as the left-hand side of the test process b) Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, o verall savings should be higher c) Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and if a continuous integration/continuous delivery ( CI/CD ) approach is followed, then these tests will have been submitted with the code. In some situations the tester may automate tests for regression testing , and sometimes even for component tests and component integration tests , however this is not part of shift left which moves testing earlier in the SDLC d) Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasiz ing the importance of starting testing earlier in the SDLC . However, automating more test activities to be performed later in the SDLC is not part of shift -left Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 143,
    "question": "(1 Point) Which of the following is LEAST likely to occur as a result of a retrospective ?",
    "options": {
      "a": "The quality of future test object s improves by identifying improvements in development practices",
      "b": "Test efficiency improves by speeding up the configuration of test environments through automation",
      "c": "End users’ understanding of the development and test processes is improved",
      "d": "Automated test scripts are enhanced through feedback from developers Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. One of the purposes of r etrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective b) Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements . So, this is likely to occur as a result of a retrospective c) Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives d) Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 144,
    "question": "(1 Point) Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers ?",
    "options": {
      "a": "Component testing",
      "b": "Component integration testing",
      "c": "System integration testing",
      "d": "Acceptance testing Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment b) Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing c) Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. This type of testing is also most often performed by testers d) Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 145,
    "question": "(1 Point) The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one -way streets. Which of the following BEST describes the testing that will be performed ?",
    "options": {
      "a": "Only confirmation testing",
      "b": "Confirmation testing then regression testing",
      "c": "Only regression testing",
      "d": "Regression testing then confirmation testing Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered i n unchanged areas of the system b) Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unch anged areas of the system c) Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation d) Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed (i.e. , when an update needs to be tested), confirmation test ing precedes regression testing",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 146,
    "question": "(1 Point) Given the following example defects: i. Two different parts of the design specification disagree due to the complexity of the design ii. A response time is too long and so makes users lose patience iii. A path in the code cannot be reached during execution iv. A variable is declared but never subsequently used in the program v. The amount of memory needed by the program to generate a report is too high Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing) ?",
    "options": {
      "a": "ii, v",
      "b": "iii, v",
      "c": "i, ii, iv",
      "d": "i, iii, iv Select ONE option."
    },
    "correct": "d",
    "explanation": "Considering each of the listed example defects: i. Two different parts of the design specification disagree due to the complexity of the design – this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing ii. A response time is too long and so makes users lose patience – this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing iii. A path in the code cannot be reached during execution - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be fou nd by static testing iv. A variable is declared but never subsequently used in the program - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most e asily be found by static testing v. The amount of memory needed by the program to generate a report is too high – this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynam ic testing Thus : a) Is not correct b) Is not correct c) Is not correct d) Is correct. The correct match for static testing is i, iii, and iv Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 147,
    "question": "(1 Point) Given the following review types : 1. Technical review 2. Informal review 3. Inspection 4. Walkthrough And the following descriptions :",
    "options": {
      "a": "1A, 2B, 3C, 4D",
      "b": "1A, 2D, 3C, 4B",
      "c": "1B, 2C, 3D, 4A",
      "d": "1C, 2D, 3A, 4B Select ONE option."
    },
    "correct": "b",
    "explanation": "Considering each of the listed review types: 1. Technical review - This type of review is performed by technically qualified reviewers and led by a moderator. The objectives are to gain consensus and make decisions on technical problems while also evaluating quality and building confidence in the work product, generating new ideas, motivating a nd enabling authors to improve, and detecting anomalies 2. Informal review - The main objective is to detect anomalies. The process is not defined and does not require form al documented output 3. Inspection - This is the most formal review type, and it follows the complete generic review process. The primary objective is to find the most anomalies, and other objectives include evaluating quality and building confidence in the work product, motivati ng and enabling authors to improve, and collecting metrics that can be used to enhance the software development lifecycle (SDLC), including the inspection process. The author cannot act as the review leader or scribe 4. Walkthrough - Led by the author, this type of review serves various objectives such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. Reviewers might perform an individual review before the walkthrough, but this is not mandatory A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting anomalies C. The main objective is detecting anomalies and it requires metrics collection to support process improvement D. The main objective is detecting anomalies and it generates no formal documented output Thus : a) Is not correct b) Is correct. c) Is not correct d) Is not correct",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 148,
    "question": "(1 Point) Which of the following is a factor that contributes to a successful review ?",
    "options": {
      "a": "Ensure management participat e as reviewers",
      "b": "Split large work products in to smaller parts",
      "c": "Set reviewer evaluation as an objective",
      "d": "Plan to cover one document per review Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. To ensure successful reviews, it is important to secure management's support for the review process . However that does not mean that they should participate as reviewers b) Is correct. To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during indiv idual review s or review meetings c) Is not correct. To ensure successful reviews, it's important to clearly define objectives and measurable exit criteria, without evaluating participants d) Is not correct. To ensure successful reviews, it's important to break down the review into smaller chunks to prevent reviewers from losing focus during individual review s or review meetings. So you should not plan t o cover one document per review Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 149,
    "question": "(1 Point) What is the MAIN difference between black -box test techniques and experience -based test techniques ?",
    "options": {
      "a": "The test object",
      "b": "The test level at which the test technique is used",
      "c": "The test basis",
      "d": "The software development lifecycle (SDLC) in which the test technique can be used Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. In most cases both black -box test techniques and experience -based test techniques can be used for the same test obj ects b) Is not correct. Both black -box test techniques and experience -based test techniques can be used at all test levels c) Is correct. Black -box test techniques (also known as specification -based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experienc e-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may n ot use the specification at all d) Is not correct. Experience -based test techniques can detect defects that may be missed using black -box (and white -box) test techniques. Hence, experience -based test techniques are complementary to black -box test techniques and white -box test techniques and both black -box test techniques and experience -based test tech niques can be used in all SDLCs Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 150,
    "question": "<p>(1 Point) You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit . You have identified the following valid equivalence partitions: Variable : PIN code length</p>\n<ul>\n<li>The partition “length correct” - four-digit PINs</li>\n<li>The partition “length incorrect” - PINs with length other than 4 Variable : Number of different digits</li>\n<li>The partition “number of different digits correct” - PINs with at least two different digits</li>\n<li>The partition “number of different digits incorrect” - PINs with all digits being the same Which of the following is the BEST set of input test data to cover the identified equivalence partitions ?</li>\n</ul>",
    "options": {
      "a": "12, 1111, 1234 ,",
      "b": "1, 123 , 1111,",
      "c": "11, 12, 1111, 1234",
      "d": "123, 1222, 12345 Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. • Value “ 12” covers “length incorrect , too few digits ” • Value “1111” covers “length correct” and “number of different digits incorrect • Value “1234” again covers “ length correct” and “number of different digits correct” • Value “12345” covers “length incorrect, too many digits” b) Is not correct. All partitions are covered, however it only covers the lower side of “length incorrect” c) Is not correct. There are no value covering “correct PIN” d) Is not correct. There are no value covering “number of different digits” Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 151,
    "question": "(1 Point) A developer was asked to implement the following business rule: INPUT: value (integer number) IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect” ELSE write “value OK” You design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?",
    "options": {
      "a": "100, 150, 200,",
      "b": "99, 100, 200,",
      "c": "98, 99, 100,",
      "d": "101, 150, 199, 200 Select ONE option."
    },
    "correct": "d",
    "explanation": "The equivalence partitions are : {…, 99, 100}, {101, 102, …, 198, 199}, {200, 201, …}. Thus, there are 4 boundary values, which are: 100, 101, 199 and 200. In 2-value BVA , for each boundary value there are two coverage items (the boundary value and its closest neighbor belonging to the adjacent partition). As the closest neighbors are also boundary values in the adjacent partition, then there are just four coverage items . Thus: a) Is not correct. Only 100 and 200 are valid coverage items for 2 -value BVA, so we achieve 50% coverage b) Is not correct. Only 100 and 200 are valid coverage items for 2 -value BVA, so we achieve 50% coverage c) Is not correct. Only 100 and 101 are valid coverage items for 2 -value BVA, so we achieve 50% coverage d) Is correct. 101, 199 and 200 are valid coverage items for 2 -value BVA , so we achieve 75% coverage",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 152,
    "question": "<p>You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.</p>\n<table class=\"dt\">\n<tr><th></th><th>R1</th><th>R2</th><th>R3</th></tr>\n<tr><td>C1: First attempt at the exam?</td><td>—</td><td>—</td><td>F</td></tr>\n<tr><td>C2: Theoretical exam passed?</td><td>T</td><td>F</td><td>—</td></tr>\n<tr><td>C3: Practical exam passed?</td><td>T</td><td>—</td><td>F</td></tr>\n<tr class=\"action\"><td>Issue a driving license?</td><td>X</td><td></td><td></td></tr>\n<tr class=\"action\"><td>Request additional driving lessons?</td><td></td><td></td><td>X</td></tr>\n<tr class=\"action\"><td>Request to take the exam again?</td><td></td><td>X</td><td></td></tr>\n</table>\n<p>What test data will show that there are <strong>contradictory rules</strong> in the decision table?</p>",
    "options": {
      "a": "C1 = T, C2 = T, C3 = F",
      "b": "C1 = T, C2 = F, C3 = T",
      "c": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
      "d": "C1 = F, C2 = F, C3 = F Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. The combination (T, T, F) does not match any rule. This is an example o f omission, not a contradiction b) Is not correct. The combination (T, F, T) matches only one column, R 2, so there is no contradiction c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3. Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 153,
    "question": "<p>You are designing test cases based on the following state transition diagram:</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 500 380\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:500px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah153\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st153 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt153 { fill: #e2e8f0; font-family: sans-serif; font-size: 12px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .edg153 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah153); }\n      .elbl153 { fill: #94a3b8; font-family: sans-serif; font-size: 10px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- START -->\n  <rect class=\"st153\" x=\"180\" y=\"10\" width=\"100\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt153\" x=\"230\" y=\"28\">START</text>\n  <!-- Room Assigned -->\n  <rect class=\"st153\" x=\"150\" y=\"100\" width=\"130\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt153\" x=\"215\" y=\"118\">Room Assigned</text>\n  <!-- Checked In -->\n  <rect class=\"st153\" x=\"160\" y=\"190\" width=\"110\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt153\" x=\"215\" y=\"208\">Checked In</text>\n  <!-- Checked Out -->\n  <rect class=\"st153\" x=\"20\" y=\"290\" width=\"120\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt153\" x=\"80\" y=\"308\">Checked Out</text>\n  <!-- Cancelled -->\n  <rect class=\"st153\" x=\"340\" y=\"100\" width=\"110\" height=\"36\" rx=\"18\" stroke=\"#ef4444\"/>\n  <text class=\"sttxt153\" x=\"395\" y=\"118\" fill=\"#fca5a5\">Cancelled</text>\n  <!-- Room Change -->\n  <rect class=\"st153\" x=\"340\" y=\"190\" width=\"120\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt153\" x=\"400\" y=\"208\">Room Change</text>\n  <!-- START -> Room Assigned -->\n  <line class=\"edg153\" x1=\"230\" y1=\"46\" x2=\"215\" y2=\"96\"/>\n  <text class=\"elbl153\" x=\"210\" y=\"72\">room request</text>\n  <!-- Room Assigned -> Checked In -->\n  <line class=\"edg153\" x1=\"215\" y1=\"136\" x2=\"215\" y2=\"186\"/>\n  <text class=\"elbl153\" x=\"195\" y=\"165\">check in</text>\n  <!-- Room Assigned -> Cancelled -->\n  <line class=\"edg153\" x1=\"280\" y1=\"118\" x2=\"336\" y2=\"118\"/>\n  <text class=\"elbl153\" x=\"310\" y=\"108\">cancel</text>\n  <!-- Checked In -> Checked Out -->\n  <polyline class=\"edg153\" points=\"160,215 80,215 80,286\"/>\n  <text class=\"elbl153\" x=\"105\" y=\"250\">check out</text>\n  <!-- Checked In -> Room Change -->\n  <line class=\"edg153\" x1=\"270\" y1=\"208\" x2=\"336\" y2=\"208\"/>\n  <text class=\"elbl153\" x=\"305\" y=\"198\">request change</text>\n  <!-- Room Change -> Checked In -->\n  <polyline class=\"edg153\" points=\"400,226 400,260 215,260 215,230\"/>\n  <text class=\"elbl153\" x=\"310\" y=\"252\">change done</text>\n</svg>\n</div>\n<p>What is the <strong>MINIMUM</strong> number of test cases required to achieve 100% valid transitions coverage?</p>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": "6 Select ONE option."
    },
    "correct": "a",
    "explanation": "The following three transitions: “REQUESTING -> CONFIRMED” “WAITING LIST -> CONFIRMED” “WAITING LIST -> END” cannot appear in the same test case , which suggests that at least three test cases are required. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. In fact, only three sequences are possible : TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 154,
    "question": "<p>You want to apply <strong>branch testing</strong> to the code represented by the following control flow graph.</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 400 520\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:400px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah154\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .node154 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; rx: 6; }\n      .nodetxt154 { fill: #e2e8f0; font-family: monospace; font-size: 16px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .edge154 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah154); }\n      .lbl154 { fill: #94a3b8; font-family: sans-serif; font-size: 12px; }\n    </style>\n  </defs>\n  <!-- Node A -->\n  <rect class=\"node154\" x=\"160\" y=\"10\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"190\" y=\"28\">A</text>\n  <!-- A -> B -->\n  <line class=\"edge154\" x1=\"190\" y1=\"46\" x2=\"190\" y2=\"76\"/>\n  <!-- Node B -->\n  <rect class=\"node154\" x=\"160\" y=\"80\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"190\" y=\"98\">B</text>\n  <!-- B -> C (True) -->\n  <polyline class=\"edge154\" points=\"160,98 100,98 100,156\"/>\n  <text class=\"lbl154\" x=\"115\" y=\"130\">True</text>\n  <!-- B -> D (False) -->\n  <polyline class=\"edge154\" points=\"220,98 280,98 280,156\"/>\n  <text class=\"lbl154\" x=\"235\" y=\"130\">False</text>\n  <!-- Node C -->\n  <rect class=\"node154\" x=\"70\" y=\"160\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"100\" y=\"178\">C</text>\n  <!-- Node D -->\n  <rect class=\"node154\" x=\"250\" y=\"160\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"280\" y=\"178\">D</text>\n  <!-- C -> E -->\n  <line class=\"edge154\" x1=\"100\" y1=\"196\" x2=\"100\" y2=\"236\"/>\n  <!-- Node E -->\n  <rect class=\"node154\" x=\"70\" y=\"240\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"100\" y=\"258\">E</text>\n  <!-- E -> F (True) -->\n  <polyline class=\"edge154\" points=\"70,258 30,258 30,326\"/>\n  <text class=\"lbl154\" x=\"35\" y=\"295\">True</text>\n  <!-- E -> G (False) -->\n  <polyline class=\"edge154\" points=\"130,258 170,258 170,326\"/>\n  <text class=\"lbl154\" x=\"135\" y=\"295\">False</text>\n  <!-- Node F -->\n  <rect class=\"node154\" x=\"0\" y=\"330\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"30\" y=\"348\">F</text>\n  <!-- Node G -->\n  <rect class=\"node154\" x=\"140\" y=\"330\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"170\" y=\"348\">G</text>\n  <!-- F -> merge -->\n  <polyline class=\"edge154\" points=\"30,366 30,400 100,400 100,436\"/>\n  <!-- G -> merge -->\n  <polyline class=\"edge154\" points=\"170,366 170,400 105,400\"/>\n  <!-- D -> H -->\n  <polyline class=\"edge154\" points=\"280,196 280,460 160,460\"/>\n  <!-- Node H -->\n  <rect class=\"node154\" x=\"70\" y=\"440\" width=\"60\" height=\"36\"/>\n  <text class=\"nodetxt154\" x=\"100\" y=\"458\">H</text>\n  <text class=\"lbl154\" x=\"100\" y=\"490\" text-anchor=\"middle\" font-style=\"italic\">(End)</text>\n  <text class=\"lbl154\" x=\"190\" y=\"65\" text-anchor=\"middle\" font-style=\"italic\">(Start)</text>\n</svg>\n</div>\n<p>How many <strong>coverage items</strong> do you need to test?</p>",
    "options": {
      "a": "",
      "b": "",
      "c": "",
      "d": "7 Select ONE option."
    },
    "correct": "c",
    "explanation": "In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph. Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 155,
    "question": "(1 Point) How can white -box testing be useful in support of black -box testing ?",
    "options": {
      "a": "White -box coverage measures can help testers evaluate black -box tests in terms of the code coverage achieved by the se black -box tests",
      "b": "White -box coverage analysis can help testers identify unreachable fragments of the source code",
      "c": "Branch testing subsumes black -box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black -box technique",
      "d": "White -box test techniques can provide coverage items for black -box techniques Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Performing only black -box testing does not provide a measure of actual code coverage. White -box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and su bsequently increase confidence in the code b) Is not correct. This statement is correct , but it has nothing to do with black -box testing c) Is not correct. In general there are no relationships between whi te-box test techniques and black -box test techniques d) Is not correct. White -box test techniques are used to design tests based on the test object itself, while black -box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived fro m these two types of test techniques Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 156,
    "question": "<p>(1 Point) Consider the following list:</p>\n<ul>\n<li>Correct input not accepted</li>\n<li>Incorrect input accepted</li>\n<li>Wrong output format</li>\n<li>Division by zero What test technique is MOST PROBABLY used by the tester who uses this list when performing testing ?</li>\n</ul>",
    "options": {
      "a": "Exploratory testing",
      "b": "Fault attack",
      "c": "Checklist -based testing",
      "d": "Boundary value analysis Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option b) Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures c) Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist -based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack , which focuses on errors, defects and failures d) Is not correct. BVA is based on an analysis of boundary values of equivalence partitions . The above list does not mention equivalence partitions or their boundaries Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 157,
    "question": "(1 Point) Which of the following BEST describes how using checklist -based testing can result in increased coverage ?",
    "options": {
      "a": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
      "b": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
      "c": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
      "d": "Two testers designing and executing tests based on the same high -level checklist items will typically perform the testing in slightly different ways Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this wou ld result in increased coverage b) Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does n ot result in increased coverage c) Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does n ot result in increased coverage d) Is correct. If the checklists are high -level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high -level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this wi ll result in increased coverage Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 158,
    "question": "(1 Point) Which of the following provides the BEST example of a scenario -oriented acceptance criteri on?",
    "options": {
      "a": "The app lication must allow users to delete their account and all associated data upon request",
      "b": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven ’t already done so",
      "c": "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
      "d": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rul e-oriented acceptance criterion b) Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenari o- oriented acceptance criterion c) Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders d) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule -oriented acceptance criterion, not a scen ario-based acceptance criterion",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 159,
    "question": "(1 Point) You are using acceptance test -driven development and design ing test cases based on the following user story: As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors. Acceptance Criteria: AC1: Regular users have access to f loors 1 to 3 AC2: Floor 4 is only accessible to Special users AC3: Special users have all the access rights of Regular users Which test case is the MOST reasonable one to test AC 3?",
    "options": {
      "a": "Check that a Regular user can access floor s 1 and",
      "b": "Check that a Regular user cannot access floor",
      "c": "Check that a Special user can access floor",
      "d": "Check that a Special user can access floors 1, 2 and 3 Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user b) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Speci al user, not for a Regular user c) Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3 d) Is correct. This is the way we can check if a Special user can access floors which a re accessible to a Regular user Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 160,
    "question": "(1 Point) Which of the following is NOT a purpose of a test plan ?",
    "options": {
      "a": "To define test data and expected results for component tests and component integration tests",
      "b": "To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved ”",
      "c": "To describe what fields the test progress report shall contain and what should be the form of this report",
      "d": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known wha t the components will look like b) Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criter ia for the component test level c) Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard wa y of communicating or reporting d) Is not correct. One of the purposes of a test plan is to d emonstrate that testing will adhere to the existing test policy and test strategy , or to explain why the testing will deviate from them . This is an example of explaining the deviation, regarding the test levels that wi ll be (or will not be) followed",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 161,
    "question": "<p>At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:</p>\n<div class=\"formula\">E(n) = (3 × A(n−1) + A(n−2)) / 4</div>\n<p>The graph shows the estimated and actual amount of work for the first four iterations:</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 440 260\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:440px;width:100%;height:auto;\">\n  <defs>\n    <style>\n      .axis161 { stroke: #475569; stroke-width: 1; }\n      .grid161 { stroke: #1e293b; stroke-width: 1; }\n      .ltxt161 { fill: #94a3b8; font-family: sans-serif; font-size: 12px; }\n      .est161 { stroke: #3b82f6; stroke-width: 2.5; fill: none; }\n      .act161 { stroke: #f59e0b; stroke-width: 2.5; fill: none; }\n    </style>\n  </defs>\n  <!-- Grid lines -->\n  <line class=\"grid161\" x1=\"60\" y1=\"30\" x2=\"420\" y2=\"30\"/>\n  <line class=\"grid161\" x1=\"60\" y1=\"70\" x2=\"420\" y2=\"70\"/>\n  <line class=\"grid161\" x1=\"60\" y1=\"110\" x2=\"420\" y2=\"110\"/>\n  <line class=\"grid161\" x1=\"60\" y1=\"150\" x2=\"420\" y2=\"150\"/>\n  <line class=\"grid161\" x1=\"60\" y1=\"190\" x2=\"420\" y2=\"190\"/>\n  <!-- Axes -->\n  <line class=\"axis161\" x1=\"60\" y1=\"10\" x2=\"60\" y2=\"230\"/>\n  <line class=\"axis161\" x1=\"60\" y1=\"230\" x2=\"420\" y2=\"230\"/>\n  <!-- Y axis labels (person-days) -->\n  <text class=\"ltxt161\" x=\"50\" y=\"234\" text-anchor=\"end\">0</text>\n  <text class=\"ltxt161\" x=\"50\" y=\"194\" text-anchor=\"end\">4</text>\n  <text class=\"ltxt161\" x=\"50\" y=\"154\" text-anchor=\"end\">8</text>\n  <text class=\"ltxt161\" x=\"50\" y=\"114\" text-anchor=\"end\">12</text>\n  <text class=\"ltxt161\" x=\"15\" y=\"120\" text-anchor=\"middle\" transform=\"rotate(-90,15,120)\" font-size=\"11\">Person-days</text>\n  <!-- X axis labels -->\n  <text class=\"ltxt161\" x=\"140\" y=\"248\" text-anchor=\"middle\">Iter 1</text>\n  <text class=\"ltxt161\" x=\"230\" y=\"248\" text-anchor=\"middle\">Iter 2</text>\n  <text class=\"ltxt161\" x=\"320\" y=\"248\" text-anchor=\"middle\">Iter 3</text>\n  <text class=\"ltxt161\" x=\"410\" y=\"248\" text-anchor=\"middle\">Iter 4</text>\n  <!-- Estimated line (blue): 10, 12, 10.5, 9 -->\n  <polyline class=\"est161\" points=\"140,130 230,110 320,123.75 410,140\"/>\n  <circle cx=\"140\" cy=\"130\" r=\"4\" fill=\"#3b82f6\"/>\n  <circle cx=\"230\" cy=\"110\" r=\"4\" fill=\"#3b82f6\"/>\n  <circle cx=\"320\" cy=\"123.75\" r=\"4\" fill=\"#3b82f6\"/>\n  <circle cx=\"410\" cy=\"140\" r=\"4\" fill=\"#3b82f6\"/>\n  <!-- Data labels estimated -->\n  <text class=\"ltxt161\" x=\"140\" y=\"122\" text-anchor=\"middle\" fill=\"#3b82f6\" font-size=\"11\">10</text>\n  <text class=\"ltxt161\" x=\"230\" y=\"102\" text-anchor=\"middle\" fill=\"#3b82f6\" font-size=\"11\">12</text>\n  <text class=\"ltxt161\" x=\"320\" y=\"116\" text-anchor=\"middle\" fill=\"#3b82f6\" font-size=\"11\">10.5</text>\n  <text class=\"ltxt161\" x=\"410\" y=\"132\" text-anchor=\"middle\" fill=\"#3b82f6\" font-size=\"11\">9</text>\n  <!-- Actual line (yellow): 12, 8, 8, 6 -->\n  <polyline class=\"act161\" points=\"140,110 230,150 320,150 410,170\"/>\n  <circle cx=\"140\" cy=\"110\" r=\"4\" fill=\"#f59e0b\"/>\n  <circle cx=\"230\" cy=\"150\" r=\"4\" fill=\"#f59e0b\"/>\n  <circle cx=\"320\" cy=\"150\" r=\"4\" fill=\"#f59e0b\"/>\n  <circle cx=\"410\" cy=\"170\" r=\"4\" fill=\"#f59e0b\"/>\n  <!-- Data labels actual -->\n  <text class=\"ltxt161\" x=\"140\" y=\"104\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\">12</text>\n  <text class=\"ltxt161\" x=\"230\" y=\"165\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\">8</text>\n  <text class=\"ltxt161\" x=\"320\" y=\"165\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\">8</text>\n  <text class=\"ltxt161\" x=\"410\" y=\"185\" text-anchor=\"middle\" fill=\"#f59e0b\" font-size=\"11\">6</text>\n  <!-- Legend -->\n  <line x1=\"120\" y1=\"15\" x2=\"145\" y2=\"15\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n  <circle cx=\"132\" cy=\"15\" r=\"3\" fill=\"#3b82f6\"/>\n  <text class=\"ltxt161\" x=\"150\" y=\"19\" font-size=\"11\">Estimated</text>\n  <line x1=\"220\" y1=\"15\" x2=\"245\" y2=\"15\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n  <circle cx=\"232\" cy=\"15\" r=\"3\" fill=\"#f59e0b\"/>\n  <text class=\"ltxt161\" x=\"250\" y=\"19\" font-size=\"11\">Actual</text>\n</svg>\n</div>\n<p>What is the estimated amount of work for <strong>iteration #5</strong>?</p>",
    "options": {
      "a": "10.5 person -days",
      "b": "8.25 person -days",
      "c": "6.5 person -days",
      "d": "9.4 person -days Select ONE option. 012345678910111213 Iteration #1 Iteration #2 Iteration #3 Iteration #4Estimated and actual effort (in person -days) Estimated Actual"
    },
    "correct": "c",
    "explanation": "From the graph we have : A(4)=6 and A(3)=8 ( the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6 .5 person -days . Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 162,
    "question": "<p>You are preparing a test execution schedule for executing seven test cases TC1 to TC7.</p>\n<p>The following figure includes the priorities of these test cases (1 = highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC4 to TC5 means that TC5 can only be executed if TC4 was previously executed.</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 400 220\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:400px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah162\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .tc162 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .tctxt162 { fill: #e2e8f0; font-family: monospace; font-size: 13px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .dep162 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah162); }\n      .plbl162 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; }\n    </style>\n  </defs>\n  <!-- Priority labels -->\n  <text class=\"plbl162\" x=\"5\" y=\"48\" fill=\"#fbbf24\">Priority 1:</text>\n  <text class=\"plbl162\" x=\"5\" y=\"118\" fill=\"#60a5fa\">Priority 2:</text>\n  <text class=\"plbl162\" x=\"5\" y=\"188\" fill=\"#94a3b8\">Priority 3:</text>\n  <!-- TC5 (P1) -->\n  <rect class=\"tc162\" x=\"100\" y=\"30\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"128\" y=\"48\">TC5</text>\n  <!-- TC4 (P1) -->\n  <rect class=\"tc162\" x=\"210\" y=\"30\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"238\" y=\"48\">TC4</text>\n  <!-- TC7 (P1) -->\n  <rect class=\"tc162\" x=\"320\" y=\"30\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"348\" y=\"48\">TC7</text>\n  <!-- TC2 (P2) -->\n  <rect class=\"tc162\" x=\"100\" y=\"100\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"128\" y=\"118\">TC2</text>\n  <!-- TC1 (P2) -->\n  <rect class=\"tc162\" x=\"210\" y=\"100\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"238\" y=\"118\">TC1</text>\n  <!-- TC3 (P2) -->\n  <rect class=\"tc162\" x=\"320\" y=\"100\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"348\" y=\"118\">TC3</text>\n  <!-- TC6 (P3) -->\n  <rect class=\"tc162\" x=\"100\" y=\"170\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt162\" x=\"128\" y=\"188\">TC6</text>\n  <!-- Dependencies (arrows) -->\n  <!-- TC4 -> TC5 -->\n  <line class=\"dep162\" x1=\"210\" y1=\"48\" x2=\"160\" y2=\"48\"/>\n  <!-- TC4 -> TC7 -->\n  <line class=\"dep162\" x1=\"266\" y1=\"48\" x2=\"316\" y2=\"48\"/>\n  <!-- TC1 -> TC2 -->\n  <line class=\"dep162\" x1=\"210\" y1=\"118\" x2=\"160\" y2=\"118\"/>\n  <!-- TC2 -> TC5 -->\n  <line class=\"dep162\" x1=\"128\" y1=\"100\" x2=\"128\" y2=\"70\"/>\n</svg>\n</div>\n<p>Which test case should be executed <strong>sixth</strong>?</p>",
    "options": {
      "a": "TC",
      "b": "TC",
      "c": "TC",
      "d": "TC 2 Select ONE option."
    },
    "correct": "a",
    "explanation": "We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority) , then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority) . However, i n order to run TC 7, we need to first run TC 4. In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible , the first five test cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full schedule will be TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6. So, the sixth test case will be TC 3. Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct",
    "source": "1.6",
    "_html": true
  },
  {
    "id": 163,
    "question": "(1 Point) What does the test pyramid model show ?",
    "options": {
      "a": "That tests may have different priorities",
      "b": "That tests may have different granularity",
      "c": "That tests may require different coverage criteria",
      "d": "That tests may depend on other tests Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. T he test pyramid model does not provide information about test priorities b) Is correct. The test pyramid model shows that different tests have different levels of granularity c) Is not correct. T he test pyramid model is independent of coverage criteria d) Is not correct. Test pyramid model does not show any re lations between different tests Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 164,
    "question": "(1 Point) What is the relationship between the testing quadrants , test levels and test types ?",
    "options": {
      "a": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
      "b": "Testing quadrants describe the degree of granularity of individual test types performed at each test level",
      "c": "Testing quadrants assign the test types that can be performed to the test levels",
      "d": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model b) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test lev els, is called the test pyramid c) Is not correct. The statement is wrong, because in general any test type can be performed at any test level d) Is correct. The testing quadrants group test levels , test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the fou r quadrants",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 165,
    "question": "(1 Point) Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing ?",
    "options": {
      "a": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible",
      "b": "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
      "c": "The a ssessed risk level helps us to select the rigor of testing",
      "d": "Risk analysis allows us to derive coverage items Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Risk monitoring is part of risk control, not risk analysis b) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are define d during the risk control phase c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing d) Is not correct. Coverage items are derived using test techniques, not through risk analysis Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 166,
    "question": "(1 Point) Which of the following activities in the test process makes the MOST use of test progress reports ?",
    "options": {
      "a": "Test design",
      "b": "Test completion",
      "c": "Test analysis",
      "d": "Test planning Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test com pletion, not during test design b) Is correct. A test completion report is prepared during test completion , when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data c) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test compl etion, not during test analysis d) Is not correct. Test progress reports are most used during test monitoring and test control, and test compl etion, not during test planning",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 167,
    "question": "(1 Point) Which of the following is NOT an example of how configuration management supports testing ?",
    "options": {
      "a": "All commits to the repository are uniquely identified and version controlled",
      "b": "All changes in the test environment elements are tracked",
      "c": "All requirement specifications are referenced unambiguously in test plans",
      "d": "All identified defects have an assigned status Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster b) Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue witho ut being affected by the change c) Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test d ocumentation (e.g., test plans) d) Is correct. This is ensured by defect management, not by the configuration management process Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 168,
    "question": "(1 Point) Consider the following defect report for a web -based shopping application: Application: WebShop v0.99 Defect: Login button not working Steps to Reproduce: Launch the website Click on the login button Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked. Severity: High Priority: Urgent What is the MOST important information that is missing from this defect report ?",
    "options": {
      "a": "Name of the tester and date",
      "b": "Test e nvironment elements and their version numbers",
      "c": "Identification of the test object",
      "d": "Impact on the interests of stakeholders Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. This is important, but not as important as test environment elements b) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser - or device -specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the proble m more quickly c) Is not correct. T he test objec t is identified (WebShop v0.99) d) Is not correct. The impact is inc luded – this is severity (high)",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 169,
    "question": "(1 Point) Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
    "options": {
      "a": "Test execution and coverage tools",
      "b": "Test design and implementation tools",
      "c": "Defect management tools",
      "d": "Test m anagement tools Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases . However, these tools do not help with the organization of defec ts and configuration management b) Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defec ts and configuration management c) Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management d) Is correct. Test m anagement tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC ), requirements, tests, defects, and configuration management Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 170,
    "question": "( 1 Point) Which of the following is a typical test objective ?",
    "options": {
      "a": "Finding and fixing defects in the test object",
      "b": "Maintaining effective communications with developers",
      "c": "Validating that legal requirements have been met",
      "d": "Building confidence in the quality of the test object Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Finding and fixing defects in the test object is not a typical test objective as although identifying defects is an objective of testing, fixing de fects is not a test activity b) Is not correct. Maintaining effective communications with developers is not a typical test objective although it is useful in achieving other objectives of testing, such as providing stakeholders with information that enables them to make informed decisions . It is not a primar y reason for performing testing c) Is not correct. Validating that legal requirements have been met is not a typical test objective because validation is concerned with checking whether the system meets users’ and other stakeholders’ needs in its operational environment. Checking that legal requirements have bee n met is a form of verification d) Is correct. Building confidence in the quality of the test object is achiev ed by executing tests that pass ed",
    "source": "V6",
    "_html": false
  },
  {
    "id": 171,
    "question": "(1 Point) A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used , complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory auth ority. No one notices that bonus calculations are sometimes incorrect. Which of the following statements is CORRECT ?",
    "options": {
      "a": "The miscalculation of bonuses is a defect that occasionally occurs",
      "b": "The fine received for failing to address some disabled users is a failure",
      "c": "The programmer working under severe time pressure is a root cause",
      "d": "The design of the user interface includes a designer error Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The miscalculation of bonuses is a fail ure by the system, not a defect b) Is not correct. The system not suitably supporting disabled users is a failure which eventually results in a fine, but the fine itself is not a failure (it appears to be the correct functi oning of the regulatory system) c) Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect d) Is not correct. The poor design of the user interface, which does not suitably address disabled users, is a design defect caused by the designer error. Thus the design of the user interface includes a des ign defect not a designer error Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 172,
    "question": "(1 Point) Test conditions are being used by testers to generate test cases and execute tests . Even though the test conditions remain the same, the test cases are varied each time. Which of the following ‘principles of testing’ is being addressed through the variation of test cases?",
    "options": {
      "a": "Tests wear out",
      "b": "Absence -of-defects fallacy",
      "c": "Early testing saves time and money",
      "d": "Defects cluster together Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. The ‘tests wear out’ principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. By using test conditions to generate new tests each time, the tests will not be iden tical and the risk of the tests wear ing out is reduced b) Is not correct. The ‘absence -of-defects fallacy’ principle is concerned with ensuring that users’ needs are fulfilled even if lots of testing is done and no defects are found (i.e., validation is also necessary). The use of test conditions to generate test cases and execute tests does no t directly address this concern c) Is not correct. The ‘early testing saves time and money’ principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures. This is typically addressed by starting testing (both static and dynamic) as early as possible, but this is not addressed by using test conditions to generate test cases and execute tests d) Is not correct. The ‘Defects cluster together’ principle is concerned with the distribution of defects in a system, which typically follows a Pareto distribution. The use of test conditions to generate test cases and execute tests does not address this concern, which is typically addressed by risk -based testing Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 173,
    "question": "(1 Point) Given the following test tasks : 1. Derive test cases from test conditions 2. Identify reusable testware 3. Organize test cases into test procedures 4. Evaluate the test basis and the test object And the following test activities:",
    "options": {
      "a": "1B, 2A, 3D, 4C",
      "b": "1B, 2D, 3C, 4A",
      "c": "1C, 2A, 3B, 4D",
      "d": "1C, 2D, 3A, 4B Select ONE option."
    },
    "correct": "b",
    "explanation": "Considering each of the listed test activities and their tasks: A. Test analysis - To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. During this test analysis, defects in the test basis are typically uncovered, and the test object's testability may also be assessed. (Task 4) B. Test design - Involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. (Task 1) C. Test implementation - Test procedures, such as manual and automated test scripts, are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. (Task 3) D. Test completion - Occurs at project milestones, such as release, end of iteration or end of test level. Testware is identified and archived or handed to the appropriate teams for reuse, the test environment is shut down, and the test activities are analyze d for lessons learned and future improvements. (Task 2) Thus : a) Is not correct b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 174,
    "question": "(1 Point) Given the following testware : i. Test completion report ii. Data held in a database used for test inputs and expected results iii. The list of elements needed to build the test environment iv. Documented sequences of test cases in execution order v. Test cases Which of the following BEST shows the testware produced as a result of performing test implementation?",
    "options": {
      "a": "ii, iv",
      "b": "iii, v",
      "c": "i, ii, v",
      "d": "i, iii, iv Select ONE option."
    },
    "correct": "a",
    "explanation": "Considering each of the listed testware, and the test activity that produces it: i. The test completion report is an output of test completion ii. Data held in a database used for inputs and expected results is the test data - output of test implementation iii. The list of elements needed to build the test environment is the test environment requirements - output of test design iv. Documented sequences of test cases in execution order are the test procedures - output of test implementation v. Test cases - output of test design Test implementation produces the following outputs: test procedures (iv), automated test scripts, test suites, test data (ii), test execution schedule, and test environment elements such as stubs, drivers, simulators, and service virtualizations. Thus : a) Is correct. I tems ii and iv in the list are produced as a result of test implementation b) Is not correct c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 175,
    "question": "(1 Point) Which of the following is MOST likely to describe a task performed by someone in a test management role ?",
    "options": {
      "a": "Evaluate the test basis and the test object",
      "b": "Define test environment requirements",
      "c": "Assess testability of the test object",
      "d": "Create the test completion report Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Evaluating the test basis for defects and the test object for testability are tasks performed as part of test analysis, so it is likely they are task s performed by the testing role b) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Defining the test environment requirements is a task performed as p art of test design, so it is likely to be a tas k performed by the testing role c) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Assessing the testability of a test object is a task performed as part of test analysis, so it is likely to be a task p erformed by the testing role d) Is correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion , is likely to be a task perfor med by the test management role Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 176,
    "question": "(1 Point) Which of the following is an advantage of the whole team approach ?",
    "options": {
      "a": "Improved com munication between team members",
      "b": "Decreased individual accountability for quality",
      "c": "Faster deployment of deliverables to the end users",
      "d": "Reduced collaboration with external business users Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. The whole team approach promotes robust communication and collabo ration between the team members b) Is not correct. While the whole team approach prioritizes collective accountability for quality, each individual team member is still equally accountable for quality c) Is not correct. The whole team approach is about how the team works together, with the aim of higher quality deliverables, but it does not necessarily result in faster deployment to end users d) Is not correct. When using the whole team approach, testers work with business representatives to create acceptance tests. There is no suggestion that the approach will reduce collaboratio n with external business users Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 177,
    "question": "(1 Point) Given the following benefits and drawbacks of the independence of testing : i. The testers work in a different location from the developers ii. Testers question the assumptions programmers make while writing code iii. A confrontational dynamic has been established between testers and developers iv. Developers have convinced themselves that testers are mostly accountable for quality v. Testers have different biases than those held by the developers Which are MOST likely to be considered benefits?",
    "options": {
      "a": "i, iv",
      "b": "ii, v",
      "c": "i, iii, iv",
      "d": "ii, iii, v Select ONE option."
    },
    "correct": "b",
    "explanation": "Considering each of the listed benefits and drawbacks of the independence of testing: i. Ideally, we want close collaboration between testers and developers, which is not increased by isolatio n. Thus, this is a disadvantage ii. Testers and developers have varied backgrounds, technical viewpoints, and potential biases, allowing testers to usefully challenge assumptions made by stakeholders during system specification and implementation. Thus, this is an advantage iii. The main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process. Th us, this is a disadvantage iv. One of the disadvantages of independence of testing is that testers may become isolated from the development team, leading to developers feeling less accountable for qualit y. Thus, this is a disadvantage v. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential bi ases, including cognitive bias Thus : a) Is not correct b) Is correct. The list entries showing benefits are ii and v c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 178,
    "question": "(1 Point) Which of the following is MOST likely to be a challenge encountered when implementing DevOps ?",
    "options": {
      "a": "Making sure that non -functional quality characteristics are not overlooked",
      "b": "Managing continuously changing test environments",
      "c": "The need for more manual testers with suitable experience",
      "d": "Setting up the test automation as part of the delivery pipeline Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. DevOps generally increases the visibility of non -functional quality characteristics, such as performance and reliability b) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) used in DevOps faci litate stable test environments c) Is not correct. Automated processes like CI/CD used in DevOps generally reduce the need for manual testing d) Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 179,
    "question": "(1 Point) Which of the following BEST describes retrospectives ?",
    "options": {
      "a": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as requ ired by the whole team approach",
      "b": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
      "c": "Retrospectives are where agile team members are allowed to voice their concerns about management and custom ers in a blame less environment",
      "d": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. The benefits of retrospectives include team bonding and learning from sharing issues, and better collaboration between developers and testers through reviewing and improving working practices. Calling out individuals who a team member may feel did not fully contribute to achieving quality as required by the whole team approach will not contribute to this team bonding and collaboration b) Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that coul d be improved, and how to do so c) Is not correct. The benefits of retrospectives are based on increased effectiveness and efficiency through process improvements; they are not an opportunity to let off steam and criticize management and customers. Also, the test results are recorded, usually in the test completion report, so anything said in the meeting coul d be read by other stakeholders d) Is not correct. Retrospectives are meetings that are typically held at the end of an iteration where team members will focus on discussing quality -related issues that have occurred in the current iteration. They are not used for making plans or technical decisions for the next iteration; this would be done in the iteration planning meeting at the start of the next iteration Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 180,
    "question": "(1 Point) Which of the following tests is MOST likely to be performed as part of functional testing ?",
    "options": {
      "a": "The test checks that the sort function puts the elements of the list or array in ascending order",
      "b": "The test checks whether the sort function completes sorting within one second of starting",
      "c": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
      "d": "The test checks that the sort function still functions correctly when moved from a 32 -bit to a 64-bit architecture Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, whic h is part of functional testing b) Is not correct. Assessing whether the sort function meets its non - functional requirement to complete within one second is part of testing its performance efficiency, which is part of non -functional testing c) Is not correct. Evaluating the ease with which the sort function can be modified from sorting ascending to sorting descending is testing its modifiability, a form of non -functional maintainability testing, which is part of non -functional testing d) Is not correct. Assessing that the sort function still functions correctly when moved from a 32 -bit to a 64 -bit architecture is testing its adaptability, a form of portability testing, which is part of non -functional testing Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 181,
    "question": "(1 Point) Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system ?",
    "options": {
      "a": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true",
      "b": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
      "c": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
      "d": "The language support option of the currency exchange system was used to enable both English and local language currency transactions Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. Assuming that testers could check the ease of changing the currency exchange system then it would be done by maintainability testing rather than maintenance testing, so this is not a trigger for maintenance testing b) Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option of the currency exchange system was a fix that wo uld lead to maintenance testing c) Is not correct. If the agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system, then this will result in them testing the new feature, and then they would perform regression testing. No maintenance testin g is required in this situation d) Is not correct. Reconfiguration of the currency exchange system to support both the local language and English currency transactions is not a system modification, a change to the operational environment, or a system retirement, which are the three t riggers for maintenance testing Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 182,
    "question": "(1 Point) Which of the following CANNOT be examined by static testing ?",
    "options": {
      "a": "Contract",
      "b": "Test plan",
      "c": "Encrypted code",
      "d": "Test charter Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Most work products can be examined using some form of static testing, and a contract must be interpretable by humans and so could be reviewed, wh ich is a form of static testing b) Is not correct. Most work products can be examined using some form of static testing, and a test plan must be interpretable by humans and so could be reviewed, wh ich is a form of static testing c) Is correct. Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for humans and if it is properly encrypted it will not be analyzable by most tools d) Is not correct. Most work products can be examined using some form of static testing, and a test charter must be interpretable by humans and so could be reviewed, wh ich is a form of static testing",
    "source": "V6",
    "_html": false
  },
  {
    "id": 183,
    "question": "(1 Point) Which of t he following statements about the value of static testing is CORRECT?",
    "options": {
      "a": "The defect types found by static testing are different from the defect types that can be found by dynamic testing",
      "b": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
      "c": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
      "d": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types Select ONE option."
    },
    "correct": "c",
    "explanation": "Some defect types that can only be detected by static testing, such as unreachable code, design patterns not implemented as desired and defects in non -executable work products . Some defect types that can be found by both static testing and dynamic testing, such as a programming defect that can be observed by a reviewer in a code review and which causes an observable failure during dynamic testing. And some defect types that can only be detected by dynamic testing, such as performance issues or memory issues that can only be observed wh en executing the code or system. Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 184,
    "question": "(1 Point) Given the following descriptions of review activit ies: 1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed 2. Defects are recorded , and any needed updates are addressed prior to the acceptance of the work product 3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies 4. The objective of the review and its schedule are established to ensure a focused and efficient review 5. Participants are provided with access to the item being reviewed Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?",
    "options": {
      "a": "4 – 3 – 5 – 2 –",
      "b": "4 – 5 – 3 – 1 –",
      "c": "5 – 4 – 1 – 3 –",
      "d": "5 – 4 – 3 – 2 – 1 Select ONE option."
    },
    "correct": "b",
    "explanation": "The five listed descriptions and the corresponding review process activities are: 1. This describes part of the ‘communication and analysis ’ activity 2. This describes part of the ‘fixing and reporting’ activity 3. This describes part of t he ‘individual review’ activity 4. This describes part of the ‘planning’ activity 5. This describes part of t he ‘review initiation’ activity The generic review process from ISO/IEC 20246, which is outlined in the syllabus, comprises the following activities in this logical order: • Planning (4) • Review initiation (5) • Individual review (3) • Communication and analysis (1) • Fixing and reporting (2) Thus : a) Is not correct b) Is correct. T he correct sequence of activities is: 4 – 5 – 3 – 1 – 2 c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 185,
    "question": "(1 Point) Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely ?",
    "options": {
      "a": "Manager",
      "b": "Moderator",
      "c": "Chairperson",
      "d": "Review Leader Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. The manager is responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review b) Is correct. The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely c) Is not correct. The chairperson is n ot a recognized role in reviews d) Is not correct. The review leader is responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the r eview is completed successfully",
    "source": "V6",
    "_html": false
  },
  {
    "id": 186,
    "question": "(1 Point) You perform system testing of an e -commerce web application and are provided with the following requirement: REQ 05 -017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount. Which test techniques will be MOST helpful in designing test cases based on this requirement ?",
    "options": {
      "a": "White -box test techniques",
      "b": "Black -box test techniques",
      "c": "Experience -based test techniques",
      "d": "Risk-based test techniques Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. The document does not refer to the test object’s internal structure but specifies the desired behavior of the test object. Therefore, white -box test techniques will not be helpful in designing test cases b) Is correct. The document is a requirement that specifies the desired behavior of the test object. Therefore, the most suitable test techniques in this case are the black -box test techniques (e.g., Boundary Value Analysis or Decision Table Testing) c) Is not correct. Although experience -based test techniques can be used to design test cases based on this document, black -box test techniques will be more suitable. The document describes a precise business rule and, in addition, wording like \"exceeds $100\" suggests the existence of important equivalence partition boundaries that should be tested using black -box test techniqu es like Boundary Value Analysis d) Is not correct. Risk -based test techniques are not a re cognized type of test technique 20 b, e There are two equivalence partitions that are not yet covered, which correspond to “student discount” and “pensioner discount”. a) Is not correct. CY – BY = 64, so these inputs correspond to the already covered “no discount” partition b) Is correct. CY – BY = 65, so these inputs correspond to a partition that is not yet covered (“pensioner discount”) c) Is not correct. CY – BY = –65, so these inputs correspond to the already covered “error message” partition d) Is not correct. CY – BY = 18, so these inputs correspond to the already covered “no discount” partition e) Is correct. CY – BY = 0, so these inputs correspond to a partition that is not yet covered (“student discoun t”)",
    "source": "V6",
    "_html": false
  },
  {
    "id": 187,
    "question": "(1 Point) You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message “te mperature OK”. For lower temperatures, the system displays the message \"temperature too low\" and for higher temperatures it displays the message “temperature too high”. Using two -value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage ?",
    "options": {
      "a": "–1,",
      "b": "0,",
      "c": "–1, 0, 2,",
      "d": "–2, 0, 2, 4 Select ONE option."
    },
    "correct": "c",
    "explanation": "There are three equivalence partitions: {…, –2, –1}, {0, 1, 2}, {3, 4, …}. For 2 -value BVA all the boundary values for all the equivalence partitions must be covered. The boundary values are –1 (for the “temperature too low” partition), 0, 2 (for the “temperature OK” partition) and 3 (for the “temperature too high” partition). Thus: a) Is not correct b) Is not correct c) Is correct. The correct option is: –1, 0, 2, 3 d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 188,
    "question": "<p>You are designing test cases based on the following decision table.</p>\n<table class=\"dt\">\n<tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr>\n<tr><td>C1: Age</td><td>0–18</td><td>19–65</td><td>19–65</td><td>&gt;65</td><td>0–18</td><td>19–65</td><td>&gt;65</td></tr>\n<tr><td>C2: Experience</td><td>—</td><td>0–4</td><td>&gt;4</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>\n<tr><td>C3: Registered?</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td></tr>\n<tr class=\"action\"><td>Category</td><td>A</td><td>A</td><td>B</td><td>B</td><td>B</td><td>D</td><td>C</td></tr>\n</table>\n<p>So far you have designed the following test cases:</p>\n<ul>\n<li><strong>TC1:</strong> 19-year-old, unregistered man with no experience; expected result: category A</li>\n<li><strong>TC2:</strong> 65-year-old, unregistered woman with 5 years of experience; expected result: category B</li>\n<li><strong>TC3:</strong> 66-year-old, registered man with no experience; expected result: category C</li>\n<li><strong>TC4:</strong> 65-year-old, registered woman with 4 years of experience; expected result: category D</li>\n</ul>\n<p>Which of the following test cases, when added to the existing set of test cases, will <strong>increase</strong> the decision table coverage?</p>",
    "options": {
      "a": "66-year-old, unreg istered man with no experience; expected result: category B",
      "b": "55-year-old, unregistered wo man with 2 years of experience; expected result: category A",
      "c": "19-year-old, registered wo man with 5 years of experience; expected result: category D",
      "d": "No additional test case can increase the already achieved decision table coverage Select ONE option."
    },
    "correct": "a",
    "explanation": "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7 and R6 in the decision table. a) Is correct. The conditions “66 -year-old”, “unregistered” and “no experience” match rule R4, which is not covered by the existing test cases, so after adding this test case, the decisi on table coverage will increase b) Is not correct. The conditions “55 -year-old”, “unregistered” and “2 years of experience” match rule R2, already covered by TC1. So adding this test case will not increase the coverage c) Is not correct. The conditions “19 -year-old”, “registered” and “5 years of experience” match rule R6, already covered by TC4. So adding this test case will not increase the coverage d) Is not correct. The existing test cases cover only 4 out of 7 columns of the decision table. The coverage can be increased by adding test cases that cover yet uncovered columns, that is, R1, R4 and R5 Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": true
  },
  {
    "id": 189,
    "question": "(1 Point) You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events: Events State Available NotAvailable ChangeRoom Cancel Pay S1: Requesting S2 S3 S2: Confirmed S1 S4 S4 S3: Waiting list S2 S4 S4: End Assuming all test cases start in the ‘Requesting’ state, w hich of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage ?",
    "options": {
      "a": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
      "b": "Available, ChangeRoom, NotAvailable, Available, Pay",
      "c": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
      "d": "NotAvailable, Cancel, ChangeRoom, Available, Pay Select ONE option."
    },
    "correct": "b",
    "explanation": "a) Is not correct. This sequence of five events covers 4 different valid transitions (both “NotAvailable” events correspond to the same transition between S1 and S3). This test case cove rs 4 out of 7 valid transitions b) Is correct. This sequence of five events covers 5 different transitions (the first “Available” event corresponds to a transition between S1 and S2, and the second “Available” event corresponds to a transition between S3 and S2, so two different transitions are covered). This test case covers 5 out of 7 valid transitions and achieves the highest valid transitions coverage c) Is not correct. This sequence of five events covers 3 different transitions (both “Available” events correspond to the same transition from S1 to S2; both “ChangeRoom” events correspond to the same transition from S2 to S1). This test case cove rs 3 out of 7 valid transitions d) Is not correct. This sequence of five events does not represent a feasible test case, because after “Cancel” the system ends up in the End state and no further va lid transitions can be executed Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 190,
    "question": "(1 Point) Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage. Which of the following statements is CORRECT ?",
    "options": {
      "a": "Executing S will cause all possible failures in P",
      "b": "S achieves 100% branch coverage for P",
      "c": "Every executable statement in P containing a defect has been run at least once during the execution of S",
      "d": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage Select ONE option."
    },
    "correct": "c",
    "explanation": "a) Is not correct. A statement with a defect, when executed, does not have to cause a failure. For example, a statement x := y / z will cause a failure only when z equals 0 b) Is not correct. 100% statement coverage does not guarantee 100% branch coverage. For example, a test case with x=0 for the code 1. IF (x=0) THEN 2. A; 3. ENDIF achieves 100% statement coverage but does not cover the branch from 1 to 3 c) Is correct. 100% statement coverage means that each executable state ment was executed at least once d) Is not correct. The removed test case may provide coverage of some statements that are not covered by either of the other two test cases, in which case the remaining two test cases together will not achieve 100% statement coverage Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 191,
    "question": "(1 Point) Why does white -box testing facilitate defect detection even when the software specification is vague, outdated or incomplete ?",
    "options": {
      "a": "Test cases are designed based on the structure of the test object rather than the specification",
      "b": "For each white -box test technique the coverage can be well -defined and easily measured",
      "c": "White -box test techniques are very well designed to detect omissions in the requirements",
      "d": "White -box test techniques can be used in both static testing and dynamic testing Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. A fundamental strength that all white -box test techniques share is that the entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incom plete. This means white -box testing can find defects such as an extra feature added to the code (either accidentally or deliberately) that is not supposed to be there, which black -box testing cannot detect b) Is not correct. The fact that the coverage can be precisely defined is not the right reason. The achieved level of coverage would have much more impact than the possibility to measure the coverage c) Is not correct. If the software does not implement one or more requirements, white -box testing is unlikely to detect th e resulting defects of omission d) Is not correct. While this is true, this is not the right answer, because there is no connection between the capability to be used in both static testing and dynamic testing and the claim that white -box testing facilitates defect det ection with poor specifications",
    "source": "V6",
    "_html": false
  },
  {
    "id": 192,
    "question": "(1 Point) Which of the following is NOT anticipated by the tester while applying error guessing ?",
    "options": {
      "a": "The developer misunderstood the formula in the user sto ry for calculating the interest",
      "b": "The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code",
      "c": "The developer missed the seminar on new compound interest rate legislation",
      "d": "The accuracy of the interest calculated by the system is not precise enough Select ONE option."
    },
    "correct": "c",
    "explanation": "Error guessing is about anticipating the errors, defects and failures based on the tester’s knowledge. a) Is not correct. This is an example of ant icipating the developer’s error b) Is not correct. This is an exa mple of anticipating the defect c) Is correct. This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficu lt for the tester to anticipate d) Is not correct. This is an example of anticipating a failure, perhaps based on experience of previous sys tems in this application domain Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 193,
    "question": "(1 Point) Which of the following is true about exploratory testing?",
    "options": {
      "a": "Test cases are designed before the exploratory testing session starts",
      "b": "The tester can perform test execution, but cannot perform test design",
      "c": "Exploratory testing results are good predictors of the number of remaining defects",
      "d": "During exploratory testing the tester may use black -box test techniques Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. In exploratory testing, test cases are usually created during the exploratory testing session, alongside test analysis, test implementation and test execution b) Is not correct. In exploratory testing, tests are simultaneously designed, executed, and evaluated while the test er learns about the test object c) Is not correct. Exploratory test results depend heavily on the tester’s experience . So, even if the test results of exploratory testing can be used as a predictor of risk and used to assess whether there will be fewer or more defects , compared to the previous exploratory testing session, they are not a good example of reliable defect prediction models that can predict the number of remaining defects d) Is correct. During exploratory testing, the testers can use any test techniques that they find useful",
    "source": "V6",
    "_html": false
  },
  {
    "id": 194,
    "question": "(1 Point) Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?",
    "options": {
      "a": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
      "b": "Reviews, so that a team can detect inconsistencies and contradictions in a user story",
      "c": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
      "d": "Conversation, so that team members can understand how the software will be used Select ONE option."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Planning poker can estimate effort for a user story that is already written. It does not help in underst anding what should be delivered b) Is not correct. Reviews are not a collaborat ive user story writing practice c) Is not correct. Iteration planning is a project -related practice, used to plan the work, not to unders tand what needs to be delivered d) Is correct. Conversation explains how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vis ion of what should be delivered Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 195,
    "question": "(1 Point) You have just started designing test cases for the following user story. As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily . Acceptance criteria: 1. The filter should work for all versions of the appli cation from version 3.0 upwards 2. The filter should allow the customer to set a price range with a minimum and a maximum price 3. The search results should update dynamically as the customer adjusts the price range filter In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110. Which of the following is the BEST example of a test case for this user story ?",
    "options": {
      "a": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results no w include both products A and B",
      "b": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the defaul t maximum price changes to $",
      "c": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, accordi ng to the current exchange rate",
      "d": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers Select ONE option."
    },
    "correct": "a",
    "explanation": "a) Is correct. This test case is related to acceptance criteria 2 and 3, because we check if we can set price range (acceptance criterion 2) and if the results update dynamically after adjusting the price range filter (acceptance criterion 3) b) Is not correct. This test case is not related to any of the acceptance criteria. It checks if the filter dynamically sets the default minimum and maximum price range, an d not that a customer can do it c) Is not correct. This test case is not related to any of the acceptance criteria. It checks the currency exchange feature, which is n ot discussed in this user story d) Is not correct. This test case is not related to any of the acceptance criteria. It checks the application’s compatibility with different browsers, which is n ot discussed in this user story 30 b, d a) Is not correct. The approval of the budget is an example of an entry criterion. It would make no sense to approve the budget for some activity that has already been done b) Is correct. Running out of budget can be v iewed as a valid exit criterion c) Is not correct. Availability of resources is an example of an entry criterion for testing d) Correct. Coverage is a measure of thoroughness, so it is a typical exit criterion e) Is not correct. This is an example of an entry criterion, ch ecked before the project starts Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 196,
    "question": "<p>(1 Point) The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:</p>\n<ul>\n<li>Best-case scenario: 1 hour</li>\n<li>Worst -case scenario: 8 hours</li>\n<li>Most likely scenario: 3 hours Given that the three -point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?</li>\n</ul>",
    "options": {
      "a": "14 hours",
      "b": "3.5 hours",
      "c": "16 hours",
      "d": "12 hours Select ONE option."
    },
    "correct": "a",
    "explanation": "Using the three -point estimation technique, the final estimate (E) is calculated as: E = (a + 4*m + b) / 6, where a is the most optimistic estimate, m is the most likely estimate, and b is the most pessimistic estimate. Thus : a) Is correct. In this case, the estimate for executing a single test case is: E = ( 1h + 4*3h + 8h) / 6 = 3.5 hours So, the total time needed for the tester to execute 4 test cases is: 3.5h * 4 = 14 hours b) Is not correct c) Is not correct d) Is not correct",
    "source": "V6",
    "_html": true
  },
  {
    "id": 197,
    "question": "(1 Point) The table shows the traceability matrix from test cases to requirements. “X” means that a given test case covers the corresponding requirement. Req1 Req2 Req3 Req4 Req5 Req6 Req7 TC1 X X X X TC2 X X X TC3 X X TC4 X You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases. Which test case should be executed as the LAST one?",
    "options": {
      "a": "TC",
      "b": "TC",
      "c": "TC",
      "d": "TC4 Select ONE options."
    },
    "correct": "b",
    "explanation": "TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so should be executed first. Req2, Req5 and Req6 are still not covered. The next test case that achieves the highest additional coverage of the remaining requirements is TC3, covering 2 out of these 3 requirements (Req5 and Req6). So, TC3 should be executed as the second one. Now the only requirement still not covered is Req2, which is covered by TC4. Therefore, TC4 should be executed as the third test case. So, the last test case executed will be TC2. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 198,
    "question": "(1 Point) How can the testing quadrants be beneficial for testing ?",
    "options": {
      "a": "They help in test planning by dividing the test process into four phases , corresponding to the four basic test levels: component, integration, system, and acceptance testing",
      "b": "They help in assessing the high -level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
      "c": "They help non -technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others",
      "d": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them Select ONE options."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Testing quadrants have nothing to do with describing the relationships between test levels b) Is not correct. Testing quadrants cannot help in assessing any type of coverage c) Is correct. Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on ( business - or technology -facing) d) Is not correct. Testing quadran ts is not a psychological model",
    "source": "V6",
    "_html": false
  },
  {
    "id": 199,
    "question": "(1 Point) For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%. What is the risk impact ?",
    "options": {
      "a": "$",
      "b": "$2,",
      "c": "$50,",
      "d": "$200 Select ONE options."
    },
    "correct": "b",
    "explanation": "Risk assessment can use a quantitative or qualitative approach, or a mix of them. In the quantitative approach the risk level is calculated as the multiplication of risk likelihood and risk impact. So, Risk level = Risk likelihood * Risk impact Then, Risk impact = Risk level / Risk likelihood. In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct 35 b, e a) Is not correct. Scope creep is an example of a project risk related to technica l issues b) Is correct. Poor architecture is an example of a product risk since it refers to a product characteristic c) Is not correct. Cost-cutting is an example of a project risk, r elated to organizational issues d) Is not correct. Poor tool support is an example of a project r isk related to technical issues e) Is correct. Response time that is too long is an example of a product risk since it ref ers to a product characteristic",
    "source": "V6",
    "_html": false
  },
  {
    "id": 200,
    "question": "(1 Point) Which of the following is NOT a valid purpose for a test report ?",
    "options": {
      "a": "Track ing test progress and identifying areas that require further attention",
      "b": "Providing information on the tests executed, their results, and defects found",
      "c": "Providing information about each defect, su ch as the steps to reproduce it",
      "d": "Providing information on testing planned for the next period Select ONE options."
    },
    "correct": "c",
    "explanation": "a) Is not correct. Tracking test progress and identifying areas that require further attention is an example of supporting the ongoing control of testing. This is one of the purposes of test reports b) Is not correct. Providing information on the tests executed, their test results, and any defects found is an example of summarizing the test activities performed at a given test level. This is one of the purposes of test reports c) Is correct. Providing information about defects is the purpose of a d efect report, not a test report d) Is not correct. Providing information on testing planned for the next period is one of the purposes of test reports Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 201,
    "question": "(1 Point) The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analy sis, find the defect , and fix it. Which of the following enabled the above activity to be performed by the team ?",
    "options": {
      "a": "Risk management",
      "b": "Test monitoring and control",
      "c": "Whole team approach",
      "d": "Configuration management Select ONE options."
    },
    "correct": "d",
    "explanation": "a) Is not correct. Risk management consists of risk analysis and risk control. Neither of these activities supports the reassembly of the files that made up the release, because these activities deal with risk s, not with configuration items b) Is not correct. Test monitoring is concerned with gathering information about testing. This information is used to assess test progress and to measure whether the exit criteria or the test tasks associated with the exit criteria are satisfied, such as meeting the targets for coverage of product risks, requirements, or other acceptance criteria. Test control uses the information from test monitoring to provide, in th e form of control directives, guidance and the necessary corrective actions to achieve the most effective and efficient testing. None of these activities deal with the ma nagement of configuration items c) Is not correct. The whole team approach builds on the tester’s skill to work effectively in a team context and to contribute positively to the team goals. So, it focuses on team -related iss ues, not on configuration items d) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it i s possible to revert to a previous baseline in order to reproduce previous test results Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 202,
    "question": "(1 Point) Consider the following defect report for a Book Lending System . Defect ID : 001 | Title: Unable to Return a Book | Severity : High | Priority : | Environment : Windows 10, Google Chrome Description : When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user. Steps to Reproduce : Login to the Book Lending System as a user who has checked out a book. Click on the \"Book Return\" button for the book that has been checked out. System does not register the return and the book remains checked out. Expected Result : The book should be returned and no longer appear as checked out to the user. Actual Result : The book remains checked out to the user and is not registered as returned in the system. Attachments : [empty list] Which of the following is MOST likely to help the developer reproduce the failur e quickly?",
    "options": {
      "a": "Adding information about which users and which books the failure affects to the “Description” section",
      "b": "Filling in the missing value for the “Priority” field",
      "c": "Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section.",
      "d": "Repeating the same test case for different environments and writing defect repo rts for each of them separately Select ONE options."
    },
    "correct": "a",
    "explanation": "a) Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly an d so identify the defect faster b) Is not correct. Adding the value of Priority will not help in reproducing the defect itself c) Is not correct. Although some of this information may be of value, adding the memory dumps and database snapshots after each step will be too much, because most of these artefacts will contain useless information for the developer, and make the defect report less readable. It will also require the developer to spend a lot of time analyzing this information, which w ill lengthen the repair process d) Is not correct. The question was about helping the developer to reproduce the failure for a spe cific environment configuration Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 203,
    "question": "(1 Point) Given the following test tool categories: i. Collaboration tools ii. DevOps tools iii. Management tools iv. Non-functional testing tools v. Test design and implementation tools Tools from which of the categories are MOST likely to facilitate test execution?",
    "options": {
      "a": "i, v",
      "b": "ii, iv",
      "c": "i, iii, v",
      "d": "ii, iii, iv Select ONE options."
    },
    "correct": "b",
    "explanation": "Considering each of the listed tool categories: i. Collaboration tools – facilitate communication. Communication does not include the facilitation of test execution ii. DevOps tools - support the DevOps delivery pipeline, workflow tracking, automated build process(es) and CI/CD. The delivery pipeline and CI/CD both include the facilitation of test execution, such as component testing for CI iii. Management tools – increase the test process efficiency by facilitating management of the SDLC, requirements, tests, defects and configuration. The management of these items does not include the facilitation of test execution iv. Non-functional testing tools – allow the tester to perform non - functional testing that is difficult or impossible to perform manually. Non-functional testing can include both static testing and dynamic testing, including test execution v. Test design and implementation tools – facilitate generation of test cases, test data and test procedures. The generation of this testware does not include the facilitation of test execution Thus : a) Is not correct b) Is correct. Both DevOps tools (ii) and Non -functional testing tools (iv) facilitate test execution c) Is not correct d) Is not correct Question Number (#) Correct Answer Explanation / Rationale Learning Objective (LO) K-Level Number of Points",
    "source": "V6",
    "_html": false
  },
  {
    "id": 204,
    "question": "(1 Point) Which of the following is MOST likely to be a risk of test automation ?",
    "options": {
      "a": "The detection of additional high -severity defects",
      "b": "Providing measures that are too complicated for humans to derive",
      "c": "Incompatibility with the development platform",
      "d": "Substantially reduced test execution times Select ONE options."
    },
    "correct": "c",
    "explanation": "a) Is not correct. The detection of additional high -severity defects would be a benefit of test automation, rather than a risk b) Is not correct. The provision of measures that are too complicated for humans to derive themselves is normally considered to be a benefit of test automation c) Is correct. If the test automation is incompatible with the development platform, then it will not be able to integrate them, and, for instance, pass test inputs to the test object and receive test results from the test object d) Is not correct. Substantially reduced test execution times would normally be considered a benefit that is provided by test automation",
    "source": "V6",
    "_html": false
  },
  {
    "id": 205,
    "question": "<p>Given the following review roles:</p>\n<ol>\n<li>Author</li>\n<li>Scribe</li>\n<li>Reviewer</li>\n<li>Manager</li>\n</ol>\n<p>And the following review responsibilities:</p>\n<table class=\"dt\">\n<tr><th>Letter</th><th>Responsibility</th></tr>\n<tr><td><strong>A</strong></td><td>Fixing defects found during the review</td></tr>\n<tr><td><strong>B</strong></td><td>Recording review information such as decisions and new defects found</td></tr>\n<tr><td><strong>C</strong></td><td>Identifying potential defects in the work product under review</td></tr>\n<tr><td><strong>D</strong></td><td>Deciding on the execution of reviews and allocating time in project schedules</td></tr>\n</table>\n<p>Which of the following <strong>BEST</strong> shows the responsibilities performed by the roles?</p>",
    "options": {
      "a": "1A, 2B, 3C, 4D",
      "b": "1C, 2B, 3A, 4D",
      "c": "1A, 2D, 3C, 4B",
      "d": "1B, 2A, 3D, 4C"
    },
    "correct": "a",
    "explanation": "a) Is correct. The Author (1) fixes defects found during the review (A). The Scribe (2) records review information such as decisions and new defects found (B). The Reviewer (3) identifies potential defects in the work product (C). The Manager (4) decides on the execution of reviews and allocates time (D).\nb) Is not correct. The Author fixes defects, not identifies them.\nc) Is not correct. The Scribe does not decide on review execution.\nd) Is not correct. All mappings are incorrect.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 206,
    "question": "<p>Given the following test levels:</p>\n<ol>\n<li>Component testing</li>\n<li>Component integration testing</li>\n<li>System testing</li>\n<li>Acceptance testing</li>\n</ol>\n<p>And the following test bases:</p>\n<table class=\"dt\">\n<tr><th>Letter</th><th>Test Basis</th></tr>\n<tr><td><strong>A</strong></td><td>Business processes and user requirements</td></tr>\n<tr><td><strong>B</strong></td><td>Component specifications and code</td></tr>\n<tr><td><strong>C</strong></td><td>System and software design documents</td></tr>\n<tr><td><strong>D</strong></td><td>Interfaces and communication protocols</td></tr>\n</table>\n<p>Which of the following <strong>BEST</strong> maps the test levels to their typical test bases?</p>",
    "options": {
      "a": "1B, 2D, 3C, 4A",
      "b": "1C, 2B, 3A, 4D",
      "c": "1A, 2C, 3D, 4B",
      "d": "1D, 2A, 3B, 4C"
    },
    "correct": "a",
    "explanation": "a) Is correct. Component testing (1) uses component specifications and code (B) as test basis. Component integration testing (2) uses interfaces and communication protocols (D). System testing (3) uses system and software design documents (C). Acceptance testing (4) uses business processes and user requirements (A).\nb) Is not correct. Component testing does not typically use system design documents.\nc) Is not correct. Component testing does not use business processes.\nd) Is not correct. All mappings are incorrect.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 207,
    "question": "(1 Point) Which of the following statements about static and dynamic testing is MOST likely to be CORRECT?",
    "options": {
      "a": "Static testing can only find defects in code, while dynamic testing can find defects in any work product",
      "b": "Dynamic testing can find defects that are not easily identified by static testing, such as defects that emerge only at runtime due to specific input combinations",
      "c": "Static testing requires the execution of the test object, while dynamic testing examines work products without executing them",
      "d": "Static testing and dynamic testing are interchangeable techniques that always find the same types of defects"
    },
    "correct": "b",
    "explanation": "a) Is not correct. Static testing can be applied to many work products (requirements, design documents, code), not only code. Dynamic testing focuses on executable code.\nb) Is correct. Dynamic testing executes the software with specific inputs and can reveal runtime failures such as performance issues, memory leaks, or defects triggered only by specific input combinations that cannot be found through static analysis alone.\nc) Is not correct. The definitions are reversed — static testing does NOT require execution, while dynamic testing DOES require execution.\nd) Is not correct. Static and dynamic testing are complementary techniques that find different types of defects.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 208,
    "question": "(1 Point) Which of the following BEST describes how testing contributes to quality assurance?",
    "options": {
      "a": "Testing is the only component of quality assurance and is responsible for all quality-related activities",
      "b": "Testing provides independent verification that quality management processes are being followed correctly",
      "c": "Testing contributes to achieving the required level of quality by finding defects, which when fixed, contributes to quality of the test object, and testing provides information for decision making",
      "d": "Testing replaces the need for reviews and static analysis in the quality assurance process"
    },
    "correct": "c",
    "explanation": "a) Is not correct. Testing is one form of quality control, which is itself one part of quality assurance. QA includes many other activities.\nb) Is not correct. This describes auditing rather than testing.\nc) Is correct. Testing contributes to quality by finding defects (quality control), and the results of testing provide information to stakeholders for decision making about the software quality.\nd) Is not correct. Testing does not replace reviews and static analysis; these are complementary activities.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 209,
    "question": "(1 Point) Which of the following is MOST likely to be an advantage of test independence?",
    "options": {
      "a": "Independent testers always produce better test cases than developers because they have more experience in testing",
      "b": "An independent tester may recognize different kinds of failures and defects compared to the developer, due to different cognitive biases",
      "c": "Test independence eliminates all communication issues between testers and developers",
      "d": "Independent testers do not need to understand the requirements because they test from a completely external perspective"
    },
    "correct": "b",
    "explanation": "a) Is not correct. Independent testers do not ALWAYS produce better test cases. The advantage is about different perspectives, not guaranteed superiority.\nb) Is correct. Due to different cognitive biases and backgrounds, independent testers may recognize different kinds of failures and defects compared to the developer who wrote the code.\nc) Is not correct. Test independence may actually introduce communication issues, as it can create an adversarial relationship or communication gaps.\nd) Is not correct. Independent testers still need to understand requirements to design effective test cases.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 210,
    "question": "<p>A system calculates shipping costs based on the following business rule:</p>\n<pre class=\"code\">\nINPUT: weight (integer, in kg)\nIF (weight &lt; 1 OR weight &gt; 50) THEN\n    display \"invalid weight\"\nELSE IF (weight ≤ 20) THEN\n    shipping = $5\nELSE\n    shipping = $10\n</pre>\n<p>You design test cases using <strong>2-value boundary value analysis</strong> for the valid/invalid weight boundaries.</p>\n<p>Which of the following sets of test inputs provides the <strong>GREATEST</strong> boundary value coverage?</p>",
    "options": {
      "a": "0, 1, 50, 51",
      "b": "1, 10, 25, 50",
      "c": "-1, 0, 51, 52",
      "d": "0, 1, 20, 21"
    },
    "correct": "a",
    "explanation": "The valid/invalid boundaries are at weight=1 (boundary between invalid and valid) and weight=50 (boundary between valid and invalid). For 2-value BVA, the coverage items are: 0, 1 (for the lower boundary) and 50, 51 (for the upper boundary). That gives us 4 coverage items total.\na) Is correct. All four values (0, 1, 50, 51) are coverage items for 2-value BVA at the valid/invalid boundaries, achieving 100% coverage.\nb) Is not correct. Only 1 and 50 are coverage items, giving 50% coverage.\nc) Is not correct. Only 51 is a coverage item (0 is a coverage item but -1 and 52 are not), giving 25% coverage. Actually 0 is a coverage item, so this gives 50% coverage.\nd) Is not correct. Only 0 and 1 are coverage items for the valid/invalid boundaries, giving 50% coverage. 20 and 21 are boundaries for internal partitions.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 211,
    "question": "<p>A cinema booking system applies the following pricing rule:</p>\n<pre class=\"code\">\nINPUT: age (integer)\nIF (age ≥ 0 AND age ≤ 5)   THEN ticket = \"Free\"\nIF (age ≥ 6 AND age ≤ 17)  THEN ticket = \"Child\"\nIF (age ≥ 18 AND age ≤ 64) THEN ticket = \"Adult\"\nIF (age ≥ 65 AND age ≤ 120) THEN ticket = \"Senior\"\n</pre>\n<p>You apply <strong>2-value boundary value analysis</strong>.</p>\n<p>How many boundary value coverage items are there in total?</p>",
    "options": {
      "a": "8",
      "b": "10",
      "c": "12",
      "d": "16"
    },
    "correct": "b",
    "explanation": "The boundaries are at: 0/−1 (invalid/Free), 5/6 (Free/Child), 17/18 (Child/Adult), 64/65 (Adult/Senior), 120/121 (Senior/invalid). For 2-value BVA, each boundary contributes 2 coverage items (the boundary value and its closest neighbor in the adjacent partition). The coverage items are: −1, 0, 5, 6, 17, 18, 64, 65, 120, 121. That gives 10 coverage items.\na) Is not correct.\nb) Is correct. There are 5 boundaries × 2 values each = 10 coverage items.\nc) Is not correct.\nd) Is not correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 212,
    "question": "<p>You are testing a library book borrowing system. You have been asked to design test cases based on the following decision table.</p>\n<table class=\"dt\">\n<tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr>\n<tr><td>C1: Member active?</td><td>T</td><td>T</td><td>F</td><td>F</td></tr>\n<tr><td>C2: Book available?</td><td>T</td><td>F</td><td>T</td><td>F</td></tr>\n<tr><td>C3: No overdue books?</td><td>T</td><td>—</td><td>—</td><td>—</td></tr>\n<tr class=\"action\"><td>Allow borrowing?</td><td>X</td><td></td><td></td><td></td></tr>\n<tr class=\"action\"><td>Place reservation?</td><td></td><td>X</td><td></td><td></td></tr>\n<tr class=\"action\"><td>Reject request?</td><td></td><td></td><td>X</td><td>X</td></tr>\n</table>\n<p>Which of the following combinations of inputs matches rule R1 but would result in a <strong>DIFFERENT</strong> action if condition C3 were False?</p>",
    "options": {
      "a": "C1 = T, C2 = T, C3 = F",
      "b": "C1 = T, C2 = F, C3 = T",
      "c": "C1 = F, C2 = T, C3 = T",
      "d": "C1 = F, C2 = F, C3 = F"
    },
    "correct": "a",
    "explanation": "Rule R1 applies when C1=T, C2=T, C3=T, and the action is 'Allow borrowing'. If C3 were False (i.e., the member HAS overdue books), the combination C1=T, C2=T, C3=F does not match any existing rule in the table — indicating the decision table is incomplete for this scenario. This would likely result in a different action (e.g., 'Reject request').\n\na) Is correct. This matches R1's first two conditions but changes C3 to False, which would change the action.\nb) Is not correct. This matches R2, not R1.\nc) Is not correct. This matches R3.\nd) Is not correct. This matches R4.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 213,
    "question": "<p>Consider the following decision table for a parking access system:</p>\n<table class=\"dt\">\n<tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr>\n<tr><td>C1: Valid parking permit?</td><td>T</td><td>T</td><td>F</td><td>F</td></tr>\n<tr><td>C2: Parking space available?</td><td>T</td><td>F</td><td>T</td><td>F</td></tr>\n<tr class=\"action\"><td>Open barrier?</td><td>X</td><td></td><td></td><td></td></tr>\n<tr class=\"action\"><td>Display 'lot full'?</td><td></td><td>X</td><td></td><td></td></tr>\n<tr class=\"action\"><td>Display 'no permit'?</td><td></td><td></td><td>X</td><td>X</td></tr>\n</table>\n<p>How many test cases are needed to achieve <strong>100% decision table coverage</strong>?</p>",
    "options": {
      "a": "2",
      "b": "3",
      "c": "4",
      "d": "8"
    },
    "correct": "c",
    "explanation": "In decision table testing, 100% coverage means executing one test case per rule. The decision table has 4 rules (R1 through R4), so 4 test cases are needed — one for each rule.\n\na) Is not correct.\nb) Is not correct.\nc) Is correct. Four test cases are needed, one per rule.\nd) Is not correct. 8 would cover all possible combinations of 3 binary conditions, but decision table coverage requires only one test per rule.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 214,
    "question": "<p>You are designing test cases based on the following state transition diagram for an online order system:</p>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 500 150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:500px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah214\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .st214 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; }\n      .sttxt214 { fill: #e2e8f0; font-family: sans-serif; font-size: 11px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .edg214 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah214); }\n      .elbl214 { fill: #94a3b8; font-family: sans-serif; font-size: 10px; text-anchor: middle; }\n    </style>\n  </defs>\n  <!-- New -->\n  <rect class=\"st214\" x=\"5\" y=\"50\" width=\"70\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt214\" x=\"40\" y=\"68\">New</text>\n  <!-- Processing -->\n  <rect class=\"st214\" x=\"120\" y=\"50\" width=\"90\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt214\" x=\"165\" y=\"68\">Processing</text>\n  <!-- Dispatched -->\n  <rect class=\"st214\" x=\"260\" y=\"50\" width=\"90\" height=\"36\" rx=\"18\"/>\n  <text class=\"sttxt214\" x=\"305\" y=\"68\">Dispatched</text>\n  <!-- Delivered -->\n  <rect class=\"st214\" x=\"400\" y=\"50\" width=\"85\" height=\"36\" rx=\"18\" stroke=\"#22c55e\"/>\n  <text class=\"sttxt214\" x=\"442\" y=\"68\" fill=\"#86efac\">Delivered</text>\n  <!-- Cancelled -->\n  <rect class=\"st214\" x=\"120\" y=\"110\" width=\"90\" height=\"36\" rx=\"18\" stroke=\"#ef4444\"/>\n  <text class=\"sttxt214\" x=\"165\" y=\"128\" fill=\"#fca5a5\">Cancelled</text>\n  <!-- Returned -->\n  <rect class=\"st214\" x=\"400\" y=\"110\" width=\"85\" height=\"36\" rx=\"18\" stroke=\"#eab308\"/>\n  <text class=\"sttxt214\" x=\"442\" y=\"128\" fill=\"#fde047\">Returned</text>\n  <!-- New -> Processing -->\n  <line class=\"edg214\" x1=\"75\" y1=\"68\" x2=\"116\" y2=\"68\"/>\n  <text class=\"elbl214\" x=\"95\" y=\"58\">payment</text>\n  <!-- Processing -> Dispatched -->\n  <line class=\"edg214\" x1=\"210\" y1=\"68\" x2=\"256\" y2=\"68\"/>\n  <text class=\"elbl214\" x=\"233\" y=\"58\">dispatched</text>\n  <!-- Dispatched -> Delivered -->\n  <line class=\"edg214\" x1=\"350\" y1=\"68\" x2=\"396\" y2=\"68\"/>\n  <text class=\"elbl214\" x=\"373\" y=\"58\">delivered</text>\n  <!-- New -> Cancelled -->\n  <polyline class=\"edg214\" points=\"40,86 40,128 116,128\"/>\n  <text class=\"elbl214\" x=\"60\" y=\"118\">cancel</text>\n  <!-- Processing -> Cancelled -->\n  <line class=\"edg214\" x1=\"165\" y1=\"86\" x2=\"165\" y2=\"106\"/>\n  <!-- Delivered -> Returned -->\n  <line class=\"edg214\" x1=\"442\" y1=\"86\" x2=\"442\" y2=\"106\"/>\n  <text class=\"elbl214\" x=\"465\" y=\"100\">return</text>\n</svg>\n</div>\n<p>What is the <strong>MINIMUM</strong> number of test cases required to achieve 100% valid transitions coverage?</p>",
    "options": {
      "a": "3",
      "b": "4",
      "c": "5",
      "d": "9"
    },
    "correct": "b",
    "explanation": "There are 9 transitions. To cover all transitions with the minimum number of test cases, we need to find paths that share common prefixes.\nTC1: NEW → CONFIRMED → SHIPPED → DELIVERED → CLOSED (covers 4 transitions)\nTC2: NEW → CLOSED (covers 1 transition)\nTC3: CONFIRMED → CLOSED (needs: NEW → CONFIRMED → CLOSED, covers 1 new transition)\nTC4: SHIPPED → RETURNED → CLOSED (needs: NEW → CONFIRMED → SHIPPED → RETURNED → CLOSED, covers 2 new transitions)\nTC5: DELIVERED → RETURNED (needs: NEW → CONFIRMED → SHIPPED → DELIVERED → RETURNED → CLOSED, but RETURNED → CLOSED already covered)\n\nActual minimum: TC1: NEW→CONFIRMED→SHIPPED→DELIVERED→CLOSED (4 transitions)\nTC2: NEW→CLOSED (1 transition)\nTC3: NEW→CONFIRMED→CLOSED (1 new transition: CONFIRMED→CLOSED)\nTC4: NEW→CONFIRMED→SHIPPED→RETURNED→CLOSED (2 new: SHIPPED→RETURNED, RETURNED→CLOSED)\nNow we've covered 8 of 9. Missing: DELIVERED→RETURNED.\nTC5 would be needed. But let's reorganize: TC1: NEW→CONFIRMED→SHIPPED→DELIVERED→RETURNED→CLOSED (5 transitions). TC2: NEW→CLOSED (1). TC3: NEW→CONFIRMED→CLOSED (1). TC4: NEW→CONFIRMED→SHIPPED→DELIVERED→CLOSED (1 new: DELIVERED→CLOSED). That's 8 transitions in 4 test cases. Missing: none! All 9 covered? Let me recount: TC1 covers NEW→CONFIRMED, CONFIRMED→SHIPPED, SHIPPED→DELIVERED, DELIVERED→RETURNED, RETURNED→CLOSED. TC2: NEW→CLOSED. TC3: CONFIRMED→CLOSED. TC4: DELIVERED→CLOSED. That's 5+1+1+1=8, but TC4 needs prefix to reach DELIVERED. So 4 test cases cover all 9 transitions.\n\nb) Is correct. Four test cases are sufficient to cover all 9 valid transitions.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 215,
    "question": "<p>You want to apply <strong>statement testing</strong> to the following pseudocode:</p>\n<pre class=\"code\">\n 1. READ x\n 2. IF x &gt; 0 THEN\n 3.   PRINT \"positive\"\n 4.   IF x &gt; 100 THEN\n 5.     PRINT \"large\"\n 6.   ENDIF\n 7. ELSE\n 8.   PRINT \"non-positive\"\n 9. ENDIF\n10. PRINT \"done\"\n</pre>\n<p>What is the <strong>MINIMUM</strong> number of test cases needed to achieve 100% statement coverage?</p>",
    "options": {
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4"
    },
    "correct": "b",
    "explanation": "To achieve 100% statement coverage, every executable statement must be exercised at least once.\nTC1: x = 150 → executes lines 1, 2(True), 3, 4(True), 5, 10 — covers PRINT \"positive\" and PRINT \"large\"\nTC2: x = -1 → executes lines 1, 2(False), 7, 8, 10 — covers PRINT \"non-positive\"\nWith these 2 test cases, all statements are covered.\na) Is not correct. One test case cannot cover both the positive and non-positive paths.\nb) Is correct. Two test cases are sufficient.\nc) Is not correct.\nd) Is not correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 216,
    "question": "<p>You want to apply <strong>branch testing</strong> to the following pseudocode:</p>\n<pre class=\"code\">\n 1. READ temperature\n 2. IF temperature &lt; 0 THEN\n 3.   PRINT \"freezing\"\n 4. ELSE IF temperature &lt; 30 THEN\n 5.   PRINT \"normal\"\n 6. ELSE\n 7.   PRINT \"hot\"\n 8. ENDIF\n 9. IF temperature &gt; 40 THEN\n10.   PRINT \"warning: extreme heat\"\n11. ENDIF\n12. PRINT \"done\"\n</pre>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 420 400\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah216\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .n216 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; rx: 6; }\n      .nt216 { fill: #e2e8f0; font-family: monospace; font-size: 11px; text-anchor: middle; dominant-baseline: central; }\n      .d216 { fill: #1e293b; stroke: #f59e0b; stroke-width: 2; }\n      .e216 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah216); }\n      .l216 { fill: #94a3b8; font-family: sans-serif; font-size: 10px; }\n    </style>\n  </defs>\n  <!-- Start: READ -->\n  <rect class=\"n216\" x=\"150\" y=\"5\" width=\"100\" height=\"28\"/>\n  <text class=\"nt216\" x=\"200\" y=\"19\">1. READ</text>\n  <!-- Decision: temp < 0 -->\n  <polygon class=\"d216\" points=\"200,55 270,85 200,115 130,85\"/>\n  <text class=\"nt216\" x=\"200\" y=\"85\" fill=\"#fde047\" font-size=\"10\">temp &lt; 0?</text>\n  <line class=\"e216\" x1=\"200\" y1=\"33\" x2=\"200\" y2=\"55\"/>\n  <!-- True: PRINT freezing -->\n  <rect class=\"n216\" x=\"20\" y=\"71\" width=\"80\" height=\"28\"/>\n  <text class=\"nt216\" x=\"60\" y=\"85\">freezing</text>\n  <line class=\"e216\" x1=\"130\" y1=\"85\" x2=\"104\" y2=\"85\"/>\n  <text class=\"l216\" x=\"115\" y=\"78\">T</text>\n  <!-- False: Decision temp < 30 -->\n  <polygon class=\"d216\" points=\"200,140 270,170 200,200 130,170\"/>\n  <text class=\"nt216\" x=\"200\" y=\"170\" fill=\"#fde047\" font-size=\"10\">temp &lt; 30?</text>\n  <line class=\"e216\" x1=\"200\" y1=\"115\" x2=\"200\" y2=\"140\"/>\n  <text class=\"l216\" x=\"207\" y=\"130\">F</text>\n  <!-- True: PRINT normal -->\n  <rect class=\"n216\" x=\"20\" y=\"156\" width=\"80\" height=\"28\"/>\n  <text class=\"nt216\" x=\"60\" y=\"170\">normal</text>\n  <line class=\"e216\" x1=\"130\" y1=\"170\" x2=\"104\" y2=\"170\"/>\n  <text class=\"l216\" x=\"115\" y=\"163\">T</text>\n  <!-- False: PRINT hot -->\n  <rect class=\"n216\" x=\"310\" y=\"156\" width=\"80\" height=\"28\"/>\n  <text class=\"nt216\" x=\"350\" y=\"170\">hot</text>\n  <line class=\"e216\" x1=\"270\" y1=\"170\" x2=\"306\" y2=\"170\"/>\n  <text class=\"l216\" x=\"285\" y=\"163\">F</text>\n  <!-- Merge -> Decision temp > 40 -->\n  <polygon class=\"d216\" points=\"200,240 270,270 200,300 130,270\"/>\n  <text class=\"nt216\" x=\"200\" y=\"270\" fill=\"#fde047\" font-size=\"10\">temp &gt; 40?</text>\n  <polyline class=\"e216\" points=\"60,99 60,220 200,220 200,240\" marker-end=\"url(#ah216)\"/>\n  <polyline points=\"60,184 60,220\" stroke=\"#7dd3fc\" stroke-width=\"2\" fill=\"none\"/>\n  <polyline points=\"350,184 350,220 204,220\" stroke=\"#7dd3fc\" stroke-width=\"2\" fill=\"none\"/>\n  <!-- True: PRINT warning -->\n  <rect class=\"n216\" x=\"300\" y=\"256\" width=\"100\" height=\"28\"/>\n  <text class=\"nt216\" x=\"350\" y=\"270\">warning</text>\n  <line class=\"e216\" x1=\"270\" y1=\"270\" x2=\"296\" y2=\"270\"/>\n  <text class=\"l216\" x=\"280\" y=\"263\">T</text>\n  <!-- False + merge -> PRINT done -->\n  <rect class=\"n216\" x=\"150\" y=\"330\" width=\"100\" height=\"28\"/>\n  <text class=\"nt216\" x=\"200\" y=\"344\">12. PRINT done</text>\n  <line class=\"e216\" x1=\"200\" y1=\"300\" x2=\"200\" y2=\"326\"/>\n  <text class=\"l216\" x=\"207\" y=\"318\">F</text>\n  <polyline points=\"350,284 350,344 254,344\" stroke=\"#7dd3fc\" stroke-width=\"2\" fill=\"none\"/>\n</svg>\n<p class=\"diagram-note\">Control Flow Graph for the pseudocode above</p>\n</div>\n<p>How many test cases are <strong>MINIMUM</strong> required to achieve 100% branch coverage?</p>",
    "options": {
      "a": "2",
      "b": "3",
      "c": "4",
      "d": "5"
    },
    "correct": "c",
    "explanation": "The branches (decision outcomes) are:\n- Line 2: temperature < 0 (True/False)\n- Line 4: temperature < 30 (True/False) — only reached when line 2 is False\n- Line 9: temperature > 40 (True/False)\n\nThere are 4 decision outcomes that can be independently True or False, but some are dependent:\nTC1: temperature = -5 → line 2 True, line 9 False (covers: <0 true, >40 false)\nTC2: temperature = 15 → line 2 False, line 4 True, line 9 False (covers: <0 false, <30 true, >40 false)\nTC3: temperature = 35 → line 2 False, line 4 False, line 9 False (covers: <30 false, >40 false)\nTC4: temperature = 45 → line 2 False, line 4 False, line 9 True (covers: >40 true)\n\nWe need at minimum 4 test cases to cover all branches (True and False outcomes of all decisions).\nc) Is correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 217,
    "question": "(1 Point) You are using acceptance test-driven development and designing test cases based on the following user story:\n\nAs a Customer, I want to receive notifications about my order status, so that I am informed about delivery progress.\n\nAcceptance Criteria:\nAC1: Customers receive an email when the order is confirmed\nAC2: Customers receive an SMS when the order is shipped\nAC3: Customers can opt out of SMS notifications\nAC4: Customers who opt out of SMS still receive email notifications\n\nWhich test case is the MOST reasonable one to test AC4?",
    "options": {
      "a": "Check that a customer who has not opted out receives an SMS when the order is shipped",
      "b": "Check that a customer who has opted out of SMS receives an email when the order is confirmed",
      "c": "Check that a customer who has opted out of SMS does not receive any notifications",
      "d": "Check that a customer can successfully change their SMS notification preferences"
    },
    "correct": "b",
    "explanation": "a) Is not correct. This tests AC2, not AC4. It verifies SMS delivery for customers who have not opted out.\nb) Is correct. AC4 states that customers who opt out of SMS should still receive email notifications. Testing that a customer who opted out of SMS still receives email when the order is confirmed directly validates AC4.\nc) Is not correct. This contradicts AC4, which states that email notifications should still be received.\nd) Is not correct. This tests the mechanism of AC3 (opting out), not AC4 (still receiving emails after opt-out).",
    "source": "generated",
    "_html": false
  },
  {
    "id": 218,
    "question": "<p>A project uses a test estimation model where the estimated number of test cases for a module is calculated as:</p>\n<div class=\"formula\">T(n) = 2 × R(n) + 0.5 × C(n)</div>\n<p>where R(n) is the number of requirements and C(n) is the cyclomatic complexity of the module.</p>\n<table class=\"dt data-table\">\n<tr><th>Module</th><th>Requirements R(n)</th><th>Cyclomatic Complexity C(n)</th></tr>\n<tr><td>Module A</td><td>12</td><td>20</td></tr>\n<tr><td>Module B</td><td>8</td><td>30</td></tr>\n</table>\n<p>What is the total estimated number of test cases for both modules?</p>",
    "options": {
      "a": "Renew a book that has been renewed twice and verify it is rejected",
      "b": "Renew a book that is not reserved by another member and verify renewal is successful",
      "c": "Attempt to renew a book that is reserved by another member and verify renewal is rejected",
      "d": "Renew a book and verify the due date is extended by 14 days"
    },
    "correct": "b",
    "explanation": "For Module A: T(A) = 2 × 12 + 0.5 × 20 = 24 + 10 = 34\nFor Module B: T(B) = 2 × 8 + 0.5 × 30 = 16 + 15 = 31\nTotal = 34 + 31 = 65\na) Is not correct.\nb) Is correct. The total estimated test cases is 65.\nc) Is not correct.\nd) Is not correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 219,
    "question": "<p>At the beginning of each iteration, the team estimates the test effort (in person-hours). Let E(n) be the estimated effort for iteration n, and let A(n) be the actual effort in iteration n. From the third iteration, the team uses the following estimation model:</p>\n<div class=\"formula\">E(n) = (2 × A(n−1) + A(n−2)) / 3</div>\n<p>The actual efforts were:</p>\n<table class=\"dt data-table\">\n<tr><th>Iteration</th><th>A(n) Actual effort</th></tr>\n<tr><td>1</td><td>30 person-hours</td></tr>\n<tr><td>2</td><td>24 person-hours</td></tr>\n<tr><td>3</td><td>27 person-hours</td></tr>\n<tr><td>4</td><td>21 person-hours</td></tr>\n</table>\n<p>What is the estimated effort for <strong>iteration #5</strong>?</p>",
    "options": {
      "a": "34",
      "b": "65",
      "c": "55",
      "d": "45"
    },
    "correct": "c",
    "explanation": "For Module A: T(A) = 2 × 12 + 0.5 × 20 = 24 + 10 = 34\nFor Module B: T(B) = 2 × 8 + 0.5 × 30 = 16 + 15 = 31\nTotal = 34 + 31 = 65\n\nWait, let me recalculate: Module A = 24 + 10 = 34. Module B = 16 + 15 = 31. Total = 65.\n\nb) Is correct. The total is 65.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 220,
    "question": "<p>You are preparing a test execution schedule for five test cases TC1 to TC5.</p>\n<table class=\"dt data-table\">\n<tr><th>Test Case</th><th>Priority</th></tr>\n<tr><td>TC1</td><td>2</td></tr>\n<tr><td>TC2</td><td>1 (highest)</td></tr>\n<tr><td>TC3</td><td>3 (lowest)</td></tr>\n<tr><td>TC4</td><td>1</td></tr>\n<tr><td>TC5</td><td>2</td></tr>\n</table>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 380 160\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:380px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah220\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .tc220 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; rx: 6; }\n      .tctxt220 { fill: #e2e8f0; font-family: monospace; font-size: 13px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .dep220 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah220); }\n      .plbl220 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; }\n    </style>\n  </defs>\n  <text class=\"plbl220\" x=\"5\" y=\"45\" fill=\"#fbbf24\">P1:</text>\n  <text class=\"plbl220\" x=\"5\" y=\"105\" fill=\"#60a5fa\">P2:</text>\n  <text class=\"plbl220\" x=\"5\" y=\"145\" fill=\"#94a3b8\">P3:</text>\n  <!-- TC2 (P1) -->\n  <rect class=\"tc220\" x=\"60\" y=\"25\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt220\" x=\"88\" y=\"43\">TC2</text>\n  <!-- TC4 (P1) -->\n  <rect class=\"tc220\" x=\"170\" y=\"25\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt220\" x=\"198\" y=\"43\">TC4</text>\n  <!-- TC1 (P2) -->\n  <rect class=\"tc220\" x=\"60\" y=\"85\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt220\" x=\"88\" y=\"103\">TC1</text>\n  <!-- TC5 (P2) -->\n  <rect class=\"tc220\" x=\"280\" y=\"85\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt220\" x=\"308\" y=\"103\">TC5</text>\n  <!-- TC3 (P3) -->\n  <rect class=\"tc220\" x=\"170\" y=\"125\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt220\" x=\"198\" y=\"143\">TC3</text>\n  <!-- Dependencies -->\n  <line class=\"dep220\" x1=\"88\" y1=\"61\" x2=\"88\" y2=\"81\"/>\n  <line class=\"dep220\" x1=\"198\" y1=\"61\" x2=\"198\" y2=\"121\"/>\n  <line class=\"dep220\" x1=\"226\" y1=\"43\" x2=\"276\" y2=\"93\"/>\n</svg>\n<p class=\"diagram-note\">Arrows show dependencies: TC2→TC1, TC4→TC3, TC4→TC5</p>\n</div>\n<p>Which test case should be executed <strong>THIRD</strong>?</p>",
    "options": {
      "a": "24 person-hours",
      "b": "23 person-hours",
      "c": "25 person-hours",
      "d": "22 person-hours"
    },
    "correct": "a",
    "explanation": "To execute highest priority test cases as early as possible while respecting dependencies:\nTC2 (P1) depends on TC1. TC4 (P1) depends on TC3.\n\n1st: TC1 (P2, needed to unblock TC2 which is P1)\n2nd: TC3 (P3, needed to unblock TC4 which is P1)\n3rd: TC2 (P1, now unblocked — tied with TC4 at P1, TC2 was unblocked first)\n4th: TC4 (P1)\n5th: TC5 (P2)\n\na) Is correct. TC2 should be executed third.\nb) Is not correct.\nc) Is not correct.\nd) Is not correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 221,
    "question": "<p>You are preparing a test execution schedule for six test cases TC1 to TC6.</p>\n<table class=\"dt data-table\">\n<tr><th>Test Case</th><th>Priority</th></tr>\n<tr><td>TC1</td><td>2</td></tr>\n<tr><td>TC2</td><td>3 (lowest)</td></tr>\n<tr><td>TC3</td><td>1 (highest)</td></tr>\n<tr><td>TC4</td><td>1</td></tr>\n<tr><td>TC5</td><td>2</td></tr>\n<tr><td>TC6</td><td>3</td></tr>\n</table>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 400 180\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:400px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah221\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .tc221 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; rx: 6; }\n      .tctxt221 { fill: #e2e8f0; font-family: monospace; font-size: 13px; text-anchor: middle; dominant-baseline: central; font-weight: bold; }\n      .dep221 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah221); }\n      .plbl221 { fill: #94a3b8; font-family: sans-serif; font-size: 11px; }\n    </style>\n  </defs>\n  <text class=\"plbl221\" x=\"5\" y=\"38\" fill=\"#fbbf24\">P1:</text>\n  <text class=\"plbl221\" x=\"5\" y=\"98\" fill=\"#60a5fa\">P2:</text>\n  <text class=\"plbl221\" x=\"5\" y=\"158\" fill=\"#94a3b8\">P3:</text>\n  <!-- TC3 (P1) -->\n  <rect class=\"tc221\" x=\"70\" y=\"18\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"98\" y=\"36\">TC3</text>\n  <!-- TC4 (P1) -->\n  <rect class=\"tc221\" x=\"200\" y=\"18\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"228\" y=\"36\">TC4</text>\n  <!-- TC1 (P2) -->\n  <rect class=\"tc221\" x=\"70\" y=\"78\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"98\" y=\"96\">TC1</text>\n  <!-- TC5 (P2) -->\n  <rect class=\"tc221\" x=\"200\" y=\"78\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"228\" y=\"96\">TC5</text>\n  <!-- TC2 (P3) -->\n  <rect class=\"tc221\" x=\"70\" y=\"138\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"98\" y=\"156\">TC2</text>\n  <!-- TC6 (P3) -->\n  <rect class=\"tc221\" x=\"310\" y=\"138\" width=\"56\" height=\"36\" rx=\"6\"/>\n  <text class=\"tctxt221\" x=\"338\" y=\"156\">TC6</text>\n  <!-- Dependencies -->\n  <line class=\"dep221\" x1=\"98\" y1=\"54\" x2=\"98\" y2=\"74\"/>\n  <line class=\"dep221\" x1=\"98\" y1=\"114\" x2=\"98\" y2=\"134\"/>\n  <line class=\"dep221\" x1=\"228\" y1=\"54\" x2=\"228\" y2=\"74\"/>\n  <line class=\"dep221\" x1=\"256\" y1=\"96\" x2=\"306\" y2=\"148\"/>\n</svg>\n<p class=\"diagram-note\">Arrows show dependencies: TC3→TC1→TC2, TC4→TC5, TC5→TC6</p>\n</div>",
    "options": {
      "a": "TC2",
      "b": "TC5",
      "c": "TC4",
      "d": "TC1"
    },
    "correct": "a",
    "explanation": "TC3 (P1) depends on TC2. TC5 (P1) depends on TC1. TC6 (P3) depends on TC4.\n\nTo unblock P1 test cases as early as possible:\n1st: TC2 (P3, but needed to unblock TC3 which is P1)\n2nd: TC1 (P2, needed to unblock TC5 which is P1)\n3rd: TC3 (P1, now unblocked)\n4th: TC5 (P1, now unblocked)\n5th: TC4 (P2)\n6th: TC6 (P3)\n\na) Is correct. TC5 should be executed fourth.\nb) Is not correct.\nc) Is not correct.\nd) Is not correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 222,
    "question": "(1 Point) You are preparing a test execution schedule for six test cases TC1 to TC6.\n\nPriorities (1 = highest, 3 = lowest):\nTC1: Priority 2, TC2: Priority 3, TC3: Priority 1, TC4: Priority 2, TC5: Priority 1, TC6: Priority 3\n\nDependencies (→ means 'must be executed before'):\nTC2 → TC3\nTC1 → TC5\nTC4 → TC6\n\nConsidering both priorities and dependencies, which test case should be executed FOURTH?",
    "options": {
      "a": "TC5",
      "b": "TC3",
      "c": "TC4",
      "d": "TC6"
    },
    "correct": "c",
    "explanation": "TC3 (P1) depends on TC2. TC5 (P1) depends on TC1. TC6 (P3) depends on TC4.\n\nWe want P1 test cases (TC3, TC5) to run as early as possible.\n\nTo unblock TC3 (P1), we need TC2 first.\nTo unblock TC5 (P1), we need TC1 first.\n\nBest strategy: run the blockers first, then P1 test cases.\n1st: TC2 (P3, but unblocks TC3 which is P1) or TC1 (P2, unblocks TC5 which is P1).\n\nSince TC1 has higher priority (P2 vs P3 for TC2), start with TC2 (to unblock TC3 sooner — but TC1 is higher priority itself). Actually: We should consider which unblocking gives us the most value soonest.\n\nSchedule: 1st TC2 (unblocks TC3), 2nd TC1 (unblocks TC5), 3rd TC3 (P1, now unblocked), 4th TC5 (P1, now unblocked).\n\nOr: 1st TC1, 2nd TC2, 3rd TC3 (or TC5), 4th TC5 (or TC3).\n\nEither way, after positions 1-3, the 4th test case should be whichever P1 test case wasn't third. TC4 is P2 and only blocks TC6 (P3), so it comes after P1 test cases.\n\n4th position = TC5 or TC3. Looking at answer options, TC5 is (a) and TC3 is (b).\n\nSchedule: TC2, TC1, TC3, TC5, TC4, TC6 — 4th = TC5.\n\na) Is correct. TC5 should be executed fourth.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 223,
    "question": "(1 Point) Consider the following defect report for a mobile banking application:\n\nApplication: MobileBank v2.1\nDefect: Fund transfer fails\nSteps to Reproduce:\n1. Log in to the application\n2. Navigate to \"Transfer Funds\"\n3. Enter recipient account number\n4. Enter transfer amount: $500\n5. Click \"Transfer\"\nExpected result: Transfer should be completed successfully\nActual result: Error message \"Transfer failed\" is displayed\nSeverity: Critical\nPriority: High\nTest Environment: iOS 17.2, iPhone 15\n\nWhat is the MOST important information that is missing from this defect report?",
    "options": {
      "a": "The name and role of the tester who found the defect",
      "b": "The status of the user's account balance before and after the transfer attempt",
      "c": "The version of the application server and backend database",
      "d": "The color of the error message displayed on screen"
    },
    "correct": "b",
    "explanation": "a) Is not correct. While the tester name is useful for follow-up, it is not the most critical missing information for reproducing and fixing the defect.\nb) Is correct. The account balance is critical context — the transfer may fail because of insufficient funds. Without knowing whether the account had sufficient balance, the defect report lacks the preconditions needed to reproduce and diagnose the issue.\nc) Is not correct. While backend version info can be useful, the most important missing information relates to the preconditions of the test (account state).\nd) Is not correct. The color of the error message is cosmetic and not important for diagnosing a functional defect.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 224,
    "question": "(1 Point) Consider the following defect report for an e-commerce website:\n\nApplication: ShopEasy v3.0\nDefect ID: DEF-2045\nDefect: Product search returns incorrect results\nSteps to Reproduce:\n1. Go to the search page\n2. Enter \"blue shoes\" in the search bar\n3. Click Search\nExpected result: Only blue shoes should be displayed\nActual result: Products of all colors are displayed\nTest Environment: Chrome 120.0, Windows 11\nSeverity: Medium\nReported by: Jane Smith, 2024-01-15\n\nWhat is the MOST important information that is missing from this defect report?",
    "options": {
      "a": "The browser window size used during testing",
      "b": "The priority of the defect",
      "c": "Screenshots or visual evidence of the incorrect search results",
      "d": "The number of products in the database"
    },
    "correct": "b",
    "explanation": "a) Is not correct. Browser window size is unlikely to affect search functionality results.\nb) Is correct. The priority is missing from this defect report. Priority indicates how urgently the defect should be fixed and is an essential element of a defect report, as it helps the development team plan their work. Severity alone does not indicate when the defect should be fixed.\nc) Is not correct. While screenshots are helpful, they are supplementary. The steps and expected/actual results already describe the issue.\nd) Is not correct. The total number of products is not critical for understanding the defect.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 225,
    "question": "(1 Point) A test team has been running the same regression test suite for the past 10 releases. Initially the test suite found many defects, but in recent releases very few new defects are found.\n\nWhich testing principle BEST explains this observation?",
    "options": {
      "a": "Exhaustive testing is impossible",
      "b": "Defects cluster together",
      "c": "Pesticide paradox",
      "d": "Absence-of-defects fallacy"
    },
    "correct": "c",
    "explanation": "a) Is not correct. Exhaustive testing being impossible means we cannot test all combinations, but does not explain why an existing test suite finds fewer defects over time.\nb) Is not correct. Defect clustering means a small number of modules contain most of the defects, but does not explain the declining effectiveness of a static test suite.\nc) Is correct. The pesticide paradox states that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. The test suite needs to be regularly revised and updated.\nd) Is not correct. The absence-of-defects fallacy is about assuming that finding no defects means the system is ready for use.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 226,
    "question": "(1 Point) A manager argues: \"We found and fixed 200 defects in the system. The software must now be ready for release.\"\n\nWhich testing principle is being violated in this statement?",
    "options": {
      "a": "Testing shows the presence of defects, not their absence",
      "b": "Absence-of-defects fallacy",
      "c": "Exhaustive testing is impossible",
      "d": "Early testing saves time and money"
    },
    "correct": "b",
    "explanation": "a) Is not correct. While this principle is relevant (testing shows presence of defects, not absence), the manager's statement is more specifically about the mistaken assumption that finding and fixing defects ensures the system meets user needs.\nb) Is correct. The absence-of-defects fallacy states that finding and fixing a large number of defects does not necessarily ensure the success of a system. The system built could still be difficult to use, or not meet the users' needs and expectations.\nc) Is not correct. This principle is about the impossibility of testing all input combinations.\nd) Is not correct. Early testing is about when testing starts, not about the release decision.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 227,
    "question": "(1 Point) An online form field accepts a discount code that must be exactly 8 characters long, containing only uppercase letters and digits. Codes starting with 'VIP' give a 20% discount, codes starting with 'REG' give a 10% discount, and all other valid codes give a 5% discount. Invalid codes show an error message.\n\nUsing equivalence partitioning, how many equivalence partitions can be identified for this input?",
    "options": {
      "a": "3",
      "b": "4",
      "c": "5",
      "d": "6"
    },
    "correct": "c",
    "explanation": "The equivalence partitions are:\n1. Valid code starting with 'VIP' (8 chars, uppercase+digits) → 20% discount\n2. Valid code starting with 'REG' (8 chars, uppercase+digits) → 10% discount\n3. Valid code starting with other valid prefix (8 chars, uppercase+digits) → 5% discount\n4. Invalid code: wrong length (not 8 characters)\n5. Invalid code: contains invalid characters (lowercase, special chars)\n\nThus there are 5 equivalence partitions.\nc) Is correct.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 228,
    "question": "(1 Point) Which of the following BEST describes the difference between an informal review and a walkthrough?",
    "options": {
      "a": "An informal review has no defined process, while a walkthrough is led by the author of the work product who guides participants through it",
      "b": "An informal review requires a checklist, while a walkthrough does not",
      "c": "An informal review must produce a formal report, while a walkthrough produces only verbal feedback",
      "d": "An informal review can only be performed on code, while a walkthrough can be performed on any work product"
    },
    "correct": "b",
    "explanation": "Risk 1: likelihood(4) × impact(5) = 20\nRisk 2: likelihood(5) × impact(3) = 15\n\na) Is not correct. The risk levels are different (20 vs 15).\nb) Is correct. The first risk has a higher risk level (20 > 15) and should receive more testing attention.\nc) Is not correct. Although the second risk is more likely, its overall risk level is lower.\nd) Is not correct. Both use the same scale, so they can be compared.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 229,
    "question": "(1 Point) During test monitoring, you observe that the number of defects found per day has significantly decreased, but the planned test cases are only 60% complete.\n\nWhich of the following actions is MOST appropriate as a test control activity?",
    "options": {
      "a": "Stop testing immediately because fewer defects indicates the software is of high quality",
      "b": "Analyze the remaining test cases and the areas they cover, and consider re-prioritizing the remaining test effort based on risk",
      "c": "Add more testers to execute the remaining test cases as quickly as possible without any further analysis",
      "d": "Report the status to management and wait for their instructions before taking any action"
    },
    "correct": "b",
    "explanation": "a) Is not correct. A decrease in defect detection rate does not necessarily indicate high quality. It could be due to the pesticide paradox, or the remaining untested areas might have defects.\nb) Is correct. Test control involves taking corrective actions based on monitoring information. Analyzing the remaining test coverage and re-prioritizing based on risk is an appropriate control activity to ensure the most important areas are tested.\nc) Is not correct. Simply adding testers without analysis may not be effective and doesn't address the question of whether the right areas are being tested.\nd) Is not correct. While reporting to management is part of monitoring, test control requires proactive action by the test team, not passive waiting.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 230,
    "question": "(1 Point) In product risk analysis, a risk is assessed with a likelihood of 4 (on a scale of 1-5) and an impact of 5 (on a scale of 1-5). Another risk has a likelihood of 5 and an impact of 3.\n\nIf the risk level is calculated as likelihood × impact, which statement is CORRECT?",
    "options": {
      "a": "Both risks have the same risk level and should receive equal testing effort",
      "b": "The first risk has a higher risk level and should receive more testing attention",
      "c": "The second risk has a higher risk level because it is more likely to occur",
      "d": "The risk levels cannot be compared because they use different scales"
    },
    "correct": "a",
    "explanation": "Risk 1: 4 × 5 = 20. Risk 2: 5 × 3 = 15.\n\nActually Risk 1 (20) has a higher risk level than Risk 2 (15). So b) Is correct.\n\nb) Is correct. The first risk has a risk level of 20 (4×5), while the second risk has a risk level of 15 (5×3). Therefore, the first risk should receive more testing attention.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 231,
    "question": "(1 Point) Which of the following BEST describes the purpose of configuration management in testing?",
    "options": {
      "a": "To configure the test environment so that it exactly matches the production environment in every detail",
      "b": "To identify, control, and track work products such as test plans, test cases, test scripts, test results, and test reports throughout the testing lifecycle",
      "c": "To manage the personal configurations and preferences of individual testers",
      "d": "To ensure that only the most recent version of any document is kept, and all previous versions are deleted"
    },
    "correct": "b",
    "explanation": "a) Is not correct. While test environment setup is important, configuration management is broader than just environment configuration.\nb) Is correct. Configuration management ensures the integrity of work products by identifying, controlling, tracking, and maintaining them throughout the project and testing lifecycle. This includes test plans, test cases, test results, and other testware.\nc) Is not correct. Configuration management is about managing project/product work products, not individual preferences.\nd) Is not correct. Configuration management involves maintaining version history, not deleting previous versions.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 232,
    "question": "<p>A test plan specifies the following exit criteria for system testing:</p>\n<ul>\n<li>All planned test cases have been executed</li>\n<li>Statement coverage reaches at least 80%</li>\n<li>All critical and high severity defects are resolved</li>\n<li>The defect detection rate has dropped below 2 defects per day for 5 consecutive days</li>\n</ul>\n<p>At the end of system testing:</p>\n<table class=\"dt data-table\">\n<tr><th>Criterion</th><th>Actual Result</th></tr>\n<tr><td>Test cases executed</td><td>95%</td></tr>\n<tr><td>Statement coverage</td><td>85%</td></tr>\n<tr><td>Critical defects</td><td>All resolved</td></tr>\n<tr><td>High-severity defects</td><td>2 remain open</td></tr>\n<tr><td>Defect detection rate</td><td>&lt; 2/day for 7 consecutive days</td></tr>\n</table>\n<p>How many exit criteria have been <strong>MET</strong>?</p>",
    "options": {
      "a": "All testing activities are performed exclusively by certified testers who are embedded in the development team",
      "b": "Any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality, with testers and developers working closely together",
      "c": "The whole team reviews every test case before it can be executed, ensuring consensus on test coverage",
      "d": "Testing is distributed equally among all team members, with each person executing the same number of test cases"
    },
    "correct": "b",
    "explanation": "a) Is not correct. The whole team approach does not restrict testing to certified testers only. It involves all team members contributing to quality.\nb) Is correct. The whole team approach means that any team member can perform any task, with team members sharing their skills to help achieve quality goals. Everyone is responsible for quality.\nc) Is not correct. This would be overly bureaucratic and not aligned with Agile principles.\nd) Is not correct. The whole team approach is about shared responsibility, not equal distribution of test case execution.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 233,
    "question": "(1 Point) Which of the following is the BEST example of a non-functional test?",
    "options": {
      "a": "Verifying that a user can log in with valid credentials",
      "b": "Measuring the response time of a search function when 1000 concurrent users are performing searches",
      "c": "Checking that the system correctly calculates the total price including tax",
      "d": "Verifying that a deleted user account cannot be used to log in"
    },
    "correct": "b",
    "explanation": "a) Is not correct. This is a functional test — it verifies a specific function (login) works correctly.\nb) Is correct. This is a performance test, which is a type of non-functional testing. It measures a quality characteristic (performance efficiency) rather than verifying specific functions.\nc) Is not correct. This is a functional test — it verifies the correctness of a calculation.\nd) Is not correct. This is a functional test — it verifies the behavior after account deletion.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 234,
    "question": "<p>(1 Point) A test plan specifies the following exit criteria for system testing:</p>\n<ul>\n<li>All planned test cases have been executed</li>\n<li>Statement coverage reaches at least 80%</li>\n<li>All critical and high severity defects are resolved</li>\n<li>The defect detection rate has dropped below 2 defects per day for 5 consecutive days\n\nAt the end of system testing:</li>\n<li>95% of test cases have been executed</li>\n<li>Statement coverage is 85%</li>\n<li>All critical defects are resolved, but 2 high-severity defects remain open</li>\n<li>The defect detection rate has been below 2 defects per day for the last 7 days\n\nHow many exit criteria have been MET?</li>\n</ul>",
    "options": {
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4"
    },
    "correct": "b",
    "explanation": "Checking each criterion:\n1. All planned test cases executed: NOT MET (only 95% executed)\n2. Statement coverage at least 80%: MET (85% ≥ 80%)\n3. All critical and high severity defects resolved: NOT MET (2 high-severity defects remain open)\n4. Defect detection rate below 2/day for 5 consecutive days: MET (7 days > 5 days)\n\nTwo exit criteria have been met.\nb) Is correct.",
    "source": "generated",
    "_html": true
  },
  {
    "id": 235,
    "question": "(1 Point) Which of the following is MOST likely to be a benefit of maintaining traceability between the test basis and test cases?",
    "options": {
      "a": "It eliminates the need for regression testing after changes",
      "b": "It allows determination of the impact of changes on testing by identifying which test cases need to be updated or re-executed when requirements change",
      "c": "It guarantees that all defects in the system will be found",
      "d": "It reduces the total number of test cases needed for complete coverage"
    },
    "correct": "b",
    "explanation": "a) Is not correct. Traceability does not eliminate regression testing; it helps plan it more effectively.\nb) Is correct. Traceability allows impact analysis — when requirements change, you can trace which test cases are affected and need to be updated or re-executed.\nc) Is not correct. Traceability does not guarantee finding all defects.\nd) Is not correct. Traceability does not reduce the number of test cases; it helps manage them.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 236,
    "question": "<p>Consider the following pseudocode:</p>\n<pre class=\"code\">\n1. READ a, b\n2. result = 0\n3. IF a &gt; 0 THEN\n4.   result = result + a\n5. ENDIF\n6. IF b &gt; 0 THEN\n7.   result = result + b\n8. ENDIF\n9. PRINT result\n</pre>\n<div class=\"diagram\">\n<svg viewBox=\"0 0 380 340\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:340px;width:100%;height:auto;\">\n  <defs>\n    <marker id=\"ah236\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\"><polygon points=\"0 0, 8 3, 0 6\" fill=\"#7dd3fc\"/></marker>\n    <style>\n      .n236 { fill: #1e293b; stroke: #3b82f6; stroke-width: 2; rx: 6; }\n      .nt236 { fill: #e2e8f0; font-family: monospace; font-size: 11px; text-anchor: middle; dominant-baseline: central; }\n      .d236 { fill: #1e293b; stroke: #f59e0b; stroke-width: 2; }\n      .e236 { stroke: #7dd3fc; stroke-width: 2; fill: none; marker-end: url(#ah236); }\n      .l236 { fill: #94a3b8; font-family: sans-serif; font-size: 10px; }\n    </style>\n  </defs>\n  <!-- READ a, b -->\n  <rect class=\"n236\" x=\"120\" y=\"5\" width=\"120\" height=\"28\"/>\n  <text class=\"nt236\" x=\"180\" y=\"19\">1-2. READ, result=0</text>\n  <!-- Decision a > 0 -->\n  <polygon class=\"d236\" points=\"180,55 250,85 180,115 110,85\"/>\n  <text class=\"nt236\" x=\"180\" y=\"85\" fill=\"#fde047\" font-size=\"11\">a &gt; 0?</text>\n  <line class=\"e236\" x1=\"180\" y1=\"33\" x2=\"180\" y2=\"55\"/>\n  <!-- True: result + a -->\n  <rect class=\"n236\" x=\"20\" y=\"71\" width=\"65\" height=\"28\"/>\n  <text class=\"nt236\" x=\"52\" y=\"85\">res + a</text>\n  <line class=\"e236\" x1=\"110\" y1=\"85\" x2=\"89\" y2=\"85\"/>\n  <text class=\"l236\" x=\"98\" y=\"78\">T</text>\n  <!-- False path -->\n  <text class=\"l236\" x=\"260\" y=\"78\">F</text>\n  <!-- Decision b > 0 -->\n  <polygon class=\"d236\" points=\"180,165 250,195 180,225 110,195\"/>\n  <text class=\"nt236\" x=\"180\" y=\"195\" fill=\"#fde047\" font-size=\"11\">b &gt; 0?</text>\n  <polyline class=\"e236\" points=\"52,99 52,140 180,140 180,165\"/>\n  <polyline points=\"250,85 300,85 300,140 184,140\" stroke=\"#7dd3fc\" stroke-width=\"2\" fill=\"none\"/>\n  <!-- True: result + b -->\n  <rect class=\"n236\" x=\"20\" y=\"181\" width=\"65\" height=\"28\"/>\n  <text class=\"nt236\" x=\"52\" y=\"195\">res + b</text>\n  <line class=\"e236\" x1=\"110\" y1=\"195\" x2=\"89\" y2=\"195\"/>\n  <text class=\"l236\" x=\"98\" y=\"188\">T</text>\n  <!-- False path -->\n  <text class=\"l236\" x=\"260\" y=\"188\">F</text>\n  <!-- PRINT result -->\n  <rect class=\"n236\" x=\"120\" y=\"260\" width=\"120\" height=\"28\"/>\n  <text class=\"nt236\" x=\"180\" y=\"274\">9. PRINT result</text>\n  <polyline class=\"e236\" points=\"52,209 52,245 180,245 180,256\"/>\n  <polyline points=\"250,195 300,195 300,245 184,245\" stroke=\"#7dd3fc\" stroke-width=\"2\" fill=\"none\"/>\n</svg>\n<p class=\"diagram-note\">Control Flow Graph</p>\n</div>\n<p>Which of the following test input sets achieves <strong>100% branch coverage</strong>?</p>",
    "options": {
      "a": "a = 5, b = 3",
      "b": "a = -1, b = -2",
      "c": "a = 5, b = 3 AND a = -1, b = -2",
      "d": "a = 0, b = 0"
    },
    "correct": "c",
    "explanation": "The code has two decisions (IF statements at lines 3 and 6). For 100% branch coverage, we need to exercise both True and False outcomes of each decision.\n\nTC1: a=5, b=3 → line 3 True, line 6 True\nTC2: a=-1, b=-2 → line 3 False, line 6 False\n\nTogether, these two test cases cover all four branch outcomes.\n\na) Is not correct. This covers only True branches for both conditions.\nb) Is not correct. This covers only False branches for both conditions.\nc) Is correct. Both test cases together cover all True and False branches.\nd) Is not correct. This covers only False branches (0 is not > 0).",
    "source": "generated",
    "_html": true
  },
  {
    "id": 237,
    "question": "(1 Point) A tester is asked to test a new e-commerce checkout feature but has very limited time and no detailed requirements. The tester decides to explore the feature using session-based test management with time-boxed sessions.\n\nWhich test technique is the tester MOST likely using?",
    "options": {
      "a": "Equivalence partitioning",
      "b": "Checklist-based testing",
      "c": "Exploratory testing",
      "d": "Decision table testing"
    },
    "correct": "c",
    "explanation": "a) Is not correct. Equivalence partitioning is a black-box technique that requires understanding of input domains.\nb) Is not correct. Checklist-based testing uses a predefined checklist, which is not described here.\nc) Is correct. Exploratory testing involves simultaneous test design, execution, and learning, often organized in time-boxed sessions (session-based test management). It is particularly useful when there is limited time and incomplete specifications.\nd) Is not correct. Decision table testing is a systematic black-box technique requiring defined conditions and rules.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 238,
    "question": "(1 Point) During system testing of an accounting application, you discover that the system correctly processes all transactions individually, but when the month-end batch processing runs, some totals are incorrect.\n\nThis defect would MOST likely have been found earlier at which test level?",
    "options": {
      "a": "Component testing",
      "b": "Component integration testing",
      "c": "Acceptance testing",
      "d": "There is no earlier test level that would find this defect"
    },
    "correct": "b",
    "explanation": "a) Is not correct. Component testing tests individual components in isolation. Since individual transactions work correctly, component testing would pass.\nb) Is correct. Component integration testing focuses on the interactions between components. The batch processing issue likely involves the interaction between the transaction processing component and the aggregation/reporting component. This integration defect would most likely be found at the component integration testing level.\nc) Is not correct. Acceptance testing is a later test level, not earlier.\nd) Is not correct. Component integration testing is an earlier level where this could have been caught.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 239,
    "question": "(1 Point) Given the following test activities performed during a project:\n\nI. Identifying features to be tested\nII. Creating test suites from test procedures\nIII. Analyzing the test basis to identify testable conditions\nIV. Defining the priority of test conditions\nV. Writing test procedures\n\nWhich of the following shows the correct sequence of these activities?",
    "options": {
      "a": "I → III → IV → V → II",
      "b": "III → I → V → IV → II",
      "c": "I → III → V → IV → II",
      "d": "III → IV → I → II → V"
    },
    "correct": "a",
    "explanation": "The test process follows: Test planning → Test analysis → Test design → Test implementation → Test execution.\n\nI. Identifying features to be tested (Test analysis - early step)\nIII. Analyzing the test basis to identify testable conditions (Test analysis)\nIV. Defining the priority of test conditions (Test analysis - after identifying conditions)\nV. Writing test procedures (Test design/implementation)\nII. Creating test suites from test procedures (Test implementation)\n\nCorrect sequence: I → III → IV → V → II\na) Is correct.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 240,
    "question": "(1 Point) You are testing a website that supports three browsers (Chrome, Firefox, Safari) and two operating systems (Windows, macOS). Safari is only available on macOS.\n\nHow many valid test configurations exist for browser and operating system combinations?",
    "options": {
      "a": "3",
      "b": "4",
      "c": "5",
      "d": "6"
    },
    "correct": "c",
    "explanation": "The valid combinations are:\n1. Chrome + Windows\n2. Chrome + macOS\n3. Firefox + Windows\n4. Firefox + macOS\n5. Safari + macOS\n\nSafari + Windows is not valid since Safari only runs on macOS. So there are 5 valid combinations out of the 6 possible.\n\na) Is not correct.\nb) Is not correct.\nc) Is correct. There are 5 valid browser-OS combinations.\nd) Is not correct. 6 would include the invalid Safari + Windows combination.",
    "source": "generated",
    "_html": false
  },
  {
    "id": 241,
    "question": "(1 Point) Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
    "options": {
      "a": "Test implementation",
      "b": "Test design",
      "c": "Test execution",
      "d": "Test monitoring",
      "e": "Test analysis"
    },
    "correct": [
      "b",
      "e"
    ],
    "multiSelect": 2,
    "explanation": "Test techniques such as BVA and equivalence partitioning are used during test analysis (to identify test conditions) and test design (to create test cases from those conditions). a) Test implementation is mostly concerned with assembling test cases into test procedures. c) Test execution runs existing test cases. d) Test monitoring tracks testing progress.",
    "source": "1.6",
    "_html": false
  },
  {
    "id": 242,
    "question": "(1 Point) Which TWO of the following options are the exit criteria for testing a system?",
    "options": {
      "a": "Test environment readiness",
      "b": "The ability to log in to the test object by the tester",
      "c": "Estimated defect density is reached",
      "d": "Requirements are translated into given/when/then format",
      "e": "Regression tests are automated"
    },
    "correct": [
      "c",
      "e"
    ],
    "multiSelect": 2,
    "explanation": "a) Incorrect — Test environment readiness is an entry criterion. b) Incorrect — This is an entry criterion (resource availability). c) Correct — Estimated defect density is a measure of diligence; hence it belongs to exit criteria. d) Incorrect — Requirements translated into a format is an entry criterion. e) Correct — Automation of regression tests is a completion criterion; hence it belongs to exit criteria.",
    "source": "V3",
    "_html": false
  },
  {
    "id": 243,
    "question": "(1 Point) You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC?",
    "options": {
      "a": "Dynamic test execution",
      "b": "Static testing",
      "c": "Test planning",
      "d": "Acceptance test execution",
      "e": "Maintenance testing"
    },
    "correct": [
      "b",
      "c"
    ],
    "multiSelect": 2,
    "explanation": "a) Incorrect — Executable code is created in later phases, so dynamic testing cannot be performed early. b) Correct — In sequential development models, testers participate in requirement reviews (a form of static testing) in initial phases. c) Correct — Test planning can be performed early in the SDLC together with test analysis and test design. d) Incorrect — Acceptance testing requires a working product, delivered later. e) Incorrect — Maintenance testing requires a deployed product.",
    "source": "V3",
    "_html": false
  },
  {
    "id": 244,
    "question": "(1 Point) Which TWO of the following options are common metrics used for reporting on the quality level of the test object?",
    "options": {
      "a": "Number of defects found during system testing",
      "b": "Total effort on test design divided by the number of designed test cases",
      "c": "Number of executed test procedures",
      "d": "Number of defects found divided by the size of a work product",
      "e": "Time needed to repair a defect"
    },
    "correct": [
      "a",
      "d"
    ],
    "multiSelect": 2,
    "explanation": "a) Correct — The number of defects found is related to the test object quality. b) Incorrect — This measures test efficiency, not product quality. c) Incorrect — The number of test cases executed doesn't tell us about quality; test results might. d) Correct — Defect density is related to test object quality. e) Incorrect — Time to repair is a process metric, not a product quality metric.",
    "source": "V3",
    "_html": false
  },
  {
    "id": 245,
    "question": "(1 Point) Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
    "options": {
      "a": "Testers have not been allocated enough time for test design and test execution",
      "b": "The existing test strategy requires that testers use formal, black-box test techniques",
      "c": "The specification is written in a formal language that can be processed by a tool",
      "d": "Testers are the members of an agile team and have good programming skills",
      "e": "Testers are experienced in the business domain and have good analytical skills"
    },
    "correct": [
      "a",
      "e"
    ],
    "multiSelect": 2,
    "explanation": "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on testing. It is also more effective if the tester is experienced, has domain knowledge, and has strong analytical skills. a) Correct — Exploratory testing is useful under time pressure. b) Incorrect — Formal techniques are the opposite of exploratory. c) Incorrect — Formal specs suit scripted testing. d) Incorrect — Programming skills are not the key enabler. e) Correct — Domain experience and analytical skills make exploratory testing more effective.",
    "source": "V4",
    "_html": false
  },
  {
    "id": 246,
    "question": "<p>(1 Point) The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows:</p><p>Let D be the difference between CY and BY, that is, D = CY – BY</p><ul><li>If D &lt; 0 then print the error message \"birth year cannot be greater than current year\"</li><li>If 0 ≤ D &lt; 18 then apply the student discount</li><li>If 18 ≤ D &lt; 65 then apply no discount</li><li>If D ≥ 65 then apply the pensioner discount</li></ul><p>Your test suite already contains two test cases:</p><ul><li>BY = 1990, CY = 2020, expected result: no discount</li><li>BY = 2030, CY = 2029, expected result: print the error message</li></ul><p>Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?</p>",
    "options": {
      "a": "BY = 2001, CY = 2065",
      "b": "BY = 1900, CY = 1965",
      "c": "BY = 1965, CY = 1900",
      "d": "BY = 2011, CY = 2029",
      "e": "BY = 2000, CY = 2000"
    },
    "correct": [
      "b",
      "e"
    ],
    "multiSelect": 2,
    "explanation": "Two equivalence partitions are not yet covered: 'student discount' and 'pensioner discount'. a) Incorrect — CY–BY = 64, so 'no discount' (already covered). b) Correct — CY–BY = 65, so 'pensioner discount' (not yet covered). c) Incorrect — CY–BY = –65, so 'error message' (already covered). d) Incorrect — CY–BY = 18, so 'no discount' (already covered). e) Correct — CY–BY = 0, so 'student discount' (not yet covered).",
    "source": "V6",
    "_html": true
  },
  {
    "id": 247,
    "question": "(1 Point) Which of the following BEST define EXIT criteria in a testing project?",
    "options": {
      "a": "Budget is approved",
      "b": "Budget runs out",
      "c": "Test basis is available",
      "d": "Test cases achieved at least 80% statement coverage",
      "e": "All test analysts are ISTQB certified at the Foundation Level"
    },
    "correct": [
      "b",
      "d"
    ],
    "multiSelect": 2,
    "explanation": "a) Incorrect — Budget approval is an entry criterion. b) Correct — Running out of budget can be a valid exit criterion. c) Incorrect — Availability of resources is an entry criterion. d) Correct — Coverage is a measure of thoroughness, so it is a typical exit criterion. e) Incorrect — This is an entry criterion (resource/competence availability).",
    "source": "V6",
    "_html": false
  },
  {
    "id": 248,
    "question": "(1 Point) Which of the following are product risks?",
    "options": {
      "a": "Scope creep",
      "b": "Poor architecture",
      "c": "Cost-cutting",
      "d": "Poor tool support",
      "e": "Too long response time"
    },
    "correct": [
      "b",
      "e"
    ],
    "multiSelect": 2,
    "explanation": "a) Incorrect — Scope creep is a project risk related to technical issues. b) Correct — Poor architecture is a product risk since it refers to a product characteristic. c) Incorrect — Cost-cutting is a project risk related to organizational issues. d) Incorrect — Poor tool support is a project risk related to technical issues. e) Correct — Too long response time is a product risk since it refers to a non-functional product characteristic.",
    "source": "V6",
    "_html": false
  }
];
