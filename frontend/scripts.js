const studentsSurveyUrl = 'https://my-json-server.typicode.com/depth0/survey1/surveys';
const questionnaireContainer = document.getElementById('questionnaire');

fetch(studentsSurveyUrl)
    .then(response => response.json())
    .then(data => {
       
    })
    .catch(error => console.error('Error fetching students survey:', error));

    fetch('https://my-json-server.typicode.com/depth0/survey1/surveys')
    .then(response => response.json())
    .then(data => {
       
        console.log(data); 
    })
    .catch(error => console.error('Error fetching surveys:', error));™

    const surveyId = 1; 
fetch(`https://my-json-server.typicode.com/depth0/survey1/surveys/${surveyId}`)
    .then(response => response.json())
    .then(data => {
       
        console.log(data); 
    })
    .catch(error => console.error('Error fetching survey data:', error));