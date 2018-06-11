const express = require('express');
const path = require('path');
const dbQueries = require('./helpers/queries.js');
const dataHandlers = require('./helpers/datahandlers.js');

const port = process.env.PORT || 3004;

const app = express();

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:id', express.static(path.join(__dirname, '../client/dist')));

// Decided not to use a router, considering there are only two routes.
// Here's a helpful reference though for the future (note to self):
// https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
app.get('/api/listings/:id/reviews', (req, res) => {
  const listingID = req.params.id.replace(/\D/g, '');

  dbQueries.listingReviews.get(listingID)
    .then((data) => {
      const formattedReviews = dataHandlers.processReviewsArray(data);
      res.status(200).send(JSON.stringify(formattedReviews));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

app.get('/api/listings/:id/averagestars', (req, res) => {
  const listingID = req.params.id.replace(/\D/g, '');
  
  dbQueries.listingAverageStars.get(listingID)
    .then((data) => {
      const reviewStarsObj = dataHandlers.calcReviewsAverageStars(data);
      res.status(200).send(JSON.stringify(reviewStarsObj));
    })
    .catch((error) => {
      res.status(500).send(JSON.stringify(error));
    });
});

app.get('*', function(req, res){
  res.status(404).send('Sorry, that page was not found!  Try the following pathname: /rooms/{id}');
});

app.listen(3004, () => console.log('App listening on port ', port));

