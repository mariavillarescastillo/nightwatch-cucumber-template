Feature: Login
    As a registered user
    I want to log in
    To navigate in the application

    Scenario: Password required for log in
        Given a registered user
        When the user tries to log in
        Then the password is required

    Scenario: Unregistered user error
        Given an unregistered user
        When the user tries to log in
        Then an error message is shown
