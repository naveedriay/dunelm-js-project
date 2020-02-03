# dunelm-js-project
Test Demo Project using testcafe for Dunelm

Dependencies include:
  - testcafe
  - testcafe-reporter-html

Run the project using any of the following commands

- testcafe chrome ./tests -S -s screenshots
- testcafe chrome ./tests -s path=tests/screenshots,takeOnFails=true

- testcafe chrome ./tests -S -s screenshots --reporter html:tests/testreport.html
- testcafe chrome ./tests -s path=tests/screenshots,takeOnFails=true --reporter html:tests/testreport.html

