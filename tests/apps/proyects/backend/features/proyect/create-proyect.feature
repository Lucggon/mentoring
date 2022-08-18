Feature: Create a new proyect
    In order to have proyects in the platform
    as a user logged in 
    I want to create a new proyect

Scenario: A valid non existing proyect 
    Given I send a PUT request to "/proyect/7ffb4242-ec31-4317-a4eb-fda1837494c0" with body:
    """
   {
	"name": "proyect1",
	"category": "social sector",
	"description": "application for help older people to deal with loneliness",
	"tags": ["health care", "older people"],
	"technologies": {
		"front_end": ["angular", "scss"],
		"back_end": ["Java", "Spring"],
		"data_science": ["Python"]
	},
	"experience_level": 1,
	"team":[]
}
    """  
    Then The response status code should be 201
    And The response should be empty