Feature: Octopus insights page search function



  Scenario Outline: Verify search function on the Insights page.
    Given user is on insights page
    When title insights page title is Insights | Octopus Group
    Then user click on search icon
    Then user inputs "<keyword>" in search bar
    Then user clicks on people filter


    Examples:
      | keyword |
      |Simon    |