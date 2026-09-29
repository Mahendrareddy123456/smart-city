const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the SmartCity directory
app.use(express.static(path.join(__dirname, 'SmartCity')));

// Route all requests to index.html if file not explicitly matched
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'SmartCity', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`SMARTCITY Control Center running on port ${PORT}`);
});
