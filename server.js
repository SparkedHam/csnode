const express = require('express');
const app = express();
const port = 3000;
const nodeName = process.env.NODE_NAME || 'Unknown Node';

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get('/latency', (req, res) => {
    res.send('OK');
});

app.get('/node-name', (req, res) => {
    res.send(nodeName);
});
