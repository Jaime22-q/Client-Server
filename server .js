// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a sample route for surveys collection
app.get('/surveys', (req, res) => {
    // Return a collection of available surveys (you can replace this with actual data)
    const surveys = [
        { id: 1, name: 'Survey 1' },
        { id: 2, name: 'Survey 2' },
        // Add more surveys as needed
    ];
    res.json(surveys);
});

// Define a route for a specific survey by ID
app.get('/surveys/:id', (req, res) => {
    const surveyId = req.params.id;
    // Fetch data for the specific survey (replace with actual data)
    const surveyData = { id: surveyId, question: 'How satisfied are you?' };
    res.json(surveyData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
