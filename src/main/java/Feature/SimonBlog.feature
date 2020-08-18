Feature: Octopus Simon's Blog function

  Background:
    Given user is on insights page
    When title insights page title is Insights | Octopus Group

  Scenario Outline: Verify the Sign up for newsletter functionality on Simon blog page.

    When user click on Simon says link in footer
    Then user verifies page title
    Then user enter "<emailid>" for newsletter
    Then user clicks on all checkboxs.
    Then user clicks on submit button.


    Examples:
      | emailid         |
      | abc@hotmail.com |
