Feature: Octopus Uk Spring board submit function

  Background:
    Given user is on insights page
    Given title insights page title is Insights | Octopus Group

  Scenario Outline: Verify User should be able to submit his details for 'Want to support the nation of entrepreneurs?' on UK Springboard page


    When user click on UK Springboard link in footer
    Then user verifies the page title
    Then user enter "<email>", "<firstname>" & "<lastname>" on UK Springboard page
    Then user clicks on any checkbox.
    Then user click on submit button.


    Examples:
      | email           | firstname | lastname |
      | abc@hotmail.com | test      | user     |