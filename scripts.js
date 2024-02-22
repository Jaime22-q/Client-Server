const studentsSurveyUrl = 'https://my-json-server.typicode.com/depth0/survey1/surveys';

const questionnaireContainer = document.getElementById('questionnaire');
const surveysUrl = 'https://my-json-server.typicode.com/depth0/survey1/surveys';

const surveysContainer = document.getElementById('surveys');

function createSurveyElement(survey) {
    const surveyElement = document.createElement('div');
    surveyElement.className = 'survey';

    const title = document.createElement('h2');
    title.textContent = survey.title;
    surveyElement.appendChild(title);

    const description = document.createElement('p');
    description.textContent = survey.desc;
    surveyElement.appendChild(description);

    
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
        
        surveysContainer.textContent = 'An error occurred while fetching the surveys. Please try again later.';
    });

const surveyId = 1; // Replace with the actual survey ID you want to fetch
fetch(`https://my-json-server.typicode.com/depth0/survey1/surveys/${surveyId}`)
    .then(response => response.json())
    .then(data => {
        questionnaireContainer.innerHTML = '';

        createQuestionElement(data);

    })
    .catch(error => {
        console.error('Error fetching survey data:', error);
        // Display an error message to the user
        questionnaireContainer.textContent = 'An error occurred while fetching the survey details. Please try again later.';
    });
