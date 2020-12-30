Feature: Login
    As a registered user
    I want to log in
    To navigate in the application

    # Scenario: Password required for log in
        # When a registered user tries to log in
        # Then the password is required

    Scenario: Unregistered user
        When an unregistered user tries to log in
        Then an error message is shown
