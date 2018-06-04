const db = require('../../database/index.js');
const mysql = require('mysql');
const Promise = require('bluebird');

module.exports.listingAverageStars = {
  get: (listingID) => {
    return new Promise((resolve, reject) => {
      // Using prepared statements to protect against SQL Injection Attacks
      // See here: https://dev.mysql.com/doc/refman/5.7/en/sql-syntax-prepared-statements.html
      // And here: https://github.com/mysqljs/mysql#preparing-queries
      let starsQuery = 'SELECT rank_accuracy, rank_communication, rank_cleanliness, rank_location, rank_checkin, rank_value FROM ?? WHERE ?? = ?';
      const inserts = ['review', 'listing_id', listingID];
      starsQuery = mysql.format(starsQuery, inserts);

      db.dbConnection.query(starsQuery, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports.listingReviews = {
  get: (listingID) => {
    return new Promise((resolve, reject) => {
      let reviewsQuery = 'SELECT review_date, review_text, user.first_name, user.last_name FROM ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?';
      const inserts = ['review', 'user', 'user.user_id', 'review.user_id', 'listing_id', listingID];
      reviewsQuery = mysql.format(reviewsQuery, inserts);

      db.dbConnection.query(reviewsQuery, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};
