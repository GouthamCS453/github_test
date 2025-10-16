const express = require('express');
const app = express();
const port = 3000;
// Set view engine
app.set('view engine', 'ejs');
// Home route
app.get('/', (req, res) => {
 res.render("pages/index"); 

});
// Example "about" route (to reuse partials)
app.get('/about', (req, res) => {
 res.render('pages/about', { message: 'This is the About Page' });
});
app.listen(port, () => {
 console.log(`App running at http://localhost:${port}`);
});
