# dunelm-js-project
Test Demo Project using testcafe for Dunelm

Dependencies include:
  - testcafe
  - testcafe-reporter-html

Run the project using any of the following commands

- testcafe chrome ./tests 
- testcafe chrome ./tests -s takeOnFails=true,path=tests/screenshots

- testcafe chrome ./tests -s takeOnFails=true --reporter html:tests/testreport.html
- testcafe chrome ./tests -s path=tests/screenshots,takeOnFails=true --reporter html:tests/testreport.html

For concurrent test execution
- testcafe -c 2 chrome ./tests

To Run one test only among all the tests within first-test.js file
- testcafe chrome ./tests -t "Remove CheckBox Test"

To Run specific 10 selected tests among all (say 100) tests in .js file using regex 
- testcafe chrome ./tests -T "Remove.*"
- testcafe chrome ./tests -T "pattern1|pattern2|pattern3"