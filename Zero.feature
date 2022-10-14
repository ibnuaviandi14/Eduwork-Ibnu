Feature: Searching information

As a valid user
I want to search information regarding credit card 

Scenario: Valid Login
    Given I go to the Zero Website
    When I write Credit Card
    And I press enter
    Then I should see information related Credit Card