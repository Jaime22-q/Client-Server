// Define the URL for fetching the survey data
const studentsSurveyUrl = 'https://my-json-server.typicode.com/depth0/survey1/surveys';

// Get the container where the questionnaire will be displayed
const questionnaireContainer = document.getElementById('questionnaire');
// Define the URL for fetching the surveys data
const surveysUrl = 'https://my-json-server.typicode.com/depth0/survey1/surveys';

// Get the container where the surveys will be listed
const surveysContainer = document.getElementById('surveys');

// Function to dynamically create and add a survey element to the list
function createSurveyElement(survey) {
    const surveyElement = document.createElement('div');
    surveyElement.className = 'survey';

    const title = document.createElement('h2');
    title.textContent = survey.title;
    surveyElement.appendChild(title);

    const description = document.createElement('p');
    description.textContent = survey.desc;
    surveyElement.appendChild(description);

    // Here you might want to add a button or link for each survey
    // that users can click to view the full survey questions.
    // For demonstration, let's just list question IDs.
    const questionsList = document.createElement('ul');
    survey.qs.forEach(qId => {
        const questionItem = document.createElement('li');
        questionItem.textContent = `Question ID: ${qId}`;
        questionsList.appendChild(questionItem);
    });
    surveyElement.appendChild(questionsList);

    surveysContainer.appendChild(surveyElement);
}

// Fetch all surveys and dynamically list them
fetch(surveysUrl)
    .then(response => response.json())
    .then(data => {
        // Assuming data is an array of surveys
        data.forEach(survey => createSurveyElement(survey));
    })
    .catch(error => {
        console.error('Error fetching surveys:', error);
        // Optionally, display an error message to the user
        surveysContainer.textContent = 'An error occurred while fetching the surveys. Please try again later.';
    });

// Example of fetching a specific survey by ID and displaying its details
const surveyId = 1; // Replace with the actual survey ID you want to fetch
fetch(`https://my-json-server.typicode.com/depth0/survey1/surveys/${surveyId}`)
    .then(response => response.json())
    .then(data => {
        // Clear the container before adding new content
        questionnaireContainer.innerHTML = '';

        createQuestionElement(data);

    })
    .catch(error => {
        console.error('Error fetching survey data:', error);
        // Display an error message to the user
        questionnaireContainer.textContent = 'An error occurred while fetching the survey details. Please try again later.';
    });
