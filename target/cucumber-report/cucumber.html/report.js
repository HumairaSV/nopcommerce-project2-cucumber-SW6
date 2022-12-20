$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Test",
  "description": "\r\nAs a user I am able to register on the nop commerce website",
  "id": "home-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4912346000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user is able to navigate the top menu on nop commerce website",
  "description": "",
  "id": "home-page-test;verify-user-is-able-to-navigate-the-top-menu-on-nop-commerce-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I select \"computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am navigated to the computers page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55085900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "computers",
      "offset": 10
    }
  ],
  "location": "HomePageSteps.iSelect(String)"
});
formatter.result({
  "duration": 3420149800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iAmNavigatedToTheComputersPage()"
});
formatter.result({
  "duration": 32890300,
  "status": "passed"
});
formatter.after({
  "duration": 617198500,
  "status": "passed"
});
});