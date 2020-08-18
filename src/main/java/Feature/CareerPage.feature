Feature: Octopus Job page search function

  Background:
    Given user is on insights page
    When title insights page title is Insights | Octopus Group

  Scenario Outline: Verify search Job functionality on the careers page.


    When user click on Careers in header menu
    Then user clicks on Search Job link
    Then user is on Careers page
    Then user enters "<Keyword>" in the search
    And user clicks on filter by location drop down



    Examples:
      | Keyword    |
      | Automation |