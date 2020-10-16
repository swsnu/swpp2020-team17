Feature: Depositing money in to a User account

  Scenario: Deposing money in to User's account should add money to the User's current balance
    Given a User has no money in their account
    When $100 is deposited in to the account
    Then balance the should be $100