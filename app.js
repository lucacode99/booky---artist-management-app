const express = require('express');
const app = express();
app.use(express.static('public'));

//homepage route
app.get('/home', (request, response) => 
response.sendFile(__dirname + '/views/homepage.html')
);



//dashboard route
app.get('/dashboard', (request, response) => 
response.sendFile(__dirname + '/views/dashboard.html')
);

app.listen(3000, () => console.log('Booky-App listening on port 3000!'))