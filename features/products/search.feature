Feature: Search
    As an unregistered user
    I want to search a product
    To see the product details

    Scenario Outline: Search a product
        When the user searches for a <searchText>
        Then the first product of the list is selectable

        Examples:
            | searchText  |
            | rubber duck |
            | potato      |
