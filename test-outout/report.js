$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CareerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Octopus Job page search function",
  "description": "",
  "id": "octopus-job-page-search-function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify search Job functionality on the careers page.",
  "description": "",
  "id": "octopus-job-page-search-function;verify-search-job-functionality-on-the-careers-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user click on Careers in header menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Search Job link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on Careers page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cKeyword\u003e\" in the search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on filter by location drop down",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "octopus-job-page-search-function;verify-search-job-functionality-on-the-careers-page.;",
  "rows": [
    {
      "cells": [
        "Keyword"
      ],
      "line": 19,
      "id": "octopus-job-page-search-function;verify-search-job-functionality-on-the-careers-page.;;1"
    },
    {
      "cells": [
        "Automation"
      ],
      "line": 20,
      "id": "octopus-job-page-search-function;verify-search-job-functionality-on-the-careers-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on insights page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title insights page title is Insights | Octopus Group",
  "keyword": "When "
});
formatter.match({
  "location": "InsightPageTest.userIsOnInsightsPage()"
});
formatter.result({
  "duration": 12498036502,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.titleInsightsPageTitleIsInsightsOctopusGroup()"
});
formatter.result({
  "duration": 12624315,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify search Job functionality on the careers page.",
  "description": "",
  "id": "octopus-job-page-search-function;verify-search-job-functionality-on-the-careers-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user click on Careers in header menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Search Job link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on Careers page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters \"Automation\" in the search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on filter by location drop down",
  "keyword": "And "
});
formatter.match({
  "location": "CareerPageTest.userClickOnCareersInHeaderMenu()"
});
formatter.result({
  "duration": 155184757,
  "status": "passed"
});
formatter.match({
  "location": "CareerPageTest.userClicksOnSearchJobLink()"
});
formatter.result({
  "duration": 848004693,
  "status": "passed"
});
formatter.match({
  "location": "CareerPageTest.userIsOnCareersPage()"
});
formatter.result({
  "duration": 189168770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 13
    }
  ],
  "location": "CareerPageTest.userEntersInTheSearch(String)"
});
formatter.result({
  "duration": 335461540,
  "status": "passed"
});
formatter.match({
  "location": "CareerPageTest.userClicksOnFilterByLocationDropDown()"
});
formatter.result({
  "duration": 1146005062,
  "status": "passed"
});
formatter.uri("InsightPage.feature");
formatter.feature({
  "line": 1,
  "name": "Octopus insights page search function",
  "description": "",
  "id": "octopus-insights-page-search-function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify search function on the Insights page.",
  "description": "",
  "id": "octopus-insights-page-search-function;verify-search-function-on-the-insights-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on insights page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title insights page title is Insights | Octopus Group",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on search icon",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user inputs \"\u003ckeyword\u003e\" in search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on people filter",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "octopus-insights-page-search-function;verify-search-function-on-the-insights-page.;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 13,
      "id": "octopus-insights-page-search-function;verify-search-function-on-the-insights-page.;;1"
    },
    {
      "cells": [
        "Simon"
      ],
      "line": 14,
      "id": "octopus-insights-page-search-function;verify-search-function-on-the-insights-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify search function on the Insights page.",
  "description": "",
  "id": "octopus-insights-page-search-function;verify-search-function-on-the-insights-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on insights page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title insights page title is Insights | Octopus Group",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on search icon",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user inputs \"Simon\" in search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on people filter",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightPageTest.userIsOnInsightsPage()"
});
formatter.result({
  "duration": 5979055495,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.titleInsightsPageTitleIsInsightsOctopusGroup()"
});
formatter.result({
  "duration": 17659290,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.userClickOnSearchIcon()"
});
formatter.result({
  "duration": 266477063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Simon",
      "offset": 13
    }
  ],
  "location": "InsightPageTest.userInputsInSearchBar(String)"
});
formatter.result({
  "duration": 417533550,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.userClicksOnPeopleFilter()"
});
formatter.result({
  "duration": 643117253,
  "status": "passed"
});
formatter.uri("SimonBlog.feature");
formatter.feature({
  "line": 1,
  "name": "Octopus Simon\u0027s Blog function",
  "description": "",
  "id": "octopus-simon\u0027s-blog-function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify the Sign up for newsletter functionality on Simon blog page.",
  "description": "",
  "id": "octopus-simon\u0027s-blog-function;verify-the-sign-up-for-newsletter-functionality-on-simon-blog-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user click on Simon says link in footer",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies page title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003cemailid\u003e\" for newsletter",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on all checkboxs.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on submit button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "octopus-simon\u0027s-blog-function;verify-the-sign-up-for-newsletter-functionality-on-simon-blog-page.;",
  "rows": [
    {
      "cells": [
        "emailid"
      ],
      "line": 17,
      "id": "octopus-simon\u0027s-blog-function;verify-the-sign-up-for-newsletter-functionality-on-simon-blog-page.;;1"
    },
    {
      "cells": [
        "abc@hotmail.com"
      ],
      "line": 18,
      "id": "octopus-simon\u0027s-blog-function;verify-the-sign-up-for-newsletter-functionality-on-simon-blog-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on insights page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title insights page title is Insights | Octopus Group",
  "keyword": "When "
});
formatter.match({
  "location": "InsightPageTest.userIsOnInsightsPage()"
});
formatter.result({
  "duration": 5236144407,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.titleInsightsPageTitleIsInsightsOctopusGroup()"
});
formatter.result({
  "duration": 16371517,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the Sign up for newsletter functionality on Simon blog page.",
  "description": "",
  "id": "octopus-simon\u0027s-blog-function;verify-the-sign-up-for-newsletter-functionality-on-simon-blog-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user click on Simon says link in footer",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies page title",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enter \"abc@hotmail.com\" for newsletter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on all checkboxs.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "SimonBlogTest.userClickOnSimonSaysLinkInFooter()"
});
formatter.result({
  "duration": 1281927563,
  "status": "passed"
});
formatter.match({
  "location": "SimonBlogTest.userVerifiesPageTitle()"
});
formatter.result({
  "duration": 207787481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@hotmail.com",
      "offset": 12
    }
  ],
  "location": "SimonBlogTest.userEnterForNewsletter(String)"
});
formatter.result({
  "duration": 464568172,
  "status": "passed"
});
formatter.match({
  "location": "SimonBlogTest.userClicksOnAllCheckboxs()"
});
formatter.result({
  "duration": 277884878,
  "status": "passed"
});
formatter.match({
  "location": "SimonBlogTest.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 401190245,
  "status": "passed"
});
formatter.uri("UkSpringBoard.feature");
formatter.feature({
  "line": 1,
  "name": "Octopus Uk Spring board submit function",
  "description": "",
  "id": "octopus-uk-spring-board-submit-function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify User should be able to submit his details for \u0027Want to support the nation of entrepreneurs?\u0027 on UK Springboard page",
  "description": "",
  "id": "octopus-uk-spring-board-submit-function;verify-user-should-be-able-to-submit-his-details-for-\u0027want-to-support-the-nation-of-entrepreneurs?\u0027-on-uk-springboard-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user click on UK Springboard link in footer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user verifies the page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003cemail\u003e\", \"\u003cfirstname\u003e\" \u0026 \"\u003clastname\u003e\" on UK Springboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on any checkbox.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on submit button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "octopus-uk-spring-board-submit-function;verify-user-should-be-able-to-submit-his-details-for-\u0027want-to-support-the-nation-of-entrepreneurs?\u0027-on-uk-springboard-page;",
  "rows": [
    {
      "cells": [
        "email",
        "firstname",
        "lastname"
      ],
      "line": 18,
      "id": "octopus-uk-spring-board-submit-function;verify-user-should-be-able-to-submit-his-details-for-\u0027want-to-support-the-nation-of-entrepreneurs?\u0027-on-uk-springboard-page;;1"
    },
    {
      "cells": [
        "abc@hotmail.com",
        "test",
        "user"
      ],
      "line": 19,
      "id": "octopus-uk-spring-board-submit-function;verify-user-should-be-able-to-submit-his-details-for-\u0027want-to-support-the-nation-of-entrepreneurs?\u0027-on-uk-springboard-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on insights page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title insights page title is Insights | Octopus Group",
  "keyword": "Given "
});
formatter.match({
  "location": "InsightPageTest.userIsOnInsightsPage()"
});
formatter.result({
  "duration": 5121147010,
  "status": "passed"
});
formatter.match({
  "location": "InsightPageTest.titleInsightsPageTitleIsInsightsOctopusGroup()"
});
formatter.result({
  "duration": 14809163,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify User should be able to submit his details for \u0027Want to support the nation of entrepreneurs?\u0027 on UK Springboard page",
  "description": "",
  "id": "octopus-uk-spring-board-submit-function;verify-user-should-be-able-to-submit-his-details-for-\u0027want-to-support-the-nation-of-entrepreneurs?\u0027-on-uk-springboard-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user click on UK Springboard link in footer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user verifies the page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"abc@hotmail.com\", \"test\" \u0026 \"user\" on UK Springboard page",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on any checkbox.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "UkSpringBoardTest.userClickOnUkSpringboardLinkInFooter()"
});
formatter.result({
  "duration": 1536013912,
  "status": "passed"
});
formatter.match({
  "location": "UkSpringBoardTest.userVerifiesThePageTitle()"
});
formatter.result({
  "duration": 285265806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@hotmail.com",
      "offset": 12
    },
    {
      "val": "test",
      "offset": 31
    },
    {
      "val": "user",
      "offset": 40
    }
  ],
  "location": "UkSpringBoardTest.userEnterOnUKSpringboardPage(String,String,String)"
});
formatter.result({
  "duration": 880869369,
  "status": "passed"
});
formatter.match({
  "location": "UkSpringBoardTest.userClicksOnAnyCheckbox()"
});
formatter.result({
  "duration": 173188227,
  "status": "passed"
});
formatter.match({
  "location": "UkSpringBoardTest.userClickOnSubmitButton()"
});
formatter.result({
  "duration": 451917296,
  "status": "passed"
});
});